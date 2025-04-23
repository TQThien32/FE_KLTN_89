<template>
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand">
                <div class="topbar-logo-header">
                    <div class="">
                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                            style="height: 50px; width: 50px;" class="logo-icon" alt="logo icon">
                    </div>
                    <div class="">
                        <h4 class="logo-text text-dark"><b>NFT CERTIFICATE</b></h4>
                    </div>
                </div>
                <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>

                <div class="top-menu ms-auto">
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item mobile-search-icon">
                            <a class="nav-link" href="#"> <i class="bx bx-search"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <button class="btn btn-chinh me-2" @click="goDangNhap">Đăng Nhập</button>
                <button class="btn btn-chinh" data-bs-toggle="modal" data-bs-target="#exampleModal">Đăng Ký</button>
            </nav>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Đăng Ký</h1>
                    </div>
                    <div class="modal-body mt-2">
                        <h6>Bạn hãy chọn tác nhân mà bạn muốn đăng ký:</h6>
                        <div class="d-flex justify-content-start mt-3">
                            <button class="btn btn-chinh me-2" @click="goToToChuc">Tổ Chức</button>
                            <button class="btn btn-chinh" @click="goToHocVien">Học Viên</button>
                        </div>
                    </div>
                    <div class="modal-footer mt-2">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {

    methods: {
        goDangNhap() {
            this.$router.push('/hoc-vien/dang-ky')
            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'))
            modal.hide()
        },
        goToToChuc() {
            this.$router.push('/to-chuc-cap-chung-chi/dang-ky')
            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'))
            modal.hide()
        },
        goToHocVien() {
            this.$router.push('/hoc-vien/dang-ky')
            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'))
            modal.hide()
        }
    }
}
</script>
<style>
/* Nền mờ nhẹ cho modal backdrop */
.modal-backdrop.show {
    opacity: 0.5;
    background-color: #000;
}

/* Modal content bo góc, đổ bóng và màu nền tinh tế */
.modal-content {
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    background-color: #fefefe;
    border: none;
}

/* Header căn giữa + border dưới nhẹ */
.modal-header {
    border-bottom: 1px solid #e0e0e0;
    justify-content: center;
    background-color: #f8f9fa;
}

/* Title nổi bật hơn */
.modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c19b6b;
}

/* Body padding thoải mái */
.modal-body {
    padding: 1.5rem;
    font-size: 1.1rem;
    color: #333;
}

/* Footer border-top nhẹ */
.modal-footer {
    border-top: 1px solid #e0e0e0;
    justify-content: space-between;
    padding: 1rem 1.5rem;
}

/* Nút đẹp hơn */
.modal-footer .btn {
    padding: 8px 20px;
    border-radius: 10px;
    font-weight: 500;
}

.modal-footer .btn-primary {
    background-color: #c19b6b;
    border: none;
}

.modal-footer .btn-primary:hover {
    background-color: #ae875b;
}

.modal-footer .btn-secondary {
    background-color: #ddd;
    color: #333;
    border: none;
}

.modal-footer .btn-secondary:hover {
    background-color: #ccc;
}
</style>