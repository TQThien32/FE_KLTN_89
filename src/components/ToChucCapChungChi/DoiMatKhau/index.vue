<template>
    <div class="container mt-1">
        <h2 class="text-light">Đổi Mật Khẩu</h2>
        <div class="row mt-3">
            <div class="col-lg">
                <div class="card" style="box-shadow: none;">
                    <div class="card-body">
                        <form @submit.prevent="checkPasswords">
                            <div class="mb-3">
                                <label for="currentPassword" class="form-label"><b>Mật Khẩu Hiện Tại</b></label>
                                <input type="password" class="form-control" id="currentPassword"
                                    placeholder="Nhập mật khẩu hiện tại">
                            </div>
                            <div class="mb-3">
                                <label for="newPassword" class="form-label"><b>Mật Khẩu Mới</b></label>
                                <input type="password" class="form-control" id="newPassword"
                                    placeholder="Nhập mật khẩu mới" v-model="password" required>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label"><b>Xác Nhận Mật Khẩu</b></label>
                                <input type="password" class="form-control" id="confirmPassword"
                                    placeholder="Xác nhận mật khẩu mới" v-model="confirmPassword" required><br>
                                <span v-if="errorMessage" style="color:red">{{ errorMessage }}</span><br>
                            </div>
                            <div class="text-center"><button type="submit" class="btn btn btn-chinh">Đổi Mật
                                    Khẩu</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            password: '',
            confirmPassword: '',
            errorMessage: ''
        }
    },
    methods: {
      checkPasswords() {
        this.errorMessage = '';
        if (this.password !== this.confirmPassword) {
          this.errorMessage = 'Xác Nhận Mật Khẩu không trùng với Mật Khẩu Mới!';
          return;
        }
        this.$toast.success("Đổi mật khẩu thành công !");
      }
    }
}
</script>
<style></style>