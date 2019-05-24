<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dataFormat }}</span>
              <span>点击：{{ item.click }}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data: () => ({
    newsList: []
  }),
  methods: {
    getNewsList() {
      this.axios.get("https://easy-mock.com/mock/5ce666c3181bed1c7f889f42/getnewslist").then(res => {
        if (res.data.status == 200) {
          this.newsList = res.data.message;
        } else {
          Toast("新闻获取失败");
        }
      })
    }
  },
  created() {
    this.getNewsList();
  }
}
</script>

<style lang="scss" scoped>
  .mui-table-view {
    li {
      h1 {
        font-size: 14px;
      }

      .mui-ellipsis {
        font-size: 12px;
        color: lightgrey;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
