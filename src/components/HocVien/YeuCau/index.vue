<template>
    <h4 class="text-white mt-5"><i class="fa-solid fa-crown"></i> Đặc Quyền Khi Sở Hữu NFT Chứng Chỉ</h4>
    <div class="row mt-5">
        <div class="col-lg-4">
            <div class="card card-dark">
                <div class="card-body text-center">
                    <img src="https://cdn-icons-png.freepik.com/256/7976/7976823.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                        style="height: 70px;" alt="">
                    <h4 class="card-title mt-2  text-light">NFT Chứng Chỉ</h4>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-light">Chứng chỉ độc nhất – xác thực tức thì.
                    </h6>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-dark ">
                <div class="card-body text-center">
                    <img src="https://cdn-icons-png.freepik.com/256/4713/4713258.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                        style="height: 70px;" alt="">
                    <h4 class="card-title mt-2  text-light">Gửi Yêu Cầu</h4>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-light">Một lần gửi – mãi mãi xác thực.</h6>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card card-dark">
                <div class="card-body text-center">
                    <img src="https://cdn-icons-png.freepik.com/256/11442/11442748.png?uid=R196496169&ga=GA1.1.1642455953.1744362054&semt=ais_hybrid"
                        style="height: 70px;" alt="">
                    <h4 class="card-title mt-2  text-light">Bảo Mật</h4>
                    <h6 class="card-subtitle mb-2 text-body-secondary text-light">Dữ liệu vĩnh viễn - quyền riêng tư tối
                        đa.</h6>
                </div>
            </div>
        </div>
    </div>
    <h4 class="text-white mt-5"><i class="fa-solid fa-code-pull-request"></i> Yêu Cầu Cấp NFT</h4>
    <div class="card border-top border-0 border-4 border-info mt-5">
        <div class="card-body mt-2">
            <div class="card-title d-flex align-items-center">
                <div><i class='bx bx-certification me-1 font-22'></i>
                </div>
                <h5 class="mb-0 ">Thông Tin Chứng Chỉ</h5>
            </div>
            <form class="row g-3 mt-2">
                <div class="col-md-6">
                    <label for="inputLastName1" class="form-label">Họ và Tên</label>
                    <div class="input-group"> <span class="input-group-text bg-transparent"><i
                                class='bx bxs-user'></i></span>
                        <input type="text" class="form-control border-start-0" id="inputLastName1"
                            placeholder="#Nguyen Van A" v-model="create_yeu_cau.ho_ten">
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="inputLastName2" class="form-label">Số CCCD</label>
                    <div class="input-group"> <span class="input-group-text bg-transparent"><i
                                class='bx bx-barcode'></i></span>
                        <input type="text" class="form-control border-start-0" id="inputLastName2"
                            placeholder="#049203..." v-model="create_yeu_cau.so_cccd">
                    </div>
                </div>
                <div class="col-6">
                    <label for="inputPhoneNo" class="form-label">Số Hiệu Chứng Chỉ</label>
                    <div class="input-group"> <span class="input-group-text bg-transparent"><i
                                class='bx bxs-file-doc'></i></span>
                        <input type="text" class="form-control border-start-0" id="inputPhoneNo"
                            placeholder="#598424" v-model="create_yeu_cau.so_hieu_chung_chi">
                    </div>
                </div>
                <div class="col-6">
                    <label for="inputEmailAddress" class="form-label">Email</label>
                    <div class="input-group"> <span class="input-group-text bg-transparent"><i
                                class='bx bxs-message'></i></span>
                        <input type="text" class="form-control border-start-0" id="inputEmailAddress"
                            placeholder="#abc@gmail.com" v-model="create_yeu_cau.email">
                    </div>
                </div>
                <hr>
                <div class="card-title d-flex align-items-center">
                    <div><i class="bx bxs-school me-1 font-22 "></i>
                    </div>
                    <h5 class="mb-0 ">Thông Tin Tổ Chức</h5>
                </div>
                <div class="col-6">
                    <label class="form-label">Gửi Đến</label>
                    <div class="input-group">
                        <span class="input-group-text bg-white text-dark ">
                            <i class='bx bxs-building-house'></i>
                        </span>
                        <select class="form-select bg-white text-dark " v-model="create_yeu_cau.id_to_chuc">
                            <template v-for="(value, index) in ten_to_chuc" :key="index">
                                <option value="{{ value.id }}">{{ value.ten_to_chuc }}</option>
                            </template>
                        </select>
                    </div>
                </div>
            </form>
            <div class="col-12 text-end">
                <button class="btn btn-info me-5" data-bs-toggle="modal" data-bs-target="#gui">Gửi Yêu Cầu</button>
            </div>
        </div>
    </div>


    <div class="row mt-5">

        <div class="col-lg-12 col-md-12 mt-5">
            <h4 class="text-white"><i class="fa-solid fa-list"></i> Danh Sách Yêu Cầu Đã Gửi</h4>
            <table class="table ">
                <thead>
                    <tr class="text-center text-light">
                        <th>#</th>
                        <th>Gửi Đến</th>
                        <th>Thời Gian</th>
                        <th>Nội Dung</th>
                        <th>Trạng Thái</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(value, index) in list_yeu_cau" :key="index">
                        <tr class="text-light text-center">
                            <th>{{ index + 1 }}</th>
                            <td>{{ value.ten_to_chuc }}</td>
                            <td>{{ value.create_at }}</td>
                            <td><span class="badge text-bg-light hover-zoom" data-bs-toggle="modal"
                                    data-bs-target="#xemct" v-on:click="Object.assign(ct_yc, value)">Xem chi
                                    tiết</span></td>
                            <td>
                                <span v-if="value.trang_thai == 0" class="badge text-bg-warning ">Đang chờ phê duyệt</span>
                                <span v-else-if="value.trang_thai == 1" class="badge text-bg-success ">Yêu cầu chấp thuận</span>
                                <span v-else class="badge text-bg-danger ">Không có thông tin</span>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
    <!-- modal xem chi tiết -->
    <div class="modal fade" id="xemct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin yêu cầu</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container  p-4 bg-light rounded shadow">
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <label class="form-label fw-bold">Họ và tên:</label>
                                <div class="form-control bg-white">{{ ct_yc.ho_ten }}</div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-bold">CCCD:</label>
                                <div class="form-control bg-white">{{ ct_yc.so_cccd }}</div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label fw-bold">Email:</label>
                                <div class="form-control bg-white">{{ ct_yc.email }}</div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Số hiệu chứng chỉ:</label>
                                <div class="form-control bg-white">{{ ct_yc.so_hieu_chung_chi }}</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label fw-bold">Gửi đến:</label>
                                <template v-for="(value, index) in ten_to_chuc" :key="index">
                                    <div v-if="value.id == ct_yc.id" class="form-control bg-white">{{ value.ten_to_chuc }}</div>
                                </template>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>
    <!-- Modal  gửi-->
    <div class="modal fade" id="gui" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-info alert-dismissible fade show py-2 mt-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class='bx bxs-message-square-x'></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Xác nhận gửi?</h6>
                                <div class="text-white">Yêu cầu không thể khôi phục - Vui lòng kiểm tra kĩ trước khi gửi
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" v-on:click="add_yeu_cau()">Gửi</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import baseRequest from '../../../core/baseRequest';

