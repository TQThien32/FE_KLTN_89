import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [

    // Admin
    {
        path : '/',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta: {layout : 'auth'},
    },

    {
        path : '/admin/trang-chu',
        component: ()=>import('../components/Admin/TrangChu/index.vue'),
        meta: {layout : 'Admin'},
    },

    {
        path : '/admin/danh-sach-hoc-vien',
        component: ()=>import('../components/Admin/HocVien/index.vue'),
        meta: {layout : 'Admin'},
    },

    {
        path : '/admin/danh-sach-to-chuc-cap-chung-chi',
        component: ()=>import('../components/Admin/ToChucCapChungChi/index.vue'),
        meta: {layout : 'Admin'},
    },

    {
        path : '/admin/danh-sach-nha-tuyen-dung-co-quan',
        component: ()=>import('../components/Admin/NhaTuyenDungCoQuan/indev.vue'),
        meta: {layout : 'Admin'},
    },

    // HocVien
    {
        path : '/hoc-vien/dang-nhap',
        component: ()=>import('../components/HocVien/DangNhap/index.vue'),
        meta: {layout : 'auth'},
    },

    {
        path : '/hoc-vien/dang-ky',
        component: ()=>import('../components/HocVien/DangKy/index.vue'),
        meta: {layout : 'auth'},
    },

    //NhaTuyenDungCoQuan
    {
        path : '/nha-tuyen-dung-co-quan/dang-nhap',
        component: ()=>import('../components/NhaTuyenDungCoQuan/DangNhap/index.vue'),
        meta: {layout : 'auth'},
    },

    {
        path : '/nha-tuyen-dung-co-quan/dang-ky',
        component: ()=>import('../components/NhaTuyenDungCoQuan/DangKy/index.vue'),
        meta: {layout : 'auth'},
    },

    //ToChucCapChungChi
    {
        path : '/to-chuc-cap-chung-chi/dang-nhap',
        component: ()=>import('../components/ToChucCapChungChi/DangNhap/index.vue'),
        meta: {layout : 'auth'},
    },

    {
        path : '/to-chuc-cap-chung-chi/dang-ky',
        component: ()=>import('../components/ToChucCapChungChi/DangKy/index.vue'),
        meta: {layout : 'auth'},
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router