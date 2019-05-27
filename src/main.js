// 入口文件
import Vue from 'vue';
// 导入路由的包
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';

// 导入格式化时间的插件
import moment from 'moment';
// 定义全局过滤器
Vue.filter('dataFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
})

// 导入 axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// 导入 MUI 样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 导入 App 根组件
import app from './App.vue';

// 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

// 安装 vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

let vm = new Vue({
  el: "#app",
  render: createElements => createElements(app),
  router
})