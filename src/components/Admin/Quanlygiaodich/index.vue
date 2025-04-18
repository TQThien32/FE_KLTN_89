<template >
     <div class="d-flex justify-content-start">
        
        <i class="fa-solid fa-wallet me-2 text-light" style="font-size: 35px;"></i>
        <b>
            <h2 class="text-light">QUẢN LÝ GIAO DỊCH</h2>
        </b>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <h4 class="mt-2 text-light">Danh Sách Giao Dịch</h4>
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
                <th class="align-middle text-center">Thời Gian</th>
                <th class="align-middle text-center">Số tiền</th>
                <th class="align-middle text-center">Nội Dung</th>
                <th class="align-middle text-center">MetaData URL</th>
                
            </tr>
        </thead>
        <tbody>
            <!-- <template v-for="(value, index) in list_giao_dich" :key="index">
                <tr>
                <th class="align-middle text-center">{{ index + 1 }}</th>
                <td class="align-middle text-center">{{ value.ho_ten }}</td>
                <td class="align-middle text-center">{{ value.thoi_gian }}</td>
                <td class="align-middle text-center">{{ value.so_tien }}</td>
                <td class="align-middle text-center">{{ value.noi_dung }}</td>
                <td class="align-middle text-center">{{ value.MetaData_URL }}</td>
                
            </tr>
            </template> -->

 
        </tbody>
    </table>
        </div>
    </div>


</template>
<script>
export default {
    // data() {
    //     return {
    //         list_giao_dich: [],
    //     }
    // },
    // mounted() {
    //     this.loadData();
    // },
    // methods: {
    //     loadData() {
    //         axios
    //             .get('http://127.0.0.1:8000/api/admin/lich-su-giao-dich')
    //             .then((res) => {
    //                 this.list_giao_dich = res.data.data;
    //             });

    //     }
    // }
}
</script>
<style>
</style>