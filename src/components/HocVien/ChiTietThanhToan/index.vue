<template>
    <div class="row">
        <h4 class="text-white"><i class="fa-solid fa-circle-user"></i> Thông Tin Người Dùng</h4>
        <div class="col-lg-6 col-md-6">
            <div class="card ">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="card-text"><b>Họ Và Tên:</b> <span class="ms-3">Trần Quang Thiên</span></p>
                            <p class="card-text"><b>Số CCCD:</b> <span class="ms-3">049203006689</span></p>
                        </div>
                        <div class="col-md-6">
                            <p class="card-text"><b>Email:</b> <span class="ms-3">thien@gmail.com</span></p>
                            <p class="card-text"><b>Số Điện Thoại:</b> <span class="ms-3">0912345678</span></p>
                        </div>
                    </div>

                </div>
            </div>
            <h4 class="text-white mt-5"><i class="fa-solid fa-circle-info"></i> Thông Tin Chứng Chỉ</h4>
            <div class="card card-hieuung">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 mt-3">
                            <p class="card-text"><b>Tổ Chức Cấp: </b><span class="ms-3">Đại Học Duy Tân</span></p>
                            <p class="card-text"><b>Ngày Cấp : </b><span class="ms-3">30/4/1975</span></p>
                            <p class="card-text"><b>Khóa Học : </b><span class="ms-3">2024 - 2027</span></p>
                            <p class="card-text"><b>Họ Và Tên : </b><span class="ms-3">Trần Quang Thiên</span></p>
                            <p class="card-text"><b>Số CCCD : </b><span class="ms-3">049203006689</span></p>
                            <p class="card-text"><b>Trình Độ: </b><span class="ms-3">Cử nhân</span></p>
                            <p class="card-text"><b>Kết Quả: </b><span class="ms-3">Giỏi</span></p>
                            <p class="card-text"><b>Số Hiệu Chứng Chỉ: </b><span class="ms-3">123456</span></p>
                        </div>
                        <div class="col-lg-7 col-md-7 mt-3">
                            <p class="card-text"><b>Hình Ảnh: </b></p>
                            <img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg"
                                class="" style="height: 220px;" alt="">
                        </div>
                    </div>
                </div>
                <div class="card-footer  text-end">
                    <p class="card-text me-5 text-primary" style="font-size:22px;"><b>120.000 đ</b></p>

                </div>

            </div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-lg-4 col-md-4">
            <div class="card">
                <div class="card-header">
                    <div class="d-flex justify-content-between mt-2">
                        <h4>Tổng Tiền</h4>
                        <h4><b>250.000 đ</b></h4>

                    </div>

                </div>
                <div class="card-body text-center">
                    <h5>Quét mã dưới đây bằng Internet Banking </h5>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Superqr.svg" alt=""
                        style="height: 150px;">
                    <p class="text-muted small mb-2">Lưu ý: Mã QR này sẽ hết hạn sau 24 giờ kể từ lúc tạo</p>
                    <p class="small mb-4"><b>Mã giao dịch:</b> <span class="ms-2">6491184871323425033</span></p>
                    <button type="button" class="btn btn-chinh btn-sm">Thanh toán xong, nhấn vào đây</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {

    },
    mounted() {

    },
    methods: {


    }
}
window.onload = function () {
    const checkAll = document.getElementById('checkRight');
    const checkboxes = document.querySelectorAll('.item-check');

    checkAll.addEventListener('change', () => {
        checkboxes.forEach(cb => {
            cb.checked = checkAll.checked;
        });
    });
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            checkAll.checked = allChecked;
        });
    });
}
</script>
<style scoped>
.card-hieuung {
    border: 2px solid transparent;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: none;
    /* bỏ viền mờ */
}

.card-hieuung:hover {
    box-shadow: 7px 0 0 0 #0064c8;
}
</style>