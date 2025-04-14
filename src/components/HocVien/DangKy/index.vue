<template>
    <div class="bg-login">
        <div class="wrapper">
            <div class="d-flex align-items-center justify-content-center my-5 my-lg-0">
                <div class="container">
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                        <div class="col mx-auto">
                            <div class="my-4 text-center">
                                <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                    width="180" alt="">
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="border p-4 rounded">
                                        <div class="text-center">
                                            <h3 class="">Đăng Ký Học Viên </h3>
                                            <p>Bạn đã có tài khoản? <a href="authentication-signin.html">Đăng Nhập </a>
                                            </p>
                                        </div>

                                        <div class="form-body">
                                            <form class="row g-3">
                                                <div class="col-sm-12">
                                                    <label for="inputTenHocien" class="form-label">Tên Học Viên</label>
                                                    <input type="text" v-model="hoc_vien_create.ho_ten" class="form-control" id="inputTenHocVien"
                                                        placeholder="Nhập tên học viên">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmail" class="form-label">Email</label>
                                                    <input type="email" v-model="hoc_vien_create.email" class="form-control" id="inputEmail"
                                                        placeholder="Nhập email">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputNgaySinh" class="form-label">Ngày Sinh</label>
                                                    <input type="date" v-model="hoc_vien_create.ngay_sinh" class="form-control" id="inputNgaySinh"
                                                        placeholder="Nhập ngày sinh">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputGioiTinh" class="form-label">Giới tính</label>
                                                    <select v-model="hoc_vien_create.gioi_tinh" class="form-control" id="inputGioiTinh">
                                                        <option value="0">Nam</option>
                                                        <option value="1">Nữ</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputSoDienThoai" class="form-label">Số Điện
                                                        Thoại</label>
                                                    <input type="tel" v-model="hoc_vien_create.sdt" class="form-control" id="inputSoDienThoai"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputSoCCCD" class="form-label">Số Căn Cước Công
                                                        Dân</label>
                                                    <input type="text" v-model="hoc_vien_create.so_cccd" class="form-control" id="inputSoCCCD"
                                                        placeholder="Nhập số căn cước công dân">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputEmailAddress" class="form-label">Địa chỉ</label>
                                                    <input type="text" v-model="hoc_vien_create.dia_chi" class="form-control" id="inputDiaChi"
                                                        placeholder="Nhập Địa chỉ">
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Mật Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password" v-model="hoc_vien_create.password" class="form-control border-end-0"
                                                            id="inputChoosePassword" placeholder="Nhập mật khẩu"> <a
                                                            href="javascript:;"
                                                            class="input-group-text bg-transparent"><i
                                                                class="bx bx-hide"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputChoosePassword" class="form-label">Nhập Lại Mật
                                                        Khẩu</label>
                                                    <div class="input-group" id="show_hide_password">
                                                        <input type="password"  class="form-control border-end-0"
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
                                                        <button v-on:click="DangKy()" type="button" class="btn btn-primary"><i
                                                                class="bx bx-user"></i>Đăng Ký</button>
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
            hoc_vien_create : {}
        }
    },
    mounted() {

    },
    methods: {
        DangKy(){
            axios
            .post('http://127.0.0.1:8000/api/hoc-vien/dang-ky', this.hoc_vien_create)
            .then((res)=>{
                if(res.data.status){
                    this.$toast.success(res.data.message)
                }else{
                    this.$toast.error('Đăng ký thất bại.')
                }
            });

        }
    }
}
</script>
<style></style>