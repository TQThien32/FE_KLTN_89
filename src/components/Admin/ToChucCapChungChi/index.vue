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
                   <input class="form-control" type="text" v-model="keyword.tim"
                            placeholder="Nhập thông tin cần tìm">
                </div>
                <div class="col-lg-1">
                    <button class="btn btn-chinh" v-on:click="searchNV()">
                            <i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm
                        </button>
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
                            <td class="align-middle text-center"></td>
                            <td class="align-middle text-center">
                                    <button v-on:click="doiTrangThai(value)" v-if="value.is_duyet == 0"
                                        class="btn btn-warning">Chờ Duyệt</button>
                                    <button v-on:click="doiTrangThai(value)" v-else-if="value.is_duyet == 1"
                                        class="btn btn-success">Hoạt Động</button>
                                    <button v-on:click="doiTrangThai(value)" v-else-if="value.is_duyet == 2"
                                        class="btn btn-danger">Bị Khoá</button>
                                </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>


</template>
<script>
import baseRequest from '../../../core/baseRequest';



export default {
    data() {
        return {
            list_to_chuc: [],
            keyword: {},
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('to-chuc/data')
                .then((res) => {
                    this.list_to_chuc = res.data.data;
                });

        },
        doiTrangThai(value) {
            baseRequest
                .post('admin/to-chuc/doi-trang-thai', value)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadData();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        },
        searchNV() {
            baseRequest
                .post('admin/tai-khoan-to-chuc/tim-kiem', this.keyword)
                .then((res) => {
                    if (res.data.status) {
                        this.list_to_chuc = res.data.data;
                    } else {
                        this.list_to_chuc = [];
                        this.$toast.error(res.data.message);
                    }
                });
        }
    }
}
</script>
<style>
</style>