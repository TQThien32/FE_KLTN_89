<template>
    <div class="card">
        <div class="card-body">
            <ul class="nav nav-tabs nav-primary" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-dark active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="fa-solid fa-user-tie font-18 me-2"></i>
                            </div>
                            <div class="tab-title">Admin</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-dark" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false"
                        tabindex="-1">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="fa-solid fa-people-group font-18 me-2"></i>
                            </div>
                            <div class="tab-title">Tổ Chức</div>
                        </div>
                    </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link text-dark" data-bs-toggle="tab" href="#primarycontact" role="tab" aria-selected="false"
                        tabindex="-1">
                        <div class="d-flex align-items-center">
                            <div class="tab-icon"><i class="fa-solid fa-graduation-cap font-18 me-2"></i>
                            </div>
                            <div class="tab-title">Người Dùng</div>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="tab-content py-3">
                <div class="tab-pane fade active show" id="primaryhome" role="tabpanel">
                    <!-- Admin -->
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="col mx-auto">
                            <div class="mb-4 text-center">
                                <img src="" width="180" alt="">
                            </div>
                            <div class="card" style="box-shadow: none; ">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Nhập - Admin</h3>
                                        </div>
                                        <div class="form-body mt-3">
                                            <form class="row g-3">
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Tên đăng
                                                        nhập</label>
                                                    <input type="email" class="form-control" id="inputEmailAddress"
                                                        placeholder="Nhập tên đăng nhập">
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
                                                    <div class="d-grid">
                                                        <button type="button" class="btn btn-chinh"><i
                                                                class="bx bxs-lock-open"></i>Đăng
                                                            Nhập</button>
                                                    </div>
                                                </div>
                                                <div class="col-12 mt-3">
                                                    <a href="/admin/quen-mat-khau">Bạn quên mật khẩu? Click here</a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                    <!-- Tổ chức -->
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="col mx-auto">
                            <div class="mb-4 text-center">
                                <img src="../../assets/images/logo-img.png" width="180" alt="">
                            </div>
                            <div class="card" style="box-shadow: none;">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Nhập - Tổ Chức</h3>
                                            <p>Bạn chưa có tài khoản? <a href="/dang-ky">Đăng
                                                    ký</a>
                                            </p>
                                        </div>
                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Nhập Email</label>
                                                    <input type="email" class="form-control" id="inputEmailAddress"
                                                        placeholder="Nhập email">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Mật
                                                        Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập mật khẩu"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">

                                                </div>
                                                <div class="col-md-6 text-end"> <a
                                                        href="/to-chuc-cap-chung-chi/quen-mat-khau">Quên mật khẩu ?</a>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" class="btn btn-chinh"><i
                                                                class="bx bxs-lock-open"></i>Đăng
                                                            Nhập</button>
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
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="col mx-auto">
                            <div class="mb-4 text-center">
                                <img src="../../assets/images/logo-img.png" width="180" alt="">
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Nhập - Người Dùng</h3>
                                            <p>Bạn chưa có tài khoản? <a href="/hoc-vien/dang-ky">Đăng ký</a>
                                            </p>
                                        </div>
                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Nhập Email</label>
                                                    <input type="email" class="form-control"
                                                        id="inputEmailAddress" placeholder="Nhập email">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Mật
                                                        Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password"
                                                            class="form-control border-end-0" id="inputChoosePassword"
                                                            placeholder="Nhập mật khẩu"> <a href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">

                                                </div>
                                                <div class="col-md-6 text-end"> <a href="/hoc-vien/quen-mat-khau">Quên
                                                        mật khẩu ?</a>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button"
                                                            class="btn btn-chinh"><i class="bx bxs-lock-open"></i>Đăng
                                                            Nhập</button>
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