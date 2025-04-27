<template>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
            <div class="card mt-4">
                <div class="card-body">
                    <div class="text-center">
                        <h4><b>Thông Báo</b></h4>
                    </div>
                    <hr>
                    <div class="email-list">
                    
                        <div class="text-end">
                            <div class="">
                                <button v-on:click="deleteSelected()" type="button" class="btn btn-chinh ms-2"><i
                                        class="bx bx-trash me-0"></i>
                                </button>
                            </div>
                        </div>
                        
                        <a href="/to-chuc-cap-chung-chi/xem-thong-bao/chi-tiet-thong-bao"
                            v-for="(value, index) in emailslist" :key="index">
                            <div class="d-md-flex align-items-center email-message px-3 py-1">
                                <div class="d-flex align-items-center email-actions">
                                    <input class="form-check-input" type="checkbox" v-model="value.selected">
                                    <i class="bx bx-star font-20 mx-2 email-star"></i>
                                    <p class="mb-0"><b>{{ value.tieude }}</b></p>
                                </div>
                                <div class="">
                                    <p class="mb-0">{{ value.noidung }}</p>
                                </div>
                                <div class="ms-auto">
                                    <p class="mb-0 email-time">{{ value.thoigian }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <div class="d-flex justify-content-between align-items-center px-3 py-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="selectAll" v-model="selectAll"
                                @change="toggleAll">
                            <label class="form-check-label" for="selectAll">
                                Chọn tất cả
                            </label>
                        </div>
                    </div>
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
            selectAll: false,
            emailslist: [],
            ds_thong_bao_can_xoa: []
        };
    },
    mounted() {
        this.getDataThongBao();
    },
    methods: {
        getDataThongBao() {
            baseRequest
                .get('xem-thong-bao')
                .then((res) => {
                    this.emailslist = res.data.data
                });
        },
        xoaThongBao() {
            baseRequest
                .post('xoa-thong-bao', this.ds_thong_bao_can_xoa)
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.getDataThongBao();
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
        },


        toggleAll() {
            this.emailslist.forEach(value => {
                value.selected = this.selectAll;
            });
        },
        deleteSelected() {
            const selectedEmails = this.emailslist.filter(email => email.selected);

            if (selectedEmails.length === 0) {
                this.$toast.error('Vui lòng chọn ít nhất một bản ghi để xóa.');
                return;
            }
            this.ds_thong_bao_can_xoa = selectedEmails.map(email => ({ id: email.id }));
            this.xoaThongBao();
        }
    },
    watch: {
        emailslist: {
            handler() {
                this.selectAll = this.emailslist.length > 0 && this.emailslist.every(value => value.selected);
            },
            deep: true
        }
    }
};

</script>
<style>
.card {
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: none;
    background-color: #ffffff;
    overflow: hidden;
}

.card-body {
    padding: 2rem;
}

.email-list a {
    text-decoration: none;
    color: inherit;
    transition: background-color 0.3s ease;
}

.email-message {
    border-bottom: 1px solid #eee;
    border-radius: 8px;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.email-message:hover {
    background-color: #f9f9f9;
    transform: translateY(-2px);
}

.email-actions i {
    color: #ffc107;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.email-actions i:hover {
    transform: scale(1.2);
}

.email-time {
    font-size: 0.85rem;
    color: #888;
}

h4 {
    font-weight: bold;
    margin-bottom: 1rem;
}

.btn-white {
    background-color: #f0f0f0;
    border: none;
    color: #333;
    border-radius: 8px;
    transition: background-color 0.2s ease;
}

.btn-white:hover {
    background-color: #e0e0e0;
}
</style>