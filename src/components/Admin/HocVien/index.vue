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
            <h4 class="mt-2 text-light">Danh Sách Tài Khoản</h4>
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
import axios from 'axios';

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
         axios
            .get('http://127.0.0.1:8000/api/hoc-vien/data')
            .then((res) => {
               this.list_hoc_vien = res.data.data;
            });

      }
   }
}
</script>
<style scope>
.form-check-input {
   width: 1.2rem;
   height: 1.2rem;
}

.card {
   border: 2px solid transparent;
   color: rgb(233, 234, 235);
   transition: transform 0.2s ease, box-shadow 0.2s ease;
   background-color: black;
   transform: scale(1.03);
   box-shadow: -2px 0 0 0 #2d3375, 2px 0 0 0 #2d3375, 0 -2px 0 0 #2d3375, 0 2px 0 0 #2d3375;
}

table {
   color: #fcf6f6 !important;
}

table tbody tr:hover {
   background: #fbfcfd;
   color: #50507f !important;
}
</style>