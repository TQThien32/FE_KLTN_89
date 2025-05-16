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
                    <h4 class="text-dark mt-2">Thêm Tài Khoản</h4>
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
                                <select class="mt-2 form-control" name="" id="" v-model="create_nhan_vien.id_chuc_vu">
                                    <template v-for="(v, k) in listChucVu" :key="k">
                                        <option v-bind:value="v.id">{{ v.ten_chuc_vu }}</option>
                                    </template>
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
                        <input class="form-control" type="text" v-model="keyword.tim"
                            placeholder="Nhập thông tin cần tìm">

                    </div>
                    <div class="col-lg-1">
                        <button class="btn btn-chinh" v-on:click="searchNV()">
                            <i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm
                        </button>
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
                                <td class="align-middle text-center">{{ value.gioi_tinh == 0 ? 'Nam' :
                                    (value.gioi_tinh == 1 ? 'Nữ' : 'Không rõ') }}</td>
                                <td class="align-middle text-center">{{ value.ngay_sinh }}</td>
                                <td class="align-middle text-center">{{ value.dia_chi }}</td>
                                <td class="align-middle text-center">
                                    <img v-bind:src="value.hinh_anh ? value.hinh_anh : 'https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg'"
                                        alt="" style="width: 50px; height: 50px; border-radius: 50%;">
                                </td>
                                <td class="align-middle text-center"><button
                                        v-on:click="Object.assign(update_chuc_vu, value)" type="button"
                                        class="btn btn btn-inverse-primary" data-bs-toggle="modal"
                                        data-bs-target="#updateModal">
                                        {{ value.ten_chuc_vu }}
                                    </button></td>
                                <td class="align-middle text-center">
                                    <button v-on:click="doiTrangThai(value)" v-if="value.is_duyet == 1"
                                        class="btn btn-success">Hoạt động</button>
                                    <button v-on:click="doiTrangThai(value)" v-else class="btn btn-danger">Tạm
                                        Dừng</button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-gradient-scooter">
                    <h5 class="modal-title text-light" id="updateModalLabel">Cập Nhật Chức Vụ Cho Nhân Viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Form cập nhật thông tin -->
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Họ Và Tên</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <div class="form-control bg-white">{{ update_chuc_vu.ho_ten }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <div class="form-control bg-white">{{ update_chuc_vu.email }}</div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Chọn Chức Vụ</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <select class="mt-2 form-control" v-model="update_chuc_vu.id_chuc_vu">
                                <template v-for="(v, k) in listChucVu" :key="k">
                                    <option v-bind:value="v.id">{{ v.ten_chuc_vu }}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-inverse-dark" data-bs-dismiss="modal">Đóng</button>
                    <button v-on:click="updateChucVu()" data-bs-dismiss="modal" type="button"
                        class="btn btn-inverse-info">Xác Nhận</button>
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
            listChucVu: [],
            update_chuc_vu: {},
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
            showConfirmPassword: false,
            keyword: {},
        }
    },
    mounted() {
        this.loadData();
        this.loadChucVu();
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
        },
        doiTrangThai(value) {
            baseRequest
                .post('admin/doi-trang-thai', value)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        },
        updateChucVu() {
            baseRequest
                .post('admin/chuc-vu-nhan-vien/update', this.update_chuc_vu)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        },
        loadChucVu() {
            baseRequest
                .get('admin/chuc-vu/data')
                .then((res) => {
                    this.listChucVu = res.data.data;
                });
        },
        searchNV() {
            baseRequest
                .post('admin/tai-khoan-nhan-vien/tim-kiem', this.keyword)
                .then((res) => {
                    if (res.data.status) {
                        this.list_nhan_vien = res.data.data;
                    } else {
                        this.list_nhan_vien = [];
                        this.$toast.error(res.data.message);
                    }
                });
        }


    }
}
</script>
<style></style>