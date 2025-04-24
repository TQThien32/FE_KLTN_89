<template>
    <div class="container mt-1">
        <h2 class="text-light">Đổi Mật Khẩu</h2>
        <div class="row mt-3">
            <div class="col-lg">
                <div class="card" style="box-shadow: none;">
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="currentPassword" class="form-label"><b>Mật Khẩu Hiện Tại</b></label>
                                <input type="password" class="form-control" id="currentPassword"
                                    placeholder="Nhập mật khẩu hiện tại" v-model="update_mk.password">
                            </div>
                            <div class="mb-3">
                                <label for="newPassword" class="form-label"><b>Mật Khẩu Mới</b></label>
                                <div class="input-group" id="password_group">
                                    <input :type="showPassword ? 'text' : 'password'" class="form-control border-end-0"
                                        id="inputChoosePassword" placeholder="Nhập Mật Khẩu"
                                        v-model="update_mk.update_password" required>
                                    <a href="javascript:;" class="input-group-text bg-transparent"
                                        @click="togglePassword">
                                        <i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label"><b>Xác Nhận Mật Khẩu</b></label>
                                <div class="input-group" id="confirm_password_group">
                                    <input :type="showConfirmPassword ? 'text' : 'password'"
                                        class="form-control border-end-0" placeholder="Nhập Lại Mật Khẩu"
                                        v-model="confirmPassword" required>
                                    <a href="javascript:;" class="input-group-text bg-transparent"
                                        @click="toggleConfirmPassword">
                                        <i :class="showConfirmPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                                    </a>
                                </div><br>
                                <span v-if="errorMessage" style="color:red">{{ errorMessage }}</span>
                            </div>
                            <div class="text-center"><button type="button" class="btn btn btn-chinh"
                                    v-on:click="doi_mk()">Đổi Mật
                                    Khẩu</button></div>
                        </form>
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
            confirmPassword: '',
            errorMessage: '',
            update_mk: {
                password: '',
                update_password: '',
            },
            showPassword: false,
            showConfirmPassword: false
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        doi_mk() {
            this.errorMessage = '';
            if (this.update_mk.update_password !== this.confirmPassword) {
                this.errorMessage = 'Xác Nhận Mật Khẩu không được trùng với Mật Khẩu Mới!';
            }
            else {
                baseRequest
                    .post("to-chuc/update-mat-khau", this.update_mk)
                    .then((res) => {
                        if (res.data.status) {
                            this.$toast.success(res.data.message);
                        }
                        else {
                            this.$toast.error(res.data.message);
                        }
                    })
            }
        }
    }
}
</script>
<style></style>