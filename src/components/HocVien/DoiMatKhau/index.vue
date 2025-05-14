<template>
    <div class="container mt-1">
        <div class="row">
            <div class="col-lg-3 col-md-3"></div>
            <div class="col-lg-6 col-md-6">

                <div class="row mt-3">
                    <div class="col-lg">
                        <div class="card">
                            <div class="card-header bg-light-info">
                                <h4 class="text-black mt-2 text-center">Cập Nhật Mật Khẩu</h4>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="currentPassword" class="form-label "><b>Mật Khẩu Hiện Tại</b></label>
                                        <input type="password" class="form-control" id="currentPassword"
                                            placeholder="Nhập mật khẩu hiện tại" v-model="update_mk.password">
                                    </div>
                                    <div class="mb-3">
                                        <label for="newPassword" class="form-label"><b>Mật Khẩu Mới</b></label>
                                        <input type="password" class="form-control" id="newPassword"
                                            placeholder="Nhập mật khẩu mới" v-model="update_mk.update_password"
                                            required>
                                    </div>
                                    <div class="mb-1">
                                        <label for="confirmPassword" class="form-label"><b>Xác Nhận Mật Khẩu</b></label>
                                        <input type="password" class="form-control" id="confirmPassword"
                                            placeholder="Xác nhận mật khẩu mới" v-model="confirmPassword" required><br>
                                        <span v-if="errorMessage" style="color:red">{{ errorMessage }}</span><br>
                                    </div>
                                    <div class="text-end"><button type="button" class="btn btn-inverse-primary"
                                            v-on:click="doi_mk()">Thay đổi</button></div>
                                </form>
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
            confirmPassword: '',
            errorMessage: '',
            update_mk: {
                password: '',
                update_password: '',
            }
        }
    },
    methods: {
        doi_mk() {
            this.errorMessage = '';
            if (this.update_mk.update_password !== this.confirmPassword) {
                this.errorMessage = 'Xác Nhận Mật Khẩu không được trùng với Mật Khẩu Mới!';
            }
            else {
                baseRequest
                    .post("hoc-vien/update-mat-khau", this.update_mk)
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