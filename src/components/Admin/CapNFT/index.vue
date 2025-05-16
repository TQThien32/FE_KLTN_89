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
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#infoModal"
                                            v-on:click="Object.assign(hien_thi_yeu_cau, value)"><i
                                                class="fa-solid fa-circle-info ms-1"></i></button>
                                    </td>
                                    <td class="align-middle text-center">
                                        <button v-on:click="Object.assign(truyen,value)" type="button"
                                            class="btn btn-chinh" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                            Mint NFT
                                        </button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Bạn có muốn mint NFT cho {{
                        truyen.ho_ten }} không?</h1>
                    <button type="button" class="btn-close"  aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-chinh" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="createNFT(truyen)" type="button" data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
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
            chung_chi_true: {},
            truyen:{}
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
                    this.$toast.success("Đúc NFT Thành Công");
                    this.load_yeu_cau();
                })
        },
    },
}
</script>
<style></style>