import axios from 'axios';
export default function (to, from, next) {
    axios
        .post('http://127.0.0.1:8000/api/admin/kiem-tra-chia-khoa', {}, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('chia_khoa_so1')
            }
        })
        .then((res) => {
            if(res.data.status) {
                next(); // Được phép đi qua
            } else {
                next('/dang-nhap');
                this.$toast.success(res.data.message)
            }
        })
        .catch(() => {
            next('/dang-nhap');
            this.$toast.error('Yêu Cầu Đăng Nhập')
        });
}