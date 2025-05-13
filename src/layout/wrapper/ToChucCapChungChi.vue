<template>
    <div class="wrapper">
        <div class="header-wrapper">
            <TopToChuc></TopToChuc>
            <Menu></Menu>
        </div>
        <div class="page-wrapper bg-gradient-moonlit">
            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
        <Bot></Bot>
    </div>
</template>
<script>
import "../../assets/js/bootstrap.bundle.min.js";
import "../../assets/js/jquery.min.js";
import "../../assets/plugins/simplebar/js/simplebar.min.js";
import "../../assets/plugins/metismenu/js/metisMenu.min.js";
import "../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../../assets/js/index.js";
import "../../assets/js/app.js";
import Menu from "../components/MenuToChucCapChungChi.vue";
import Bot from "../components/Bot.vue";
import TopToChuc from "../components/TopToChuc.vue";

export default {
    name: "app",
    components: {
        TopToChuc,
        Menu,
        Bot
    }
}
</script>
<style>
@import "../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../assets/plugins/simplebar/css/simplebar.css";
@import "../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/css/pace.min.css";
@import "../../assets/css/bootstrap.min.css";
@import "../../assets/css/bootstrap-extended.css";
@import "../../assets/css/app.css";
@import "../../assets/css/icons.css";
@import "../../assets/css/dark-theme.css";
@import "../../assets/css/semi-dark.css";
@import "../../assets/css/header-colors.css";
.wrapper {
    background: black;
    min-height: 100vh; /* Đảm bảo chiếm toàn bộ chiều cao màn hình */
    display: flex;
    flex-direction: column;
}
</style>