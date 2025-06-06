import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from './kiemTraAdmin'
import kiemTraHocVien from './kiemTraHocVien'
import kiemTraToChuc from './kiemTraToChuc'
const routes = [

    // Admin
    {
        path: '/admin/thong-tin-admin',
        component: () => import('../components/Admin/ThongTinTaiKhoan/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/doi-mat-khau',
        component: () => import('../components/Admin/DoiMatKhau/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/danh-sach-hoc-vien',
        component: () => import('../components/Admin/HocVien/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },

    {
        path: '/admin/danh-sach-to-chuc-cap-chung-chi',
        component: () => import('../components/Admin/ToChucCapChungChi/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },

    {
        path: '/admin/danh-sach-nhan-vien',
        component: () => import('../components/Admin/NhanVien/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },

    {
        path: '/admin/gui-thong-bao',
        component: () => import('../components/Admin/GuiThongBao/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/thong-ke',
        component: () => import('../components/Admin/ThongKe/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/bao-cao',
        component: () => import('../components/Admin/BaoCao/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/ds-chung-chi-da-cap',
        component: () => import('../components/Admin/DSChungChiDaCap/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/quan-ly-giao-dich',
        component: () => import('../components/Admin/Quanlygiaodich/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/danh-sach-chung-chi-da-cap',
        component: () => import('../components/Admin/DSChungChiDaCap/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/quan-ly-chung-chi',
        component: () => import('../components/Admin/QuanLyChungChi/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
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
        beforeEnter: kiemTraAdmin,
    },
    {
        path: '/admin/lay-lai-mat-khau/:hash_reset',
        component: () => import('../components/Admin/NhanLaiMatKhau/index.vue'),
        meta: { layout: 'auth' },
        beforeEnter: kiemTraAdmin,
        props: true
    },
    {
        path: '/admin/yeu-cau-cap-nft',
        component: () => import('../components/Admin/CapNFT/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
        props: true
    },
    {
        path: '/admin/tin-nhan',
        component: () => import('../components/Admin/TinNhan/index.vue'),
        meta: { layout: 'Admin' },
        beforeEnter: kiemTraAdmin,
    },

// học viên

    
    {
        path: '/hoc-vien/yeu-cau-cap-nft',
        component: () => import('../components/HocVien/YeuCau/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },

    {
        path: '/hoc-vien/thong-tin-ca-nhan',
        component: () => import('../components/HocVien/ThongTinCaNhan/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/doi-mat-khau',
        component: () => import('../components/HocVien/DoiMatKhau/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/quan-ly-vi-NFT',
        component: () => import('../components/HocVien/QuanLyViNFT/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },

    {
        path: '/hoc-vien/thanh-toan',
        component: () => import('../components/HocVien/ThanhToan/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/chi-tiet-thanh-toan',
        component: () => import('../components/HocVien/ChiTietThanhToan/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/thanh-toan-thanh-cong',
        component: () => import('../components/HocVien/ChiTietThanhToan/thanhcong.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
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
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/xem-thong-bao/chi-tiet-thong-bao/:id',
        component: () => import('../components/HocVien/XemThongBao/chitietthongbao.vue'),
        meta: { layout: 'HocVien' },
        props: true,
        beforeEnter: kiemTraHocVien,
    },
     {
        path: '/hoc-vien/NFT-gui-den',
        component: () => import('../components/HocVien/NFTGuiDen/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/chi-tiet-NFT-gui-den/:id',
        component: () => import('../components/HocVien/NFTGuiDen/chitietNFTguiden.vue'),
        meta: { layout: 'HocVien' },
        props: true,
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/trang-chu',
        component: () => import('../components/HocVien/TrangChu/index.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/gioi-thieu',
        component: () => import('../components/HocVien/TrangChu/gioithieu.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
    {
        path: '/hoc-vien/lien-he',
        component: () => import('../components/HocVien/TrangChu/lienhe.vue'),
        meta: { layout: 'HocVien' },
        beforeEnter: kiemTraHocVien,
    },
   

   
    //ToChucCapChungChi
    {
        path: '/to-chuc-cap-chung-chi/trang-chu',
        component: () => import('../components/ToChucCapChungChi/TrangChu/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    },
    {
        path: '/to-chuc-cap-chung-chi/gioi-thieu',
        component: () => import('../components/ToChucCapChungChi/TrangChu/gioithieu.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    },
    {
        path: '/to-chuc-cap-chung-chi/lien-he',
        component: () => import('../components/ToChucCapChungChi/TrangChu/lienhe.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    },
    {
        path: '/to-chuc-cap-chung-chi/thong-tin-to-chuc',
        component: () => import('../components/ToChucCapChungChi/ThongTinTaiKhoan/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    },

    {
        path: '/to-chuc-cap-chung-chi/doi-mat-khau',
        component: () => import('../components/ToChucCapChungChi/DoiMatKhau/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    },

    {
        path: '/to-chuc-cap-chung-chi/quan-ly-yeu-cau-cap',
        component: () => import('../components/ToChucCapChungChi/QuanLyYeuCauCap/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    
    },

    {
        path: '/to-chuc-cap-chung-chi/vo-hieu-hoa-chung-chi',
        component: () => import('../components/ToChucCapChungChi/VoHieuHoaChungChi/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
    },
    {
        path: '/to-chuc-cap-chung-chi/to-chuc-upload-chung-chi-hoc-vien',
        component: () => import('../components/ToChucCapChungChi/ToChucUploadChungChiHocVien/index.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        beforeEnter: kiemTraToChuc,
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
        beforeEnter: kiemTraToChuc,
    },
    {
        path: '/to-chuc-cap-chung-chi/xem-thong-bao/chi-tiet-thong-bao/:id',
        component: () => import('../components/ToChucCapChungChi/XemThongBao/chitietthongbao.vue'),
        meta: { layout: 'ToChucCapChungChi' },
        props: true,
        beforeEnter: kiemTraToChuc,
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