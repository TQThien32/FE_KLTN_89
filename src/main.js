import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/Master.vue'
import Admin from './layout/wrapper/Admin.vue'
import Auth from './layout/wrapper/AuthMaster.vue'
import Hocvien from './layout/wrapper/Hocvien.vue'
import CoQuanXacThuc from './layout/wrapper/CoQuanXacThuc.vue'
import ToChucCapChungChi from './layout/wrapper/ToChucCapChungChi.vue'
import KhachVangLai from './layout/wrapper/KhachVangLai.vue'
import { createToaster } from '@meforma/vue-toaster';


const app = createApp(App)
const toaster = createToaster(
    {
        position: 'top-right', // hoặc top-left, bottom-right, ...
        duration: 3000,
    }
)

app.config.globalProperties.$toast = toaster;
app.use(router)
app.component("default-layout", Default);
app.component("Auth-layout", Auth);
app.component("HocVien-layout", Hocvien);
app.component("Admin-layout", Admin);
app.component("CoQuanXacThuc-layout", CoQuanXacThuc);
app.component("ToChucCapChungChi-layout", ToChucCapChungChi);
app.component("KhachVangLai-layout", KhachVangLai)

app.mount("#app")