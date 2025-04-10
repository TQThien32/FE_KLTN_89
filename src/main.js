import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/Master.vue'
import Admin from './layout/wrapper/Admin.vue'
import Auth from './layout/wrapper/AuthMaster.vue'
import Hocvien from './layout/wrapper/Hocvien.vue'
import CoQuanXacThuc from './layout/wrapper/CoQuanXacThuc.vue'  
import ToChucCapChungChi from './layout/wrapper/ToChucCapChungChi.vue'  
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("Auth-layout", Auth);
app.component("HocVien-layout", Hocvien);
app.component("Admin-layout", Admin);
app.component("CoQuanXacThuc-layout", CoQuanXacThuc);
app.component("ToChucCapChungChi-layout", ToChucCapChungChi);

app.mount("#app")