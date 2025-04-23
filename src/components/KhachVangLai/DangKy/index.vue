<template>
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-tabs nav-primary" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-dark" data-bs-toggle="tab" href="#primaryprofile" role="tab"
                        aria-selected="false" tabindex="-1">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="fa-solid fa-people-group font-18 me-2"></i>
                            </div>
                            <div class="tab-title">Tổ Chức</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-dark" data-bs-toggle="tab" href="#primarycontact" role="tab"
                        aria-selected="false" tabindex="-1">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="fa-solid fa-graduation-cap font-18 me-2"></i>
                            </div>
                            <div class="tab-title">Học Viên</div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="tab-content py-3">
                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                    <!-- Tổ chức -->
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                        <div class="col mx-auto">
                            <div class="my-4 text-center">
                                <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid" width="180" alt="">
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="mt-2">Đăng Ký</h3>
                                            <h4>Tổ Chức Cấp Chứng Chỉ</h4>

                                        </div>
                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-sm-12">
                                                    <label class="form-label">Tên Tổ Chức</label>
                                                    <input type="text" class="form-control" id="inputTenHocVien"
                                                        placeholder="Nhập Tên Tổ Chức"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control" placeholder="Nhập Email"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số Điện Thoại</label>
                                                    <input type="tel" class="form-control"
                                                        placeholder="Nhập Số Điện Thoại"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Địa Chỉ</label>
                                                    <input type="text" class="form-control" placeholder="Nhập Địa chỉ"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Họ Tên Người Đại Diện</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập Họ Tên Người Đại Diện"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số CCCD</label>
                                                    <input type="number" class="form-control" placeholder="Nhập Số CCCD"
                                                       >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số Điện Thoại Người Đại Diện</label>
                                                    <input type="tel" class="form-control"
                                                        placeholder="Nhập Số Điện Thoại Người Đại Diện"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Email Người Đại Diện</label>
                                                    <input type="email" class="form-control"
                                                        placeholder="Nhập Email Người Đại Diện"
                                                        >
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập Mật Khẩu"
                                                            > <a href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Lại Mật
                                                        Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            placeholder="Nhập Lại Mật Khẩu"> <a href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">

                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" class="btn btn-chinh"
                                                            ><i class="bx bx-user"></i>Đăng
                                                            Ký</button>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid text-center">
                                                        <label>Bạn đã có tài khoản? <a
                                                                href="/to-chuc-cap-chung-chi/dang-nhap">Đăng Nhập </a>
                                                        </label>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                    <!-- Học Viên nè -->
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                        <div class="col mx-auto">
                            <div class="my-4 text-center">
                                <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                    width="180" alt="">
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Ký Học Viên </h3>
                                            <p>Bạn đã có tài khoản? <a href="/dang-nhap">Đăng Nhập </a>
                                            </p>
                                        </div>

                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-sm-12">
                                                    <label for="inputTenHocien" class="form-label">Tên Học Viên</label>
                                                    <input type="text" class="form-control" id="inputTenHocVien"
                                                        placeholder="Nhập tên học viên">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmail" class="form-label">Email</label>
                                                    <input type="email" class="form-control" id="inputEmail"
                                                        placeholder="Nhập email">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNgaySinh" class="form-label">Ngày Sinh</label>
                                                    <input type="date" class="form-control" id="inputNgaySinh"
                                                        placeholder="Nhập ngày sinh">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputGioiTinh" class="form-label">Giới tính</label>
                                                    <select class="form-control" id="inputGioiTinh">
                                                        <option value="0">Nam</option>
                                                        <option value="1">Nữ</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputSoDienThoai" class="form-label">Số Điện
                                                        Thoại</label>
                                                    <input type="tel" class="form-control" id="inputSoDienThoai"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputSoCCCD" class="form-label">Số Căn Cước Công
                                                        Dân</label>
                                                    <input type="text" class="form-control" id="inputSoCCCD"
                                                        placeholder="Nhập số căn cước công dân">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Địa chỉ</label>
                                                    <input type="text" class="form-control" id="inputDiaChi"
                                                        placeholder="Nhập Địa chỉ">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập mật khẩu"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Lại Mật
                                                        Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập lại mật khẩu"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" class="btn btn-chinh"><i
                                                                class="bx bx-user"></i>Đăng
                                                            Ký</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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