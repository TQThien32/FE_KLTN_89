<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <h3 class="text-light"><i class="fa-solid fa-list"></i> Chứng Chỉ Chưa Cấp</h3>
            <button class="btn btn-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#thanhToan">
                <i class="fa-solid fa-arrow-right"></i> Thanh
                Toán</button>
        </div>

        <hr class="text-white">
        <div class="row">
            <div class="form-check d-flex justify-content-end">
                <input class="form-check-input " type="checkbox" id="checkRight">
                <label class="form-check-label ms-2 text-light mb-2 me-4 mt-1" for="checkRight">Chọn tất cả</label>
            </div>

            <template v-for="(value, index) in list_chung_chi" :key="index">
                <div class="col-lg-4">
                    <div class="card card-hieuung border-chinh border-bottom border-top border-3 border-0">
                        <div class="card-body">
                            <img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg"
                                class="card-img-top" alt="ảnh chứng chỉ" style="height: 250px;">

                            <p class="text-light mt-3" style="font-size: 16px;">Phí NFT:
                                <b>{{ value.so_hieu_chung_chi }}1.000.000 đ</b>
                            </p>

                            <div class=" d-flex justify-content-between align-items-center gap-2">
                                <a data-bs-toggle="modal" data-bs-target="#ttchitiet" href="javascript:;"
                                    class="btn btn-outline-light"><i class="fa-solid fa-indent "
                                        style="font-size: 15px;"></i> Thông tin chi tiết</a>
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
                        <th>Số CCCD</th>
                        <th>Tổ Chức Cấp</th>
                        <th>Số Hiệu Chứng Chỉ</th>
                        <th>Đã Thanh Toán</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-light text-center">
                        <th>1</th>
                        <td>458963215</td>
                        <td>11:12 12/12/2024</td>
                        <td>Trần Quang Thiên</td>
                        <td>049203006547</td>
                        <td>Đại Học Duy Tân</td>
                        <td>12133434</td>
                        <th>10000000 đ</th>
                    </tr>
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
                    <p class="card-text"><b>Tổ Chức cấp: </b><span class="ms-3">Đại Học Duy Tân</span></p>
                    <p class="card-text"><b>Ngày Cấp : </b><span class="ms-3">30/4/1975</span></p>
                    <p class="card-text"><b>Khóa Học: </b><span class="ms-3">2024 - 2027</span></p>
                    <p class="card-text"><b>Họ Và Tên : </b><span class="ms-3">Trần Quang Thiên</span></p>
                    <p class="card-text"><b>Số CCCD : </b><span class="ms-3">049203006689</span></p>
                    <p class="card-text"><b>Trình Độ: </b><span class="ms-3">Cử nhân</span></p>
                    <p class="card-text"><b>Kết Quả: </b><span class="ms-3">Giỏi</span></p>
                    <p class="card-text"><b>Số Hiệu Chứng Chỉ: </b><span class="ms-3">123456</span></p>
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
                        <tbody>
                            <tr class="text-center align-middle">
                                <th>1</th>
                                <td><img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg"
                                        style="height: 50px;" alt=""></td>
                                <td>024-254-202</td>
                                <td><span class="badge text-bg-dark" data-bs-toggle="modal"
                                        data-bs-target="#ttchitiet">Xem
                                        chi tiết</span></td>
                                <th>100.000 đ</th>
                                <td><button class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="modal-footer">
                    <div class="me-5 mt-3">
                        <p style="font-size: 18px;">Tổng Tiền: <b>250.000 đ</b></p>
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
            list_chung_chi: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('hoc_vien/chung-chi-chua-cap')
                .then((res) => {
                    this.list_chung_chi = res.data.data;
                });

        },
        themVaoThanhToan(id_chung_chi) {
            baseRequest
                .post('them-vao-thanh-toan',{id_chung_chi:id_chung_chi})
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
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