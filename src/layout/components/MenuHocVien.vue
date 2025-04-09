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
        <nav class="navbar navbar-expand-xl w-100">
            <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    <router-link to="/hoc-vien/thong-tin-ca-nhan" class="nav-link">
                        <div class="parent-icon"><i class="fa-regular fa-user"></i>
                        </div>
                        <div class="menu-title">Quản Lý Tài Khoản</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/hoc-vien/yeu-cau-cap-nft" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-code-pull-request"></i>
                        </div>
                        <div class="menu-title">Gửi Yêu Cầu</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/hoc-vien/quan-ly-vi-NFT" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-wallet"></i>
                        </div>
                        <div class="menu-title">Quản Lý Ví NFT</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/hoc-vien/thanh-toan" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-credit-card"></i>
                        </div>
                        <div class="menu-title">Thanh Toán</div>
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
<style></style>