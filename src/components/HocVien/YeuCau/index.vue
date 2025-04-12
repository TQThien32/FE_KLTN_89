<template>
    <div class="row">
        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-header ">
                    <h4 class="">Gửi Yêu Cầu Cấp Chứng Chỉ</h4>
                </div>
                <div class="card-body">
                    <label class="mt-2" for="">Tên Học Viên</label>
                    <input class="mt-2 form-control" type="text">
                    <label class="mt-2" for="">Số CCCD</label>
                    <input class="mt-2 form-control" type="text">
                    <label class="mt-2" for="">Số Hiệu Chứng Chỉ</label>
                    <input class="mt-2 form-control" type="text">
                    <label class="mt-2" for="">Email</label>
                    <input class="mt-2 form-control" type="email">
                    <label class="mt-2 w-100" for="">Gửi đến</label>
                    <select class="mt-2 w-100" name="" id="" style="height: 38px;">
                        <option value="">Tất cả</option>
                        <option value="">Trường ....</option>
                        <option value="">Tổ chức Toiec</option>
                    </select>
                    <label class="mt-2" for="">Nội Dung</label>
                    <textarea class="mt-2 form-control" name="" id="" placeholder="Nhập nội dung yêu cầu"></textarea>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-chinh" data-bs-toggle="modal" data-bs-target="#XNgui">Gửi</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8 col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="">Danh Sách Yêu Cầu Cấp Đã Gửi</h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="align-middle text-center">
                                <th>#</th>
                                <th>Gửi Đến</th>
                                <th>Nội Dung</th>
                                <th>Thời Gian Gửi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="align-middle text-center">1</th>
                                <td>Trường ...</td>
                                <td>gvbhjn</td>
                                <td>ngày giờ gửi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal xác nhận gửi-->
    <div class="modal fade" id="XNgui" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Có Gửi Yêu Cầu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert">
                        <p>Sẽ gửi yêu cầu cấp chứng chỉ đến Trường ....</p>
                        <p>Với Nội dung: ....</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Gửi</button>
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