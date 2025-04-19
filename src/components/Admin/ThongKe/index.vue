<template>
    <h2 class="text-white"><i class="fa-solid fa-chart-simple"></i> Thống Kê</h2>
    <div class="row mt-3">
        <div class="col-lg-6">
            <div class="card" style="box-shadow: none;">
                <div class="card-body text-chinh">
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="card-title mt-2 text-chinh">Số Lượng Giao Dịch</h3>
                        <h6 class="card-subtitle mb-2 mt-3 text-chinh">2</h6>
                    </div>
                    <i class="fa-solid fa-file mt-3" style="font-size: 50px;"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card" style="box-shadow: none;">
                <div class="card-body text-chinh">
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="card-title text-chinh mt-2">Tổng Doanh Thu</h3>
                        <h6 class="card-subtitle text-chinh mb-2 mt-3">1.000.000 VND</h6>
                    </div>
                    <i class="fa-solid fa-dollar-sign mt-3" style="font-size: 50px;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-hover">
        <thead class="text-white">
            <tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>Số Lượng Giao Dịch</th>
                <th>Doanh Thu</th>
            </tr>
        </thead>
        <tbody class="text-white">
            <tr>
                <th>1</th>
                <td>1/1/2025</td>
                <td>2</td>
                <td>1.000.000 VND</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {

}
</script>
<style>
</style>