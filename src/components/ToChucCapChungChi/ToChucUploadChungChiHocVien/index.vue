<template>
   <div class="d-flex justify-content-start text-light">
      <i class="fa-solid fa-list me-2" style="font-size: 35px;"></i>
      <b>
         <h2 class="text-light">DỮ LIỆU CHỨNG CHỈ HỌC VIÊN</h2>
      </b>
   </div>
   <div class="col-lg-12 mt-2">
      <div class="card table-responsive">
         <div class="card-header">
            <h4 class="mt-2">Danh Sách Chứng Chỉ</h4>
         </div>
         <div class="card-body table-responsive">
            <div class="row">
               <div class="col-lg-3"></div>
               <div class="col-lg-3">
                  <div class="row">
                     <div class="col-lg-12">
                        <form>
                           <input type="file" multiple webkitdirectory @change="onFolderSelect" />
                        </form>
                     </div>
                     <div class="col-lg-12 mt-3">
                        <button style="width: 250px;" @click="uploadFolderImage" class="btn btn-chinh me-2">
                           <span v-if="loadingFolder">Đang tải...</span>
                           <span v-else>Upload Hình Ảnh Chứng Chỉ</span>
                        </button>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="row">
                     <div class="col-lg-12">
                        <form class="ff_fileupload_hidden" enctype="multipart/form-data">
                           <input type="file" @change="handleFileSelection"
                              accept=".xls, .xlsx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                        </form>
                     </div>
                     <div class="col-lg-12 mt-3"><button style="width: 250px;" class="btn btn-chinh me-2"
                           @click="uploadFile">
                           <span v-if="loadingFile">Đang tải...</span>
                           <span v-else>Upload Thông Tin Chứng Chỉ</span>
                        </button></div>
                  </div>
               </div>
               <div class="col-lg-5">

               </div>

               <div class="col-lg-5">

               </div>
            </div>
            <table class="table table-hover table-bordered mt-3">
               <thead>
                  <tr>
                     <th>STT</th>
                     <th>Họ và Tên</th>
                     <th>Email</th>
                     <th>Số Điện Thoại</th>
                     <th>Số CCCD</th>
                     <th>Số Hiệu Chứng Chỉ</th>
                     <th>Khóa Học</th>
                     <th>Trình Độ</th>
                     <th>Ngày Cấp</th>
                     <th>Kết Quả</th>
                     <th>Hình Ảnh</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(value, index) in dataList" :key="index">
                     <th class="text-center align-middle">{{ index + 1 }}</th>
                     <td class="align-middle">{{ value.ho_ten }}</td>
                     <td class="align-middle">{{ value.email }}</td>
                     <td class="text-center align-middle">{{ value.sdt }}</td>
                     <td class="text-center align-middle">{{ value.so_cccd }}</td>
                     <td class="text-center align-middle">{{ value.so_hieu_chung_chi }}</td>
                     <td class="align-middle">{{ value.khoa_hoc }}</td>
                     <td class="align-middle">{{ value.trinh_do }}</td>
                     <td class="text-center align-middle">{{ value.ngay_cap }}</td>
                     <td class="text-center align-middle">{{ value.ket_qua }}</td>
                     <td class="text-center align-middle">
                        <img v-bind:src="`http://localhost:8000/storage/uploads/images/${value.hinh_anh}`" alt="Hình ảnh"
                           style="width: 50px; height: 50px; border-radius: 50%;">
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import baseRequest from '../../../core/baseRequest';

export default {
   data() {
      return {
         selectedFile: null,
         files: [],
         loadingFile: false,
         loadingFolder: false,
         dataList: []
      };
   },
   methods: {
      handleFileSelection(event) {
         this.selectedFile = event.target.files[0];
      },
      async uploadFile() {
         if (!this.selectedFile) {
            this.$toast.error("Chọn File Excel")
            return;
         }

         this.loadingFile = true;
         let formData = new FormData();
         formData.append("file", this.selectedFile);

         try {
            await baseRequest.post("import-excel", formData);
            this.$toast.success("Tải Lên Thành Công")
            this.fetchData();
         } catch (error) {
            this.$toast.error("Có Lỗi Xảy Ra")
         } finally {
            this.loadingFile = false;
         }
      },
      onFolderSelect(event) {
         this.files = Array.from(event.target.files);
      },
      async uploadFolderImage() {
         if (!this.files.length) {
            this.$toast.error("Chọn Folder")
            return;
         }

         this.loadingFolder = true;
         const formData = new FormData();
         this.files.forEach(file => {
            formData.append("images[]", file, file.webkitRelativePath);
         });

         try {
            await baseRequest.post("upload-folder", formData);
            this.fetchData()
            this.$toast.success("Tải Lên Thành Công")
            
         } catch (error) {
            this.$toast.error("Có Lỗi Xảy Ra")
         } finally {
            this.loadingFolder = false;
         }
      },
      async fetchData() {
         try {
            let response = await baseRequest.get("get-data");
            this.dataList = response.data.data;
         } catch (error) {
            this.$toast.error("Có Lỗi Xảy Ra")
         }
      }
   },
   mounted() {
      this.fetchData();
   }
};
</script>
