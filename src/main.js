// 入口文件
import Vue from 'vue';

// 导入 MUI 样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

// 导入 App 根组件
import app from './App.vue';

// 按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


let vm = new Vue({
  el: "#app",
  render: createElements => createElements(app)
})