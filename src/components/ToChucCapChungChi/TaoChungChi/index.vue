<template>

    <div class="row">
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Danh Sách Tạo Chứng Chỉ</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle text-center">
                                <th>#</th>
                                <th>Họ và tên</th>
                                <th>Số CCCD</th>
                                <th>Số hiệu</th>
                                <th>Trình độ</th>
                                <th>Khóa Học</th>
                                <th>Kết quả</th>
                                <th>Ngày cấp</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle">
                                <td>1</td>
                                <td>Họ tên</td>
                                <td>Số cccd</td>
                                <td>AH437</td>
                                <td>Cao đẳng</td>
                                <td>K27</td>
                                <td>500</td>
                                <td>Ngày cấp</td>
                                <td class="align-middle text-center"><button type="button" class="btn btn-chinh" data-bs-toggle="modal"
                                        data-bs-target="#exampleSuccessModal">Tạo Chứng Chỉ</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Model -->
                <div class="modal fade" id="exampleSuccessModal" tabindex="-1" aria-hidden="true"
                    style="display: none;">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-trang">
                            <div class="modal-header">
                                <h5 class="modal-title text-black">Tạo Chứng Chỉ</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-black">
                                <div class="alert alert-dark" role="alert">
                                    <b>Bạn có chắc chắn muốn tạo chứng chỉ này không?</b>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-chinh">Xác minh</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>