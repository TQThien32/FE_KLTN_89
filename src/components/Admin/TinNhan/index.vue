<template>

    <b>
        <h2 class="text-light"><i class="fa-solid fa-address-book"></i> LIÊN HỆ
        </h2>
    </b>
    <div class="card mt-3" style="box-shadow: none;">
        <div class="card-header">
            <h4 class="mt-2"><i class="fa-solid fa-list-ol"></i> Danh sách liên hệ</h4>
        </div>
        <div class="card-body table-responsive">


            <table class="table table-hover mt-3">
                <thead>
                    <tr>
                        <th class="text-center">STT</th>
                        <th class="text-center">Người Gửi</th>
                        <th class="text-center">Số Điện Thoại</th>
                        <th class="text-center">Tiêu Đề</th>
                        <th class="text-center">Nội Dung</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_chung_chi" :key="index">
                        <tr>
                            <th class="align-middle text-center">{{ index + 1 }}</th>
                            <td class="align-middle text-center">{{ value.ho_ten }}</td>
                            <td class="align-middle text-center">{{ value.sdt }}</td>
                            <td class="align-middle text-center">{{ value.tieu_de }}</td>
                            <td class="align-middle text-center">{{ value.noi_dung }}</td>

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
            list_chung_chi: [],
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            baseRequest
                .get('admin/nhan-thong-tin-lien-he/xem')
                .then((res) => {
                    this.list_chung_chi = res.data.data;
                });
        }
    }
}
</script>
<style></style>