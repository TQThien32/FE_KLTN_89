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
                                            <h3 class="">Đăng Ký</h3>
                                            <h4>Cơ Quan Xác Thực</h4>
                                            <p>Bạn đã có tài khoản? <a href="authentication-signin.html">Đăng Nhập </a>
                                            </p>
                                        </div>
                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-sm-12">
                                                    <label class="form-label">Tên Cơ Quan</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập Tên Cơ Quan" v-model="co_quan_create.ten_co_quan">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Email</label>
                                                    <input type="email" class="form-control"
                                                        placeholder="Nhập Email" v-model="co_quan_create.email">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số Điện Thoại</label>
                                                    <input type="tel" class="form-control"
                                                        placeholder="Nhập Số Điện Thoại" v-model="co_quan_create.hotline">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Địa Chỉ</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập Địa Chỉ" v-model="co_quan_create.dia_chi">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Họ Tên Người Đại Diện</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập Họ Tên Người Đại Diện" v-model="co_quan_create.ho_ten_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số CCCD</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập Số CCCD" v-model="co_quan_create.so_cccd">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Số Điện Thoại Người Đại Diện</label>
                                                    <input type="tel" class="form-control"
                                                        placeholder="Nhập Số Điện Thoại Người Đại Diện" v-model="co_quan_create.sdt_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label">Email Người Đại Diện</label>
                                                    <input type="email" class="form-control"
                                                        placeholder="Nhập Email Người Đại Diện" v-model="co_quan_create.email_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập Mật Khẩu" v-model="co_quan_create.password"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Lại Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            placeholder="Nhập Lại Mật Khẩu"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="button" class="btn btn-primary" v-on:click="DangKy()"><i
                                                                class="bx bx-user"></i>Đăng Ký</button>
                                                    </div>                                                   
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid text-center">
                                                        <label>Bạn đã có tài khoản? <a href="authentication-signin.html">Đăng Nhập </a>
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
import axios from 'axios';

export default {
    data() {
        return {
            co_quan_create : {}
        }
    },
    mounted() {

    },
    methods: {
        DangKy(){
            axios
            .post('http://127.0.0.1:8000/api/co-quan/dang-ky', this.co_quan_create)
            .then((res)=>{
                if(res.data.status){
                    this.$toast.success(res.data.message)
                }else{
                    this.$toast.console.error('Đăng ký thất bại.');
                }
            });

        }
    }
}
</script>
<style>
    
</style>