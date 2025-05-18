<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow rounded-3">
          <div class="card-header bg-light-info text-white d-flex justify-content-between align-items-center">
            <h5 class="mb-1 mt-1">🎓 Thông tin NFT được chia sẻ</h5>
            <span class="text-end text-dark">{{ chi_tiet.created_at }}</span>
          </div>
          <div class="card-body p-4">
            <!-- Người gửi -->
            <div class="mb-4">
              <h6 class="text-muted mb-1">👤 Từ:</h6>
              <p class="mb-0 fw-bold ms-5">{{ chi_tiet.email_nguoi_gui }}</p>
            </div>
            
            <!-- Token -->
            <div class="mb-4">
              <h6 class="text-muted mb-1">🆔 Mã NFT( Token):</h6>
              <p class="mb-0 font-monospace ms-5">{{ chi_tiet.token }}</p>
            </div>
            <!-- Metadata -->
            <div class="mb-4">
              <h6 class="text-muted mb-1">📄 Metadata URL:</h6>
              <a :href="chi_tiet.MetaData_URL" class="text-decoration-underline ms-5" target="_blank">
                {{ chi_tiet.MetaData_URL }}
              </a>
            </div>

            <!-- TronScan -->
            <div class="mb-2">
              <h6 class="text-muted mb-1">🔗 Xem trên TronScan:</h6>
              <a
                :href="`https://shasta.tronscan.org/#/transaction/${chi_tiet.token}`"
                target="_blank"
                class="btn btn-phu2 btn-sm ms-5"
              >
                Mở TronScan
              </a>
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
        .get('hoc-vien/nhan-nft/chi-tiet/' + this.id)
        .then((res) => {
          this.chi_tiet = res.data.data;
        });
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
.card-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.font-monospace {
  font-family: 'Courier New', Courier, monospace;
  word-break: break-all;
}
</style>
