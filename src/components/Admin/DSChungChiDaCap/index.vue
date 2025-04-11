<template>
    
        <b>
            <h2 class="text-light"><i class="fa-solid fa-book-open-reader" style="font-size: 35px;"></i> DANH SÁCH CHỨNG CHỈ ĐÃ CẤP</h2>
        </b>
    <div class="card mt-3">
        
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
                            <th class="text-center">STT</th>
                            <th class="text-center">Tên Học Viên</th>
                            <th class="text-center">Khóa Học</th>
                            <th class="text-center">Kết Quả</th>
                            <th class="text-center">Số Hiệu Chứng Chỉ</th>
                            <th class="text-center">Hình Ảnh</th>
                            <th class="text-center">Mã NFT</th>
                            <th class="text-center">Ngày Cấp</th>
                            <th class="text-center">Trạng Thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="align-middle text-center">1</th>
                            <td class="align-middle text-center">Nguyễn Văn A</td>
                            <td class="align-middle text-center">2024-2025</td>
                            <td class="align-middle text-center">Giỏi</td>
                            <td class="align-middle text-center">acb123</td>
                            <td class="align-middle text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YETvuSc6VuDUrf-xZ5reb2akTGJ80wyjzg&s" style="height: 100px;">
                            </td>
                            <td class="align-middle text-center">123456789</td>
                            <td class="align-middle text-center">1/1/2025</td>
                            <td class="align-middle text-center">
                                <button class="btn btn-success">Đã Cấp</button>
                            </td>
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
<style>
    
</style>