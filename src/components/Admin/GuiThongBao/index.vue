<template>
  <div class="row justify-content-center">
    <div class="row">
      <div class="col-md-8 col-lg-6">
        <div class="card" style="box-shadow: none;">
          <div class="card-header text-center">
            <h4 class="mt-2">Gửi Thông Báo <i class="fa-regular fa-bell"></i></h4>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="sendType" class="form-label">Gửi Đến</label>
              <select id="sendType" v-model="create_thong_bao.loai_nhan" class="form-select" required>
                <option value="0">Tất Cả</option>
                <option value="1">Học Viên</option>
                <option value="2">Tổ Chức Cấp Chứng Chỉ</option>
                <option value="3">Cụ thể</option>
              </select>
            </div>

            <div v-if="create_thong_bao.loai_nhan == 3">
              <div class="mb-3">
                <label for="targetType" class="form-label">Đối Tượng</label>
                <select id="targetType" v-model="create_thong_bao.doi_tuong" class="form-select" required>
                  <option value="1">Học Viên</option>
                  <option value="2">Tổ Chức Cấp Chứng Chỉ</option>
                </select>
              </div>

              <div class="mb-3" v-if="create_thong_bao.doi_tuong == 1">
                <label for="recipientStudent" class="form-label">Email Học Viên</label>
                <select v-for="(value, index) in data_hoc_vien" :key="index" v-model="create_thong_bao.id_hoc_vien"
                  class="form-select" required>
                  <option :value="value.id">{{ value.email }}</option>
                </select>
              </div>

              <div class="mb-3" v-if="create_thong_bao.doi_tuong == 2">
                <label for="recipientOrganization" class="form-label">Email Tổ Chức Cấp Chứng Chỉ</label>
                <select id="recipientOrganization" v-for="(value, index) in data_to_chuc" :key="index"
                  v-model="create_thong_bao.id_to_chuc" class="form-select" required>
                  <option :value="value.id">{{ value.email }}</option>
                </select>
              </div>
            </div>

            <div class="mb-3">
              <label for="title" class="form-label">Tiêu Đề</label>
              <input v-model="create_thong_bao.tieu_de" type="text" id="title" class="form-control"
                placeholder="Nhập tiêu đề thông báo" required />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Nội Dung</label>
              <textarea v-model="create_thong_bao.noi_dung" id="message" class="form-control" rows="9"
                placeholder="Nhập nội dung thông báo" required></textarea>
            </div>
            <div class="d-flex justify-content-end"><button type="button" class="btn btn-danger px-5 radius-30 me-2">Hủy
                <i class="fa-solid fa-trash-can ms-2"></i></button>
              <button v-on:click="guiThongBao()" type="button" class="btn btn-chinh">Gửi<i
                  class="fa-solid fa-share-from-square ms-2 "></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card" style="box-shadow: none;">
          <div class="card-header">
            <h4 class="mt-2">Danh Sách Thông Báo</h4>
          </div>
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th class="align-middle text-center">STT</th>
                  <th class="align-middle text-center">Người Nhận</th>
                  <th class="align-middle text-center">Tiêu Đề</th>
                  <th class="align-middle text-center">Nội Dung</th>
                  <th class="align-middle text-center">Thời Gian Gửi</th>
                </tr>
              </thead>
              <tbody>
                <tr v v-for="(value, index) in data_thong_bao" :key="index">
                  <td class="align-middle text-center">{{ index + 1 }}</td>
                  <td>
                    {{
                      value.loai_nhan == 0
                        ? 'Tất Cả'
                        : (value.loai_nhan == 1
                          ? 'Học Viên'
                          : (value.loai_nhan == 2
                            ? 'Tổ Chức Cấp Chứng Chỉ'
                            : (value.loai_nhan == 3
                              ? (value.doi_tuong == 1
                                ? 'Học Viên: ' + value.email_hv
                                : (value.doi_tuong == 2
                                  ? 'Tổ Chức: ' + value.email_tc
                                  : ''))
                              : ''
                            )
                          )
                        )
                    }}
                  </td>

                  <td class="align-middle text-center">{{ value.tieu_de }}
                  </td>
                  <td class="align-middle text-center">
                    <p data-bs-toggle="modal" data-bs-target="#ttchitiet" href="javascript:;"
                      v-on:click="Object.assign(thong_tin, value)"><i class="fa-solid fa-indent "
                        style="font-size: 15px;"></i> Xem</p>
                  </td>
                  <td class="align-middle text-center">{{ value.created_at }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
          <p><b>Nội Dung: </b> <span>{{ thong_tin.noi_dung }}</span></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
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
      data_hoc_vien: [],
      data_to_chuc: [],
      create_thong_bao: {},
      data_thong_bao: [],
      thong_tin: {}
    }
  },
  mounted() {
    this.getHocVien();
    this.getToChuc();
    this.getThongBao();
  },
  methods: {
    getHocVien() {
      baseRequest
        .get('hoc-vien/data')
        .then((res) => {
          this.data_hoc_vien = res.data.data
        })
    },
    getToChuc() {
      baseRequest
        .get('to-chuc/data')
        .then((res) => {
          this.data_to_chuc = res.data.data
        })
    },
    guiThongBao() {
      baseRequest
        .post('admin/gui-thong-bao', this.create_thong_bao)
        .then((res) => {
          if (res.data.status) {
            this.$toast.success(res.data.message);
            this.getThongBao();
          } else {
            this.$toast.error(res.data.message);
          }
        })
    },
    getThongBao() {
      baseRequest
        .get('admin/data-thong-bao')
        .then((res) => {
          this.data_thong_bao = res.data.data
        })
    },
  }
}
</script>
<style></style>