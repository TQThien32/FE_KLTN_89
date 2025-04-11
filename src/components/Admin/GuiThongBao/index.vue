<template>
  <div class="row justify-content-center">
    <div class="row">
      <div class="col-md-8 col-lg-6">
      <div class="card">
        <div class="card-header text-center">
          <h4 class="mt-2">Gửi Thông Báo <i class="fa-regular fa-bell"></i></h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="sendType" class="form-label">Gửi Đến</label>
            <select id="sendType" v-model="sendType" class="form-select" required>
              <option value="0">Tất Cả</option>
              <option value="1">Tổ Chức Cấp Chứng Chỉ</option>
              <option value="2">Cơ Quan Xác Thực</option>
              <option value="3">Học Viên</option>
              <option value="4">Tất cả</option>
            </select>
          </div>
          <div v-show="sendType === '4'" class="mb-3">
            <label for="recipient" class="form-label">Nhập Email Người Nhận</label>
            <input type="email" id="recipient" class="form-control" placeholder="Nhập email người nhận"
              :required="sendType === '4'" ref="recipientInput" />
          </div>
          <div class="mb-3">
            <label for="title" class="form-label">Tiêu Đề</label>
            <input type="text" id="title" class="form-control" placeholder="Nhập tiêu đề thông báo" required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Nội Dung</label>
            <textarea id="message" class="form-control" rows="5" placeholder="Nhập nội dung thông báo"
              required></textarea>
          </div>
          <div class="d-flex justify-content-end"><button type="button" class="btn btn-danger px-5 radius-30 me-2">Hủy <i
                class="fa-solid fa-trash-can ms-2"></i></button>
            <button type="button" class="btn btn-primary px-5 radius-30">Gửi<i
                class="fa-solid fa-share-from-square ms-2 "></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card">
        <div class="card-header">
          <h4 class="mt-2">Danh Sách Thông Báo</h4>
        </div>
        <div class="card-body">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th class="align-middle text-center">STT</th>
                <th class="align-middle text-center">Người Nhận</th>
                <th class="align-middle text-center">Tiêu Đề</th>
                <th class="align-middle text-center">Nội Dung</th>
                <th class="align-middle text-center">Thời Gian Gửi</th>
                <th class="align-middle text-center">Trạng Thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="align-middle text-center">1</td>
                <td class="align-middle text-center">Học Viên</td>
                <td class="align-middle text-center">abc</td>
                <td class="align-middle text-center">
                  <span class="badge bg-secondary">Xem chi tiết</span>
                </td>
                <td class="align-middle text-center">1/1/2025</td>
                <td class="align-middle text-center">
                  <span class="badge bg-success">Đã Gửi</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style></style>