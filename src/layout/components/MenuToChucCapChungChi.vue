<template>
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">Rukada</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/to-chuc-cap-chung-chi/trang-chu" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-house-chimney-window"></i>
                        </div>
                        <div class="menu-title">Trang Chủ</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/to-chuc-cap-chung-chi/gioi-thieu" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-circle-user"></i>
                        </div>
                        <div class="menu-title">Giới Thiệu</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/to-chuc-cap-chung-chi/lien-he" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-phone"></i>
                        </div>
                        <div class="menu-title">Liên Hệ</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/to-chuc-cap-chung-chi/to-chuc-upload-chung-chi-hoc-vien" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-upload"></i>
                        </div>
                        <div class="menu-title">UpLoad Chứng Chỉ</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/to-chuc-cap-chung-chi/quan-ly-yeu-cau-cap" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-code-pull-request"></i>
                        </div>
                        <div class="menu-title">Quản Lý Yêu Cầu Cấp Chứng Chỉ</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/to-chuc-cap-chung-chi/vo-hieu-hoa-chung-chi" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-ban"></i>
                        </div>
                        <div class="menu-title">Vô Hiệu Hóa Chứng Chỉ</div>
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
  background-color: #000000 !important; /* Đổi nền menu chính thành #050f2d */
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
  background-color: #000000 !important;
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