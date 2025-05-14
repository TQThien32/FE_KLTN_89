<template>
  <div class="container">
    <div class="main-body">

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Tab: Thông Tin Cá Nhân -->
        <div class="tab-pane fade show active" id="profile" role="tabpanel">
          <div class="row mt-3">
            <!-- Avatar -->
            <div class="col-lg-4">
              <div class="card " style="box-shadow: none;">
                <div class="card-body text-center">
                  <img :src="selectedImage" alt="Selected" v-if="selectedImage"
                    class="rounded-circle p-1 bg-gradient-scooter" width="150">
                  <div class="mt-3">
                    <h3>{{ profile.ho_ten }}</h3>
                    <p class="text-secondary">Người Dùng</p>
                  
                      <button class="btn btn-inverse-info" data-bs-toggle="modal" data-bs-target="#imageModal">Chọn
                        ảnh</button>
                    
                  </div>
                </div>
              </div>
            </div>
            <!-- ĐỔi AVATAR -->
            <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="imageModalLabel">Chọn ảnh</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row g-2">
                      <div v-for="image in images" :key="image" class="col-4">
                        <img :src="image" alt="Option" @click="selectImage(image)"
                          class="img-fluid rounded cursor-pointer" />
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
                  <h4 class="text-white mt-2 text-center">Thông Tin Người Dùng</h4>
                </div>
                <div class="card-body">
                  <div class="row mb-3 mt-2">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Họ Và Tên</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div class="form-control bg-white">{{ profile.ho_ten }}</div>
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
                      <h6 class="mb-0">Số Điện Thoại</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div class="form-control bg-white">{{ profile.sdt }}</div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Ngày Sinh</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div class="form-control bg-white">{{ profile.ngay_sinh }}</div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Giới Tính</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div class="form-control bg-white">{{ profile.gioi_tinh }}</div>
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
                      <h6 class="mb-0">Địa Chỉ</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div class="form-control bg-white">{{ profile.dia_chi }}</div>
                    </div>
                  </div>
                  <!-- Nút Cập Nhật -->
                  <div class="row">
                    <div class="col-auto ms-auto">
                      <button v-on:click="Object.assign(update_profile, profile)" type="button"
                        class="btn btn btn-inverse-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                        Cập Nhật
                      </button>
                    </div>
                  </div>

                  <!-- Modal: Cập Nhật -->
                  <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header bg-gradient-scooter">
                          <h5 class="modal-title text-light" id="updateModalLabel">Cập Nhật Thông Tin</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <!-- Form cập nhật thông tin -->
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Họ Và Tên</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input v-model="update_profile.ho_ten" type="text" class="form-control">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input v-model="update_profile.email" type="email" class="form-control">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Số Điện Thoại</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input v-model="update_profile.sdt" type="text" class="form-control">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Ngày Sinh</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input v-model="update_profile.ngay_sinh" type="date" class="form-control">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Giới Tính</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <select v-model="update_profile.gioi_tinh" class="form-select">
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Số CCCD</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input v-model="update_profile.so_cccd" type="text" class="form-control">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Địa Chỉ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input v-model="update_profile.dia_chi" type="text" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-inverse-dark" data-bs-dismiss="modal">Đóng</button>
                          <button v-on:click="updateProfile()" data-bs-dismiss="modal" type="button"
                            class="btn btn-inverse-info">Xác Nhận</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Modal -->
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- End Tab Content -->
    </div>
  </div>
</template>

<script>
import baseRequest from '../../../core/baseRequest';

export default {
  data() {
    return {
      profile: {},
      update_profile: {},
      selectedImage: null,
      images: [
      
        'https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-nam-cute-2.jpg',
        'https://jbagy.me/wp-content/uploads/2025/03/Hinh-anh-avatar-nam-cute-2.jpg',

      ]
    }
  },
  mounted() {
    this.getProfile();

  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
      const modal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
      modal.hide();
    },
    getProfile() {
      baseRequest
        .get('hoc-vien/profile')
        .then((res) => {
          this.profile = res.data.data
        })
    },
    updateProfile() {
      baseRequest
        .post('hoc-vien/update-profile', this.update_profile)
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
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.modal-body img { transition: transform 0.2s; }
.modal-body img:hover { transform: scale(1.05); }
</style>