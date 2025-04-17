<template>
    <h2 class="text-white"><i class="fa-solid fa-chart-simple"></i> Thống Kê</h2>
    <div class="row mt-3">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body text-light">
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="card-title mt-2 text-light">Số Lượng Giao Dịch</h3>
                        <h6 class="card-subtitle mb-2 mt-3 text-light">2</h6>
                    </div>
                    <i class="fa-solid fa-file mt-3" style="font-size: 50px;"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body text-light">
                    <div class="d-flex justify-content-between">
                        <div>
                        <h3 class="card-title text-light mt-2">Tổng Doanh Thu</h3>
                        <h6 class="card-subtitle text-light mb-2 mt-3">1.000.000 VND</h6>
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
<style scope>
    .form-check-input {
    width: 1.2rem;
    height: 1.2rem;
}

.card {
    border: 2px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background-color: rgb(35, 34, 34);
    box-shadow: none; /* bỏ viền mờ */
}

.card:hover {
    transform: scale(1.03);
    box-shadow: -1px 0 0 0 #57ff09, 1px 0 0 0 #57ff09;
}
table {
    color: #fcf6f6 !important;
}

table tbody tr:hover {
    background: #fbfcfd;
    color: #50507f!important; 
  }
</style>