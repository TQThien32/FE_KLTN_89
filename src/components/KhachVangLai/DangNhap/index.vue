<template>
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6 col-md-12">
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
            <div class="tab-content py-1">
                <div class="tab-pane fade active show" id="primaryhome" role="tabpanel">
                    <!-- Admin -->
                    <div class="row ">
                        <div class="col mx-auto">
                            <div class=" text-center">
                                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                            width="120" alt="">
                                    </div>
                            
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Nhập - Admin</h3>
                                            <p>Chỉ dành cho nhân viên!
                                            </p>
                                        </div>
                                        <div class="form-body mt-3">
                                            <form class="row g-3">
                                                <div class="col-12">
                                                    <label for="" class="form-label">Nhập Email</label>
                                                    <input type="email" class="form-control" v-model="admin_Dang_Nhap.email">
                                                </div>
                                                <div class="col-12">
												<label for="" class="form-label">Mật Khẩu</label>
												<div class="input-group" id="password_group">
													<input :type="showPassword ? 'text' : 'password'"
														class="form-control border-end-0"
														v-model="admin_Dang_Nhap.password">
													<a href="javascript:;" class="input-group-text bg-transparent"
														@click="togglePassword">
														<i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
													</a>
												</div>
											</div>
                                                <div class="col-12 text-end ">
                                                    <a href="/admin/quen-mat-khau">Bạn quên mật khẩu? Nhấn vào đây!</a>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" @click="dangNhapAdmin()" class="btn btn-chinh"><i
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
                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                    <!-- Tổ chức -->
                    <div class="row ">
                        <div class="col mx-auto">
                            <div class=" text-center">
                                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                            width="120" alt="">
                                    </div>
                            <div class="card" >
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
                                                    <label for="" class="form-label">Nhập Email</label>
                                                    <input type="email" v-model="to_Chuc_Dang_Nhap.email" class="form-control">
                                                </div>
                                                <div class="col-12">
												<label for="" class="form-label">Mật Khẩu</label>
												<div class="input-group" id="password_group">
													<input :type="showPassword ? 'text' : 'password'"
														class="form-control border-end-0" v-model="to_Chuc_Dang_Nhap.password">
													<a href="javascript:;" class="input-group-text bg-transparent"
														@click="togglePassword">
														<i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
													</a>
												</div>
											</div>
                                                <div class="col-md-6">

                                                </div>
                                                <div class="col-md-6 text-end"> <a
                                                        href="/to-chuc-cap-chung-chi/quen-mat-khau">Bạn quên mật khẩu? Nhấn vào đây!</a>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" v-on:click="dangNhapToChuc()" class="btn btn-chinh"><i
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
                    <div class="row ">
                        <div class="col mx-auto">
                            <div class=" text-center">
                                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                            width="120" alt="">
                                    </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Nhập - Người Dùng</h3>
                                            <p>Bạn chưa có tài khoản? <a href="/dang-ky">Đăng ký</a>
                                            </p>
                                        </div>
                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Nhập Email</label>
                                                    <input type="email" class="form-control" v-model="hoc_Vien_Dang_Nhap.email">
                                                </div>
                                                <div class="col-12">
												<label for="" class="form-label">Mật Khẩu</label>
												<div class="input-group" id="password_group">
													<input :type="showPassword ? 'text' : 'password'"
														class="form-control border-end-0" v-model="hoc_Vien_Dang_Nhap.password">
													<a href="javascript:;" class="input-group-text bg-transparent"
														@click="togglePassword">
														<i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
													</a>
												</div>
											</div>
                                                <div class="col-md-6">

                                                </div>
                                                <div class="col-md-6 text-end"> <a href="/hoc-vien/quen-mat-khau">Bạn quên mật khẩu? Nhấn vào đây!</a>
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" @click="dangNhapHocVien()"
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
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';
export default {
    data() {
		return {
			hoc_Vien_Dang_Nhap: {},
			admin_Dang_Nhap: {},
			to_Chuc_Dang_Nhap: {},
            showPassword: false,
		}
	},
	methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
		dangNhapHocVien() {
			baseRequest
				.post('hoc-vien/dang-nhap', this.hoc_Vien_Dang_Nhap)
				.then((res) => {
					if (res.data.status) {
						this.$toast.success(res.data.message)
						localStorage.setItem('chia_khoa_so1', res.data.chia_khoa);
						localStorage.setItem('ten_hoc_vien', res.data.ten_hoc_vien);
                        this.$router.push('/hoc-vien/trang-chu');
					}
					else {
						this.$toast.error(res.data.message)
					}
				})
		},
        dangNhapAdmin() {
			baseRequest
				.post('admin/dang-nhap', this.admin_Dang_Nhap)
				.then((res) => {
					if (res.data.status) {
						this.$toast.success(res.data.message);
						
						localStorage.setItem('chia_khoa_so1', res.data.chia_khoa);
						localStorage.setItem('ten_admin', res.data.ten_admin);
                        this.$router.push('/admin/danh-sach-nhan-vien');
					}
					else {
						this.$toast.error(res.data.message);
					}
				})
		},
        dangNhapToChuc() {
			baseRequest
				.post('to-chuc/dang-nhap', this.to_Chuc_Dang_Nhap)
				.then((res) => {
					if (res.data.status) {
						this.$toast.success(res.data.message)
						localStorage.setItem('chia_khoa_so1', res.data.chia_khoa);
						localStorage.setItem('ten_to_chuc', res.data.ten_to_chuc);
                        this.$router.push('/to-chuc-cap-chung-chi/trang-chu');
					}
					else {
						this.$toast.error(res.data.message)
					}
				})
		},
        
	}
}
</script>
<style></style>