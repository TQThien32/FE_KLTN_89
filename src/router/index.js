import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from './kiemTraAdmin'
import kiemTraHocVien from './kiemTraHocVien'
import kiemTraToChuc from './kiemTraToChuc'
const routes = [

    // Admin
    {
        path: '/admin/trang-chu',
        component: () => import('../components/Admin/TrangChu/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'Auth' },
    },

    {
        path: '/admin/thong-tin-admin',
        component: () => import('../components/Admin/ThongTinTaiKhoan/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/doi-mat-khau',
        component: () => import('../components/Admin/DoiMatKhau/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/danh-sach-hoc-vien',
        component: () => import('../components/Admin/HocVien/index.vue'),
        meta: { layout: 'Admin' },
        // beforeEnter: kiemTraAdmin,
    },

    {
        path: '/admin/danh-sach-to-chuc-cap-chung-chi',
        component: () => import('../components/Admin/ToChucCapChungChi/index.vue'),
        meta: { layout: 'Admin' },
    },

    {
        path: '/admin/danh-sach-co-quan-xac-thuc',
        component: () => import('../components/Admin/CoQuanXacThuc/indev.vue'),
        meta: { layout: 'Admin' },
    },

    {
        path: '/admin/danh-sach-nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue'),
        meta: { layout: 'Admin' },
    },

    {
        path: '/admin/gui-thong-bao',
        component: () => import('../components/Admin/GuiThongBao/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/thong-ke',
        component: () => import('../components/Admin/ThongKe/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/bao-cao',
        component: () => import('../components/Admin/BaoCao/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/ds-chung-chi-da-cap',
        component: () => import('../components/Admin/DSChungChiDaCap/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/quan-ly-giao-dich',
        component: () => import('../components/Admin/Quanlygiaodich/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/danh-sach-chung-chi-da-cap',
        component: () => import('../components/Admin/DSChungChiDaCap/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/quen-mat-khau',
        component: () => import('../components/Admin/AdminQuenMatKhau/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/admin/phan-quyen',
        component: () => import('../components/Admin/PhanQuyen/index.vue'),
        meta: { layout: 'Admin' },
    },
    {
        path: '/admin/lay-lai-mat-khau/:hash_reset',
        component: () => import('../components/Admin/NhanLaiMatKhau/index.vue'),
        meta: { layout: 'auth' },
        props: true
    },
    // HocVien
    {
        path: '/hoc-vien/trang-chu',
        component: () => import('../components/HocVien/TrangChu/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/hoc-vien/dang-nhap',
        component: () => import('../components/HocVien/DangNhap/index.vue'),
        meta: { layout: 'Auth' },
    },

    {
        path: '/hoc-vien/dang-ky',
        component: () => import('../components/HocVien/DangKy/index.vue'),
        meta: { layout: 'Auth' },
    },

    {
        path: '/hoc-vien/yeu-cau-cap-nft',
        component: () => import('../components/HocVien/YeuCau/index.vue'),
        meta: { layout: 'HocVien' },
    },

    {
        path: '/hoc-vien/thong-tin-ca-nhan',
        component: () => import('../components/HocVien/ThongTinCaNhan/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/hoc-vien/doi-mat-khau',
        component: () => import('../components/HocVien/DoiMatKhau/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/hoc-vien/quan-ly-vi-NFT',
        component: () => import('../components/HocVien/QuanLyViNFT/index.vue'),
        meta: { layout: 'HocVien' },
    },

    {
        path: '/hoc-vien/thanh-toan',
        component: () => import('../components/HocVien/ThanhToan/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/hoc-vien/chi-tiet-thanh-toan',
        component: () => import('../components/HocVien/ChiTietThanhToan/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/hoc-vien/thanh-toan-thanh-cong',
        component: () => import('../components/HocVien/ChiTietThanhToan/thanhcong.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/hoc-vien/quen-mat-khau',
        component: () => import('../components/HocVien/HocVienQuenMatKhau/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/hoc-vien/lay-lai-mat-khau/:hash_reset',
        component: () => import('../components/HocVien/NhanLaiMatKhau/index.vue'),
        meta: { layout: 'auth' },
        props: true
    },
    {
        path: '/hoc-vien/xem-thong-bao',
        component: () => import('../components/HocVien/XemThongBao/index.vue'),
        meta: { layout: 'HocVien' },
        props: true
    },
    {
        path: '/hoc-vien/xem-thong-bao/chi-tiet-thong-bao',
        component: () => import('../components/HocVien/XemThongBao/chitietthongbao.vue'),
        meta: { layout: 'HocVien' },
        props: true
    },

   
    //ToChucCapChungChi
    {
        path: '/to-chuc-cap-chung-chi/trang-chu',
        component: () => import('../components/ToChucCapChungChi/TrangChu/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },
    {
        path: '/to-chuc-cap-chung-chi/dang-nhap',
        component: () => import('../components/ToChucCapChungChi/DangNhap/index.vue'),
        meta: { layout: 'Auth' },
    },

    {
        path: '/to-chuc-cap-chung-chi/dang-ky',
        component: () => import('../components/ToChucCapChungChi/DangKy/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/to-chuc-cap-chung-chi/thong-tin-to-chuc',
        component: () => import('../components/ToChucCapChungChi/ThongTinTaiKhoan/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },

    {
        path: '/to-chuc-cap-chung-chi/doi-mat-khau',
        component: () => import('../components/ToChucCapChungChi/DoiMatKhau/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },

    {
        path: '/to-chuc-cap-chung-chi/quan-ly-yeu-cau-cap',
        component: () => import('../components/ToChucCapChungChi/QuanLyYeuCauCap/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },

    {
        path: '/to-chuc-cap-chung-chi/tao-chung-chi',
        component: () => import('../components/ToChucCapChungChi/TaoChungChi/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },

    {
        path: '/to-chuc-cap-chung-chi/vo-hieu-hoa-chung-chi',
        component: () => import('../components/ToChucCapChungChi/VoHieuHoaChungChi/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },
    {
        path: '/to-chuc-cap-chung-chi/to-chuc-upload-chung-chi-hoc-vien',
        component: () => import('../components/ToChucCapChungChi/ToChucUploadChungChiHocVien/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
    },
    {
        path: '/to-chuc-cap-chung-chi/quen-mat-khau',
        component: () => import('../components/ToChucCapChungChi/ToChucQuenMatKhau/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/to-chuc-cap-chung-chi/lay-lai-mat-khau/:hash_reset',
        component: () => import('../components/ToChucCapChungChi/NhanLaiMatKhau/index.vue'),
        meta: { layout: 'auth' },
        props: true
    },
    {
        path: '/to-chuc-cap-chung-chi/xem-thong-bao',
        component: () => import('../components/ToChucCapChungChi/XemThongBao/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        props: true
    },
    {
        path: '/to-chuc-cap-chung-chi/xem-thong-bao/chi-tiet-thong-bao',
        component: () => import('../components/ToChucCapChungChi/XemThongBao/chitietthongbao.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        props: true
    },

    //DungChung

    {
        path: '/dung-chung/xem-thong-bao',
        component: () => import('../components/DungChung/XemThongBao/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/dung-chung/chi-tiet-thong-bao',
        component: () => import('../components/DungChung/ChiTietThongBao/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/dung-chung/trang-chu',
        component: () => import('../components/DungChung/TrangChu/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/dung-chung/lien-he',
        component: () => import('../components/DungChung/LienHe/index.vue'),
        meta: { layout: 'HocVien' },
    },
    {
        path: '/dung-chung/gioi-thieu',
        component: () => import('../components/DungChung/GioiThieu/index.vue'),
        meta: { layout: 'HocVien' },
    },

    // Khách Vãng Lai
    {
        path: '/',
        component: () => import('../components/KhachVangLai/TrangChu/index.vue'),
        meta: { layout: 'KhachVangLai' },
    },
    {
        path: '/khach-vang-lai/gioi-thieu',
        component: () => import('../components/KhachVangLai/GioiThieu/index.vue'),
        meta: { layout: 'KhachVangLai' },
    },
    {
        path: '/khach-vang-lai/lien-he',
        component: () => import('../components/KhachVangLai/LienHe/index.vue'),
        meta: { layout: 'KhachVangLai' },
    },
    {
        path: '/dang-nhap',
        component: () => import('../components/KhachVangLai/DangNhap/index.vue'),
        meta: { layout: 'KhachVangLai' },
    },
    {
        path: '/dang-ky',
        component: () => import('../components/KhachVangLai/DangKy/index.vue'),
        meta: { layout: 'KhachVangLai' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router