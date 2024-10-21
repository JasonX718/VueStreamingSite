import { createApp } from 'vue'
import App from './App.vue'
import router from '../../router/index.js'
import '../../assets/main.css' 
import ElementPlus from 'element-plus'  // 引入Element Plus 所需
import 'element-plus/dist/index.css'  // 引入Element Plus 所需
import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // 引入Element Plus icon 所需
import '../../assets/style.css'
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css


const app= createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)


app.use(vue3videoPlay)

app.use(ElementPlus)  // 引入Element Plus 所需
app.mount('#app')