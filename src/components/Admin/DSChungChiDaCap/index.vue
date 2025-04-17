<template>

    <b>
        <h2 class="text-light"><i class="fa-solid fa-book-open-reader" style="font-size: 35px;"></i> DANH SÁCH CHỨNG CHỈ
            ĐÃ CẤP</h2>
    </b>
    <div class="card mt-3">

        <div class="card-body table-responsive">

            <div class="row">
                <div class="col-lg-11">
                    <input type="text" class="form-control mb-2" placeholder="Tìm kiếm ...">
                </div>
                <div class="col-lg-1">
                    <button class="btn btn-chinh me-2"><i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
                </div>
            </div>
            <table class="table table-hover mt-3">
                <thead>
                    <tr>
                        <th class="text-center">STT</th>
                        <th class="text-center">Mã NFT</th>
                        <th class="text-center">Tên Tổ Chức</th>
                        <th class="text-center">Tên Học Viên</th>
                        <th class="text-center">Khóa Học</th>
                        <th class="text-center">Kết Quả</th>
                        <th class="text-center">Số Hiệu Chứng Chỉ</th>
                        <th class="text-center">Hình Ảnh</th>
                        <th class="text-center">Ngày Cấp Chứng Chỉ</th>
                        <th class="text-center">Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_chung_chi" :key="index">
                        <tr>
                            <th class="align-middle text-center">{{ index + 1 }}</th>
                            <td class="align-middle text-center">{{ value.token }}</td>
                            <td class="align-middle text-center">{{ value.ten_to_chuc }}</td>
                            <td class="align-middle text-center">{{ value.ten_hoc_vien }}</td>
                            <td class="align-middle text-center">{{ value.khoa_hoc }}</td>
                            <td class="align-middle text-center">{{ value.ket_qua }}</td>
                            <td class="align-middle text-center">{{ value.so_hieu_chung_chi }}</td>
                            <td class="align-middle text-center">
                                <img v-bind:src="value.hinh_anh"
                                    style="height: 100px;">
                            </td>
                            <td class="align-middle text-center">{{ value.ngay_cap }}</td>
                            <td class="align-middle text-center">
                                <span class="bg-success " style="padding: 10px; border-radius: 8px;">Đã Cấp</span>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </div>
    </div>
</template>
<script>
import axios from 'axios';

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
            axios
                .get('')
                .then((res) => {
                    this.list_chung_chi = res.data.data;
                });
        }
    }
}
</script>
<style>
</style>