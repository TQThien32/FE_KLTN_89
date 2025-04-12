<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Yêu Cầu Cấp Gửi Đến</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle text-center">
                                <th>#</th>
                                <th>Họ và tên</th>
                                <th>Số CCCD</th>
                                <th>Email</th>
                                <th>Nội Dung</th>
                                <th>Thời Gian Gửi</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="align-middle text-center">1</th>
                                <td>Họ tên</td>
                                <td>Số cccd</td>
                                <td>Email</td>
                                <td>Nội dung</td>
                                <td>Ngày giờ gửi</td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-chinh" data-bs-toggle="modal"
                                        data-bs-target="#exampleSuccessModal">Xác Minh</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Model -->
                <div class="modal fade modal-xl" id="exampleSuccessModal" tabindex="-1" aria-hidden="true"
                    style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-trang">
                            <div class="modal-header">
                                <h5 class="modal-title text-black">Xác minh yêu cầu </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-black">
                                <div class="card-body p-5">
                                    <form class="row g-3">
                                        <div class="col-md-4">
                                            <label for="inputFirstName" class="form-label">Họ và tên</label>
                                            <input type="email" class="form-control" id="inputFirstName">
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputLastName" class="form-label">Số CCCD</label>
                                            <input type="password" class="form-control" id="inputLastName">
                                        </div>
                                        <div class="col-md-4">
                                            <label for="inputEmail" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="inputEmail">
                                        </div>
                                        <div class="col-12">
                                            <label for="inputAddress" class="form-label">Nội dung</label>
                                            <textarea class="form-control" id="inputAddress" rows="2"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-chinh px-5">Truy xuất</button>
                                        </div>
                                        <div class="card">
                                            <div class="card-header bg-secondary">
                                            </div>
                                            <div class="card-body">
                                                <table class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr class="align-middle text-center">
                                                            <th>Họ và tên</th>
                                                            <th>Số CCCD</th>
                                                            <th>Số hiệu</th>
                                                            <th>Trình độ</th>
                                                            <th>Khóa Học</th>
                                                            <th>Kết quả</th>
                                                            <th>Ngày cấp</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Họ tên</td>
                                                            <td>Số cccd</td>
                                                            <td>AH437</td>
                                                            <td>Cao đẳng</td>
                                                            <td>K27</td>
                                                            <td>500</td>
                                                            <td>Ngày cấp</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-chinh">Xác minh</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>