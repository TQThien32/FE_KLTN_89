<template>
    <div class="card-body d-flex justify-content-between">
        <h3 class="text-white"><i class="fa-solid fa-wallet ms-4"></i> Ví NFT Chứng Chỉ</h3>
    </div>
    <div class="container">
        <div class="row mt-3">
            <div class="input-group mb-3">

                <input v-if="is_cap_nhat == false" type="text" class="form-control" v-model="dia_chi_vi"
                    placeholder="Nhập địa chỉ ví" disabled>
                <input v-else type="text" class="form-control" placeholder="Nhập địa chỉ ví" v-model="dia_chi_vi">
                <a href="#" v-if="is_cap_nhat == false" class="input-group-text" id="basic-addon2"
                    v-on:click="is_cap_nhat = true">Cập Nhật</a>
                <a href="#" v-else class="input-group-text" id="basic-addon2" v-on:click="capNhatDiaChiVi()">Lưu</a>
            </div>
        </div>
        <div class="row">
            <template v-for="(value, index) in chung_chi_nft" :key="index">
                <div class="col-lg-4">
                    <div class="card">
                        <img v-bind:src="`http://localhost:8000/storage/uploads/images/${value.hinh_anh}`"
                            class="card-img-top" alt="ảnh chứng chỉ" style="height: 250px;">
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
                    <p><b>Mã NFT: </b><a href="#" v-on:click="copyToClipboard()">{{ substringWithDots(thong_tin.token)
                            }}</a></p>
                    <p><b>Tên Tổ Chức Cấp Chứng Chỉ: </b> <span>{{ thong_tin.ten_to_chuc }}</span></p>
                    <p><b>Khóa Học: </b> <span>{{ thong_tin.khoa_hoc }}</span></p>
                    <p><b>Số Hiệu Chứng Chỉ: </b> <span>{{ thong_tin.so_hieu_chung_chi }}</span></p>
                    <p><b>Kết Quả: </b> <span>{{ thong_tin.ket_qua }}</span></p>
                    <p><b>Ngày Cấp: </b> <span>{{ thong_tin.ngay_cap }}</span></p>
                    <p><b>View BlockChain: </b>
                        <a :href="`https://shasta.tronscan.org/#/transaction/${thong_tin.token}`" target="_blank">Xem
                            Trên
                            TronScan</a>
                    </p>
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
                    <input type="text" name="" id="" class="form-control" v-model="chia_se.token" disabled>
                    <label class="mt-2" for="">MetaData URL</label>
                    <input type="text" name="" id="" class="form-control" v-model="chia_se.MetaData_URL" disabled>
                    <label class="mt-2" for="">Email người nhận</label>
                    <input v-model="chia_se.email_nguoi_nhan" class="mt-2 form-control" type="email"
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
            chia_se: {},
            dia_chi_vi: "",
            is_cap_nhat: false,
        }
    },
    mounted() {
        this.getChungChiNft();
        this.getDataDiaChiVi();
    },
    methods: {
        copyToClipboard() {
            if (!navigator.clipboard) {
                console.warn('Clipboard API không hỗ trợ trình duyệt này.');
                return;
            }
            navigator.clipboard.writeText(this.thong_tin.token)
                .then(() => this.$toast.success("Copy thành công!"))
                .catch(err => console.error('Lỗi khi sao chép: ', err));
        },
        substringWithDots(text, maxLength = 50) {
            if (!text) return '';
            return text.length > maxLength
                ? text.slice(0, maxLength) + '...'
                : text;
        },
        getChungChiNft() {
            baseRequest
                .get('hoc-vien/chung-chi-nft')
                .then((res) => {
                    this.chung_chi_nft = res.data.data;
                    console.log(this.chung_chi_nft);

                })
        },
        getDataDiaChiVi() {
            baseRequest
                .get('hoc-vien/dia-chi-vi')
                .then((res) => {
                    this.dia_chi_vi = res.data.dia_chi_vi;
                })
        },
        capNhatDiaChiVi() {
            baseRequest
                .post('hoc-vien/dia-chi-vi/update', { dia_chi_vi: this.dia_chi_vi })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.getChungChiNft();
                        this.is_cap_nhat = false;
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
        },
        chiaSeNFT() {
            baseRequest
                .post('hoc-vien/gui-nft', this.chia_se)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                    } else {
                        this.$toast.error(res.data.message);
                    }
                })
        },

    }
}
</script>
<style></style>