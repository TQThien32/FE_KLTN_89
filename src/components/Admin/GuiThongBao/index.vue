<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-center">
            <h4>Gửi Thông Báo</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleSendNotification">
              <!-- Loại Gửi -->
              <div class="mb-3">
                <label for="sendType" class="form-label">Loại Gửi</label>
                <select id="sendType" v-model="sendType" class="form-select" required>
                  <option value="0">Gửi Tất Cả</option>
                  <option value="1">Gửi Tổ Chức Cấp Chứng Chỉ</option>
                  <option value="2">Gửi Cơ Quan Xác Thực</option>
                  <option value="3">Gửi Học Viên</option>
                  <option value="4">Gửi Cụ Thể</option>
                </select>
              </div>
              <!-- Nhập Email Người Nhận -->
              <div v-show="sendType === '4'" class="mb-3">
                <label for="recipient" class="form-label">Nhập Email Người Nhận</label>
                <input type="email" id="recipient" v-model="recipient" class="form-control"
                  placeholder="Nhập email người nhận" :required="sendType === '4'" ref="recipientInput" />
              </div>
              <!-- Tiêu Đề -->
              <div class="mb-3">
                <label for="title" class="form-label">Tiêu Đề</label>
                <input type="text" id="title" v-model="title" class="form-control" placeholder="Nhập tiêu đề thông báo"
                  required />
              </div>
              <!-- Nội Dung -->
              <div class="mb-3">
                <label for="message" class="form-label">Nội Dung</label>
                <textarea id="message" v-model="message" class="form-control" rows="5"
                  placeholder="Nhập nội dung thông báo" required></textarea>
              </div>

              <!-- Nút Gửi -->
              <button type="submit" class="btn btn-primary w-100">Gửi Thông Báo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>