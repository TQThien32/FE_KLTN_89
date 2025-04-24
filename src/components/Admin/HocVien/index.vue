<template>
   <div class="d-flex justify-content-start text-light">
      <i class="fa-solid fa-list me-2" style="font-size: 35px;"></i>
      <b>
         <h2 class="text-light">QUẢN LÝ TÀI KHOẢN - HỌC VIÊN</h2>
      </b>
   </div>
   <div class="col-lg-12 mt-2">
      <div class="card table-responsive" style="box-shadow: none;">
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
            <table class="table table-hover mt-3">
               <thead>
                  <tr>
                     <th class="align-middle text-center">STT</th>
                     <th class="align-middle text-center">Họ Và Tên</th>
                     <th class="align-middle text-center">Email</th>
                     <th class="align-middle text-center">Số Điện Thoại</th>
                     <th class="align-middle text-center">Số CCCD</th>
                     <th class="align-middle text-center">Giới Tính</th>
                     <th class="align-middle text-center">Địa Chỉ</th>
                     <th class="align-middle text-center">Avatar</th>
                     <th class="align-middle text-center">Trạng Thái</th>
                     <th class="align-middle text-center">Khác</th>
                  </tr>
               </thead>
               <tbody>
                  <template v-for="(value, index) in list_hoc_vien" :key="index">
                     <tr>
                        <th class="align-middle text-center">{{ index + 1 }}</th>
                        <td class="align-middle text-center">{{ value.ho_ten }}</td>
                        <td class="align-middle text-center">{{ value.email }}</td>
                        <td class="align-middle text-center">{{ value.sdt }}</td>
                        <td class="align-middle text-center">{{ value.so_cccd }}</td>
                        <td class="align-middle text-center">{{ value.gioi_tinh }}</td>
                        <td class="align-middle text-center">{{ value.dia_chi }}</td>
                        <td class="align-middle text-center">
                           <img v-bind:src="value.hinh_anh" alt=""
                              style="width: 50px; height: 50px; border-radius: 50%;">
                        </td>
                        <td class="align-middle text-center">
                           <button v-if="value.tinh_trang == 1" class="btn btn-success">Hoạt động</button>
                           <button v-else class="btn btn-success">Tạm Dừng</button>
                        </td>
                        <td class="align-middle text-center">
                           <button class="btn btn-chinh">Gửi thông báo</button>
                        </td>
                     </tr>
                  </template>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';

export default {
   data() {
      return {
         list_hoc_vien: [],
      }
   },
   mounted() {
      this.loadData();
   },
   methods: {
      loadData() {
         baseRequest
            .get('hoc-vien/data')
            .then((res) => {
               this.list_hoc_vien = res.data.data;
            });

      }
   }
}
</script>
<style>
</style>