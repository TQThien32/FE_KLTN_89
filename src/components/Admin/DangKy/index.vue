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
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Ký Admin </h3>
                                            <p>Bạn đã có tài khoản? <a href="authentication-signin.html">Đăng Nhập </a>
                                            </p>
                                        </div>

                                        <div class="form-body">
                                            <form class="row g-3">

                                                <div class="col-12">
                                                    <label for="inputEmail" class="form-label">Email</label>
                                                    <input type="email" v-model="admin_create.email"
                                                        class="form-control" id="inputEmail" placeholder="Nhập email">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" v-model="admin_create.password"
                                                            class="form-control border-end-0" id="inputChoosePassword"
                                                            placeholder="Nhập mật khẩu"> <a href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" v-on:click="DangKy()"
                                                            class="btn btn-primary"><i class="bx bx-user"></i>Đăng
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
                    <!--end row-->
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            admin_create: {}
        }
    },
    methods: {
    DangKy() {
        axios
            .post('http://127.0.0.1:8000/api/admin/dang-ky', this.admin_create)
            .then((res) => {
                if (res.data.status) {
                    this.$toast.success(res.data.message)
                } else {
                    this.$toast.error(res.data.message);
                }
            })
    }
}
}
</script>
<style></style>