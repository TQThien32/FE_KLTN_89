<template>
    <div class="d-flex justify-content-start text-light">
      <i class="fa-solid fa-ban me-2" style="font-size: 35px;"></i>
      <b>
         <h3 class="text-light">VÔ HIỆU HÓA CHỨNG CHỈ</h3>
      </b>
   </div>
    <div class="row mt-3">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="box-shadow:  none;">
                <div class="card-header">
                    <h4 class="text-dark mt-2"><i class="fa-solid fa-list-ol"></i> Danh Sách Chứng Chỉ</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle text-center">
                                <th>#</th>
                                <th>Họ Và Tên</th>
                                <th>Số Hiệu</th>
                                <th>Token</th>
                                <th>Trình Độ</th>
                                <th>Khóa Học</th>
                                <th>Kết Quả</th>
                                <th>Ngày Cấp</th>
                                <th>Ghi Chú</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_chung_chi" :key="index">
                                <tr class="align-middle">
                                    <td class="align-middle text-center">{{ index + 1 }}</td>
                                    <td class="align-middle text-center">{{ value.ho_ten }}</td>
                                    <td class="align-middle text-center">{{ value.so_hieu_chung_chi }}</td>
                                    <td class="align-middle text-center">{{ value.token }}</td>
                                    <td class="align-middle text-center">{{ value.trinh_do }}</td>
                                    <td class="align-middle text-center">{{ value.khoa_hoc }}</td>
                                    <td class="align-middle text-center">{{ value.ket_qua }}</td>
                                    <td class="align-middle text-center">{{ value.ngay_cap }}</td>
                                    <td class="align-middle text-center">{{ value.ghi_chu }}</td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="Object.assign(ghi_chu, value)"  v-if="value.tinh_trang == 2" type="button" class="btn btn-chinh"
                                            data-bs-toggle="modal" data-bs-target="#vohieuhoa">Đã Cấp</button>
                                        <button v-on:click="Object.assign(ghi_chu, value)" v-else type="button" data-bs-toggle="modal" data-bs-target="#movohieuhoa" class="btn btn-danger">Đã Vô
                                            Hiệu Hóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <!-- Model -->
                <div class="modal fade" id="vohieuhoa" tabindex="-1" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-trang">
                            <div class="modal-header">
                                <h5 class="modal-title text-black">Vô hiệu hóa chứng chỉ</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-black">
                                <div class="mb-3">
                                    <label for="message" class="form-label">Ghi Chú</label>
                                    <textarea v-model="ghi_chu.ghi_chu" id="message" class="form-control" rows="5"
                                        placeholder="Nhập nội dung lý do vô hiệu hóa" required></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button v-on:click="changeVoHieuHoa()" type="button" data-bs-dismiss="modal" class="btn btn-chinh">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Model -->
                <div class="modal fade" id="movohieuhoa" tabindex="-1" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-trang">
                            <div class="modal-header">
                                <h5 class="modal-title text-black">Mở Vô hiệu hóa chứng chỉ</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button v-on:click="changeVoHieuHoa()" type="button" data-bs-dismiss="modal" class="btn btn-chinh">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest'

export default {
    data() {
        return {
            list_chung_chi: [],
            ghi_chu:{},
        }
    },
    mounted() {
        this.getDataChungChi();

    },
    methods: {
        getDataChungChi() {
            baseRequest
                .get('to-chuc/chung-chi-nft')
                .then((res) => {
                    this.list_chung_chi = res.data.data
                });
        },
        changeVoHieuHoa(){
            baseRequest
            .post('to-chuc/change-vo-hieu-hoa', this.ghi_chu)
            .then((res)=>{
                if(res.data.status){
                        this.$toast.success(res.data.message);
                        this.getDataChungChi();
                    }else{
                        this.$toast.error(res.data.message);
                    }
            });
        }
    }
}
</script>
<style></style>