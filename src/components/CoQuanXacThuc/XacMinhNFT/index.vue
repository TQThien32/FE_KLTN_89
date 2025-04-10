<template>
  <div class="card radius-10 border border-3 border-info">
    <div class="card-body">
      <h2 class="text-center">Các NFT Được Gửi Đến</h2>
      <hr>
      <table class="table table-bordered table-hover border">
        <thead>
          <tr>
            <th colspan="5">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Tìm theo số CCCD" aria-label="Recipient's username"
                  aria-describedby="button-addon2" style="border: 1px solid #3399FF;">
                <button class="btn btn-outline-info" type="button" id="button-addon2">Tìm
                  Kiếm</button>
              </div>
            </th>
          </tr>
          <tr class="text-center">
            <th>#</th>
            <th>Tên Học Viên</th>
            <th>Số CCCD</th>
            <th>ID NFT</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-center align-middle">1</th>
            <td class=" align-middle">trantuan</td>
            <td class="text-end align-middle">1234567</td>
            <td class="text-end align-middle">213456</td>
            <td class="text-center">
              <button class="btn btn-success me-3">Xác Minh</button>
              <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#xoa">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal xóa-->
  <div class="modal fade" id="xoa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Xác nhận xóa</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-danger" role="alert">
            Có chắc muốn xóa ...?
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
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