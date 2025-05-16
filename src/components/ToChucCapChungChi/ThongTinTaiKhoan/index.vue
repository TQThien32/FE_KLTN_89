<template>
    <div class="container mt-1">
        <div class="row mt-3">
            <!-- Avatar -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body text-center">
                        <img :src="profile.hinh_anh || defaultImage" alt="Selected Image" v-if="profile.hinh_anh"
                            class="rounded-circle p-1 bg-gradient-scooter" width="150" />
                        <div class="mt-3">
                            <h4>{{ profile.ten_to_chuc }}</h4>
                            <p class="text-secondary">Tổ Chức</p>
                            <button class="btn btn-inverse-info " data-bs-toggle="modal"
                                data-bs-target="#imageModal">Chọn
                                ảnh</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0 rounded-3 shadow-lg">
                        <div class="modal-header bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                            <h5 class="modal-title" id="imageModalLabel">Chọn ảnh</h5>
                            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row g-2">
                                <div v-for="image in images" :key="image" class="col-4">
                                    <img :src="image" alt="Option" @click="selectImage(image)"
                                        class="img-fluid rounded-lg cursor-pointer border border-light shadow-sm hover:shadow-lg transition-all duration-200" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Thông Tin -->
            <div class="col-lg-8">
                <div class="card">
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
                                    class="btn  btn-inverse-primary" data-bs-toggle="modal"
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
                                    <div class="modal-header bg-gradient-scooter">
                                        <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">Cập Nhật Thông
                                            Tin</h1>
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
                                                <input v-model="update_profile.sdt_nguoi_dai_dien" type="text"
                                                    class="form-control">
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
                                        <button v-on:click="updateProfile()" data-bs-dismiss="modal" type="button"
                                            class="btn btn-phu">Xác Nhận</button>
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
            update_profile: {},

            defaultImage: 'https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-nam-cute-2.jpg',
            images: [

                'https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-nam-cute-2.jpg',
                'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-anh-avatar-ca-tinh-nu-24.png',

            ]
        }
    },
    mounted() {
        this.getProfile();

    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
            baseRequest.post('to-chuc/chon-avt', { hinh_anh: image })
                .then((response) => {
                    if (response.data.status) {
                        this.getProfile();
                        this.reloadPage()

                    }
                })
                .catch((error) => console.error('Lỗi khi cập nhật hình ảnh:', error));
        },
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
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.getProfile();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
        },
        reloadPage() {
            window.location.reload();
        }
    }
}
</script>
<style scoped>
.modal-body img {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

.modal-body img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
</style>