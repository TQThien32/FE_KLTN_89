<template>
    <div class="d-flex justify-content-start">
        <i class="fa-solid fa-list me-2 text-light" style="font-size: 35px;"></i>
        <b>
            <h2 class="text-light">QUẢN LÝ TÀI KHOẢN - CƠ QUAN XÁC THỰC</h2>
        </b>
    </div>
    <div class="card mt-2">
        <div class="card-header">
            <h4 class="mt-2">Danh Sách Tài Khoản</h4>
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
                <th class="align-middle text-center">Tên Cơ Quan</th>
                <th class="align-middle text-center">Email</th>
                <th class="align-middle text-center">HotLine</th>
                <th class="align-middle text-center">Địa Chỉ</th>
                <th class="align-middle text-center">Chức Vụ</th>
                <th class="align-middle text-center">Avatar</th>
                <th class="align-middle text-center">Trạng Thái</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="align-middle text-center">1</th>
                <td class="align-middle text-center">Công Ty abc</td>
                <td class="align-middle text-center">abc@gmail.com</td>
                <td class="align-middle text-center">1112345667</td>
                <td class="align-middle text-center">120 Nguyễn Văn Linh</td>
                <td class="align-middle text-center">Nhà tuyển dụng, cơ quan xác thực</td>
                <td class="align-middle text-center">
                    <img src="https://cdn-icons-png.freepik.com/256/818/818100.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid" 
                           alt="" style="width: 50px; height: 50px; border-radius: 50%;">
                </td>
                <td class="align-middle text-center">
                    <button class="btn btn-success">Hoạt động</button>
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
<style></style>