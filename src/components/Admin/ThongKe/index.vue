<template>
    <div class="row">
        <!-- Nút chuyển chế độ thống kê -->
        <div class="col-12 mb-3 text-center">
            <button @click="mode = 'revenue'" class="btn btn-primary mx-2" :class="{ active: mode === 'revenue' }">
                Thống Kê Doanh Thu
            </button>
            <button @click="mode = 'certificate'" class="btn btn-success mx-2"
                :class="{ active: mode === 'certificate' }">
                Thống Kê Số Lượng NFT Đã Cấp
            </button>
        </div>

        <!-- Chọn năm thủ công -->
        <div class="col-12 mb-3 text-center">
            <label style="color: aliceblue;">Chọn năm: </label>
            <input v-model.number="selectedYear" @input="reloadData" type="number" min="2000" :max="currentYear"
                class="form-control d-inline-block w-auto mx-2" placeholder="Nhập năm" />
        </div>

        <!-- Biểu đồ -->
        <div class="card" v-if="loaded && mode === 'revenue'">
            <div class="card-body">
                <Bar :data="chartDataRevenue" :options="chartOptions" />
            </div>
        </div>

        <div class="card" v-if="loaded && mode === 'certificate'">
            <div class="card-body">
                <Bar :data="chartDataCertificates" :options="chartOptionsQuantity" />
            </div>
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });

import baseRequest from '../../../core/baseRequest';

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        const currentYear = new Date().getFullYear();
        return {
            mode: 'revenue',
            loaded: false,
            selectedYear: currentYear,
            currentYear: currentYear, // Store the current year
            chartDataRevenue: {
                labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
                datasets: [
                    {
                        label: 'Tổng tiền thanh toán theo tháng',
                        data: Array(12).fill(0),
                        backgroundColor: "#2980B9",
                        borderRadius: 10
                    }
                ]
            },
            chartDataCertificates: {
                labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
                datasets: [
                    {
                        label: 'Số lượng chứng chỉ theo tháng',
                        data: Array(12).fill(0),
                        backgroundColor: "#27AE60",
                        borderRadius: 10
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: { display: true, position: 'top' },
                    title: { display: true, text: 'Thống kê doanh thu theo tháng' }
                }
            },
            chartOptionsQuantity: {
                responsive: true,
                plugins: {
                    legend: { display: true, position: 'top' },
                    title: { display: true, text: 'Số lượng chứng chỉ được cấp theo tháng' }
                }
            }
        }
    },
    mounted() {
        this.reloadData();
    },
    methods: {
        reloadData() {
            // Validate the year: it should be between 2000 and the current year
            if (!this.selectedYear || this.selectedYear < 2000 || this.selectedYear > this.currentYear) {
                toaster.error(`Vui lòng nhập một năm hợp lệ (từ 2000 đến ${this.currentYear}).`);
                return;
            }

            this.loaded = false;
            let completed = 0;
            const checkLoaded = () => {
                completed++;
                if (completed === 2) this.loaded = true;
            };

            this.loadRevenueData(checkLoaded);
            this.loadCertificateData(checkLoaded);
        },

        loadRevenueData(callback) {
            baseRequest.get('admin/thong-ke-doanh-thu/data')
                .then((res) => {
                    const rawData = res.data.data;
                    const monthlyRevenue = Array(12).fill(0);

                    rawData.forEach(item => {
                        try {
                            const [time, date] = item.created_at.split(" ");
                            const [day, month, year] = date.split("/").map(Number);
                            if (year === this.selectedYear) {
                                monthlyRevenue[month - 1] += item.tong_tien_thanh_toan;
                            }
                        } catch (err) {
                            console.warn("Lỗi phân tích ngày created_at:", item.created_at);
                        }
                    });

                    this.chartDataRevenue.datasets[0].data = monthlyRevenue;
                    callback();
                })
                .catch((err) => {
                    toaster.error("Lỗi khi tải dữ liệu doanh thu");
                    console.error(err);
                });
        },

        loadCertificateData(callback) {
            baseRequest.get('admin/thong-ke-nft-da-cap/data')
                .then((res) => {
                    const rawData = res.data.data;
                    const monthlyCount = Array(12).fill(0);

                    rawData.forEach(item => {
                        try {
                            const [time, date] = item.created_at.split(" ");
                            const [day, month, year] = date.split("/").map(Number);
                            if (year === this.selectedYear) {
                                monthlyCount[month - 1]++;
                            }
                        } catch (err) {
                            console.warn("Lỗi phân tích ngày created_at:", item.created_at);
                        }
                    });

                    this.chartDataCertificates.datasets[0].data = monthlyCount;
                    callback();
                })
                .catch((err) => {
                    toaster.error("Lỗi khi tải dữ liệu chứng chỉ");
                    console.error(err);
                });
        }
    }
}
</script>

<style scoped>
.card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
}

.card-body {
    padding: 20px;
}

.btn.active {
    opacity: 0.8;
    font-weight: bold;
}

input.form-control {
    width: 200px;
}
</style>
