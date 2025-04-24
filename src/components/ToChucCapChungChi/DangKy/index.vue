<template>
    <div class="bg-login">
        <div class="wrapper">
            <div class="d-flex align-items-center justify-content-center my-5 my-lg-0">
                <div class="container">
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                        <div class="col mx-auto">
                            <div class="my-4 text-center">
                                <img src="../../assets/images/logo-img.png" width="180" alt="">
                            </div>
                            <div class="card" style="box-shadow: none;">
                                <div class="card-header text-center">
                                    <h3 class="mt-2">Đăng Ký</h3>
                                </div>
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h4>Tổ Chức Cấp Chứng Chỉ</h4>

                                        </div>
                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-sm-12">
                                                    <label class="form-label">Tên Tổ Chức</label>
                                                    <input type="text" class="form-control" id="inputTenHocVien"
                                                        placeholder="Nhập Tên Tổ Chức"
                                                        v-model="to_chuc_create.ten_to_chuc">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control" placeholder="Nhập Email"
                                                        v-model="to_chuc_create.email">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số Điện Thoại</label>
                                                    <input type="tel" class="form-control"
                                                        placeholder="Nhập Số Điện Thoại"
                                                        v-model="to_chuc_create.hotline">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Địa Chỉ</label>
                                                    <input type="text" class="form-control" placeholder="Nhập Địa chỉ"
                                                        v-model="to_chuc_create.dia_chi">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Họ Tên Người Đại Diện</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập Họ Tên Người Đại Diện"
                                                        v-model="to_chuc_create.ho_ten_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số CCCD</label>
                                                    <input type="number" class="form-control" placeholder="Nhập Số CCCD"
                                                        v-model="to_chuc_create.so_cccd">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số Điện Thoại Người Đại Diện</label>
                                                    <input type="tel" class="form-control"
                                                        placeholder="Nhập Số Điện Thoại Người Đại Diện"
                                                        v-model="to_chuc_create.sdt_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Email Người Đại Diện</label>
                                                    <input type="email" class="form-control"
                                                        placeholder="Nhập Email Người Đại Diện"
                                                        v-model="to_chuc_create.email_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="password_group">
                                                        <input :type="showPassword ? 'text' : 'password'"
                                                            class="form-control border-end-0" id="inputChoosePassword"
                                                            placeholder="Nhập Mật Khẩu"
                                                            v-model="to_chuc_create.password" required>
                                                        <a href="javascript:;" class="input-group-text bg-transparent"
                                                            @click="togglePassword">
                                                            <i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Lại Mật
                                                        Khẩu</label>
                                                    <div class="input-group" id="confirm_password_group">
                                                        <input :type="showConfirmPassword ? 'text' : 'password'"
                                                            class="form-control border-end-0"
                                                            placeholder="Nhập Lại Mật Khẩu" v-model="confirmPassword"
                                                            required>
                                                        <a href="javascript:;" class="input-group-text bg-transparent"
                                                            @click="toggleConfirmPassword">
                                                            <i
                                                                :class="showConfirmPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                                                        </a>
                                                    </div>
                                                    <br>
                                                    <span v-if="errorMessage" style="color:red">{{ errorMessage
                                                        }}</span>
                                                </div>
                                                <div class="col-12">

                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" class="btn btn-chinh"
                                                            v-on:click="DangKy()"><i class="bx bx-user"></i>Đăng
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
                    <!--end row-->
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
            to_chuc_create: {
                ten_to_chuc: '',
                email: '',
                hotline: '',
                dia_chi: '',
                ho_ten_nguoi_dai_dien: '',
                so_cccd: '',
                sdt_nguoi_dai_dien: '',
                email_nguoi_dai_dien: '',
                password: ''
            },
            confirmPassword: '',
            errorMessage: '',
            showPassword: false,
            showConfirmPassword: false
        }
    },
    mounted() {

    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        DangKy() {
            this.errorMessage = '';
            if (this.to_chuc_create.password !== this.confirmPassword) {
                this.errorMessage = 'Nhập Lại Mật Khẩu phải trùng với Mật Khẩu!';
            }
            else {
                baseRequest
                    .post('to-chuc/dang-ky', this.to_chuc_create)
                    .then((res) => {
                        if (res.data.status) {
                            this.$toast.success(res.data.message)
                        } else {
                            this.$toast.success('Đăng ký thất bại.')
                        }
                    });
            }
        }
    }
}
</script>
<style></style>