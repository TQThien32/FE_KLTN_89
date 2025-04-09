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
                    <router-link to="/nha-tuyen-dung-co-quan/thong-tin-co-quan" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-user-tie"></i>
                        </div>
                        <div class="menu-title">Quản Lý Tài Khoản</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nha-tuyen-dung-co-quan/quan-ly-nft-gui-den" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-file-import"></i>
                        </div>
                        <div class="menu-title">Quản Lý NFT Gửi Đến</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nha-tuyen-dung-co-quan/xac-minh-nft" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-clipboard-check"></i>
                        </div>
                        <div class="menu-title">Xác Minh NFT Chứng Chỉ</div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/nha-tuyen-dung-co-quan/luu-nft-da-xac-minh" class="nav-link">
                        <div class="parent-icon"><i class="fa-solid fa-list-check"></i>
                        </div>
                        <div class="menu-title">Lưu Trữ NFT Đã Xác Minh</div>
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