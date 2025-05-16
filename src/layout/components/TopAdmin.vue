<template>
    <header>
        <div class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand bg-light-primary">
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
                <div class="search-bar flex-grow-1">          
                </div>
                <div class="top-menu ms-auto">
                    <ul class="navbar-nav align-items-center">

                        <li class="nav-item dropdown dropdown-large">
                            <a  class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="/admin/tin-nhan">
                                <i class='bx bx-comment' style="font-size: 30px"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="border-end border-2 border-dark" style="height: 61px;"></div>
                <div class="user-box dropdown">
                    <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://img.freepik.com/free-vector/xaillustration-businessman-celebrating-success-by-raising-his-hands_10045-817.jpg?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid&w=740" class="user-img" alt="user avatar">
                        <div class="user-info ps-3">
                            <p class="user-name mb-0">{{ ten_qtv }}</p>
                           
                        </div>
                    </a>
                    
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="/admin/thong-tin-admin"><i class="bx bx-user"></i><span>Thông
                                    Tin Tài Khoản</span></a>
                        </li>
                        <li><a class="dropdown-item" href="/admin/doi-mat-khau"><i
                                    class="bx bx-cog"></i><span>Đổi Mật Khẩu</span></a>

                        </li>
                        <li><a class="dropdown-item" href="javascript:;" v-on:click="dangXuat()"><i
                                    class='bx bx-log-out-circle'></i><span>Đăng Xuất</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
import axios from 'axios'
import baseRequest from '../../core/baseRequest'
export default {
    data() {
        return {
            ten_qtv: '',
            auth: false,
        }
    },
    computed: {
        getTenQTV() {
            return localStorage.getItem('ten_admin');
        },
    },
    mounted() {
        this.checkLogin();
        this.ten_qtv = localStorage.getItem('ten_admin')
    },
    methods: {
        checkLogin() {
            baseRequest
                .post('admin/kiem-tra-chia-khoa')
                .then((res) => {
                    if (res.data.status) {
                        this.auth = true
                    }
                })
        },
        dangXuat() {
            baseRequest
                .get('admin/dang-xuat-all')
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success('Thông báo<br>' + res.data.message);
                        window.localStorage.removeItem('chia_khoa_so1');
                        window.localStorage.removeItem('ten_admin');
                        this.$router.push('/');
                        this.mounted();
                    } else {
                        this.$toast.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
    },
}
</script>
<style scoped>
.navbar-nav .nav-link {
    font-size: 18px !important;
    /* Thay đổi giá trị này để chỉnh cỡ chữ */
}

.nav-link {
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}


</style>