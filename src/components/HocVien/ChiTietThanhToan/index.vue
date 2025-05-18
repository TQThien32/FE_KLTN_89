<template>
    <div class="row">
        <h4 class="text-white"><i class="fa-solid fa-circle-user"></i> Thông Tin Người Dùng</h4>
        <div class="col-lg-6 col-md-6">
            <div class="card ms-5 ">
                <div class="card-body  text-dark">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="card-text"><b>Họ Và Tên:</b> <span class="ms-3">{{ thong_tin_nguoi_dung.ho_ten
                                    }}</span></p>
                            <p class="card-text"><b>Số CCCD:</b> <span class="ms-3">{{
                                    thong_tin_nguoi_dung.so_cccd }}</span></p>
                        </div>
                        <div class="col-md-6">
                            <p class="card-text"><b>Email:</b> <span class="ms-3">{{ thong_tin_nguoi_dung.email
                                    }}</span>
                            </p>
                            <p class="card-text"><b>Số Điện Thoại:</b> <span class="ms-3">{{ thong_tin_nguoi_dung.sdt
                                    }}</span></p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-4 col-md-4">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between mt-2">
                        <h4>Tổng Tiền</h4>
                        <h4><b>{{ tong_tien_thanh_toan }} đ</b></h4>

                    </div>

                </div>
                <div class="card-body text-center">
                    <h5>Quét mã dưới đây bằng Internet Banking </h5>
                    <img v-bind:src="qr_link" alt="" style="height: 150px;">
                    <p class="text-muted small mb-2 mt-2">Nếu bạn không quét mã trên, bạn có thể chuyển khoản theo nội dung sau:</p>
                    <p><b>Ngân Hàng Thụ Hưởng</b>: MB BANK</p>
                    <p><b>Số Tài Khoản</b>: 0347341227</p>
                    <p><b>Tên Người Nhận</b>: NFT CERTIFICATE</p>
                    <p class="small mb-4"><b>Nội dung:</b> <span class="ms-2">{{ ma_don_hang }}</span></p>
                    <button v-on:click="xemGiaoDich()" type="button" class="btn btn-chinh btn-sm">Thanh toán xong, nhấn
                        vào đây</button>
                </div>
            </div>
        </div>
    </div>
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
            chi_tiet_don_hang: [],
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
        this.loadDataNguoiDung();
    },

    methods: {
        loadDataNguoiDung() {
            baseRequest
                .get('hoc-vien/profile')
                .then((res) => {
                    this.thong_tin_nguoi_dung = res.data.data;
                });
        },
        xemGiaoDich(){
            baseRequest
            .get('xem-giao-dich')
            .then(this.$router.push('/hoc-vien/thanh-toan'));
            
        }
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