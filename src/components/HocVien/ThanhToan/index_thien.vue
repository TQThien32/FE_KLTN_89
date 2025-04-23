<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <h3 class="text-light"><i class="fa-solid fa-list"></i>Chờ Thanh Toán</h3>
            <button type="button" class="btn btn-secondary rounded-pill" data-bs-toggle="modal"
                data-bs-target="#thanhToan">
                <i class="fa-solid fa-arrow-right"></i> Thanh
                Toán</button>
        </div>

        <hr class="text-white">
        <div class="row">
            <div class="form-check d-flex justify-content-end">
                <input class="form-check-input" type="checkbox" id="checkRight" v-model="check_all"
                    @change="chonTatCaChungChi">
                <label class="form-check-label ms-2 text-light mb-2 me-4 mt-1" for="checkRight">Chọn tất cả</label>
            </div>


            <div class="col-lg-4">
                <div class="card card-hieuung border-chinh border-bottom border-top border-3 border-0">
                    <div class="card-body">
                        <img v-bind:src="value.hinh_anh" class="card-img-top" alt="ảnh chứng chỉ"
                            style="height: 250px;">
                        <p class="text-light mt-3" style="font-size: 16px;">Phí NFT: <b>{{ value.so_tien }} đ</b>
                        </p>
                        <div class=" d-flex justify-content-between align-items-center gap-2">
                            <a data-bs-toggle="modal" data-bs-target="#ttchitiet" href="javascript:;"
                                class="btn btn-outline-light"><i class="fa-solid fa-indent " style="font-size: 15px;"
                                    v-on:click="Object.assign(chi_tiet_chung_chi, value)"></i> Thông tin chi
                                tiết</a>
                            <div class="form-check ms-2">
                                <input class="form-check-input item-check" type="checkbox" :value="value"
                                    v-model="selected_chung_chi">
                                <label class="form-check-label" for="checkDefault">

                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
                        <th>Đã Thanh Toán</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_lich_su_giao_dich" :key="index">
                        <tr class="text-light text-center">
                            <th>{{ index + 1 }}</th>
                            <td>{{ value.ma_giao_dich }}</td>
                            <td>{{ value.thoi_gian }}</td>
                            <th>{{ value.so_tien }} đ</th>
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
                    <p class="card-text"><b>Tổ Chức cấp: </b><span class="ms-3">{{ chi_tiet_chung_chi.ten_to_chuc
                    }}</span>
                    </p>
                    <p class="card-text"><b>Ngày Cấp : </b><span class="ms-3">{{ chi_tiet_chung_chi.ngay_cap }}</span>
                    </p>
                    <p class="card-text"><b>Khóa Học: </b><span class="ms-3">{{ chi_tiet_chung_chi.khoa_hoc }}</span>
                    </p>
                    <p class="card-text"><b>Họ Và Tên : </b><span class="ms-3">{{ chi_tiet_chung_chi.ho_va_ten }}</span>
                    </p>
                    <p class="card-text"><b>Số CCCD : </b><span class="ms-3">{{ chi_tiet_chung_chi.cccd }}</span></p>
                    <p class="card-text"><b>Trình Độ : </b><span class="ms-3">{{ chi_tiet_chung_chi.trinh_do }}</span>
                    </p>
                    <p class="card-text"><b>Kết Quả: </b><span class="ms-3">{{ chi_tiet_chung_chi.ket_qua }}</span></p>
                    <p class="card-text"><b>Số Hiệu Chứng Chỉ: </b><span class="ms-3">{{
                        chi_tiet_chung_chi.so_hieu }}</span>
                    </p>
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
                        Toán
                    </h1>
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
                        <tbody>
                            <template v-for="(value, index) in list_thanh_toan" :key="index">
                                <template v-for="(item, index) in selected_chung_chi" :key="index">
                                    <tr class="text-center align-middle">
                                        <th>{{ index + 1 }}</th>
                                        <td><img :src="item.hinh_anh" style="height: 50px;" alt=""></td>
                                        <td>{{ item.so_hieu }}</td>
                                        <td><span class="badge text-bg-dark" data-bs-toggle="modal"
                                                data-bs-target="#ttchitiet"
                                                @click="Object.assign(chi_tiet_chung_chi, item)">Xem chi tiết</span>
                                        </td>
                                        <th>{{ item.so_tien }} đ</th>
                                        <td><button class="btn btn-danger" @click="removeItem(index)"><i
                                                    class="fa-regular fa-trash-can"></i></button></td>
                                    </tr>
                                </template>
                            </template>
                        </tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <div class="me-5 mt-3">
                        <p style="font-size: 18px;">Tổng Tiền: <b>{{ tong_tien.toLocaleString() }} đ</b></p>
                    </div>
                    <router-link to="/hoc-vien/chi-tiet-thanh-toan">
                        <button type="button" data-bs-dismiss="modal" class="btn btn-chinh">Thanh Toán</button>
                    </router-link>

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
            list_thanh_toan: [],
            list_chung_chi: [],
            list_lich_su_giao_dich: [],
            chi_tiet_chung_chi: {},
            selected_chung_chi: [],
            check_all: false
        }
    },
    mounted() {
        this.loadDataChungChi();
        this.loadDataLichSu();
    },
    computed: {
        tong_tien() {
            return this.selected_chung_chi.reduce((tong, item) => tong + parseInt(item.so_tien), 0)
        }
    },
    watch: {
        selected_chung_chi(val) {
            this.check_all = val.length === this.list_chung_chi.length;
        }
    },
    methods: {
        loadDataChungChi() {
            baseRequest
                .get('hoc-vien/chung-chi-chua-cap')
                .then((res) => {
                    this.list_chung_chi = res.data.data;
                });
        },
        loadDataLichSu() {
            baseRequest
                .get('hoc-vien/lich-su-giao-dich')
                .then((res) => {
                    this.list_lich_su_giao_dich = res.data.data;
                });
        },
        themVaoThanhToan(id_chung_chi) {
            baseRequest
                .post('them-vao-thanh-toan', { id_chung_chi: id_chung_chi })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
        },
        removeItem(index) {
            this.selected_chung_chi.splice(index, 1);
        },
        chonTatCaChungChi() {
            if (this.check_all) {
                this.selected_chung_chi = [...this.list_chung_chi];
            } else {
                this.selected_chung_chi = [];
            }
        }
    }
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
