<template>
    <div class="d-flex justify-content-start text-light">
        <i class="fa-solid fa-list me-2" style="font-size: 35px;"></i>
        <b>
            <h2 class="text-light">QUẢN LÝ TÀI KHOẢN - TỔ CHỨC CẤP CHỨNG CHỈ</h2>
        </b>
    </div>

    <div class="card mt-2" style="box-shadow: none;">
        <div class="card-header">
            <h4 class="mt-2">Danh Sách Tài Khoản</h4>
        </div>
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
                        <th class="align-middle text-center">STT</th>
                        <th class="align-middle text-center">Tên Tổ Chức</th>
                        <th class="align-middle text-center">Email</th>
                        <th class="align-middle text-center">HotLine</th>
                        <th class="align-middle text-center">Địa Chỉ</th>
                        <th class="align-middle text-center">Họ Tên Người Đại Diện</th>
                        <th class="align-middle text-center">SĐT Người Đại Diện</th>
                        <th class="align-middle text-center">Email Người Đại Diện</th>
                        <th class="align-middle text-center">Avatar</th>
                        <th class="align-middle text-center">Trạng Thái</th>
                        <th class="align-middle text-center">Khác</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_to_chuc" :key="index">
                        <tr>
                            <th class="align-middle text-center">{{ index + 1 }}</th>
                            <td class="align-middle text-center">{{ value.ten_to_chuc }}</td>
                            <td class="align-middle text-center">{{ value.email }}</td>
                            <td class="align-middle text-center">{{ value.hotline }}</td>
                            <td class="align-middle text-center">{{ value.dia_chi }}</td>
                            <td class="align-middle text-center">{{ value.ho_ten_nguoi_dai_dien }}</td>
                            <td class="align-middle text-center">{{ value.sdt_nguoi_dai_dien }}</td>
                            <td class="align-middle text-center">{{ value.email_nguoi_dai_dien }}</td>

                            <td class="align-middle text-center">
                                <button v-if="value.tinh_trang == 1" class="btn btn-success">Hoạt động</button>
                                <button v-else class="btn btn-success">Tạm Dừng</button>
                            </td>
                            <td class="align-middle text-center">
                                <button class="btn btn-chinh">Gửi thông báo</button>
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
            list_to_chuc: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/to-chuc/data')
                .then((res) => {
                    this.list_to_chuc = res.data.data;
                });

        }
    }
}
</script>
<style>
</style>