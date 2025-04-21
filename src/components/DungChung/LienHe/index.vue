<template>
    <br><br>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <label class="mt-2">Họ và tên*</label>
                    <input type="text" class="form-control mb-4 mt-2" name="" id="">
                    <label>Số điện thoại*</label>
                    <input type="tel" class="form-control mb-4 mt-2" name="" id="">
                    <label>Tiêu đề</label>
                    <input type="text" class="form-control mb-4 mt-2" name="" id="">
                    <label>Nội dung*</label>
                    <textarea class="form-control form-control-lg mb-4 mt-2" rows="4" name="" id=""
                        style="width: 100%;"></textarea>
                    <button class="btn btn-chinh">Gửi tin nhắn</button>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <h3 class="text-light">Liên Hệ</h3>
            <hr style="width: 50px; border-top: 3px solid #c19b6b;">
            <p class="text-light">
                Nếu bạn có bất kỳ thắc mắc nào liên quan đến hệ thống chứng nhận học vấn bằng NFT, vui lòng liên hệ với
                chúng tôi.
                Chúng tôi luôn sẵn sàng hỗ trợ tổ chức cấp chứng chỉ, học viên và các đơn vị tuyển dụng trong quá trình
                xác minh thông tin.
            </p>
            <h4 class="mt-5 text-light">Chi Tiết Liên Hệ</h4>
            <hr style="width: 50px; border-top: 3px solid #c19b6b;">
            <p class="text-light"><i class="fa-solid fa-location-dot me-2"></i>242 Tô Hiệu, Hòa Minh, Liên Chiểu, Thành
                Phố Đà Nẵng</p>
            <hr>
            <p class="text-light"><i class="fa-solid fa-phone me-2"></i>0911164346 - 1900111111</p>
            <hr>
            <p class="text-light"><i class="fa-solid fa-envelope me-2"></i>ht210603@gmail.com</p>
        </div>
    </div>
    <br>
    <h2 class="text-start mt-5 text-light">Địa chỉ </h2>
    <br>
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45096.543004091254!2d108.21116618498392!3d15.990965560225952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142191f83d9d145%3A0x53af99351e51494f!2zMjQyIFTDtCBIaeG7h3UsIEhvw6AgTWluaCwgTGnDqm4gQ2hp4buDdSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1745001551728!5m2!1svi!2s"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.map-container {
    width: 100%;
    height: 450px;
    margin-left: 0;
    margin-right: 0;
}

h2 {
    text-align: center;
    margin-bottom: 15px;
}

/* màu nền card */
.card {
    background: linear-gradient(145deg, #f0f2f5, #d6d8db);
    /* gradient nhẹ */
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    /* đổ bóng mượt hơn */
    border: 1px solid #cfd4da;
    /* viền mềm mại hơn */
    color: #2c2f36;
    /* màu chữ trầm, rõ ràng */
    transition: all 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    /* hiệu ứng nổi khi hover */
}
</style>