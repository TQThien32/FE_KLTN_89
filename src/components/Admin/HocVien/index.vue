<template>
   <div class="d-flex justify-content-start text-light">
      <i class="fa-solid fa-list me-2" style="font-size: 35px;"></i>
      <b>
         <h2 class="text-light">QUẢN LÝ TÀI KHOẢN - HỌC VIÊN</h2>
      </b>
   </div>
      <div class="col-lg-12 mt-2">
         <div class="card table-responsive">
            <div class="card-header">
               <h4 class="mt-2">Danh Sách Tài Khoản</h4>
            </div>
            <div class="card-body table-responsive">
               <div class="row">
                  <div class="col-lg-11">
                     <input class="form-control" type="text" placeholder="n...">
                  </div>
                  <div class="col-lg-1">
                     <button class="btn btn-chinh"><i class="fa-solid fa-magnifying-glass"></i>Tìm Kiếm</button>
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
                        <th class="align-middle text-center">Chức Vụ</th>
                        <th class="align-middle text-center">Avatar</th>
                        <th class="align-middle text-center">Trạng Thái</th>
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
                        <td class="align-middle text-center">Học Viên</td>
                        <td class="align-middle text-center">
                           <img src="https://cdn-icons-png.freepik.com/256/818/818100.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid" 
                           alt="" style="width: 50px; height: 50px; border-radius: 50%;">
                        </td>
                        <td class="align-middle text-center">
                           <button class="btn btn-success">Hoạt động</button>
                        </td>
                     </tr>

                   
                  </tbody>

               </table>
            </div>
         </div>
      </div>

</template>
<script>
export default {

}
</script>
<style></style>