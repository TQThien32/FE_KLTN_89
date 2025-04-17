<template>

    <body class="bg-forgot">
        <!-- wrapper -->
        <div class="wrapper">
            <div class="authentication-forgot d-flex align-items-center justify-content-center">
                <div class="card forgot-box">
                    <div class="card-body">
                        <div class="p-4 rounded  border">
                            <div class="text-center">
                                <img src="../../../assets/images/icons/forgot-2.png" width="120" alt="">
                            </div>
                            <h4 class="mt-5 font-weight-bold">Quên Mật Khẩu</h4>
                            <p class="text-muted">Nhập Email Mà Bạn Đã Đăng Ký Để Nhận Lại Mật Khẩu</p>
                            <div class="my-4">
                                <label class="form-label">Email</label>
                                <input type="text" class="form-control form-control-lg" placeholder="example@user.com"
                                    v-model="quen_mk.email">
                            </div>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-primary btn-lg"
                                    v-on:click="laylaimk()">Gửi</button> <a href="authentication-signin.html"
                                    class="btn btn-light btn-lg"><i class="bx bx-arrow-back me-1"></i>Quay Lại Đăng
                                    Nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end wrapper -->


    </body>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            quen_mk: {},
        }
    },

    methods: {
        laylaimk() {
            axios
                .post('http://127.0.0.1:8000/api/admin/quen-mat-khau', this.quen_mk)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
        }
    },
};
</script>

<style></style>