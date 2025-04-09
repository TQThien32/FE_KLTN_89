import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [

    // Admin
    {
        path : '/',
        component: ()=>import('../components/Admin/DangNhap/index.vue'),
        meta: {layout : 'Auth'},
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
        component: ()=>import('../components/Admin/CoQuanXacThuc/index.vue'),
        meta: {layout : 'Admin'},
    },
    {
        path : '/admin/gui-thong-bao',
        component: ()=>import('../components/Admin/GuiThongBao/index.vue'),
        meta: {layout : 'Admin'},
    },

    // HocVien
    {
        path : '/hoc-vien/dang-nhap',
        component: ()=>import('../components/HocVien/DangNhap/index.vue'),
        meta: {layout : 'Auth'},
    },

    {
        path : '/hoc-vien/dang-ky',
        component: ()=>import('../components/HocVien/DangKy/index.vue'),
        meta: {layout : 'Auth'},
    },

    {
        path : '/hoc-vien/yeu-cau-cap-nft',
        component: ()=>import('../components/HocVien/YeuCau/index.vue'),
        meta: {layout : 'HocVien'},
    },

    {
        path : '/hoc-vien/thong-tin-ca-nhan',
        component: ()=>import('../components/HocVien/ThongTinCaNhan/index.vue'),
        meta: {layout : 'HocVien'},
    },
    
    {
        path : '/hoc-vien/quan-ly-vi-NFT',
        component: ()=>import('../components/HocVien/QuanLyViNFT/index.vue'),
        meta: {layout : 'HocVien'},
    },
    
    {
        path : '/hoc-vien/thanh-toan',
        component: ()=>import('../components/HocVien/ThanhToan/index.vue'),
        meta: {layout : 'HocVien'},
    },


    //CoQuanXacThuc
    {
        path : '/nha-tuyen-dung-co-quan/dang-nhap',
        component: ()=>import('../components/CoQuanXacThuc/DangNhap/index.vue'),
        meta: {layout : 'Auth'},
    },

    {
        path : '/nha-tuyen-dung-co-quan/dang-ky',
        component: ()=>import('../components/CoQuanXacThuc/DangKy/index.vue'),
        meta: {layout : 'Auth'},
    },
    {
        path : '/nha-tuyen-dung-co-quan/thong-tin-co-quan',
        component: ()=>import('../components/CoQuanXacThuc/ThongTinCoQuan/index.vue'),
        meta: {layout : 'CoQuanXacThuc'},
    },
    {
        path : '/nha-tuyen-dung-co-quan/xac-minh-nft',
        component: ()=>import('../components/CoQuanXacThuc/XacMinhNFT/index.vue'),
        meta: {layout : 'CoQuanXacThuc'},
    },
    {
        path : '/nha-tuyen-dung-co-quan/luu-nft-da-xac-minh',
        component: ()=>import('../components/CoQuanXacThuc/LuuNFTdaXacMinh/index.vue'),
        meta: {layout : 'CoQuanXacThuc'},
    },
    {
        path : '/nha-tuyen-dung-co-quan/quan-ly-nft-gui-den',
        component: ()=>import('../components/CoQuanXacThuc/QuanLyNFTguiDen/index.vue'),
        meta: {layout : 'CoQuanXacThuc'},
    },
    //ToChucCapChungChi
    {
        path : '/to-chuc-cap-chung-chi/dang-nhap',
        component: ()=>import('../components/ToChucCapChungChi/DangNhap/index.vue'),
        meta: {layout : 'Auth'},
    },

    {
        path : '/to-chuc-cap-chung-chi/dang-ky',
        component: ()=>import('../components/ToChucCapChungChi/DangKy/index.vue'),
        meta: {layout : 'Auth'},
    },
    {
        path : '/to-chuc-cap-chung-chi/thong-tin-to-chuc',
        component: ()=>import('../components/ToChucCapChungChi/ThongTinToChuc/index.vue'),
        meta: {layout : 'ToChucCapChungChi'},
    },

    {
        path : '/to-chuc-cap-chung-chi/quan-ly-yeu-cau-cap',
        component: ()=>import('../components/ToChucCapChungChi/QuanLyYeuCauCap/index.vue'),
        meta: {layout : 'ToChucCapChungChi'},
    },

    {
        path : '/to-chuc-cap-chung-chi/xm-thong-tin-yeu-cau',
        component: ()=>import('../components/ToChucCapChungChi/XacMinhTTYC/index.vue'),
        meta: {layout : 'ToChucCapChungChi'},
    },

    {
        path : '/to-chuc-cap-chung-chi/tao-chung-chi',
        component: ()=>import('../components/ToChucCapChungChi/TaoChungChi/index.vue'),
        meta: {layout : 'ToChucCapChungChi'},
    },
    
    {
        path : '/to-chuc-cap-chung-chi/vo-hieu-hoa-chung-chi',
        component: ()=>import('../components/ToChucCapChungChi/VoHieuHoaChungChi/index.vue'),
        meta: {layout : 'ToChucCapChungChi'},
    },

    //DungChung
    {
        path: '/dung-chung/quen-mat-khau',
        component: ()=>import('../components/DungChung/QuenMatKhau/index.vue'),
        meta: {layout : 'Auth'},
    },
    {
        path : '/dung-chung/xem-thong-bao',
        component: ()=>import('../components/DungChung/XemThongBao/index.vue'),
        meta: {layout : 'Auth'},
    },
    {
        path : '/dung-chung/chi-tiet-thong-bao',
        component: ()=>import('../components/DungChung/ChiTietThongBao/index.vue'),
        meta: {layout : 'Auth'},
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router