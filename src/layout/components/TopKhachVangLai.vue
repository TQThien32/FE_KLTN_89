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
                <button class="btn btn-chinh" @click="goDangKy">Đăng Ký</button>
            </nav>
        </div>
    </header>
</template>
<script>
export default {

    methods: {
        goDangNhap() {
            this.$router.push('/dang-nhap')
            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'))
            modal.hide()
        },
        goDangKy() {
            this.$router.push('dang-ky')
            const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'))
            modal.hide()
        },
    }
}
</script>
<style>
</style>