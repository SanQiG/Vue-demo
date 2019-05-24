<template>
  <div class="newsinfo-container">

    <!-- 标题区域 -->
    <h1 class="title">{{ newsinfo.title }}</h1>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
// 导入评论子组件
import comment from '../subcomponents/comment.vue';

export default {
  data() {
    return {
      id: this.$route.params.id,  // 将 URL 地址中传递过来的 ID 值，挂载到 data 上，方便以后调用
      newsinfo: {},  // 新闻对象
    }
  },
  methods: {
    getNewsInfo() {
      this.axios.get("https://easy-mock.com/mock/5ce666c3181bed1c7f889f42/getnews").then(res => {
        if (res.data.status == 200) {
          this.newsinfo = res.data.message[0];
        } else {
          Toast("获取新闻失败");
        }
      })
    }
  },
  created() {
    this.getNewsInfo();
  },
  components: {  // 用来注册子组件
    "comment-box": comment
  }
}
</script>

<style lang="scss" scoped>
  .newsinfo-container {
    padding: 0 4px;

    .title {
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    
    .subtitle {
      font-style: 13px;
      color: lightgrey;
      display: flex;
      justify-content: space-between;
    }

    .content {
      
    }
  }
</style>
