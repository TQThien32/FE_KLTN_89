<template>
  <div class="row">
    <div class="col-12">
      <div class="report-container">
        <h3 class="text-center">Báo Cáo</h3>

        <!-- Chọn tháng/năm -->
        <div class="text-center mb-4">
          <h5 class="text-white">Chọn tháng/năm:</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-dark">
              <thead>
                <tr>
                  <th>Tháng/Năm</th>
                  <th v-for="month in months" :key="month">{{ month }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      v-model.number="startYear"
                      type="number"
                      class="form-control bg-dark text-white"
                      @input="validateAndReload"
                    />
                  </td>
                  <td
                    v-for="month in months"
                    :key="'start-' + month"
                    :class="{ 'bg-success': startMonth === month }"
                    @click="selectStartMonth(month)"
                    style="cursor: pointer;"
                  >
                    {{ month }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      v-model.number="endYear"
                      type="number"
                      class="form-control bg-dark text-white"
                      @input="validateAndReload"
                    />
                  </td>
                  <td
                    v-for="month in months"
                    :key="'end-' + month"
                    :class="{ 'bg-success': endMonth === month }"
                    @click="selectEndMonth(month)"
                    style="cursor: pointer;"
                  >
                    {{ month }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="invalidRange" class="text-danger mt-2">
              ❌ Năm bắt đầu không được lớn hơn năm kết thúc.
            </div>
            <div v-if="invalidFutureRange" class="text-danger mt-2">
              ❌ Tháng/Năm bắt đầu hoặc kết thúc không được lớn hơn hiện tại.
            </div>
          </div>
        </div>
        <div class="report-section">
          <table class="table">
            <thead>
              <tr>
                <th>Tháng/Năm</th>
                <th>Số Chứng Chỉ</th>
                <th>Doanh Thu</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(monthYear, index) in filteredData" :key="index">
                <td>{{ monthYear }}</td>
                <td>{{ certificateCounts[index] }}</td>
                <td>{{ revenueCounts[index] | currency }}</td>
              </tr>
            </tbody>
            <!-- Add summary row -->
            <tfoot v-if="filteredData.length > 0">
              <tr>
                <td><strong>{{ startMonthYear }} - {{ endMonthYear }}</strong></td>
                <td><strong>{{ totalCertificates }}</strong></td>
                <td><strong>{{ totalRevenue | currency }}</strong></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseRequest from '../../../core/baseRequest';

export default {
  name: 'ReportPage',
  data() {
    const currentYear = new Date().getFullYear();
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    return {
      currentYear,
      months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      startMonth: currentMonth,
      endMonth: currentMonth,
      startYear: currentYear,
      endYear: currentYear,
      invalidRange: false,
      invalidFutureRange: false,
      certificateCounts: [],
      revenueCounts: [],
    };
  },
  computed: {
    startMonthYear() {
      return `${this.startMonth}/${this.startYear}`;
    },
    endMonthYear() {
      return `${this.endMonth}/${this.endYear}`;
    },
    filteredData() {
      const [startMonth, startYear] = this.startMonthYear.split('/').map(Number);
      const [endMonth, endYear] = this.endMonthYear.split('/').map(Number);

      return this.datesInRange.filter(date => {
        const [month, year] = date.split('/').map(Number);
        return (year > startYear || (year === startYear && month >= startMonth)) &&
               (year < endYear || (year === endYear && month <= endMonth));
      });
    },
    datesInRange() {
      const dates = [];
      const [startMonth, startYear] = this.startMonthYear.split('/').map(Number);
      const [endMonth, endYear] = this.endMonthYear.split('/').map(Number);

      for (let year = startYear; year <= endYear; year++) {
        for (let month = 1; month <= 12; month++) {
          if (year === startYear && month < startMonth) continue;
          if (year === endYear && month > endMonth) break;
          dates.push(`${month.toString().padStart(2, '0')}/${year}`);
        }
      }
      return dates;
    },
    totalCertificates() {
      return this.certificateCounts.reduce((sum, count) => sum + count, 0);
    },
    totalRevenue() {
      return this.revenueCounts.reduce((sum, count) => sum + count, 0);
    }
  },
  mounted() {
    this.validateAndReload();
  },
  methods: {
    selectStartMonth(month) {
      this.startMonth = month;
      this.validateAndReload();
    },
    selectEndMonth(month) {
      this.endMonth = month;
      this.validateAndReload();
    },
    validateAndReload() {
      const [startMonth, startYear] = this.startMonthYear.split('/').map(Number);
      const [endMonth, endYear] = this.endMonthYear.split('/').map(Number);

      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth() + 1;
      if (startYear > endYear || (startYear === endYear && startMonth > endMonth)) {
        this.invalidRange = true;
        this.invalidFutureRange = false;
        this.certificateCounts = [];
        this.revenueCounts = [];
      } 
      else if (
        startYear > currentYear || 
        (startYear === currentYear && startMonth > currentMonth) || 
        endYear > currentYear || 
        (endYear === currentYear && endMonth > currentMonth)
      ) {
        this.invalidFutureRange = true;
        this.invalidRange = false;
        this.certificateCounts = [];
        this.revenueCounts = [];
      } else {
        this.invalidRange = false;
        this.invalidFutureRange = false;
        this.reloadData();
      }
    },
    reloadData() {
      this.loadRevenueData();
      this.loadCertificateData();
    },
    loadRevenueData() {
      baseRequest.get('admin/thong-ke-doanh-thu/data')
        .then((res) => {
          const rawData = res.data.data;
          const revenueMap = {};

          rawData.forEach(item => {
            const [time, date] = item.created_at.split(" ");
            const [day, month, year] = date.split("/").map(Number);
            const formattedDate = `${month.toString().padStart(2, '0')}/${year}`;

            if (this.datesInRange.includes(formattedDate)) {
              revenueMap[formattedDate] = (revenueMap[formattedDate] || 0) + item.tong_tien_thanh_toan;
            }
          });

          this.revenueCounts = this.datesInRange.map(date => revenueMap[date] || 0);
        })
        .catch((err) => {
          console.error("Lỗi khi tải dữ liệu doanh thu", err);
        });
    },
    loadCertificateData() {
      baseRequest.get('admin/thong-ke-nft-da-cap/data')
        .then((res) => {
          const rawData = res.data.data;
          const certificateMap = {};

          rawData.forEach(item => {
            const [time, date] = item.created_at.split(" ");
            const [day, month, year] = date.split("/").map(Number);
            const formattedDate = `${month.toString().padStart(2, '0')}/${year}`;

            if (this.datesInRange.includes(formattedDate)) {
              certificateMap[formattedDate] = (certificateMap[formattedDate] || 0) + 1;
            }
          });

          this.certificateCounts = this.datesInRange.map(date => certificateMap[date] || 0);
        })
        .catch((err) => {
          console.error("Lỗi khi tải dữ liệu chứng chỉ", err);
        });
    }
  },
  filters: {
    currency(value) {
      if (!value) return '0 đ';
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
  }
};
</script>

<style scoped>
.report-container {
  padding: 20px;
  color: white;
}

h3 {
  color: white;
}

.report-section {
  margin-top: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

.table th,
.table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  color: white;
}

.table th {
  background-color: #343a40;
}

.table td {
  background-color: #2c3e50;
  cursor: pointer;
}

.bg-success {
  background-color: #28a745 !important;
}

.form-control {
  width: 100px;
}

.text-center {
  text-align: center;
}
</style>
