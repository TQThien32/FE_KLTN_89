<template>
   <div class="d-flex justify-content-start">
      <i class="fa-solid fa-list me-2" style="font-size: 35px;"></i>
      <b>
         <h2>QUẢN LÝ TÀI KHOẢN - HỌC VIÊN</h2>
      </b>
   </div>
   <input type="text" class="form-control mb-2" placeholder="Tìm kiếm ...">
   <div class="d-flex justify-content-start">
      <button class="btn btn-primary me-2"><i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i
            class="fa-solid fa-plus"></i>Thêm mới</button>
   </div>

   <!-- modal thêm mới -->
   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm Mới Tài Khoản</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
               <label>Tên Học Viên</label>
               <input class="form-control mb-2" type="text">
               <label>Email</label>
               <input class="form-control mb-2" type="email">
               <label>Ngày Sinh</label>
               <input class="form-control mb-2" type="date">
               <label>Giới Tính</label>
               <select class="form-control" id="inputGioiTinh">
                  <option value="">...</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
               </select>
               <label>Số Điện Thoại</label>
               <input class="form-control mb-2" type="tel">
               <label>Số Căn Cước Công Dân</label>
               <input class="form-control mb-2" type="text">
               <label>Địa Chỉ</label>
               <input class="form-control mb-2" type="text">
               <label>Mật Khẩu</label>
               <div class="input-group" id="show_hide_password">
                  <input type="password" class="form-control border-end-0" id="inputChoosePassword"
                     placeholder="Nhập lại mật khẩu"> <a href="javascript:;" class="input-group-text bg-transparent"><i
                        class="bx bx-hide"></i></a>
               </div>
               <label class="mt-2">Nhập Lại Mật Khẩu</label>
               <div class="input-group" id="show_hide_password">
                  <input type="password" class="form-control border-end-0" id="inputChoosePassword"
                     placeholder="Nhập lại mật khẩu"> <a href="javascript:;" class="input-group-text bg-transparent"><i
                        class="bx bx-hide"></i></a>
               </div>

            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
               <button type="button" class="btn btn-primary">Thêm Mới</button>
            </div>
         </div>
      </div>
   </div>
   <table class="table table-hover table-bordered mt-3">
      <thead>
         <tr>
            <th class="align-middle text-center">STT</th>
            <th class="align-middle text-center">Họ và tên</th>
            <th class="align-middle text-center">Email</th>
            <th class="align-middle text-center">Số Điện Thoại</th>
            <th class="align-middle text-center">Số Căn Cước Công Dân</th>
            <th class="align-middle text-center">Địa Chỉ</th>
            <th class="align-middle text-center">Trạng Thái</th>
            <th class="align-middle text-center">Chức Vụ</th>
            <th class="align-middle text-center">Thao Tác</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th class="align-middle text-center">1</th>
            <td class="align-middle text-center">Nguyễn Văn A</td>
            <td class="align-middle text-center">nguyenvana@gmail.com</td>
            <td class="align-middle text-center">0123456789</td>
            <td class="align-middle text-center">12345678901</td>
            <td class="align-middle text-center">123 Dũng Sĩ Thanh Khê</td>
            <td class="align-middle text-center">
               <button class="btn btn-success">Hoạt động</button>
            </td>
            <td class="align-middle text-center">Học Viên</td>
            <td class="align-middle text-center">
               <button class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#sua">Sửa</button>
               <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoa">Xóa</button>
            </td>
         </tr>

         <!-- modal sửa -->
         <div class="modal fade" id="sua" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="staticBackdropLabel">Sửa Tài Khoản</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <div class="row">
                        <div class="col-lg-6">
                           <label>Tên Học Viên</label>
                           <input class="form-control mb-2" type="text">
                        </div>
                        <div class="col-lg-6">
                           <label>Tên Học Viên</label>
                           <input class="form-control mb-2" type="text">
                        </div>
                        <div class="col-lg-12">
                           <label>Email</label>
                           <input class="form-control mb-2" type="email">
                        </div>
                        <div class="col-lg-6">
                           <label>Ngày Sinh</label>
                           <input class="form-control mb-2" type="date">
                        </div>
                        <div class="col-lg-6">
                           <label>Giới Tính</label>
                           <select class="form-control" id="inputGioiTinh">
                              <option value="">...</option>
                              <option value="male">Nam</option>
                              <option value="female">Nữ</option>
                              <option value="other">Khác</option>
                           </select>
                        </div>
                     </div>
                     <label>Số Điện Thoại</label>
                     <input class="form-control mb-2" type="tel">
                     <label>Số Căn Cước Công Dân</label>
                     <input class="form-control mb-2" type="text">
                     <label>Địa Chỉ</label>
                     <input class="form-control mb-2" type="text">
                     <label>Mật Khẩu</label>
                     <div class="input-group" id="show_hide_password">
                        <input type="password" class="form-control border-end-0" id="inputChoosePassword"
                           placeholder="Nhập lại mật khẩu"> <a href="javascript:;"
                           class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
                     </div>
                     <label class="mt-2">Nhập Lại Mật Khẩu</label>
                     <div class="input-group" id="show_hide_password">
                        <input type="password" class="form-control border-end-0" id="inputChoosePassword"
                           placeholder="Nhập lại mật khẩu"> <a href="javascript:;"
                           class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>
                     </div>

                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                     <button type="button" class="btn btn-primary">Cập Nhật</button>
                  </div>
               </div>
            </div>
         </div>

         <!-- modal xóa -->
         <div class="modal fade" id="xoa" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa Tài Khoản</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <div class="alert alert-danger" role="alert">
                        <div class="d-flex justify-content-start ">
                           <i class="fa-solid fa-square-xmark me-4 mt-3" style="font-size: 40px;"></i>
                           <div class="text-danger me-3">
                              <h5><b> Bạn có chắc chắn muốn xóa tài khoản này?</b></h5>
                              <h6><b>Lưu ý:</b>Điều này không thể hoàn tác!</h6>
                           </div>
                           <i class="fa-solid fa-xmark me-4 mt-4" style="font-size: 25px;"></i>
                        </div>
                     </div>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                     <button type="button" class="btn btn-danger">Xóa</button>
                  </div>
               </div>
            </div>
         </div>

      </tbody>
   </table>
</template>
<script>
export default {

}
</script>
<style></style>