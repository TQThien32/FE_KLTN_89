<template>
    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card" style="box-shadow: none;">
                <div class="card-header">
                    <h4>Danh Sách Yêu Cầu Cấp Gửi Đến</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle text-center">
                                <th>#</th>
                                <th>Họ và tên</th>
                                <th>Số CCCD</th>
                                <th>Email</th>
                                <th>Số Hiệu Chứng Chỉ</th>
                                <th>Thời Gian Gửi</th>
                                <th>Thông Tin Chứng Chỉ</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list_yeu_cau" :key="index">
                                <tr>
                                    <th class="align-middle text-center">{{ index + 1 }}</th>
                                    <td class="align-middle">{{ value.ho_ten }}</td>
                                    <td class="align-middle text-center">{{ value.so_cccd }}</td>
                                    <td class="align-middle">{{ value.email }}</td>
                                    <td class="align-middle text-center">{{ value.so_hieu_chung_chi }}</td>
                                    <td class="align-middle text-center">{{ value.created_at }}</td>
                                    <td class="align-middle text-center">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#infoModal"
                                            v-on:click="Object.assign(hien_thi_yeu_cau, value)"><i class="fa-solid fa-circle-info ms-1"></i></button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button type="button" class="btn btn-chinh" v-on:click="createNFT(value)">NFT</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest'

export default {
    data() {
        return {
            list_yeu_cau: [],
            hien_thi_yeu_cau: {},
            chung_chi: {},
            isShowResult: false,
            chung_chi_true: {}
        }
    },
    mounted() {
        this.load_yeu_cau();
    },
    methods: {
        load_yeu_cau() {
            baseRequest
                .get("admin/cap-nft/data")
                .then((res) => {
                    this.list_yeu_cau = res.data.data
                })
        },
        createNFT(value) {
            baseRequest
                .post("admin/cap-nft/create", value)
                .then((res) => {
                    this.chung_chi = res.data.data
                    this.isShowResult = true
                })
        },
    },
}
</script>
<style></style>