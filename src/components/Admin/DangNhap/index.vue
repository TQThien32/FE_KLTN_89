<template>
	<div class="wrapper bg-login">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<img src="" width="180" alt="">
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="text-center">
										<h3 class="">Đăng Nhập</h3>
									</div>
									<div class="form-body mt-3">
										<form class="row g-3">
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Tên đăng nhập</label>
												<input type="email" class="form-control" id="inputEmailAddress"
													placeholder="Nhập tên đăng nhập" v-model="dang_Nhap.email">
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
												<div class="input-group" id="show_hide_password">
													<input type="password" class="form-control border-end-0"
														id="inputChoosePassword" placeholder="Nhập mật khẩu"
														v-model="dang_Nhap.password"> <a href="javascript:;"
														class="input-group-text bg-transparent"><i
															class="bx bx-hide"></i></a>
												</div>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="button" class="btn btn-primary"><i
															class="bx bxs-lock-open" v-on:click="dangNhap()"></i>Đăng
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
				<!--end row-->
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			dang_Nhap: {}
		}
	},
	mounted() {

	},
	methods: {
		dangNhap() {
			axios
				.post('http://127.0.0.1:8000/api/admin/dang-nhap', this.dang_Nhap)
				.then((res) => {
					if (res.data.status) {
						this.$toast.success(res.data.message);
						// this.$router.push('/admin/danh-muc');
						localStorage.setItem('chia_khoa_so1', res.data.chia_khoa);
						localStorage.setItem('ten_admin', res.data.ten_admin);
					}
					else {
						this.$toast.console.error(res.data.message);
					}
				})
		}
	}
}
</script>
<style></style>