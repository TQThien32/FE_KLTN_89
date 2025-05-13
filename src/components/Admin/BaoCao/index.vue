<template>
    <h2 class=" text-light"><i class="fa-solid fa-layer-group"></i> Báo Cáo</h2>
    <div class="card-body mt-3">
        <div class="row">
            <div class="col-lg-2">
            </div>
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <h2 class="text-center"><b>Báo Cáo</b></h2>
                        <p><b>Tiêu Đề: </b> <span>Báo cáo tháng 5</span></p>
                        <p><b>Ngày Tạo: </b> <span>12/5/2025</span></p>
                        <br>
                        <P><b>THỐNG KÊ TỔNG DOANH THU & NFT ĐÃ CẤP</b></P>
                        <hr>
                        <p><b>Từ Ngày: </b> <span>12/5/2025</span></p>
                        <p><b>Tới Ngày: </b> <span>12/5/2025</span></p>
                        <br>
                        <hr>
                        <div class="row">
                            <div class="col-lg-6">
                                <p><b>Số chứng chỉ đã cấp: </b> <span>15</span></p>
                            </div>
                            <div class="col-lg-6">
                                <p><b>Số chứng chỉ đã cấp: </b> <span>12000000 VND</span></p>
                            </div>
                        </div>

                    </div>
                    <div class="card-footer text-end">
                        <button class="btn btn-chinh">Tạo báo cáo</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="box-shadow: none;">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h4 class="mt-2">Danh Sách Báo Cáo</h4>
                </div>
            </div>

            <div class="card-body">
                <table class="table table-hover table-bordered mt-3">
                    <thead>
                        <tr class="text-center">
                            <th>STT</th>
                            <th>Tiêu Đề</th>
                            <th>Người Tạo</th>
                            <th>Thời Gian</th>
                            <th>Nội dung</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <th class="align-middle">1</th>
                            <td class="align-middle">Báo cáo tháng 4</td>
                            <td class="align-middle">Admin</td>
                            <td class="align-middle">11:12 1/1/2025</td>
                            <td class="align-middle text-center">
                                <button class="btn btn-chinh">Xem Chi Tiết</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
label {
    font-size: 1.1rem;
    /* Tăng kích thước chữ cho label */
    font-weight: 500;
    /* Làm chữ đậm hơn một chút */
    color: #333;
    /* Màu chữ dễ đọc */
}

p {
    font-size: 1.1rem;
    /* Tăng kích thước chữ cho p */
    font-weight: 500;
    /* Làm chữ đậm hơn một chút */
    color: #444;
    /* Màu chữ nhẹ nhàng hơn màu đen tuyệt đối */
}
</style>