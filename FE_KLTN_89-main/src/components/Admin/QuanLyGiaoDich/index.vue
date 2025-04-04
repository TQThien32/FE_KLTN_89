<template>
   <div class="card">
    <div class="card-header bg-secondary text-light">
        <i class="fa-solid fa-wallet" style="font-size: 50px;"></i>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-lg-5">
                <h3><b>Quản Lý Giao Dịch</b></h3>
            </div>
            <div class="col-lg-5">
                <input type="text" class="form-control mb-2" placeholder="Tìm kiếm ...">
            </div>
            <div class="col-lg-2">
                <button class="btn btn-primary">Tìm Kiếm</button>
            </div>
        </div>
        <table class="table table-hover table-bordered mt-3">
            <thead>
                <tr>
                    <th class="align-middle text-center">STT</th>
                    <th class="align-middle text-center">Tên Học Viên</th>
                    <th class="align-middle text-center">Số Tiền</th>
                    <th class="align-middle text-center">Nội Dung</th>
                    <th class="align-middle text-center">Thời Gian</th>
                    <th class="align-middle text-center">Trạng Thái</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="align-middle text-center">1</th>
                    <td class="align-middle text-center">Nguyễn Văn A</td>
                    <td class="align-middle text-center">100.000 VND</td>
                    <td class="align-middle text-center">Cấp Chứng Chỉ NFT</td>
                    <td class="align-middle text-center">1/1/2025</td>
                    <td class="align-middle text-center">
                        <button class="btn btn-success">Đã Hoàn Tất</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
   </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>