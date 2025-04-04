<template>
    <h2><b><i class="fa-solid fa-comments"></i> Quản Lý Thông Báo</b></h2>
    <div class="card mt-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <label class="mt-3">Tiêu Đề</label>
                    <input class="form-control mb-2" type="text" name="" id="">
                </div>
                <div class="col-lg-4">
                    <label class="mt-3">Thời Gian Gửi</label>
                    <input class="form-control mb-2" type="date" name="" id="">
                </div>
                <div class="col-lg-4">
                    <label class="mt-3">Gửi Đến</label>
                    <select class="form-control" id="inputGioiTinh">
                              <option value="">Nhà tuyển dụng, cơ quan xác thực</option>
                              <option value="">Tổ chức cấp chứng chỉ</option>
                              <option value="">Học viên</option>
                           </select>
                </div>
                <div class="col-lg-12">
                    <label class="mt-3">Nội Dung</label>
                    <input class="form-control form-control-lg mb-4" type="text" name="" id="">
                </div>
            </div>
            <div class="text-end">
                <button class="btn btn-primary mb-3" style="width: 100px;">Gửi</button>
            </div>
        </div>
    </div>
    <table class="table table-hover table-bordered mt-4">
        <thead class="bg-secondary text-light">
            <tr>
                <th class="align-middle text-center">STT</th>
                <th class="align-middle text-center">Tiêu Đề</th>
                <th class="align-middle text-center">Ngày Gửi</th>
                <th class="align-middle text-center">Người Nhận</th>
                <th class="align-middle text-center">Nội Dung</th>
                <th class="align-middle text-center">Trạng Thái</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="align-middle text-center">1</th>
                <td class="align-middle text-center">abc</td>
                <td class="align-middle text-center">1/1/2025</td>
                <td class="align-middle text-center">Học Viên</td>
                <td class="align-middle text-center">abcxyz</td>
                <td class="align-middle text-center">
                    <button class="btn btn-success">Đã gửi</button>
                </td>
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