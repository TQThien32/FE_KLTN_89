<template >
     <div class="d-flex justify-content-start">
        
        <i class="fa-solid fa-wallet me-2 text-light" style="font-size: 35px;"></i>
        <b>
            <h2 class="text-light">QUẢN LÝ GIAO DỊCH</h2>
        </b>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <h4 class="mt-2">Danh Sách Giao Dịch</h4>
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
        
            <table class="table table-hover table-bordered mt-3">
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
            <tr>
                <th class="align-middle text-center">1</th>
                <td class="align-middle text-center">Trần Quang Thiên</td>
                <td class="align-middle text-center">11:11 20/10/2024</td>
                <td class="align-middle text-center">200000 đ</td>
                <td class="align-middle text-center">Giao dịch CK den NFT</td>
                <td class="align-middle text-center">https://skfbksdbfksdfsdf.com</td>
                
            </tr>

 
        </tbody>
    </table>
        </div>
    </div>


</template>
<script>
export default {
    
}
</script>
<style >
    
</style>