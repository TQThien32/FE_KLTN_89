<template>
    <h2><i class="fa-solid fa-chart-simple"></i> Thống Kê</h2>
    <div class="row mt-3">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="card-title mt-2">Số Lượng Giao Dịch</h3>
                        <h6 class="card-subtitle mb-2 text-body-secondary mt-3">2</h6>
                    </div>
                    <i class="fa-solid fa-file mt-3 text-dark" style="font-size: 50px;"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="card-title mt-2">Tổng Doanh Thu</h3>
                        <h6 class="card-subtitle mb-2 text-body-secondary mt-3">1.000.000 VND</h6>
                    </div>
                    <i class="fa-solid fa-dollar-sign mt-3 text-dark" style="font-size: 50px;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-hover table-bordered">
        <thead class="bg-secondary text-white">
            <tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>Số Lượng Giao Dịch</th>
                <th>Doanh Thu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>1/1/2025</th>
                <th>2</th>
                <th>1.000.000 VND</th>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {

}
</script>
<style></style>