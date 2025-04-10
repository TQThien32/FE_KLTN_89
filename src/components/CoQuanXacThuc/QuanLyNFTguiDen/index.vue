<template>
    <div class="card radius-10 border border-3 border-info">
        <div class="card-body">
            <h2 class="text-center">Các NFT Được Gửi Đến</h2>
            <hr>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th colspan="5">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Tìm theo số CCCD"
                                    aria-label="Recipient's username" aria-describedby="button-addon2"
                                    style="border: 1px solid #3399FF;">
                                <button class="btn btn-outline-primary" type="button" id="button-addon2">Tìm
                                    Kiếm</button>
                            </div>
                        </th>
                    </tr>
                    <tr class="text-center">
                        <th>#</th>
                        <th>Tên Học Viên</th>
                        <th>Số CCCD</th>
                        <th>ID NFT</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="text-center">1</th>
                        <td>trantuan</td>
                        <td class="text-end">1234567</td>
                        <td class="text-end">213456</td>
                        <td class="text-center" >
                            <button class="btn btn-outline-danger">
                                Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>