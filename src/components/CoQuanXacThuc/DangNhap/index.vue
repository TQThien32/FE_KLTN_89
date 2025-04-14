<template>
	<div class="wrapper bg-login">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<img src="../../assets/images/logo-img.png" width="180" alt="">
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="text-center">
										<h3 class="">Đăng Nhập</h3>
										<p>Bạn chưa có tài khoản? <a href="authentication-signup.html">Đăng ký</a>
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
												<label for="inputChoosePassword" class="form-label">Nhập Mật Khẩu</label>
												<div class="input-group" id="show_hide_password">
													<input type="password" class="form-control border-end-0"
														id="inputChoosePassword"
														placeholder="Nhập mật khẩu"> <a href="javascript:;"
														class="input-group-text bg-transparent"><i
															class="bx bx-hide"></i></a>
												</div>
											</div>
											<div class="col-md-6">
												
											</div>
											<div class="col-md-6 text-end"> <a
													href="authentication-forgot-password.html">Quên mật khẩu ?</a>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button type="button" class="btn btn-primary"><i
															class="bx bxs-lock-open" v-on:click="dangNhap()"></i>Đăng Nhập</button>
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
	methods: {
		dangNhap() {
			axios
				.post('http://127.0.0.1:8000/api/co-quan/dang-nhap', this.dang_Nhap)
				.then((res) => {
					if(res.data.status){
						this.$toast.success(res.data.message)
					}
					else{
						this.$toast.error(res.data.message)
					}
				})
		}
	}
}
</script>
<style></style>