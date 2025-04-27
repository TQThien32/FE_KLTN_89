<template>
    <div class="container py-4">
        <h2 class="text-white mb-4">
            <i class="fa-solid fa-chart-simple me-2"></i> Thống Kê
        </h2>

        <!-- Thống kê nhanh -->
        <div class="row">
            <div class="col-md-6 mb-3" v-for="(item, index) in stats" :key="index">
                <div class="card text-center text-chinh">
                    <div class="card-body">
                        <h5>Số Lượng Giao Dịch</h5>
                        <h3>{{ item.soluong }}</h3>
                        <p class="text-muted">Số lượng giao dịch thành công trên hệ thống</p>
                        <button class="btn btn-sm btn-outline-primary mt-2"
                            :class="{ active: chartDataType === 'transactions' }"
                            @click="selectChart('Số lượng giao dịch')">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-3" v-for="(item, index) in stats" :key="'doanhthu-' + index">
                <div class="card text-center text-chinh">
                    <div class="card-body">
                        <h5>Tổng Doanh Thu</h5>
                        <h3>{{ item.doanhthu }}</h3>
                        <p class="text-muted">Doanh thu hiện tại VND</p>
                        <button class="btn btn-sm btn-outline-primary mt-2"
                            :class="{ active: chartDataType === 'revenue' }" @click="selectChart('Tổng doanh thu')">
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Bộ chọn loại biểu đồ -->
        <div class="d-flex justify-content-start my-3">
            <button class="btn btn-outline-light me-2" :class="{ active: chartType === 'month' }"
                @click="chartType = 'month'; renderChart()">
                Theo Tháng
            </button>
            <button class="btn btn-outline-light" :class="{ active: chartType === 'quarter' }"
                @click="chartType = 'quarter'; renderChart()">
                Theo Quý
            </button>
        </div>


        <!-- Biểu đồ -->
        <div class="card mt-3">
            <div class="card-body">
                <canvas id="userChart" height="100"></canvas>
            </div>
        </div>

        <!-- Bảng thống kê -->
        <div class="card  text-white mt-4">
            <div class="card-header text-dark">Chi Tiết Giao Dịch</div>
            <div class="card-body p-0">
                <table class="table table-bordered table-hover m-0">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ngày</th>
                            <th>Số Giao Dịch</th>
                            <th>Doanh Thu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(entry, i) in tableData" :key="i">
                            <tr>
                                <td>{{ i + 1 }}</td>
                                <td>{{ entry.date }}</td>
                                <td>{{ entry.transactions }}</td>
                                <td>{{ entry.revenue }} VND</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    data() {
        return {
            chartType: 'month',
            chartDataType: 'transactions',
            selectedStat: 'Số lượng giao dịch',
            chart: null,
            stats: [
                { soluong: '36', doanhthu: '18000000' },
            ],
            tableData: [
                { date: '01/01/2025', transactions: 1, revenue: '500.000' },
                { date: '15/02/2025', transactions: 2, revenue: '1.000.000' },
                { date: '10/03/2025', transactions: 3, revenue: '1.500.000' },
                { date: '01/04/2025', transactions: 2, revenue: '1.000.000' },
                { date: '02/04/2025', transactions: 3, revenue: '1.500.000' },
                { date: '03/04/2025', transactions: 1, revenue: '500.000' },
                { date: '20/05/2025', transactions: 4, revenue: '2.000.000' },
                { date: '10/06/2025', transactions: 3, revenue: '1.800.000' },
                { date: '12/07/2025', transactions: 2, revenue: '1.200.000' },
                { date: '22/08/2025', transactions: 5, revenue: '3.000.000' },
                { date: '05/09/2025', transactions: 4, revenue: '2.500.000' },
                { date: '14/10/2025', transactions: 2, revenue: '1.000.000' },
                { date: '18/11/2025', transactions: 2, revenue: '1.500.000' },
                { date: '25/12/2025', transactions: 2, revenue: '1.000.000' }
            ]
        }
    },
    mounted() {
        this.renderChart()
    },
    methods: {
        getChartData() {
            const data = this.chartType === 'quarter' ? Array(4).fill(0) : Array(12).fill(0)

            this.tableData.forEach(entry => {
                const [day, month, year] = entry.date.split('/').map(s => parseInt(s))
                let value = this.chartDataType === 'transactions'
                    ? entry.transactions
                    : parseInt(entry.revenue.replace(/\./g, ''))

                if (this.chartType === 'month') {
                    data[month - 1] += value
                } else if (this.chartType === 'quarter') {
                    const quarter = Math.ceil(month / 3)
                    data[quarter - 1] += value
                }
            })

            return data
        },

        renderChart() {
            const labels = this.chartType === 'month'
                ? ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
                : ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4']

            const chartData = this.getChartData()

            if (this.chart) this.chart.destroy()

            const ctx = document.getElementById('userChart').getContext('2d')
            this.chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels,
                    datasets: [{
                        label: this.chartDataType === 'transactions'
                            ? `Số lượng giao dịch (${this.chartType === 'month' ? 'Tháng' : 'Quý'})`
                            : `Tổng doanh thu (${this.chartType === 'month' ? 'Tháng' : 'Quý'})`,
                        data: chartData,
                        backgroundColor: '#c19b6b',
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: this.chartDataType === 'transactions' ? 'Số giao dịch' : 'Doanh thu (VND)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: this.chartType === 'month' ? 'Tháng' : 'Quý'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            })
        },

        selectChart(title) {
            this.selectedStat = title
            if (title.includes('giao dịch') || title.includes('Giao dịch')) {
                this.chartDataType = 'transactions'
            } else if (title.includes('doanh thu') || title.includes('Doanh thu')) {
                this.chartDataType = 'revenue'
            }
            this.renderChart()
        }

    }
}
</script>

<style scoped>
.card {
    background-color: #f2f4f8;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.text-chinh {
    color: #c19b6b;
}

.btn-outline-light.active {
    background-color: #c19b6b;
    color: #fff;
    border-color: #c19b6b;
}

.btn-outline-primary {
    border-color: #c19b6b;
    color: #c19b6b;
}

.btn-outline-primary:hover,
.btn-outline-primary.active {
    background-color: #c19b6b;
    color: white;
}
</style>