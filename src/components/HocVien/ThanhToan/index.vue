<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <h3 class="text-light"><i class="fa-solid fa-list"></i> Chứng Chỉ Chờ Thanh Toán</h3>
            <button class="btn btn-phu2 rounded-pill" data-bs-toggle="modal" data-bs-target="#thanhToan">
                <i class="fa-solid fa-arrow-right"></i> Thanh
                Toán</button>
        </div>
        <hr class="text-white">
        <div class="row">
            <template v-for="(value, index) in list_chung_chi" :key="index">
                <div class="col-lg-4">
                    <div class="card card-hieuung border-chinh border-bottom border-top border-3 border-0">
                        <div class="card-body">
                            <img v-bind:src="`http://localhost:8000/storage/uploads/images/${value.hinh_anh}`"
                                class="card-img-top" alt="ảnh chứng chỉ" style="height: 250px;">
                            <p class="text-light mt-3" style="font-size: 16px;">Phí NFT:
                                <b>{{ value.so_hieu_chung_chi }}</b>
                            </p>
                            <p class="text-light mt-3" style="font-size: 16px;">Phí NFT:
                                <b>{{ value.so_tien }}</b>
                            </p>

                            <div class=" d-flex justify-content-between align-items-center gap-2">
                                <a data-bs-toggle="modal" data-bs-target="#ttchitiet" href="javascript:;"
                                    v-on:click="Object.assign(thong_tin, value)" class="btn btn-outline-light"><i
                                        class="fa-solid fa-indent " style="font-size: 15px;"></i> Thông tin chi tiết</a>
                                <div class="form-check ms-2">
                                    <a v-on:click="themVaoThanhToan(value.id)" href="javascript:;"
                                        class="btn btn-outline-light"><i class="fa-solid fa-indent "
                                            style="font-size: 15px;"></i>Thêm vào thanh toán</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <div class="container mt-5">
        <h3 class="text-light"><i class="fa-solid fa-clock-rotate-left"></i> Lịch Sử Giao Dịch</h3>
        <hr class="text-light">
        <div class=" mt-4">
            <table class="table ">
                <thead>
                    <tr class="text-center text-light">
                        <th>#</th>
                        <th>Mã Giao Dịch</th>
                        <th>Thời Gian</th>
                        <th>Họ và Tên</th>
                        <th>Đã Thanh Toán</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_giao_dich" :key="index">
                        <tr class=" text-light text-center">
                            <th>{{ index + 1 }}</th>
                            <td>{{ value.ma_don_hang }}</td>
                            <td>{{ value.updated_at }}</td>
                            <td>{{ value.ho_ten }}</td>
                            <th>{{ value.tong_tien_thanh_toan }} đ</th>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <div class="modal fade" id="ttchitiet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin chi tiết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><b>Tên Học Viên: </b> <span>{{ thong_tin.ho_ten }}</span></p>
                    <p><b>Ngày Sinh: </b> <span>{{ thong_tin.ngay_sinh }}</span></p>
                    <p><b>Số CCCD: </b> <span>{{ thong_tin.so_cccd }}</span></p>
                    <p><b>Tên Tổ Chức Cấp Chứng Chỉ: </b> <span>{{ thong_tin.ten_to_chuc }}</span></p>
                    <p><b>Khóa Học: </b> <span>{{ thong_tin.khoa_hoc }}</span></p>
                    <p><b>Số Hiệu Chứng Chỉ: </b> <span>{{ thong_tin.so_hieu_chung_chi }}</span></p>
                    <p><b>Kết Quả: </b> <span>{{ thong_tin.ket_qua }}</span></p>
                    <p><b>Ngày Cấp: </b> <span>{{ thong_tin.ngay_cap }}</span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="ttchitiettrongthanhtoan" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin chi tiết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><b>Tên Học Viên: </b> <span>{{ thong_tin_trongthanhtoan.ho_ten }}</span></p>
                    <p><b>Ngày Sinh: </b> <span>{{ thong_tin_trongthanhtoan.ngay_sinh }}</span></p>
                    <p><b>Số CCCD: </b> <span>{{ thong_tin_trongthanhtoan.so_cccd }}</span></p>
                    <p><b>Tên Tổ Chức Cấp Chứng Chỉ: </b> <span>{{ thong_tin_trongthanhtoan.ten_to_chuc }}</span></p>
                    <p><b>Khóa Học: </b> <span>{{ thong_tin_trongthanhtoan.khoa_hoc }}</span></p>
                    <p><b>Số Hiệu Chứng Chỉ: </b> <span>{{ thong_tin_trongthanhtoan.so_hieu_chung_chi }}</span></p>
                    <p><b>Kết Quả: </b> <span>{{ thong_tin_trongthanhtoan.ket_qua }}</span></p>
                    <p><b>Ngày Cấp: </b> <span>{{ thong_tin_trongthanhtoan.ngay_cap }}</span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="thanhToan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-solid fa-cart-shopping"></i> Thanh
                        Toán</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Hình Ảnh</th>
                                <th>Số Hiệu Chứng Chỉ</th>
                                <th>Chi Tiết</th>
                                <th>Giá</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody v-show="isShowResult">
                            <template v-for="(value, index) in list_chi_tiet_don_hang" :key="index">
                                <tr class="text-center align-middle">
                                    <th>{{ index + 1 }}</th>
                                    <td><img v-bind:src="`http://localhost:8000/storage/uploads/images/${value.hinh_anh}`"
                                            style="height: 50px;" alt=""></td>
                                    <td>{{ value.so_hieu_chung_chi }}</td>
                                    <td><span class="badge text-bg-dark"
                                            v-on:click="Object.assign(thong_tin_trongthanhtoan, value)"
                                            data-bs-toggle="modal" data-bs-target="#ttchitiettrongthanhtoan">Xem
                                            chi tiết</span></td>
                                    <th>{{ value.so_tien }}đ</th>
                                    <td><button type="button" v-on:click="xoaDonChiTiet(value.id)"
                                            class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <div class="me-5 mt-3">
                        <span style="font-size: 18px;"><b>{{ tongTien.toLocaleString('vi-VN') }} đ</b></span>
                    </div>
                    <!-- <router-link to="/hoc-vien/chi-tiet-thanh-toan"> -->
                    <button v-on:click="thanhToan()" type="button" data-bs-dismiss="modal" class="btn btn-chinh">Thanh
                        Toán</button>
                    <!-- </router-link> -->

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
            list_giao_dich: [],
            list_chung_chi: [],
            list_chi_tiet_don_hang: [],
            isShowResult: true,
            thong_tin: {},
            thong_tin_trongthanhtoan: {}
        }
    },
    mounted() {
        this.lichSuGiaoDich();
        this.loadData();
        this.loadDataChiTietDonHang();
    },
    computed: {
        tongTien() {
            return this.list_chi_tiet_don_hang.reduce((tong, item) => {
                return tong + Number(item.so_tien);
            }, 0);
        }
    },
    methods: {
        lichSuGiaoDich() {
            baseRequest
                .get('hoc-vien/lich-su-giao-dich')
                .then((res) => {
                    this.list_giao_dich = res.data.data;
                });

        },
        loadData() {
            baseRequest
                .get('hoc-vien/chung-chi-chua-cap')
                .then((res) => {
                    this.list_chung_chi = res.data.data;
                });

        },
        loadDataChiTietDonHang() {
            baseRequest
                .get('hoc-vien/can-thanh-toan')
                .then((res) => {
                    this.list_chi_tiet_don_hang = res.data.data;
                });
        },
        themVaoThanhToan(id_chung_chi) {
            baseRequest
                .post('them-vao-thanh-toan', { id_chung_chi: id_chung_chi })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                        this.loadDataChiTietDonHang();
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
        },
        xoaDonChiTiet(id) {
            baseRequest
                .post('hoc-vien/xoa-don-chi-tiet', { id })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadData();
                        this.loadDataChiTietDonHang();
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
        },
        thanhToan() {
            const dsId = this.list_chi_tiet_don_hang;
            var payload = {
                'ds_chung_chi_thanh_toan': dsId,
            };
            baseRequest
                .post('hoc-vien/thanh-toan', payload)
                .then((res) => {
                    if (res.data.status) {
                        this.tong_tien = 0,
                            this.$toast.success(res.data.message);
                        localStorage.setItem('mathanhtoan', JSON.stringify(res.data.data));
                        this.$router.push('/hoc-vien/chi-tiet-thanh-toan');
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message)
                    }
                });

        }

    }
}
window.onload = function () {
    const checkAll = document.getElementById('checkRight');
    const checkboxes = document.querySelectorAll('.item-check');

    checkAll.addEventListener('change', () => {
        checkboxes.forEach(cb => {
            cb.checked = checkAll.checked;
        });
    });
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            checkAll.checked = allChecked;
        });
    });
}

</script>
<style scoped>
.form-check-input {
    width: 1.2rem;
    height: 1.2rem;
}

.card-hieuung {
    border: 2px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background-color: black;
    box-shadow: none;
    /* bỏ viền mờ */
}

.card-hieuung:hover {
    transform: scale(1.03);
    box-shadow: -1px 0 0 0 #0064c8, 1px 0 0 0 #0064c8;
}

table tbody tr:hover {
    color: #0064c8 !important;
}
</style>