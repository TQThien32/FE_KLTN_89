<template>
    <div class="container mt-1">
        <div class="row mt-3">
            <!-- Avatar -->
            <div class="col-lg-4">
                <div class="card" style="box-shadow: none;">
                    <div class="card-body text-center">
                        <img src="../../../assets/images/avatars/avatar-1.png" alt="Avatar"
                            class="rounded-circle p-1 bg-primary" width="110">
                        <div class="mt-3">
                            <p class="text-secondary mb-1">Chức Vụ: {{ profile.ten_chuc_vu }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thông Tin -->
            <div class="col-lg-8">
                <div class="card" style="box-shadow: none;">
                    <div class="card-header bg-gradient-scooter">
                        <h4 class="text-white mt-2 text-center">{{ profile.ten_chuc_vu }}</h4>
                    </div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Họ Và Tên</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{ profile.ho_ten }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Chức Vụ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{ profile.ten_chuc_vu }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Số Điện Thoại</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{ profile.sdt }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Số CCCD</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{ profile.so_cccd }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{ profile.email }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Giới Tính</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">
                                    <span v-if="profile.gioi_tinh == 0">Nam</span>
                                    <span v-else-if="profile.gioi_tinh == 1">Nữ</span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Ngày Sinh</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{profile.ngay_sinh }}</div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Địa Chỉ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <div class="form-control bg-white">{{profile.dia_chi }}</div>
                            </div>
                        </div>
                        <!-- Button trigger modal -->
                        <div class="row">
                            <div class="col-auto ms-auto">
                                <button type="button" class="btn btn btn-inverse-primary" data-bs-toggle="modal"
                                    data-bs-target="#updateModal">
                                    Cập Nhật
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Thông Tin</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row mb-3">
                                            <col-lg-6></col-lg-6>
                                            <col-lg-6>
                                                <p class="text-center"><b>
                                                        <h5 class="mb-0">Tổ Chức Cấp Chứng Chỉ</h5>
                                                    </b></p>
                                            </col-lg-6>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Tên Tổ Chức Cấp Chứng Chỉ</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Hotline</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Địa Chỉ</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row mb-3">
                                            <col-lg-6></col-lg-6>
                                            <col-lg-6>
                                                <p class="text-center"><b>
                                                        <h5 class="mb-0">Người Đại Diện</h5>
                                                    </b></p>
                                            </col-lg-6>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Họ Và Tên</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Số Điện Thoại</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Số CCCD</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button type="button" class="btn btn-primary">Xác Nhận</button>
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
            profile: {},
            update_profile: {}
        }
    },
    mounted() {
        this.getProfile();

    },
    methods: {
        getProfile() {
            baseRequest
                .get('admin/profile')
                .then((res) => {
                    this.profile = res.data.data
                })
        },
        updateProfile() {
            baseRequest
                .post('admin/update-profile', this.update_profile)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.getProfile();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
        }
    }
}
</script>
<style></style>