<template>
  <div class="container">
    <div class="main-body">
      <!-- Tabs -->
      <ul class="nav nav-tabs nav-primary" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" data-bs-toggle="tab" href="#profile" role="tab" aria-selected="true">
            <div class="d-flex align-items-center">
              <div class="tab-icon"><i class="fa-solid fa-user font-18 me-1"></i></div>
              <div class="tab-title">Thông Tin Cơ Quan</div>
            </div>
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" data-bs-toggle="tab" href="#change-password" role="tab" aria-selected="false">
            <div class="d-flex align-items-center">
              <div class="tab-icon"><i class="fa-solid fa-lock font-18 me-1"></i></div>
              <div class="tab-title">Đổi Mật Khẩu</div>
            </div>
          </a>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Tab: Thông Tin Cá Nhân -->
        <div class="tab-pane fade show active" id="profile" role="tabpanel">
          <div class="row mt-3">
            <!-- Avatar -->
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body text-center">
                  <img src="assets/images/avatars/avatar-2.png" alt="Avatar" class="rounded-circle p-1 bg-primary"
                    width="110">
                  <div class="mt-3">
                    <h4>John Doe</h4>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Thông Tin -->
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <div class="row mb-3">
                    <col-lg-6></col-lg-6>
                    <col-lg-6>
                      <p class="text-center"><b>
                          <h5 class="mb-0">Cơ Quan Xác Thực</h5>
                        </b></p>
                    </col-lg-6>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Tên Cơ Quan</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="John Doe">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="john@example.com">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Hotline</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="(239) 816-9029">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Địa Chỉ</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="(320) 380-4539">
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
                      <input type="text" class="form-control" value="(320) 380-4539">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Số Điện Thoại</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Số CCCD</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="(320) 380-4539">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
                    </div>
                  </div>

                  <!-- Button trigger modal -->
                  <div class="row">
                    <div class="col-auto ms-auto">
                      <button type="button" class="btn btn btn-chinh" data-bs-toggle="modal"
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
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="row mb-3">
                            <col-lg-6></col-lg-6>
                            <col-lg-6>
                              <p class="text-center"><b>
                                  <h5 class="mb-0">Cơ Quan Xác Thực</h5>
                                </b></p>
                            </col-lg-6>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Tên Cơ Quan</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="John Doe">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="john@example.com">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Hotline</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="(239) 816-9029">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Địa Chỉ</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="(320) 380-4539">
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
                              <input type="text" class="form-control" value="(320) 380-4539">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Số Điện Thoại</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Số CCCD</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="(320) 380-4539">
                            </div>
                          </div>
                          <div class="row mb-3">
                            <div class="col-sm-3">
                              <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                              <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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

        <!-- Tab: Đổi Mật Khẩu -->
        <div class="tab-pane fade" id="change-password" role="tabpanel">
          <div class="row mt-3">
            <div class="col-lg">
              <div class="card">
                <div class="card-body">

                  <form>
                    <div class="mb-3">
                      <label for="currentPassword" class="form-label"><b>Mật Khẩu Hiện Tại</b></label>
                      <input type="password" class="form-control" id="currentPassword"
                        placeholder="Nhập mật khẩu hiện tại">
                    </div>
                    <div class="mb-3">
                      <label for="newPassword" class="form-label"><b>Mật Khẩu Mới</b></label>
                      <input type="password" class="form-control" id="newPassword" placeholder="Nhập mật khẩu mới">
                    </div>
                    <div class="mb-3">
                      <label for="confirmPassword" class="form-label"><b>Xác Nhận Mật Khẩu</b></label>
                      <input type="password" class="form-control" id="confirmPassword"
                        placeholder="Xác nhận mật khẩu mới">
                    </div>
                    <div class="text-center"><button type="submit" class="btn btn btn-chinh">Đổi Mật Khẩu</button></div>
                  </form>
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
export default {};
</script>

<style>
.container {
  margin-top: 20px;
}
</style>