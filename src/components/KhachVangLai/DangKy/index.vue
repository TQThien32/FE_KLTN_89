<template>
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6 col-md-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-primary" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link text-dark" data-bs-toggle="tab" href="#primaryprofile" role="tab"
                                aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-people-group font-18 me-2"></i>
                                    </div>
                                    <div class="tab-title">Tổ Chức</div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link text-dark" data-bs-toggle="tab" href="#primarycontact" role="tab"
                                aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-graduation-cap font-18 me-2"></i>
                                    </div>
                                    <div class="tab-title">Người Dùng</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content py-3">
                        <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                            <!-- Tổ chức -->
                            <div class="row ">
                                <div class="col mx-auto">
                                    <div class="my-4 text-center">
                                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                            width="180" alt="">
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="border p-4 rounded">
                                                <div class="text-center">
                                                    <h3 class="mt-2">Đăng Ký - Tổ Chức Cấp Chứng Chỉ</h3>
                                                    <p>Bạn đã có tài khoản? <a href="/dang-nhap">Đăng Nhập </a>
                                                    </p>

                                                </div>
                                                <div class="form-body">
                                                    <form class="row g-3">
                                                        <div class="col-sm-12">
                                                            <label class="form-label">Tên Tổ Chức</label>
                                                            <input type="text" class="form-control" id="inputTenHocVien"
                                                                placeholder="Nhập Tên Tổ Chức"
                                                                v-model="create_to_chuc.ten_to_chuc">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Email</label>
                                                            <input type="email" class="form-control"
                                                                placeholder="Nhập Email" v-model="create_to_chuc.email">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Số Điện Thoại</label>
                                                            <input type="tel" class="form-control"
                                                                placeholder="Nhập Số Điện Thoại"
                                                                v-model="create_to_chuc.hotline">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Địa Chỉ</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Nhập Địa chỉ"
                                                                v-model="create_to_chuc.dia_chi">
                                                        </div>
                                                        <hr>
                                                        <div class="col-12">
                                                            <label class="form-label">Họ Tên Người Đại Diện</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Nhập Họ Tên Người Đại Diện"
                                                                v-model="create_to_chuc.ho_ten_nguoi_dai_dien">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Số CCCD</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Nhập Số CCCD"
                                                                v-model="create_to_chuc.so_cccd">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Số Điện Thoại Người Đại
                                                                Diện</label>
                                                            <input type="tel" class="form-control"
                                                                placeholder="Nhập Số Điện Thoại Người Đại Diện"
                                                                v-model="create_to_chuc.sdt_nguoi_dai_dien">
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="form-label">Email Người Đại Diện</label>
                                                            <input type="email" class="form-control"
                                                                placeholder="Nhập Email Người Đại Diện"
                                                                v-model="create_to_chuc.email_nguoi_dai_dien">
                                                        </div>
                                                        <hr>
                                                        <div class="col-12">
                                                            <label for="inputChoosePassword" class="form-label">Mật
                                                                Khẩu</label>
                                                            <div class="input-group" id="password_group">
                                                                <input :type="showPasswordToChuc ? 'text' : 'password'"
                                                                    class="form-control border-end-0"
                                                                    id="inputChoosePassword" placeholder="Nhập Mật Khẩu"
                                                                    v-model="create_to_chuc.password" required>
                                                                <a href="javascript:;"
                                                                    class="input-group-text bg-transparent"
                                                                    @click="togglePasswordToChuc">
                                                                    <i
                                                                        :class="showPasswordToChuc ? 'bx bx-show' : 'bx bx-hide'"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputChoosePassword" class="form-label">Nhập Lại
                                                                Mật
                                                                Khẩu</label>
                                                            <div class="input-group" id="confirm_password_group">
                                                                <input
                                                                    :type="showConfirmPasswordToChuc ? 'text' : 'password'"
                                                                    class="form-control border-end-0"
                                                                    placeholder="Nhập Lại Mật Khẩu"
                                                                    v-model="confirmPasswordToChuc" required>
                                                                <a href="javascript:;"
                                                                    class="input-group-text bg-transparent"
                                                                    @click="toggleConfirmPasswordToChuc">
                                                                    <i
                                                                        :class="showConfirmPasswordToChuc ? 'bx bx-show' : 'bx bx-hide'"></i>
                                                                </a>
                                                            </div>
                                                            <br>
                                                            <span v-if="errorMessageToChuc" style="color:red">{{
                                                                errorMessageToChuc
                                                            }}</span>
                                                        </div>

                                                        <div class="col-12">
                                                            <div class="d-grid">
                                                                <button type="button" class="btn btn-chinh"
                                                                    v-on:click="ToChucDangKy()"><i
                                                                        class="bx bx-user"></i>Đăng
                                                                    Ký</button>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="d-grid text-center">
                                                                <label>Bạn đã có tài khoản? <a
                                                                        href="/to-chuc-cap-chung-chi/dang-nhap">Đăng
                                                                        Nhập </a>
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
                        </div>
                        <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                            <!-- Học Viên nè -->
                            <div class="row ">
                                <div class="col mx-auto">
                                    <div class="my-4 text-center">
                                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                                            width="180" alt="">
                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="border p-4 rounded">
                                                <div class="text-center">
                                                    <h3 class="">Đăng Ký - Người Dùng </h3>
                                                    <p>Bạn đã có tài khoản? <a href="/dang-nhap">Đăng Nhập </a>
                                                    </p>
                                                </div>

                                                <div class="form-body">
                                                    <form class="row g-3">
                                                        <div class="col-sm-12">
                                                            <label for="inputTenHocVien" class="form-label">Họ Và
                                                                Tên</label>
                                                            <input v-model="create_hoc_vien.ho_ten" type="text"
                                                                class="form-control" id="inputTenHocVien"
                                                                placeholder="Nhập Họ và Tên">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputEmail" class="form-label">Email</label>
                                                            <input v-model="create_hoc_vien.email" type="email"
                                                                class="form-control" id="inputEmail"
                                                                placeholder="Nhập email">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputNgaySinh" class="form-label">Ngày
                                                                Sinh</label>
                                                            <input v-model="create_hoc_vien.ngay_sinh" type="date"
                                                                class="form-control" id="inputNgaySinh"
                                                                placeholder="Nhập ngày sinh">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputGioiTinh" class="form-label">Giới
                                                                tính</label>
                                                            <select v-model="create_hoc_vien.gioi_tinh"
                                                                class="form-control" id="inputGioiTinh">
                                                                <option value="0">Nam</option>
                                                                <option value="1">Nữ</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputSoDienThoai" class="form-label">Số Điện
                                                                Thoại</label>
                                                            <input v-model="create_hoc_vien.sdt" type="tel"
                                                                class="form-control" id="inputSoDienThoai"
                                                                placeholder="Nhập số điện thoại">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputSoCCCD" class="form-label">Số Căn Cước Công
                                                                Dân</label>
                                                            <input v-model="create_hoc_vien.so_cccd" type="text"
                                                                class="form-control" id="inputSoCCCD"
                                                                placeholder="Nhập số căn cước công dân">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputEmailAddress" class="form-label">Địa
                                                                chỉ</label>
                                                            <input v-model="create_hoc_vien.dia_chi" type="text"
                                                                class="form-control" id="inputDiaChi"
                                                                placeholder="Nhập Địa chỉ">
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputChoosePassword" class="form-label">Mật
                                                                Khẩu</label>
                                                            <div class="input-group" id="password_group">
                                                                <input :type="showPasswordHocVien ? 'text' : 'password'"
                                                                    class="form-control border-end-0"
                                                                    id="inputChoosePassword" placeholder="Nhập Mật Khẩu"
                                                                    v-model="create_hoc_vien.password" required>
                                                                <a href="javascript:;"
                                                                    class="input-group-text bg-transparent"
                                                                    @click="togglePasswordHocVien">
                                                                    <i
                                                                        :class="showPasswordHocVien ? 'bx bx-show' : 'bx bx-hide'"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <label for="inputChoosePassword" class="form-label">Nhập Lại
                                                                Mật
                                                                Khẩu</label>
                                                            <div class="input-group" id="confirm_password_group">
                                                                <input
                                                                    :type="showConfirmPasswordHocVien ? 'text' : 'password'"
                                                                    class="form-control border-end-0"
                                                                    placeholder="Nhập Lại Mật Khẩu"
                                                                    v-model="confirmPasswordHocVien" required>
                                                                <a href="javascript:;"
                                                                    class="input-group-text bg-transparent"
                                                                    @click="toggleConfirmPasswordHocVien">
                                                                    <i
                                                                        :class="showConfirmPasswordHocVien ? 'bx bx-show' : 'bx bx-hide'"></i>
                                                                </a>
                                                            </div>
                                                            <br>
                                                            <span v-if="errorMessageHocVien" style="color:red">{{
                                                                errorMessageHocVien
                                                            }}</span>
                                                        </div>
                                                        
                                                        <div class="col-12">
                                                            <div class="d-grid">
                                                                <button v-on:click="HocVienDangKy()" type="button"
                                                                    class="btn btn-chinh"><i class="bx bx-user"></i>Đăng
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
            create_hoc_vien: {
                ho_ten: '',
                email: '',
                ngay_sinh: '',
                gioi_tinh: '0',
                sdt: '',
                so_cccd: '',
                dia_chi: '',
                password: ''
            },
            create_to_chuc: {
                ten_to_chuc: '',
                email: '',
                hotline: '',
                dia_chi: '',
                ho_ten_nguoi_dai_dien: '',
                so_cccd: '',
                sdt_nguoi_dai_dien: '',
                email_nguoi_dai_dien: '',
                password: ''
            },
            confirmPasswordToChuc: '',
            confirmPasswordHocVien: '',
            errorMessageToChuc: '',
            errorMessageHocVien: '',
            showPasswordToChuc: false,
            showConfirmPasswordToChuc: false,
            showPasswordHocVien: false,
            showConfirmPasswordHocVien: false
        }
    },
    mounted() {

    },
    methods: {
        togglePasswordToChuc() {
            this.showPasswordToChuc = !this.showPasswordToChuc;
        },
        toggleConfirmPasswordToChuc() {
            this.showConfirmPasswordToChuc = !this.showConfirmPasswordToChuc;
        },
        togglePasswordHocVien() {
            this.showPasswordHocVien = !this.showPasswordHocVien;
        },
        toggleConfirmPasswordHocVien() {
            this.showConfirmPasswordHocVien = !this.showConfirmPasswordHocVien;
        },

        ToChucDangKy() {
            this.errorMessageToChuc = '';
            if (this.create_to_chuc.password != this.confirmPasswordToChuc) {
                this.errorMessageToChuc = 'Mật khẩu không khớp! Vui lòng kiểm tra lại !';
                return;
            } else {
                baseRequest.post('to-chuc/dang-ky', this.create_to_chuc)
                    .then((res) => {
                        if (res.data.status) {
                            this.$toast.success(res.data.message);
                        } else {
                            this.$toast.error('Đăng ký thất bại.');
                        }
                    })
                    .catch(() => {
                        this.$toast.error('Đã xảy ra lỗi trong quá trình đăng ký.');
                    });
            }


        },

        HocVienDangKy() {
            this.errorMessageHocVien = '';
            if (this.create_hoc_vien.password !== this.confirmPasswordHocVien) {
                this.errorMessageHocVien = 'Mật khẩu không khớp! Vui lòng kiểm tra lại !';
                return;
            }else{
                baseRequest.post('hoc-vien/dang-ky', this.create_hoc_vien)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                    } else {
                        this.$toast.error('Đăng ký thất bại.');
                    }
                })
                .catch(() => {
                    this.$toast.error('Đã xảy ra lỗi trong quá trình đăng ký.');
                });
            }

            
        }
    }
}
</script>

<style></style>