<template>
    <div class="d-flex justify-content-start">

        <i class="fa-solid fa-wallet me-2 text-light" style="font-size: 35px;"></i>
        <b>
            <h2 class="text-light">QUẢN LÝ GIAO DỊCH</h2>
        </b>
    </div>
    <div class="card mt-2" style="box-shadow: none;">
        <div class="card-header">
            <h4 class="mt-2">Danh Sách Giao Dịch Nhận</h4>
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
                        <th class="align-middle text-center">Người Gửi</th>
                        <th class="align-middle text-center">Email</th>
                        <th class="align-middle text-center">Thời Gian</th>
                        <th class="align-middle text-center">Số tiền</th>
                        <th class="align-middle text-center">Nội Dung</th>

                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_giao_dich_nhan" :key="index">
                        <tr>
                            <th class="align-middle text-center">{{ index + 1 }}</th>
                            <td class="align-middle text-center">{{ value.ho_ten }}</td>
                            <td class="align-middle text-center">{{ value.email }}</td>
                            <td class="align-middle text-center">{{ value.updated_at }}</td>
                            <td class="align-middle text-center">{{ value.tong_tien_thanh_toan }}</td>
                            <td class="align-middle text-center">{{ value.ma_don_hang }}</td>
                        </tr>
                    </template>


                </tbody>
            </table>
        </div>
    </div>

    <div class="card mt-2" style="box-shadow: none;">
        <div class="card-header">
            <h4 class="mt-2">Danh Sách Giao Dịch Gửi</h4>
        </div>
        <div class="card-body table-responsive">
           
            <table class="table table-hover mt-3">
                <thead>
                    <tr>
                        <th class="align-middle text-center">STT</th>
                        <th class="align-middle text-center">Nền Tảng Nhận</th>
                        <th class="align-middle text-center">Thời Gian</th>
                        <th class="align-middle text-center">Số tiền</th>
                        <th class="align-middle text-center">Nội Dung</th>
                        <th class="align-middle text-center">Contract URL</th>

                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_giao_dich_gui" :key="index">
                        <tr>
                            <td class="align-middle text-center">{{ index + 1 }}</td>
                            <td class="align-middle text-center">
                                {{ getAddress(value.raw_data?.contract[0]?.parameter?.value?.to_address) }}
                            </td>
                            <td class="align-middle text-center">
                                {{ formatTime(value.raw_data?.timestamp) }}
                            </td>
                            <td class="align-middle text-center">
                                {{ formatAmount(value.raw_data?.contract[0]?.parameter?.value?.amount) }} TRX
                            </td>
                            <td class="align-middle text-center">
                                {{ value.ret?.[0]?.contractRet }}
                            </td>
                            <td class="align-middle text-center">
                                <a :href="getTxURL(value.txID)" target="_blank">Xem</a>
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
import baseRequest from '../../../core/baseRequest';

export default {
    data() {
        return {
            list_giao_dich_nhan: [],
            list_giao_dich_gui: []
        }
    },
    mounted() {
        this.loadData();
        this.loadDataGDBlockChain();
    },
    methods: {
        loadData() {
            baseRequest
                .get('admin/lich-su-giao-dich-nhan')
                .then((res) => {
                    this.list_giao_dich_nhan = res.data.data;
                });

        },


        loadDataGDBlockChain() {
            axios.get('https://api.shasta.trongrid.io/v1/accounts/TLAVDL2CrezH4ZFeiGjHsa7i8RSdjDXSnP/transactions', {
                headers: {
                    'TRON-PRO-API-KEY': 'YOUR_API_KEY' // nếu cần
                }
            })
                .then((res) => {
                    this.list_giao_dich_gui = res.data.data;
                })
                .catch((err) => {
                    console.error("Lỗi khi gọi API TRON:", err);
                });
        },

        formatTime(timestamp) {
            if (!timestamp) return '';
            const date = new Date(timestamp);
            return date.toLocaleString(); // hoặc dùng moment.js
        },

        formatAmount(amount) {
            return (amount / 1_000_000).toFixed(2); // TRON dùng đơn vị sun (1 TRX = 1_000_000 sun)
        },

        getAddress(hexAddress) {
            if (!hexAddress) return '';
            // bạn có thể dùng thư viện `tronweb` để decode, hoặc để hex như vậy
            return hexAddress;
        },

        getTxURL(txID) {
            return `https://shasta.tronscan.org/#/transaction/${txID}`;
        }


    }
}
</script>
<style></style>