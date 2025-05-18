<template>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <div class="email-read-box p-3">
                        <h4>Tiêu đề: {{ chi_tiet.tieu_de }}</h4>
                        <hr>
                        <div class="d-flex align-items-center">
                            <h5 class="text-dark">Nội dung:</h5>
                            <div class="flex-grow-1 ms-2">
                                <p class="mb-0 font-weight-bold"></p>
                            </div>
                            <p class="mb-0 chat-time ps-5 ms-auto"><b class="text-dark">Thời gian:</b> {{ chi_tiet.created_at}}</p>
                        </div>
                        <div class="email-read-content px-md-5 py-3">
                            <p>{{ chi_tiet.noi_dung }}</p>
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
            chi_tiet: {},
        };
    },
    mounted() {
        this.id = this.$route.params.id;
        this.getThongBao();
    },
    methods: {
        getThongBao() {
            baseRequest
                .get('xem-chi-tiet-thong-bao/' + this.id)
                .then((res) => {
                    this.chi_tiet = res.data.data
                });
        }
    }
};
</script>

<style>
.card-body {
    max-height: 600px;
    overflow-y: auto;
}
</style>
