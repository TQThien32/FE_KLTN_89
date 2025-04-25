<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="box-shadow: none;">
                <div class="card-header">
                    <h4>Danh Sách Yêu Cầu Cấp Gửi Đến</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle text-center">
                                <th>#</th>
                                <th>Họ và tên</th>
                                <th>Số CCCD</th>
                                <th>Email</th>
                                <th>Số Hiệu Chứng Chỉ</th>
                                <th>Thời Gian Gửi</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_yeu_cau" :key="index">
                                <tr>
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td>{{ value.ho_ten }}</td>
                                    <td>{{ value.so_cccd }}</td>
                                    <td>{{ value.email }}</td>
                                    <td>{{ value.so_hieu_chung_chi }}</td>
                                    <td>{{ value.created_at }}</td>
                                    <td class="align-middle text-center">
                                        <button type="button" class="btn btn-chinh" data-bs-toggle="modal"
                                            data-bs-target="#exampleSuccessModal"
                                            v-on:click="Object.assign(hien_thi_yeu_cau, value)">Xác Minh</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <!-- Modal -->
                <div class="modal fade modal-xl" id="exampleSuccessModal" tabindex="-1" aria-hidden="true"
                    style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-trang">
                            <div class="modal-header">
                                <h5 class="modal-title text-black">Xác minh yêu cầu </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="card-body">
                                    <form class="row g-3">
                                        <div class="col-md-6">
                                            <label for="inputFirstName" class="form-label">Họ và tên</label>
                                            <input type="email" class="form-control" id="inputFirstName"
                                                v-model="hien_thi_yeu_cau.ho_ten">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputLastName" class="form-label">Số CCCD</label>
                                            <input type="text" class="form-control" id="inputLastName"
                                                v-model="hien_thi_yeu_cau.so_cccd">
                                        </div>
                                        <div class="col-md-6">
                                            <label for="inputEmail" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="inputEmail"
                                                v-model="hien_thi_yeu_cau.email">
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">Số Hiệu Chứng Chỉ</label>
                                            <input type="text" class="form-control" id=""
                                                v-model="hien_thi_yeu_cau.so_hieu_chung_chi">
                                        </div>
                                        <div class="col-12">
                                            <button type="button" class="btn btn-chinh px-5"
                                                v-on:click="truyXuat(hien_thi_yeu_cau.id)">Truy
                                                xuất</button>
                                        </div>
                                        <div class="card">
                                            <div class="card-header bg-secondary">
                                            </div>
                                            <div class="card-body">
                                                <table class="table table-bordered table-hover">
                                                    <thead>
                                                        <tr class="align-middle text-center">
                                                            <th>Họ và tên</th>
                                                            <th>Số CCCD</th>
                                                            <th>Số hiệu</th>
                                                            <th>Trình độ</th>
                                                            <th>Khóa Học</th>
                                                            <th>Kết quả</th>
                                                            <th>Ngày cấp</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-show="isShowResult">
                                                        <tr>
                                                            <td>{{ chung_chi.ho_ten }}</td>
                                                            <td>{{ chung_chi.so_cccd }}</td>
                                                            <td>{{ chung_chi.so_hieu_chung_chi }}</td>
                                                            <td>{{ chung_chi.trinh_do }}</td>
                                                            <td>{{ chung_chi.khoa_hoc }}</td>
                                                            <td>{{ chung_chi.ket_qua }}</td>
                                                            <td>{{ chung_chi.ngay_cap }}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button v-if="isShowResult" type="button" v-on:click="taoChungChi()"
                                    data-bs-dismiss="modal" class="btn btn-chinh">Tạo dữ liệu
                                    chứng chỉ</button>
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
            list_yeu_cau: [],
            hien_thi_yeu_cau: {},
            chung_chi: {},
            isShowResult: false,
            chung_chi_true: {}
        }
    },
    mounted() {
        this.load_yeu_cau();

    },
    methods: {
        load_yeu_cau() {
            baseRequest
                .get("get-yeu-cau-cap-data")
                .then((res) => {
                    this.list_yeu_cau = res.data.data
                })
        },
        truyXuat(id) {
            baseRequest
                .get("to-chuc/truy-xuat-getdata/" + id)
                .then((res) => {
                    if (res.data.status) {
                        this.chung_chi = res.data.data;
                        this.isShowResult = true;
                        this.chung_chi_true = res.data.data;
                        this.$toast.success(res.data.message);
                    } else {
                        this.isShowResult = false;
                        this.$toast.error(res.data.message);
                    }
                    this.load_yeu_cau();
                });
        },
        taoChungChi() {
            baseRequest
                .post('to-chuc/tao-chung-chi', this.chung_chi_true)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>