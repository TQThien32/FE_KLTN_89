<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>Quên Mật Khẩu</h4>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" v-model="email" class="form-control"
                                placeholder="Nhập email của bạn" required />
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Gửi</button>
                    </div>
                    <div class="card-footer text-center">
                        <p class="mb-0">Quay Lại Trang Đăng Nhập? <router-link to="">Đăng Nhập</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style></style>