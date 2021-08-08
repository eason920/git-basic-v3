import { createApp } from 'vue'

// STEP 1 v
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// STEP 1 ^

// STEP 3 v
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// STEP 3 ^

import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

// STEP 2 v
// 定義驗證規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// STEP 2 ^

// STEP 4 v
// 設定預設語系
setLocale('zh_TW')
// STEP 4 ^

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)

// STEP 5 v
// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
// STEP 5 ^

app.mount('#app')
