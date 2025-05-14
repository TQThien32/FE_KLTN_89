<template>
    <div class="container mt-1">
        <div class="row mt-3">
            <!-- Avatar -->
            <div class="col-lg-4">
                <div class="card" >
                    <div class="card-body text-center">
                        <img src="../../../assets/images/avatars/avatar-2.png" alt="Avatar"
                            class="rounded-circle p-1 bg-gradient-scooter" width="150">
                        <div class="mt-3">
                            <h4>{{ profile.ten_to_chuc }}</h4>
                            <p class="text-secondary">Tổ Chức</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thông Tin -->
            <div class="col-lg-8">
                <div class="card" >
                    <div class="card-header bg-gradient-scooter">
                  <h4 class="text-white mt-2 text-center">Thông Tin Tổ Chức</h4>
                </div>
                    <div class="card-body">
                        
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Tên Tổ Chức</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.ten_to_chuc }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.email }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Hotline</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.hotline }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Địa Chỉ</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.dia_chi }}</div>
                        </div>
                        
                        <div class="row mb-3">
                            <col-lg-6></col-lg-6>
                            <col-lg-6>
                                <p class="text-center "><b>
                                        <h4 class="mt-2">Người Đại Diện</h4>
                                    </b></p>
                            </col-lg-6>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Họ Và Tên</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.ho_ten_nguoi_dai_dien
                            }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Số Điện Thoại</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.sdt_nguoi_dai_dien }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Số CCCD</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.so_cccd }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="form-control bg-white">{{ profile.email_nguoi_dai_dien
                            }}</div>
                        </div>

                        <!-- Button trigger modal -->
                        <div class="row">
                            <div class="col-auto ms-auto">
                                <button v-on:click="Object.assign(update_profile, profile)" type="button"
                                    class="btn  btn-inverse-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                                    Cập Nhật
                                </button>
                            </div>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header bg-gradient-scooter">
                                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Cập Nhật Thông Tin</h1>
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
                                                <input v-model="update_profile.ten_to_chuc" type="text"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="update_profile.email" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Hotline</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="update_profile.hotline" type="text"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Địa Chỉ</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="update_profile.dia_chi" type="text"
                                                    class="form-control">
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
                                                <input v-model="update_profile.ho_ten_nguoi_dai_dien" type="text"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Số Điện Thoại</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="update_profile.sdt_nguoi_dai_dien" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Số CCCD</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="update_profile.so_cccd" type="text"
                                                    class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                <input v-model="update_profile.email_nguoi_dai_dien" type="text"
                                                    class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-inverse-dark"
                                            data-bs-dismiss="modal">Đóng</button>
                                        <button v-on:click="updateProfile()" data-bs-dismiss="modal" type="button" class="btn btn-phu">Xác Nhận</button>
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
import baseRequest from '../../../core/baseRequest'

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
                .get('to-chuc/profile')
                .then((res) => {
                    this.profile = res.data.data
                })
        },
        updateProfile() {
            baseRequest
                .post('to-chuc/update-profile', this.update_profile)
                .then((res) => {
                    if(res.data.status){
                        this.$toast.success(res.data.message);
                        this.getProfile();
                    }else{
                        this.$toast.error(res.data.message);
                    }
                })
        }
    }
}
</script>
<style></style>