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
               <div class="col-lg-5">
                  <form>
                     <input type="file" multiple webkitdirectory @change="onFolderSelect" />
                  </form>
               </div>
               <div class="col-lg-5">
                  <button @click="uploadFolderImage" class="btn btn-chinh me-2">
                     <span v-if="loadingFolder">Đang tải...</span>
                     <span v-else>Up Folder Images</span>
                  </button>
               </div>
               <div class="col-lg-5">
                  <form class="ff_fileupload_hidden" enctype="multipart/form-data">
                     <input type="file" @change="handleFileSelection"
                        accept=".xls, .xlsx, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                  </form>
               </div>
               <div class="col-lg-5">
                  <button class="btn btn-chinh me-2" @click="uploadFile" :disabled="!selectedFile">
                     <span v-if="loadingFile">Đang tải...</span>
                     <span v-else>Up File Excel</span>
                  </button>
               </div>
            </div>
            <table class="table table-hover table-bordered mt-3">
               <thead>
                  <tr>
                     <th>STT</th>
                     <th>Họ và tên</th>
                     <th>Email</th>
                     <th>Số Điện Thoại</th>
                     <th>Số CCCD</th>
                     <th>Địa Chỉ</th>
                     <th>Số Hiệu Chứng Chỉ</th>
                     <th>Khóa Học</th>
                     <th>Trình Độ</th>
                     <th>Ngày Cấp</th>
                     <th>Kết Quả</th>
                     <th>Hình Ảnh</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(item, index) in dataList" :key="item.id">
                     <th>{{ index + 1 }}</th>
                     <td>{{ item.ten_hoc_vien }}</td>
                     <td>{{ item.email }}</td>
                     <td>{{ item.sdt }}</td>
                     <td>{{ item.so_cccd }}</td>
                     <td>{{ item.dia_chi }}</td>
                     <td>{{ item.so_hieu_chung_chi }}</td>
                     <td>{{ item.khoa_hoc }}</td>
                     <td>{{ item.trinh_do }}</td>
                     <td>{{ item.ngay_cap }}</td>
                     <td>{{ item.ket_qua }}</td>
                     <td>
                        <img :src="item.hinh_anh" alt="Hình ảnh" style="width: 50px; height: 50px; border-radius: 50%;">
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
            alert("Vui lòng chọn một tệp Excel!");
            return;
         }

         this.loadingFile = true;
         let formData = new FormData();
         formData.append("file", this.selectedFile);

         try {
            await axios.post("http://localhost:8000/api/import-excel", formData);
            alert("Tải lên thành công!");
            this.fetchData();
         } catch (error) {
            console.error("Lỗi khi tải lên:", error);
         } finally {
            this.loadingFile = false;
         }
      },
      onFolderSelect(event) {
         this.files = Array.from(event.target.files);
      },
      async uploadFolderImage() {
         if (!this.files.length) {
            alert("Vui lòng chọn thư mục!");
            return;
         }

         this.loadingFolder = true;
         const formData = new FormData();
         this.files.forEach(file => {
            formData.append("images[]", file, file.webkitRelativePath);
         });

         try {
            await axios.post("http://localhost:8000/api/upload-folder", formData);
            alert("Tải thư mục thành công!");
         } catch (error) {
            console.error("Lỗi khi tải thư mục:", error);
         } finally {
            this.loadingFolder = false;
         }
      },
      async fetchData() {
         try {
            let response = await axios.get("http://localhost:8000/api/get-data");
            this.dataList = response.data;
         } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
         }
      }
   },
   mounted() {
      this.fetchData();
   }
};
</script>
