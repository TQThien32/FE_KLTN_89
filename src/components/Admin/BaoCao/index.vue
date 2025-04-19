<template>
    <h2 class=" text-light"><i class="fa-solid fa-layer-group"></i> Báo Cáo</h2>
    <div class="card-body mt-3">
        <div class="row">
            <div class="col-lg-4">
                <div class="card bg-primary" style="box-shadow: none;">
                    <div class="card-body text-center">
                        <i class="fa-solid fa-user text-dark" style="font-size: 40px;"></i>
                        <h4 class="card-title mt-2  text-dark">Tài Khoản</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-dark">100</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card bg-warning" style="box-shadow: none;">
                    <div class="card-body text-center">
                        <i class="fa-solid fa-book-open-reader text-dark" style="font-size: 40px;"></i>
                        <h4 class="card-title mt-2  text-dark">Chứng Chỉ</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-dark">100</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card bg-success" style="box-shadow: none;">
                    <div class="card-body text-center">
                        <i class="fa-regular fa-file text-dark" style="font-size: 40px;"></i>
                        <h4 class="card-title mt-2  text-dark">Báo Cáo</h4>
                        <h6 class="card-subtitle mb-2 text-body-secondary text-dark">9</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="card" style="box-shadow: none;">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h4  class="mt-2">Danh Sách Báo Cáo</h4>
                    <button class="btn btn-chinh" data-bs-toggle="modal" data-bs-target="#them">Thêm Báo Cáo</button>
                </div>
            </div>
            <!-- Modal thêm báo cáo -->
            <div class="modal fade" id="them" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Báo Cáo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <label>Tiêu Đề</label>
                                    <input type="text" class="form-control mb-2" id="">
                                </div>
                                <div class="col-lg-6">
                                    <label>Ngày Tạo</label>
                                    <input type="date" class="form-control mb-2" id="">
                                </div>
                            </div>
                            <label>Nội Dung</label>
                            <input type="text" class="form-control mb-2" style="height: 70px; font-size: 20px;" id="">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary">Tạo Báo Cáo</button>
                        </div>
                    </div>
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
<style></style>