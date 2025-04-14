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
                                                    <label for="inputTenHocien" class="form-label">Tên Tổ Chức</label>
                                                    <input type="text" class="form-control" id="inputTenHocVien"
                                                        placeholder="Nhập tên học viên" v-model="to_chuc_create.ten_to_chuc">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmail" class="form-label">Email</label>
                                                    <input type="email" class="form-control" id="inputEmail"
                                                        placeholder="Nhập email" v-model="to_chuc_create.email">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputSoDienThoai" class="form-label">Số Điện Thoại</label>
                                                    <input type="tel" class="form-control" id="inputSoDienThoai"
                                                        placeholder="Nhập số điện thoại" v-model="to_chuc_create.hotline">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Địa Chỉ</label>
                                                    <input type="text" class="form-control" id="inputDiaChi"
                                                        placeholder="Nhập Địa chỉ" v-model="to_chuc_create.dia_chi">
                                                </div>
                                                <div class="col-12">
                                                    <label for="input" class="form-label">Họ Tên Người Đại Diện</label>
                                                    <input type="text" class="form-control" id="inputDiaChi"
                                                        placeholder="Nhập Địa chỉ" v-model="to_chuc_create.ho_ten_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label for="input" class="form-label">Số CCCD</label>
                                                    <input type="number" class="form-control" id="inputDiaChi"
                                                        placeholder="Nhập Địa chỉ" v-model="to_chuc_create.so_cccd">
                                                </div>
                                                <div class="col-12">
                                                    <label for="input" class="form-label">Số Điện Thoại Người Đại Diện</label>
                                                    <input type="tel" class="form-control" id="inputDiaChi"
                                                        placeholder="Nhập Địa chỉ" v-model="to_chuc_create.sdt_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmail" class="form-label">Email Người Đại Diện</label>
                                                    <input type="email" class="form-control" id="inputEmail"
                                                        placeholder="Nhập email" v-model="to_chuc_create.email_nguoi_dai_dien">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập mật khẩu" v-model="to_chuc_create.password"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Lại Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập lại mật khẩu"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    
                                                </div>
                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button type="submit" class="btn btn-primary" v-on:click="DangKy()"><i
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
            to_chuc_create : {}
        }
    },
    mounted() {

    },
    methods: {
        DangKy(){
            axios
            .post('http://127.0.0.1:8000/api/to-chuc/dang-ky', this.to_chuc_create)
            .then((res)=>{
                if(res.data.status){
                    alert(res.data.message);
                }else{
                    alert('Đăng ký thất bại.');
                }
            });

        }
    }
}
</script>
<style>
    
</style>