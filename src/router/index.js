import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraAdmin from './kiemTraAdmin'
import kiemTraCoQuan from './kiemTraCoQuan'
import kiemTraHocVien from './kiemTraHocVien'
import kiemTraToChuc from './kiemTraToChuc'
const routes = [

    // Admin
    {
        path: '/admin/dang-nhap',
        component: () => import('../components/Admin/DangNhap/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/admin/dang-ky',
        component: () => import('../components/Admin/DangKy/index.vue'),
        meta: { layout: 'Auth' },
    },

    {
        path: '/admin/trang-chu',
        component: () => import('../components/Admin/TrangChu/index.vue'),
        meta: { layout: 'Admin' },
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
        path : '/lay-lai-mat-khau/:hash_reset',
        component: ()=>import('../components/Admin/NhanLaiMatKhau/index.vue'),
        meta : {layout : 'auth'},
        props: true
    },
    // HocVien
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
        path: '/hoc-vien/quen-mat-khau',
        component: () => import('../components/HocVien/HocVienQuenMatKhau/index.vue'),
        meta: { layout: 'Auth' },
    },
   
    //CoQuanXacThuc
    {
        path: '/co-quan-xac-thuc/dang-nhap',
        component: () => import('../components/CoQuanXacThuc/DangNhap/index.vue'),
        meta: { layout: 'Auth' },
    },

    {
        path: '/co-quan-xac-thuc/dang-ky',
        component: () => import('../components/CoQuanXacThuc/DangKy/index.vue'),
        meta: { layout: 'Auth' },
    },
    {
        path: '/co-quan-xac-thuc/thong-tin-co-quan',
        component: () => import('../components/CoQuanXacThuc/ThongTinCoQuan/index.vue'),
        meta: { layout: 'CoQuanXacThuc' },
    },
    {
        path: '/co-quan-xac-thuc/xac-minh-nft',
        component: () => import('../components/CoQuanXacThuc/XacMinhNFT/index.vue'),
        meta: { layout: 'CoQuanXacThuc' },
    },
    {
        path: '/co-quan-xac-thuc/luu-nft-da-xac-minh',
        component: () => import('../components/CoQuanXacThuc/LuuNFTdaXacMinh/index.vue'),
        meta: { layout: 'CoQuanXacThuc' },
    },


    //ToChucCapChungChi
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

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router