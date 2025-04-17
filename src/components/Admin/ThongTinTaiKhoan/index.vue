<template>
    <div class="container mt-1">
        <h2 class="text-light" >Thông Tin Admin</h2>
        <div class="row mt-3">
            <!-- Avatar -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body text-center">
                        <img src="assets/images/avatars/avatar-2.png" alt="Avatar" class="rounded-circle p-1 bg-primary"
                            width="110">
                        <div class="mt-3">
                            <h4>John Doe</h4>
                            <p class="text-secondary mb-1">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thông Tin -->
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-3">
                            <col-lg-6></col-lg-6>
                            <col-lg-6>
                                <p class="text-center"><b>
                                        <h5 class="mb-0">Admin</h5>
                                    </b></p>
                            </col-lg-6>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Họ Và Tên</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="(320) 380-4539">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Chức Vụ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="Trưởng Phòng">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Số Điện Thoại</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Số CCCD</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="(320) 380-4539">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Giới Tính</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="Nam">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Ngày Sinh</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="date" class="form-control" value="13/12/2001">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Địa Chỉ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" value="Quế Sơn, Quảng Nam">
                            </div>
                        </div>
                        <!-- Button trigger modal -->
                        <div class="row">
                            <div class="col-auto ms-auto">
                                <button type="button" class="btn btn btn-chinh" data-bs-toggle="modal"
                                    data-bs-target="#updateModal">
                                    Cập Nhật
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Thông Tin</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row mb-3">
                                            <col-lg-6></col-lg-6>
                                            <col-lg-6>
                                                <p class="text-center"><b>
                                                        <h5 class="mb-0">Tổ Chức Cấp Chứng Chỉ</h5>
                                                    </b></p>
                                            </col-lg-6>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Tên Tổ Chức Cấp Chứng Chỉ</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value="John Doe">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value="john@example.com">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Hotline</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value="(239) 816-9029">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Địa Chỉ</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value="(320) 380-4539">
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row mb-3">
                                            <col-lg-6></col-lg-6>
                                            <col-lg-6>
                                                <p class="text-center"><b>
                                                        <h5 class="mb-0">Người Đại Diện</h5>
                                                    </b></p>
                                            </col-lg-6>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Họ Và Tên</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value="(320) 380-4539">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Số Điện Thoại</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control"
                                                    value="Bay Area, San Francisco, CA">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Số CCCD</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control" value="(320) 380-4539">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control"
                                                    value="Bay Area, San Francisco, CA">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary">Xác Nhận</button>
                                    </div>
                                </div>
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