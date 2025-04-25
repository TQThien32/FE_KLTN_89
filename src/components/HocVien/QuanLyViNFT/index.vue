<template>
    <div class="card-body d-flex justify-content-between">
        <h3 class="text-white"><i class="fa-solid fa-wallet ms-4"></i> Ví NFT Chứng Chỉ</h3>
        <div class="d-flex justify-content-center">
            <h5 class="mt-1  text-white"><i class="fa-solid fa-file-code"></i> 0xx3454...</h5>

        </div>
    </div>
    <div class="container">
        <div class="row">
            <template v-for="(value, index) in chung_chi_nft" :key="index">
                <div class="col-lg-4">
                    <div class="card">
                        <img v-bind:src="value.hinh_anh" class="card-img-top" alt="anh chung chi">
                        <div class="card-body">
                            <p class="card-text"><b class="me-3">Mã NFT</b> <span>{{ chung_chi_nft.token }}</span></p>
                            <p class="card-text"><b class="me-3">Data URL</b>
                                <span>{{ chung_chi_nft.MetaData_URL }}</span>
                            </p>
                            <div class="d-flex justify-content-between">
                                <button v-on:click="Object.assign(thong_tin, value)" class="btn btn-chinh"
                                    data-bs-toggle="modal" data-bs-target="#kiemtra">Kiểm tra
                                    thông tin</button>
                                <button v-on:click="Object.assign(chia_se, value)" class="btn btn-chinh"
                                    data-bs-toggle="modal" data-bs-target="#chiase">Chia sẻ
                                    NFT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>

    <!-- Modal kiểm tra dữ liệu-->
    <div class="modal fade" id="kiemtra" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Dữ liệu chứng chỉ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><b>Tên Học Viên: </b> <span>{{ thong_tin.ho_ten }}</span></p>
                    <p><b>Số CCCD: </b> <span>{{ thong_tin.so_cccd }}</span></p>
                    <p><b>Mã NFT: </b> <span>{{ thong_tin.token }}</span></p>
                    <p><b>Tên Tổ Chức Cấp Chứng Chỉ: </b> <span>{{ thong_tin.ten_to_chuc }}</span></p>
                    <p><b>Khóa Học: </b> <span>{{ thong_tin.khoa_hoc }}</span></p>
                    <p><b>Số Hiệu Chứng Chỉ: </b> <span>{{ thong_tin.so_hieu_chung_chi }}</span></p>
                    <p><b>Kết Quả: </b> <span>{{ thong_tin.ket_qua }}</span></p>
                    <p><b>Ngày Cấp: </b> <span>{{ thong_tin.ngay_cap }}</span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal chia sẻ NFT-->
    <div class="modal fade" id="chiase" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chia Sẻ NFT</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="mt-2" for="">ID NFT</label>
                    <div class="form-control bg-white">{{ chia_se.token }}</div>
                    <label class="mt-2" for="">Email người nhận</label>
                    <input v-model="chia_se.email" class="mt-2 form-control" type="email"
                        placeholder="Nhập email người dùng bạn muốn chia sẻ">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="chiaSeNFT()" type="button" class="btn btn-chinh" data-bs-dismiss="modal">Chia
                        sẻ</button>
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
            chung_chi_nft: [],
            thong_tin: {},
            chia_se: {}
        }
    },
    mounted() {
        this.getChungChiNft();

    },
    methods: {
        getChungChiNft() {
            baseRequest
                .get('hoc-vien/chung-chi-nft')
                .then((res) => {
                    this.chung_chi_nft = res.data.data
                })
        },
        chiaSeNFT() {
            baseRequest
                .post('', this.chia_se)
                .then((res) => {
                    if(res.data.status){
                        this.$toast.success(res.data.message);
                        this.getProfile();
                    }else{
                        this.$toast.error(res.data.message);
                    }
                })
        }

    }
}
</script>
<style></style>