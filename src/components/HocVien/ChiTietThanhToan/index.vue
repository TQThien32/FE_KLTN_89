<template>
    <div class="row">
        <h4 class="text-white"><i class="fa-solid fa-circle-user"></i> Thông Tin Người Dùng</h4>
        <div class="col-lg-6 col-md-6">
            <div class="card ">
                <div class="card-body  text-dark">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="card-text"><b>Họ Và Tên:</b> <span class="ms-3">{{ thong_tin_nguoi_dung.ho_va_ten
                            }}</span></p>
                            <p class="card-text"><b>Số CCCD:</b> <span class="ms-3">{{
                                thong_tin_nguoi_dung.cccd }}</span></p>
                        </div>
                        <div class="col-md-6">
                            <p class="card-text"><b>Email:</b> <span class="ms-3">{{ thong_tin_nguoi_dung.emai }}</span>
                            </p>
                            <p class="card-text"><b>Số Điện Thoại:</b> <span class="ms-3">{{ thong_tin_nguoi_dung.sdt
                            }}</span></p>
                        </div>
                    </div>

                </div>
            </div>
            <h4 class="text-white mt-5"><i class="fa-solid fa-circle-info"></i> Thông Tin Chứng Chỉ</h4>
            <template v-for="(value, index) in chi_tiet_don_hang" :key="index">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="card card-hieuung">
                            <div class="card-body  text-dark">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 mt-3">
                                        <p class="card-text"><b>{{ value.id_chung_chi }}</b><span class="ms-3">{{
                                            value.ten_to_chuc }}</span></p>
                                        <!-- <p class="card-text"><b>Ngày Cấp : </b><span class="ms-3">{{
                                            value.ngay_cap }}</span></p> -->
                                        <!-- <p class="card-text"><b>Khóa Học: </b><span class="ms-3">{{ value.khoa_hoc
                                        }}</span></p>
                                        <p class="card-text"><b>Họ Và Tên : </b><span class="ms-3">{{
                                            value.ho_va_ten }}</span></p>
                                        <p class="card-text"><b>Số CCCD : </b><span class="ms-3">{{ value.cccd }}</span>
                                        </p>
                                        <p class="card-text"><b>Trình Độ : </b><span class="ms-3">{{
                                            value.trinh_do }}</span></p>
                                        <p class="card-text"><b>Kết Quả: </b><span class="ms-3">{{ value.ket_qua
                                        }}</span></p>
                                        <p class="card-text"><b>Số Hiệu Chứng Chỉ: </b><span class="ms-3">{{
                                            value.so_hieu }}</span></p> -->
                                    </div>
                                    <div class="col-lg-7 col-md-7 mt-3">
                                        <p class="card-text"><b>Hình Ảnh: </b></p>
                                        <img v-bind:src="value.hinh_anh" class="" style="height: 220px;" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer  text-end">
                                <p class="card-text me-5 text-primary" style="font-size:22px;"><i
                                        class="fa-regular fa-money-bill-1 text-dark"></i><b> 120.000 đ</b></p>

                            </div>

                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-4 col-md-4">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between mt-2">
                        <h4>Tổng Tiền</h4>
                        <h4><b>{{ tong_tien_thanh_toan }}</b></h4>

                    </div>

                </div>
                <div class="card-body text-center">
                    <h5>Quét mã dưới đây bằng Internet Banking </h5>
                    <img v-bind:src="qr_link" alt="" style="height: 150px;">
                    <p class="text-muted small mb-2">Lưu ý: Mã QR này sẽ hết hạn sau 24 giờ kể từ lúc tạo</p>
                    <p class="small mb-4"><b>Mã giao dịch:</b> <span class="ms-2">6491184871323425033</span></p>
                    <button type="button" class="btn btn-chinh btn-sm">Thanh toán xong, nhấn vào đây</button>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="card">
        <div class="card-body">
            <img v-bind:src="qr_link" alt="">
        </div>
        <input v-model="tong_tien_thanh_toan" type="text">
    </div> -->
</template>

<script>

import baseRequest from '../../../core/baseRequest';
export default {
    data() {
        return {
            thong_tin_nguoi_dung: {},
            chung_chi_thanh_toan: {},

            ma_don_hang: '',
            tong_tien_thanh_toan: '',
            qr_link: '',
            chi_tiet_don_hang:[],
        }
    },
    mounted() {
        const mathanhtoan = JSON.parse(localStorage.getItem('mathanhtoan'));
        if (mathanhtoan) {
            this.ma_don_hang = mathanhtoan.ma_don_hang;
            this.tong_tien_thanh_toan = mathanhtoan.tong_tien_thanh_toan;
            this.qr_link = mathanhtoan.qr_link;
            this.chi_tiet_don_hang = mathanhtoan.chi_tiet_don_hang;
        }
        // this.loadDataChungChi();
        // this.loadDataNguoiDung();
    },
    computed: {
        tongTien() {
            return this.chung_chi_thanh_toan.length * 120000;
        }
    },
    methods: {
        loadDataChungChi() {
            baseRequest
                .get('hoc-vien/thanh-toan-co-qr')
                .then((res) => {
                    this.chung_chi_thanh_toan = res.data.data;
                });
        },
        loadDataNguoiDung() {
            baseRequest
                .get('thong-tin-nguoi-dung/data')
                .then((res) => {
                    this.thong_tin_nguoi_dung = res.data.data;
                });
        },
    }
}

</script>
<style scoped>
.card-hieuung {
    border: 2px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: none;
    /* bỏ viền mờ */
}

.card-hieuung:hover {
    box-shadow: 7px 0 0 0 #0064c8;
}
</style>