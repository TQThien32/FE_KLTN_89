<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100 ">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/admin/trang-chu" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-house-chimney-window"></i>
                        </div>
                        <div class="menu-title">Trang Chủ</div>
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                    <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret"
                        data-bs-toggle="dropdown">
                        <div class="parent-icon"><i class="fa-solid fa-list"></i>
                        </div>
                        <div class="menu-title">Quản Lý Tài Khoản</div>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/admin/danh-sach-nhan-vien">
                                <a class="dropdown-item" href="index.html"><i class="fa-solid fa-right-long"></i>Tài
                                    khoản nhân viên</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/danh-sach-hoc-vien">
                                <a class="dropdown-item" href="index.html"><i class="fa-solid fa-right-long"></i>Tài
                                    khoản học viên</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/danh-sach-to-chuc-cap-chung-chi">
                                <a class="dropdown-item" href="index.html"><i class="fa-solid fa-right-long"></i>Tài
                                    khoản tổ chức cấp chứng chỉ</a>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/quan-ly-giao-dich" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-wallet"></i>
                        </div>
                        <div class="menu-title">Quản Lý Giao Dịch</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/ds-chung-chi-da-cap" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-book-open-reader"></i>
                        </div>
                        <div class="menu-title">Danh Sách Chứng Chỉ Đã Cấp</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/thong-ke" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-chart-column"></i>
                        </div>
                        <div class="menu-title">Thống Kê</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/bao-cao" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-layer-group"></i>
                        </div>
                        <div class="menu-title">Báo Cáo</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/gui-thong-bao" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-comments"></i>
                        </div>
                        <div class="menu-title">Thông Báo</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/phan-quyen" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-user-group"></i>
                        </div>
                        <div class="menu-title">Phân Quyền</div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* Nền menu chính (nav-container) */
.nav-container {
  background-color: #050f2d !important; /* Đổi nền menu chính thành #050f2d */
}

/* Màu chữ mặc định là trắng, padding và bo góc */
.nav-container .nav-link,
.nav-container .dropdown-item {
  color: white !important;

  padding-left: 14px;
  padding-right: 14px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hiệu ứng khi hover vào mục menu (chữ đen, nền trắng) */
.nav-container .nav-link:hover,
.nav-container .dropdown-item:hover {
  background-color: white !important;
  color: black !important;
}

/* Đặt nền của dropdown menu thành #050f2d */
.nav-container .dropdown-menu {
  background-color: #050f2d !important;
}

/* Màu chữ trong dropdown mặc định là trắng */
.nav-container .dropdown-menu .dropdown-item {
  color: white !important;
}

/* Hiệu ứng khi hover vào mục dropdown */
.nav-container .dropdown-menu .dropdown-item:hover {
  background-color: white !important;
  color: black !important;
}


</style>