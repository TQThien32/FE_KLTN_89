<template>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
            <div class="card mt-4">
                <div class="card-body">
                    <div class="text-center">
                        <h4><b><i class="fa-regular fa-file"></i> NFT Gửi Đến</b></h4>
                    </div>
                    <hr>
                    <div class="email-list">
                        <div class="text-end">
                            <button v-on:click="deleteSelected()" type="button" class="btn btn-danger ms-2">
                                <i class="bx bx-trash me-0"></i>
                            </button>
                        </div>
                        <template v-for="(value, index) in emailslist" :key="index">
                            <div class="d-md-flex align-items-center email-message px-3 py-1 mt-3">
                                <div class="d-flex align-items-center email-actions">
                                    <input class="form-check-input me-3" type="checkbox" v-model="value.selected">
                                    <router-link :to="'/hoc-vien/chi-tiet-NFT-gui-den/' + value.id">
                                        <div class="mb-0" style="font-size: 16px;">
                                            <b>Bạn được Chia Sẻ NFT từ: </b> <span>{{ value.email_nguoi_gui }}</span>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </template>
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
    watch: {
        emailslist: {
            handler() {
                this.ds_thong_bao_can_xoa = this.emailslist
                    .filter(item => item.selected)
                    .map(item => item.id);
            },
            deep: true
        }
    },
    methods: {
        getDataThongBao() {
            baseRequest.get('hoc-vien/nhan-nft')
                .then((res) => {
                    this.emailslist = res.data.data.map(item => ({ ...item, selected: false }));
                });
        },
        deleteSelected() {
            if (this.ds_thong_bao_can_xoa.length === 0) {
                this.$toast.error('Vui lòng chọn thông báo để xóa!');
                return;
            }
            baseRequest
                .post('xoa-NFT-gui-den', { ds_thong_bao_can_xoa: this.ds_thong_bao_can_xoa })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.getDataThongBao();
                        this.ds_thong_bao_can_xoa = [];
                    } else {
                        this.$toast.error(res.data.message);
                    }
                });
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
    transform: scale(1.1);
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
