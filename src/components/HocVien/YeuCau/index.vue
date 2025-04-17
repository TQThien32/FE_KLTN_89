<template>
    <div class="d-flex justify-content-between">
            <h4 class="text-white"><i class="fa-solid fa-code-pull-request"></i> Yêu Cầu Cấp NFT</h4>
            <button class="btn btn-outline-light me-5"> <i class="fa-solid fa-plus"></i> Tạo yêu cầu</button>
        </div>
        <div class="row mt-3">
            <div class="col-lg-4">
                <div class="card ">
                    <div class="card-body text-center">
                        <img src="https://cdn-icons-png.freepik.com/256/7976/7976823.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                        style="height: 70px;" alt="">
                        <h4 class="card-title mt-2  text-light">NFT Chứng Chỉ</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-light">Chứng chỉ độc nhất – xác thực tức thì.</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card ">
                    <div class="card-body text-center">
                        <img src="https://cdn-icons-png.freepik.com/256/4713/4713258.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                        style="height: 70px;" alt="">
                        <h4 class="card-title mt-2  text-light">Gửi Yêu Cầu</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-light">Một lần gửi – mãi mãi xác thực.</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card ">
                    <div class="card-body text-center">
                        <img src="https://cdn-icons-png.freepik.com/256/11442/11442748.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                        style="height: 70px;" alt="">
                        <h4 class="card-title mt-2  text-light">Bảo Mật</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-light">Dữ liệu vĩnh viễn - quyền riêng tư tối đa.</h6>
                    </div>
                </div>
            </div>
        </div>
    <div class="row">
        
        <div class="col-lg-12 col-md-12 mt-5">
            <h4 class="text-white"><i class="fa-solid fa-list"></i> Danh Sách Yêu Cầu Đã Gửi</h4>
            <table class="table ">
                <thead>
                    <tr class="text-center text-light">
                        <th>#</th>
                        <th>Gửi Đến</th>
                        <th>Thời Gian</th>
                        <th>Nội Dung</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-light text-center">
                        <th>1</th>
                        <td>Đại Học Duy Tân</td>
                        <td>11:12 30/4/2025</td>
                        <td><span class="badge text-bg-light" data-bs-toggle="modal" data-bs-target="#xemct">Xem chi
                                tiết</span></td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- modal xem chi tiết -->
    <div class="modal fade" id="xemct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Yêu cầu đã gửi</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal  gửi-->
    <div class="modal fade" id="guiYeuCau" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Có Gửi Yêu Cầu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                        <div class="card-header ">
                            <h4 class="">Gửi Yêu Cầu Cấp Chứng Chỉ</h4>
                        </div>
                        <div class="card-body">
                            <label class="mt-2" for="">Tên Học Viên</label>
                            <input class="mt-2 form-control" type="text">
                            <label class="mt-2" for="">Số CCCD</label>
                            <input class="mt-2 form-control" type="text">
                            <label class="mt-2" for="">Số Hiệu Chứng Chỉ</label>
                            <input class="mt-2 form-control" type="text">
                            <label class="mt-2" for="">Email</label>
                            <input class="mt-2 form-control" type="email">
                            <label class="mt-2 w-100" for="">Gửi đến</label>
                            <select class="mt-2 w-100" name="" id="" style="height: 38px;">
                                <option value="">Tất cả</option>
                                <option value="">Trường ....</option>
                                <option value="">Tổ chức Toiec</option>
                            </select>
                            <label class="mt-2" for="">Nội Dung</label>
                            <textarea class="mt-2 form-control" name="" id=""
                                placeholder="Nhập nội dung yêu cầu"></textarea>
                        </div>
                        <div class="card-footer text-end">
                            <button class="btn btn-chinh" data-bs-toggle="modal" data-bs-target="#XNgui">Gửi</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Gửi</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
table tbody tr:hover {
    color: #d0cbca !important;
}
.card {
    border: 1px solid gray;
    border-radius: 0.5rem;
    background-color: #111!important; /* hoặc bg-dark */
    transition: border-color 0.3s ease;
    box-shadow: none; /* bỏ viền mờ */
}

.card:hover {
    border-color: white;
}
</style>