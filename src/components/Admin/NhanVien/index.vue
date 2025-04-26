<template>
    <div class="d-flex justify-content-start text-light">
        <i class="fa-solid fa-list me-2" style="font-size: 35px;"></i>
        <b>
            <h2 class="text-light">QUẢN LÝ TÀI KHOẢN - NHÂN VIÊN</h2>
        </b>
    </div>
    <div class="row mt-2">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
            <div class="card table-responsive" style="box-shadow: none;">
                <div class="card-header">
                    <h4>Thêm Tài Khoản</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="mt-2">Tên Nhân Viên</label>
                            <input class="mt-2 form-control" type="text" v-model="create_nhan_vien.ho_ten">
                            <label class="mt-2">Số CCCD</label>
                            <input class="mt-2 form-control" type="text" v-model="create_nhan_vien.so_cccd">
                            <label class="mt-2">Số Điện Thoại</label>
                            <input class="mt-2 form-control" type="tel" v-model="create_nhan_vien.sdt">
                            <label class="mt-2">Chức Vụ</label>
                            <div>
                                <select class="mt-2 form-control" name="" id="" v-model="create_nhan_vien.chuc_vu">
                                    <option value="0">Chức Vụ</option>
                                    <option value="1">Trưởng Phòng</option>
                                    <option value="2">Phó Phòng</option>
                                </select>
                            </div>
                            <label class="mt-2">Giới Tính</label>
                            <div>
                                <select class="mt-2 form-control" name="" id="" v-model="create_nhan_vien.gioi_tinh">
                                    <option value="0">Nam</option>
                                    <option value="1">Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div>
                                <label class="mt-2">Email Nhân Viên</label>
                            <input class="mt-2 form-control" type="email" v-model="create_nhan_vien.email">
                            </div>
                            <label class="mt-2">Password</label>
                            <div class="input-group" id="password_group">
                                <input :type="showPassword ? 'text' : 'password'" class="form-control border-end-0 mt-2"
                                    id="inputChoosePassword" placeholder="Nhập Mật Khẩu"
                                    v-model="create_nhan_vien.password" required>
                                <a href="javascript:;" class="input-group-text bg-transparent" @click="togglePassword">
                                    <i :class="showPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                                </a>
                            </div>
                            <label class="mt-2">Nhập Lại Password</label>
                            <div class="input-group" id="confirm_password_group">
                                <input :type="showConfirmPassword ? 'text' : 'password'"
                                    class="form-control border-end-0 mt-2" placeholder="Nhập Lại Mật Khẩu"
                                    v-model="confirmPassword" required>
                                <a href="javascript:;" class="input-group-text bg-transparent"
                                    @click="toggleConfirmPassword">
                                    <i :class="showConfirmPassword ? 'bx bx-show' : 'bx bx-hide'"></i>
                                </a>
                            </div>
                            <span v-if="errorMessage" style="color:red">{{ errorMessage }} <br></span>
                            <label class="mt-2">Ngày Sinh</label>
                            <input class="mt-2 form-control" type="date" v-model="create_nhan_vien.ngay_sinh">
                            <label class="mt-2">Địa Chỉ</label>
                            <input class="mt-2 form-control" type="text" v-model="create_nhan_vien.dia_chi">
                        </div>
                    </div>
                    <div class="row mt-1">
                        
                    </div>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-chinh" v-on:click="addNV()">Thêm</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="card table-responsive" style="box-shadow: none;">
            <div class="card-header">
                <h4 class="mt-2">Danh Sách Tài Khoản</h4>
            </div>
            <div class="card-body table-responsive">
                <div class="row">
                    <div class="col-lg-11">
                        <input class="form-control" type="text" placeholder="n...">
                    </div>
                    <div class="col-lg-1">
                        <button class="btn btn-chinh"><i class="fa-solid fa-magnifying-glass"></i>Tìm Kiếm</button>
                    </div>
                </div>
                <table class="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th class="align-middle text-center">STT</th>
                            <th class="align-middle text-center">Họ Và Tên</th>
                            <th class="align-middle text-center">Email</th>
                            <th class="align-middle text-center">Số Điện Thoại</th>
                            <th class="align-middle text-center">Số CCCD</th>
                            <th class="align-middle text-center">Giới Tính</th>
                            <th class="align-middle text-center">Ngày Sinh</th>
                            <th class="align-middle text-center">Địa Chỉ</th>
                            <th class="align-middle text-center">Avatar</th>
                            <th class="align-middle text-center">Chức Vụ</th>
                            <th class="align-middle text-center">Trạng Thái</th>
                            <th class="align-middle text-center">Khác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value, index) in list_nhan_vien" :key="index">
                            <tr>
                                <th class="align-middle text-center">{{ index + 1 }}</th>
                                <td class="align-middle text-center">{{ value.ho_ten }}</td>
                                <td class="align-middle text-center">{{ value.email }}</td>
                                <td class="align-middle text-center">{{ value.sdt }}</td>
                                <td class="align-middle text-center">{{ value.so_cccd }}</td>
                                <td class="align-middle text-center">{{ value.gioi_tinh }}</td>
                                <td class="align-middle text-center">{{ value.ngay_sinh }}</td>
                                <td class="align-middle text-center">{{ value.dia_chi }}</td>
                                <td class="align-middle text-center">
                                    <img v-bind:src="value.hinh_anh" alt=""
                                        style="width: 50px; height: 50px; border-radius: 50%;">
                                </td>
                                <td class="align-middle text-center">{{ value.chuc_vu }}</td>
                                <td class="align-middle text-center">
                                    <button v-if="value.tinh_trang == 1" class="btn btn-success">Hoạt động</button>
                                    <button v-else class="btn btn-success">Tạm Dừng</button>
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn btn-chinh">Gửi thông báo</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

import baseRequest from '../../../core/baseRequest';

export default {
    data() {
        return {
            list_nhan_vien: [],
            create_nhan_vien: {
                ho_ten: '',
                so_cccd: '',
                sdt: '',
                chuc_vu: '',
                gioi_tinh: '',
                email: '',
                password: '',
                ngay_sinh: '',
                dia_chi: '',
            },
            confirmPassword: '',
            errorMessage: '',
            showPassword: false,
            showConfirmPassword: false
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        toggleConfirmPassword() {
            this.showConfirmPassword = !this.showConfirmPassword;
        },
        loadData() {
            baseRequest
                .get('admin/data')
                .then((res) => {
                    this.list_nhan_vien = res.data.data;
                });

        },
        addNV() {
            this.errorMessage = '';
            if (this.create_nhan_vien.password !== this.confirmPassword) {
                this.errorMessage = 'Nhập Lại Mật Khẩu phải trùng với Mật Khẩu!';
            }
            else {
                baseRequest
                    .post('admin/dang-ky', this.create_nhan_vien)
                    .then((res) => {
                        if (res.data.status) {
                            this.$toast.success(res.data.message)
                            this.loadData();
                        } else {
                            this.$toast.error(res.data.message);
                        }
                    });
            }
        }
    }
}
</script>
<style></style>