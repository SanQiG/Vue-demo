import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';

import Newslist from './components/news/NewslistComponent.vue';
import NewsInfo from './components/news/NewsInfo.vue';

let router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: Newslist },
    { path: '/home/newsinfo/:id', component: NewsInfo },
  ],
  linkActiveClass: 'mui-active'
})

export default router