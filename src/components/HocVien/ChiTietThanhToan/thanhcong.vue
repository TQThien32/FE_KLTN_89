<template>
    <div class="row mt-5">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8">
            <div class="card" style="box-shadow: none">
                <div class="card-body text-center">
                    <i class="fa-regular fa-circle-check fa-8x text-success mb-3 mt-2"></i>
                    <h2>Thanh Toán Thành Công</h2>
                    <p class="text-warning" style="font-size: 18px">
                        Vui lòng đợi, NFT chứng chỉ sẽ được chuyển vào ví NFT của bạn
                    </p>
                    <router-link to="/dung-chung/trang-chu">
                        <button class="btn btn-secondary me-4">
                            <i class="fa-regular fa-circle-left fa-sm"></i> Quay Về Trang Chủ
                        </button>
                    </router-link>
                    <button class="btn btn-chinh" data-bs-toggle="modal" data-bs-target="#chitietdonhang">
                        <i class="fa-solid fa-circle-info fa-sm"></i> Chi Tiết Đơn Hàng
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="chitietdonhang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <i class="fa-solid fa-circle-info fa-sm"></i> Chi Tiết Đơn Hàng
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body text-dark">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p class="card-text">
                                                <b>Họ Và Tên:</b>
                                                <span class="ms-3">{{ thong_tin_nguoi_dung.ho_va_ten }}</span>
                                            </p>
                                            <p class="card-text">
                                                <b>Số CCCD:</b>
                                                <span class="ms-3">{{ thong_tin_nguoi_dung.cccd }}</span>
                                            </p>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="card-text">
                                                <b>Email:</b>
                                                <span class="ms-3">{{ thong_tin_nguoi_dung.email }}</span>
                                            </p>
                                            <p class="card-text">
                                                <b>Số Điện Thoại:</b>
                                                <span class="ms-3">{{ thong_tin_nguoi_dung.sdt }}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-body text-dark">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p class="card-text">
                                                <b>Mã Hóa Đơn:</b>
                                                <span class="ms-3">{{ thong_tin_hoa_don.ma_hoa_don }}</span>
                                            </p>
                                            <p class="card-text">
                                                <b>Thời Gian:</b>
                                                <span class="ms-3">{{ thong_tin_hoa_don.thoi_gian }}</span>
                                            </p>
                                            <p class="card-text">
                                                <b>Tổng Tiền:</b>
                                                <span class="ms-3">{{ thong_tin_hoa_don.tong_tien_thanh_toan }}</span>
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                        <table class="table table-bordered  text-dark">
                                            <thead class="table-primary">                                                
                                                <tr class="text-center">
                                                    <th>#</th>
                                                    <th>Tổ Chức Cấp</th>
                                                    <th>Ngày Cấp</th>
                                                    <th>Khóa Học</th>
                                                    <th>Họ Và Tên</th>
                                                    <th>Số CCCD</th>
                                                    <th>Trình Độ</th>
                                                    <th>Kết Quả</th>
                                                    <th>Số Hiệu</th>    
                                                    <th>Hình Ảnh</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(value, index) in list_chung_chi" :key="index">
                                                    <td>{{ index+1 }}</td>
                                                    <td>{{ value.ten_to_chuc }}</td>
                                                    <td>{{ value.ngay_cap }}</td>
                                                    <td>{{ value.khoa_hoc }}</td>
                                                    <td>{{ value.ho_va_ten }}</td>
                                                    <td>{{ value.cccd }}</td>
                                                    <td>{{ value.trinh_do }}</td>
                                                    <td>{{ value.ket_qua }}</td>
                                                    <td>{{ value.so_hieu }}</td>
                                                    <td><img v-bind:src="value.hinh_anh" alt="Ảnh chứng chỉ"
                                                            style="height: 80px;"></td>
                                                </tr>
                                            </tbody>
                                        </table>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
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
            thong_tin_hoa_don: {},
            list_chung_chi: [],
        };
    },
    mounted() {
        this.loadDataChungChi();
        this.loadDataNguoiDung();
    },
    methods: {
        loadDataChungChi() {
            baseRequest
                .get('chi-tiet-don-hang/data')
                .then((res) => {
                    this.list_chung_chi = res.data.data;
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
;
</script>
<style></style>
