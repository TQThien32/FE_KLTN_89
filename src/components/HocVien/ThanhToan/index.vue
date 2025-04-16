<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <h3 class="text-light"><i class="fa-solid fa-list"></i> Giao dịch</h3>
            <button class="btn btn-outline-light rounded-pill"><i class="fa-solid fa-credit-card"></i> Thanh
                Toán</button>
        </div>

        <hr class="text-white">
        <div class="row">
            <div class="form-check d-flex justify-content-end">
                <input class="form-check-input " type="checkbox" id="checkRight">
                <label class="form-check-label ms-2 text-light mb-2 me-4 mt-1" for="checkRight">Chọn tất cả</label>
            </div>

            <div class="col-lg-4">
                <div class="card border-chinh border-bottom border-top border-3 border-0">
                    <img src="https://edulife.com.vn/wp-content/uploads/2021/03/ang-tieng-anh-toeic-la-gi-scaled.jpg"
                        class="card-img-top" alt="ảnh chứng chỉ" style="height: 250px;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between ">
                            <p class="card-text mt-2">Phí NFT: </p>
                            <h4>1.000.000 đ</h4>
                        </div>        
                    </div>
                    <div class="card-footer">
                        <div class=" d-flex justify-content-between align-items-center gap-2">
                            <div class="form-check ms-2">
                                <input class="form-check-input item-check" type="checkbox" value="" id="checkDefault">
                                <label class="form-check-label" for="checkDefault">

                                </label>
                            </div>
                            <a data-bs-toggle="modal" data-bs-target="#ttchitiet" href="javascript:;"
                                class="btn btn-chinh"><i class="fa-solid fa-indent " style="font-size: 15px;"></i> Thông
                                tin chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div class="container mt-5">
        <h3 class="text-light"><i class="fa-solid fa-clock-rotate-left"></i> Lịch Sử Giao Dịch</h3>
        <hr class="text-light">
        <div class=" mt-4">           
                <table class="table ">
                    <thead>
                        <tr class="text-center text-light">
                            <th>#</th>
                            <th>Thời Gian</th>
                            <th>Tổ Chức Cấp</th>
                            <th>Khóa Học</th>
                            <th>Số Hiệu Chứng Chỉ</th>
                            <th>Đã Thanh Toán</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr class="text-light text-center">
                            <th>1</th>
                            <td>12/12/2024</td>
                            <td>Toeic</td>
                            <td>2024-2027</td>
                            <td>12133434</td>
                            <th>10000000</th>
                        </tr>
                    </tbody>
                </table>
           
        </div>
    </div>
    <div class="modal fade" id="ttchitiet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin chi tiết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="card-text"><b>Tổ chức cấp: </b><span class="ms-3">Toeic</span></p>
                    <p class="card-text"><b>Khóa Học: </b><span class="ms-3">2024 - 2027</span></p>
                    <p class="card-text"><b>Số Hiệu Chứng Chỉ: </b><span class="ms-3">123456</span></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
  window.onload = function () {
    const checkAll = document.getElementById('checkRight');
    const checkboxes = document.querySelectorAll('.item-check');

    checkAll.addEventListener('change', () => {
      checkboxes.forEach(cb => {
        cb.checked = checkAll.checked;
      });
    });
    checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      checkAll.checked = allChecked;
    });
  });
  }
</script>
<style scoped>
.form-check-input {
    width: 1.2rem;
    height: 1.2rem;
}
.card {
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(85, 8, 8, 0.1);
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-4px);
}
table tbody tr:hover {
    color: #d0cbca!important; 
  }
</style>