<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-lg-6">
                            Danh Sách Chức Vụ
                        </div>
                        <div class="col-lg-6 text-end">
                            <button class="btn btn-chinh" data-bs-toggle="modal" data-bs-target="#themMoiModal">Thêm
                                Chức Vụ</button>
                        </div>
                        <div class="modal fade" id="themMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Chúc Vụ</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="col-12 mb-2">
                                            <label class="form-label">Tên Chức Vụ</label>
                                            <input v-model="create_chuc_vu.ten_chuc_vu" type="text"
                                                class="form-control">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button v-on:click="createChucVu()" type="button" class="btn btn-chinh"
                                            data-bs-dismiss="modal">Tạo Mới</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle">
                                <tr>
                                    <th>#</th>
                                    <th>Tên Chức Vụ</th>
                                    <th>Cấp Quyền</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value, index) in listChucVu" :key="value.id">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ index + 1 }}</th>
                                        <td>{{ value.ten_chuc_vu }}</td>
                                        <td class="text-center">
                                            <button v-on:click="Object.assign(chucVu, value), loadChiTietChucNang()"
                                                class="btn btn-chinh text-white">Phân Quyền</button>
                                        </td>
                                        <td class="text-center">
                                            <i v-on:click="Object.assign(update_chuc_vu, value)"
                                                class="fa-solid fa-square-pen fa-3x text-chinh me-2"
                                                data-bs-toggle="modal" data-bs-target="#updateModal"></i>
                                            <i v-on:click="Object.assign(delete_chuc_vu, value)"
                                                class="fa-solid fa-trash fa-3x text-danger" data-bs-toggle="modal"
                                                data-bs-target="#xoaModal"></i>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="col-12 mb-2">
                                        <label class="form-label">Tên Quyền</label>
                                        <input v-model="update_chuc_vu.ten_chuc_vu" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="updateChucVu()" type="button" class="btn btn-primary"
                                        data-bs-dismiss="modal">Xác
                                        Nhận</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Quyền</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div
                                        class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                                        <div class="d-flex align-items-center">
                                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6 class="mb-0 text-dark">Warning</h6>
                                                <div class="text-dark">
                                                    <p>Bạn có muốn xóa chức vụ <b>{{ delete_chuc_vu.ten_chuc_vu }}</b>
                                                        này không?
                                                    </p>
                                                    <p>
                                                        <b>Lưu ý:</b> Điều này không thể hoàn tác!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button v-on:click="deleteChucVu()" type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Danh Sách Chức Năng
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle">
                                        <th>#</th>
                                        <th>Tên Chức Năng</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in listChucNang" :key="index">
                                        <tr class="align-middle">
                                            <th class="text-center">{{ index + 1 }}</th>
                                            <td>{{ value.ten_chuc_nang }}</td>
                                            <td class="text-center">
                                                <button v-on:click="capQuyen(value.id), loadChiTietQuyen()" class="btn btn-chinh">Cấp Quyền</button>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header">
                    Đang Phân Quyền Cho <b class="text-danger">{{ chucVu.ten_chuc_vu }}</b>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="text-center text-nowrap align-middle">
                                        <th>#</th>
                                        <th>Tên Quyền</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="(value, index) in listChucNangQuyen" :key="index">
                                        <tr class="align-middle">
                                            <th class="text-center">{{ index+1 }}</th>
                                            <td>{{ value.ten_chuc_nang }}</td>
                                            <td class="text-center">
                                                <button v-on:click="xoaPhanQuyen(value)" class="btn btn-danger">Xoá</button>
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            listChucNang: [],
            listChucVu: [],
            listChucNangQuyen: [],
            chucVu: {},
            create_chuc_vu: {},
            delete_chuc_vu: {},
            update_chuc_vu: {},
        };
    },
    mounted() {
        this.loadChucNang();
        this.loadChucVu();
    },
    methods: {
        loadChucNang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuc-nang/data')
                .then((res) => {
                    this.listChucNang = res.data.data;
                });
        },
        loadChucVu() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuc-vu/data')
                .then((res) => {
                    this.listChucVu = res.data.data;
                });
        },
        createChucVu() {
            axios
                .post('http://127.0.0.1:8000/api/admin/chuc-vu/create', this.create_chuc_vu)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadChucVu();
                    } else {
                        this.$toast.error(res.data.message)
                    }
                });
        },

        deleteChucVu() {
            axios
                .delete('http://127.0.0.1:8000/api/admin/chuc-vu/delete/' + this.delete_chuc_vu.id)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Thông báo<br>' + res.data.message);
                        this.loadChucVu();
                        this.delete_chuc_vu = {}; // reset đối tượng
                    } else {
                        this.$toast.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        updateChucVu() {
            axios
                .post('http://127.0.0.1:8000/api/admin/chuc-vu/update', this.update_chuc_vu)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadChucVu();
                    } else {
                        this.$toast.error(res.data.message)
                    }
                });
        },
        capQuyen(id_chuc_nang) {
            var payload = {
                'id_chuc_nang': id_chuc_nang,
                'id_chuc_vu': this.chucVu.id
            }
            axios
                .post('http://127.0.0.1:8000/api/admin/chi-tiet-cap-quyen/create', payload)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadChiTietChucNang();
                    } else {
                        this.$toast.success(res.data.message)
                    }
                });
        },
        loadChiTietChucNang() {
            axios
                .get('http://127.0.0.1:8000/api/admin/chuc-nang-theo-chuc-vu/' + this.chucVu.id)
                .then((res) => {
                    this.listChucNangQuyen = res.data.data;
                });
        },
        xoaPhanQuyen(payload) {
            axios
                .post('http://127.0.0.1:8000/api/admin/chi-tiet-cap-quyen/delete', payload)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message)
                        this.loadChiTietChucNang();
                    } else {
                        this.$toast.success(res.data.message)
                    }
                });
        }
    },
}
</script>
<style></style>