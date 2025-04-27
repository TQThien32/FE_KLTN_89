<template>
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand ">
                <div class="topbar-logo-header">
                    <div class="">
                        <img src="https://cdn-icons-png.freepik.com/256/8523/8523899.png?ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                            style="height: 50px; width: 50px;" class="logo-icon" alt="logo icon">
                    </div>
                    <div class="">
                        <h4 class="logo-text text-dark"><b>NFT CERTIFICATE</b></h4>
                    </div>
                </div>
                <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                <!-- <div class="search-bar flex-grow-1">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                        <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#"><i
                                    class="fa-solid fa-house"></i> Trang chủ</a>
                        </li>
                        <li class="nav-item"> <a class="nav-link ms-3" href="#"><i class="fa-solid fa-user"></i> Giới thiệu</a>
                        </li>
                        <li class="nav-item"> <a class="nav-link ms-3" href="#"><i class="fa-solid fa-phone"></i> Liên hệ</a>
                        </li>
                    </ul>
                </div> -->
                <div class="top-menu ms-auto">
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item mobile-search-icon">
                            <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                            </a>
                        </li>
                        
                        <li class="nav-item dropdown dropdown-large">
                            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                href="/hoc-vien/quan-ly-vi-NFT">
                                <i class='bx bx-wallet' style="font-size: 30px"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown dropdown-large">
                            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                href="/hoc-vien/thanh-toan">
                                <i class='bx bx-cart' style="font-size: 30px"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown dropdown-large">
                            <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span
                                    class="alert-count ms-2">7</span>
                                <i class='bx bx-bell' style="font-size: 30px"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end dropdown-wide">
                                <a href="javascript:;">
                                    <div class="msg-header">
                                        <p class="msg-header-title"><b>Thông báo</b></p>
                                        <a href="/hoc-vien/xem-thong-bao" class="ms-auto">Xem tất cả</a>
                                    </div>
                                </a>
                                <div class="header-notifications-list">
                                    <a class="dropdown-item" href="javascript:;">
                                        <div class="d-flex align-items-center w-100">
                                            <a href="/hoc-vien/xem-thong-bao/chi-tiet-thong-bao" class="w-100 text-decoration-none">
                                                <div class="d-flex align-items-start py-2 w-100">
                                                    <!-- Tiêu đề -->
                                                    <div class="me-2" style="width: 100px;">
                                                        <p class="mb-0 text-dark"><b>Wordpress</b></p>
                                                    </div>
                                                    <!-- Nội dung -->
                                                    <div class="me-2 flex-grow-1">
                                                        <p class="mb-0 text-muted text-truncate"
                                                            style="max-width: 400px;">
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable...
                                                        </p>
                                                    </div>
                                                    <!-- Thời gian -->
                                                    <div style="width: 80px;" class="text-end">
                                                        <p class="mb-0 email-time">5:56 PM</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </a>

                                    <a class="dropdown-item" href="javascript:;">
                                        <div class="d-flex align-items-center w-100">
                                            <a href="/hoc-vien/xem-thong-bao/chi-tiet-thong-bao" class="w-100 text-decoration-none">
                                                <div class="d-flex align-items-start py-2 w-100">
                                                    <!-- Tiêu đề -->
                                                    <div class="me-2" style="width: 100px;">
                                                        <p class="mb-0 text-dark"><b>Locanto</b></p>
                                                    </div>
                                                    <!-- Nội dung -->
                                                    <div class="me-2 flex-grow-1">
                                                        <p class="mb-0 text-muted text-truncate"
                                                            style="max-width: 400px;">
                                                            It is a long established fact that a reader will be
                                                            distracted by the readable...
                                                        </p>
                                                    </div>
                                                    <!-- Thời gian -->
                                                    <div style="width: 80px;" class="text-end">
                                                        <p class="mb-0 email-time">5:56 PM</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </a>
                                    
                                    <!-- <a class="dropdown-item" href="javascript:;">
                                        <div class="d-flex align-items-center">
                                            <a href="app-emailread.html">
                                                <div class="d-md-flex align-items-center email-message py-1">
                                                    <p class="mb-0 text-dark me-3"><b>Locanto</b>
                                                    </p>
                                                    <p class="mb-0 me-2">The point of using Lorem Ipsum is that it has a
                                                        more-or-less normal...</p>

                                                    <div style="width: 70px;" class="text-end">
                                                        <p class="mb-0 email-time ">5:54 PM</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </a> -->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="user-box dropdown">
                    <a class="d-flex align-items-center  dropdown-toggle dropdown-toggle-nocaret" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../../assets/images/avatars/avatar-2.png" class="user-img" alt="user avatar">
                        <div class="user-info ps-3">
                            <p class="user-name mb-0">{{ten_hoc_vien}}</p>
                            <p class="designattion mb-0">Học Viên</p>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="/hoc-vien/thong-tin-ca-nhan"><i
                                    class="bx bx-user"></i><span>Thông Tin Cá Nhân</span></a>
                        </li>
                        <li><a class="dropdown-item" href="/hoc-vien/doi-mat-khau"><i class="bx bx-cog"></i><span>Đổi
                                    Mật Khẩu</span></a>
                        </li>
                        <li>
                            <div class="dropdown-divider mb-0"></div>
                        </li>
                        <li><a class="dropdown-item" href="javascript:;"><i class='bx bx-log-out-circle'></i><span>Đăng
                                    Xuất</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
import baseRequest from '../../core/baseRequest'

export default {
    data() {
        return {
            ten_hoc_vien: '',
            auth: false,
        }
    },
    computed: {
        getTenQTV() {
            return localStorage.getItem('ten_hoc_vien');
        },
    },
    mounted() {
        this.checkLogin();
        this.ten_hoc_vien = localStorage.getItem('ten_hoc_vien')
    },
    methods: {
        checkLogin() {
            baseRequest
                .post('hoc-vien/kiem-tra-chia-khoa')
                .then((res) => {
                    if (res.data.status) {
                        this.auth = true
                    }
                })
        },
        dangXuat() {
            baseRequest
                .get('hoc-vien/dang-xuat')
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Thông báo<br>' + res.data.message);
                        window.localStorage.removeItem('chia_khoa_so1');
                        window.localStorage.removeItem('ten_hoc_vien');
                        this.$router.push('/');
                        this.mounted();
                       
                    } else {
                        this.$toast.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
    }}
</script>
<style scoped>
.navbar-nav .nav-link {
    font-size: 18px !important;
    /* Thay đổi giá trị này để chỉnh cỡ chữ */
}

.nav-link {
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-link:hover {
    transform: scale(1.2);
}


.dropdown-wide {
    min-width: 600px;
    /* hoặc 500px, 600px tùy bạn */
    max-width: 100%;
    /* tránh bị tràn */
}

.email-message p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 425px;
    /* Hoặc chiều rộng phù hợp */
}
</style>