export default {
    data() {
        return {
            list_yeu_cau : [],
            create_yeu_cau : {},
            ten_to_chuc : [],
            ct_yc : {}
        }
    },
    mounted() {
        this.loadData();
        this.loadTenTC();
    },
    methods: {
        loadData(){
            baseRequest
                .get('link load ds yêu cầu')
                .then((res) => {
                    this.list_yeu_cau = res.data.data;
                })
        },
        loadTenTC(){
            baseRequest
                .get('link load select tên tổ c')
                .then((res) => {
                    this.ten_to_chuc = res.data.data;
                })
        },
        add_yeu_cau(){
            baseRequest
                .post('link gửi yêu cầu', this.create_yeu_cau)
                .then((res) => {
                    if(res.data.status){
                        this.$toast.success(res.data.message);
                        this.create_yeu_cau = {
                            ho_ten: '',
                            so_cccd: '',
                            so_hieu_chung_chi: '',
                            email: '',
                            id_to_chuc: 1,
                        };
                        this.loadData();
                    }
                    else
                    this.$toast.error(res.data.message);
                })
        }
    },
}
</script>
<style scoped>
table tbody tr:hover {
    color: #d0cbca !important;
}

.card-dark {
    border: 1px solid gray;
    border-radius: 0.5rem;
    background-color: #111 !important;
    /* hoặc bg-dark */
    transition: border-color 0.3s ease;
    box-shadow: none;
    /* bỏ viền mờ */
}

.card:hover {
    border-color: white;
}

.hover-zoom {
    transition: transform 0.2s ease;
    cursor: pointer;
}

.hover-zoom:hover {
    transform: scale(1.1);
}
</style>