<template>

    <body class="bg-forgot">
        <!-- wrapper -->
        <div class="wrapper">
            <div class="authentication-forgot d-flex align-items-center justify-content-center">
                <div class="card forgot-box" style="box-shadow: none;">
                    <div class="card-body d-flex justify-content-start">
                        <div class="p-3 rounded  border">
                            <div>
                                <div class="text-center">
                                    <img src="https://png.pngtree.com/png-clipart/20230930/original/pngtree-editable-password-change-icon-with-circular-arrow-icon-pictogram-update-vector-png-image_12914234.png"
                                        width="120" alt="">
                                </div>
                                <h4 class="mt-5 font-weight-bold">Quên Mật Khẩu</h4>
                                <p class="text-muted">Nhập Email Mà Bạn Đã Đăng Ký Để Nhận Lại Mật Khẩu</p>
                                <div class="my-4">
                                    <label class="form-label">Email</label>
                                    <input type="text" class="form-control form-control-lg"
                                        placeholder="example@user.com" v-model="quen_mk.email">
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="button" class="btn btn-chinh btn-lg"
                                        v-on:click="laylaimk()">Gửi</button> <a href="/admin/dang-nhap"
                                        class="btn btn-outline-secondary btn-lg"><i
                                            class="bx bx-arrow-back me-1"></i>Quay Lại Đăng
                                        Nhập</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://cdn.tgdd.vn/hoi-dap/596402/minh-k-nho-mat-khau-o-che-do-rieng-tu-gio-lam-sao%20(1).jpg"
                                alt="" style="width: 500px; height: 500px;">
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