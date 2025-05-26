<template>
    <div class="row">
        <div class="card">
            <div class="card-body">
                <apexchart width="100%" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
    </div>
</template>

<script>
import baseRequest from '../../../core/baseRequest';
import VueApexCharts from "vue3-apexcharts";

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                
                stroke: {
                    width: [0, 4]
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                xaxis: {
                    categories: []
                },
                yaxis: [
                    {
                        title: { text: "Doanh Thu" }
                    },
                    {
                        opposite: true,
                        title: { text: "Số Lượng NFT" }
                    }
                ],
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center'
                },
                title: {
                    text: 'THỐNG KÊ',
                    align: 'mid'
                },
                colors: ['#008FFB', '#990000']
            },
            series: [
                {
                    name: "Website Blog",
                    type: "column",
                    data: []
                },
                {
                    name: "Số chứng chỉ",
                    type: "line",
                    data: []
                }
            ]
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const doanhThuRes = await baseRequest.get("admin/thong-ke-doanh-thu/data");
            const chungChiRes = await baseRequest.get("admin/thong-ke-nft-da-cap/data");
            const mapDoanhThu = {};
            let minMonth = 12, minYear = 9999, maxMonth = 1, maxYear = 1970;
            doanhThuRes.data.data.forEach(item => {
                const [time, date] = item.created_at.split(' ');
                const [day, month, year] = date.split('/').map(Number);
                if (year < minYear || (year === minYear && month < minMonth)) {
                    minYear = year; minMonth = month;
                }
                if (year > maxYear || (year === maxYear && month > maxMonth)) {
                    maxYear = year; maxMonth = month;
                }
                const key = `${month.toString().padStart(2, '0')}/${year}`;
                if (!mapDoanhThu[key]) mapDoanhThu[key] = 0;
                mapDoanhThu[key] += item.tong_tien_thanh_toan;
            });
            const mapChungChi = {};
            chungChiRes.data.data.forEach(item => {
                const [time, date] = item.created_at.split(' ');
                const [day, month, year] = date.split('/').map(Number);
                const key = `${month.toString().padStart(2, '0')}/${year}`;
                if (!mapChungChi[key]) mapChungChi[key] = 0;
                mapChungChi[key] += 1;
                if (year < minYear || (year === minYear && month < minMonth)) {
                    minYear = year; minMonth = month;
                }
                if (year > maxYear || (year === maxYear && month > maxMonth)) {
                    maxYear = year; maxMonth = month;
                }
            });
            const categories = [];
            let y = minYear, m = minMonth;
            const now = new Date();
            const maxY = Math.max(maxYear, now.getFullYear());
            const maxM = maxYear === now.getFullYear() ? Math.max(maxMonth, now.getMonth() + 1) : maxMonth;

            while (y < maxY || (y === maxY && m <= maxM)) {
                categories.push(`${m.toString().padStart(2, '0')}/${y}`);
                m++;
                if (m > 12) { m = 1; y++; }
            }
            this.chartOptions = {
                ...this.chartOptions,
                xaxis: {
                    ...this.chartOptions.xaxis,
                    categories: categories.map(c => `${c.split('/')[0]}/${c.split('/')[1]}`)
                }
            };
            this.series = [
                {
                    name: "Doanh Thu",
                    type: "column",
                    data: categories.map(key => mapDoanhThu[key] || 0)
                },
                {
                    name: "Số Lượng NFT",
                    type: "line",
                    data: categories.map(key => mapChungChi[key] || 0)
                }
            ];
        }
    }
}
</script>