<template>
    <div class="card">
        <div class="card-body d-flex justify-content-between">
            <h3 class="text-chinh">Ví NFT Chứng Chỉ</h3>
            <div class="d-flex justify-content-center text-chinh">
                <h5 class="mt-1 ">0xx3454...</h5>
                <i class="fa-solid fa-wallet ms-4 fa-2x "></i>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg" class="card-img-top" alt="anh chung chi">
                    <div class="card-body">
                        <p class="card-text"><b class="me-3">ID NFT</b>  <span>1234556</span></p>
                        <p class="card-text"><b class="me-3">Data URL</b>  <span>https://example.com/api/metadata/1</span></p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-chinh" data-bs-toggle="modal"
                                data-bs-target="#kiemtra">Kiểm tra thông tin</button>
                            <button class="btn btn-chinh" data-bs-toggle="modal"
                            data-bs-target="#chiase">Chia sẻ NFT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg" class="card-img-top" alt="anh chung chi">
                    <div class="card-body">
                        <p class="card-text"><b class="me-3">ID NFT</b>  <span>1234556</span></p>
                        <p class="card-text"><b class="me-3">Data URL</b>  <span>https://example.com/api/metadata/1</span></p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-chinh" data-bs-toggle="modal"
                                data-bs-target="#kiemtra">Kiểm tra thông tin</button>
                            <button class="btn btn-chinh" data-bs-toggle="modal"
                            data-bs-target="#chiase">Chia sẻ NFT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg" class="card-img-top" alt="anh chung chi">
                    <div class="card-body">
                        <p class="card-text"><b class="me-3">ID NFT</b>  <span>1234556</span></p>
                        <p class="card-text"><b class="me-3">Data URL</b>  <span>https://example.com/api/metadata/1</span></p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-chinh" data-bs-toggle="modal"
                                data-bs-target="#kiemtra">Kiểm tra thông tin</button>
                            <button class="btn btn-chinh" data-bs-toggle="modal"
                            data-bs-target="#chiase">Chia sẻ NFT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal kiểm tra dữ liệu-->
    <div class="modal fade" id="kiemtra" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Dữ liệu chứng chỉ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p><b>Tên Học Viên: </b> <span>Trần Tuấn</span></p>
                    <p><b>Số CCCD: </b> <span>123456</span></p>
                    <p><b>ID NFT: </b> <span>123456</span></p>
                    <p><b>Link Ảnh: </b> <a href="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg">https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg</a></p>
                    <p><b>Tên Tổ Chức Cấp Chứng Chỉ: </b> <span>Toeic</span></p>
                    <p><b>Họ Tên Người Đại Diện Tổ Chức: </b> <span>Trầm Quốc</span></p>
                    <p><b>Khóa Học: </b> <span>123456</span></p>
                    <p><b>Số Hiệu Chứng Chỉ: </b> <span>123456</span></p>
                    <p><b>Kết Quả: </b> <span>888</span></p>
                    <p><b>Ngày Cấp: </b> <span>21/12/2025</span></p>
                    <p><b>Tình Trạng: </b> <span>Vô Hiệu Hóa</span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal chia sẻ NFT-->
    <div class="modal fade" id="chiase" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Có Xác Nhận Chia Sẻ NFT ?</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label class="mt-2" for="">Tên Học Viên</label>
                    <input class="mt-2 form-control" type="text">
                    <label class="mt-2" for="">Số CCCD</label>
                    <input class="mt-2 form-control" type="number">
                    <label class="mt-2" for="">Số Điện Thoại</label>
                    <input class="mt-2 form-control" type="number">
                    <label class="mt-2" for="">ID NFT</label>
                    <input class="mt-2 form-control" type="text">
                    <label class="mt-2" for="">Email Cơ Quan Xác Thực</label>
                    <input class="mt-2 form-control" type="email" placeholder="Nhập email của Cơ Quan muốn xác thực NFT">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-chinh" data-bs-dismiss="modal">Chia sẻ</button>
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