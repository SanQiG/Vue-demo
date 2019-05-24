<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（最多吐槽120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in commentList" :key="item.id">
        <div class="cmt-title">
          第{{ index + 1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === "undefined" ? '默认评论' : item.content }}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1,
    }
  },
  methods: {
    getComments() {
      this.axios("https://easy-mock.com/mock/5ce666c3181bed1c7f889f42/getcomments").then(res => {
        if (res.data.status == 200) {
          this.commentList = this.commentList.concat(res.data.message);
        } else {
          Toast("获取评论列表失败");
        }
      })
    },
    loadMore() {
      this.pageIndex++;
      this.getComments();
    },
  },
  created() {
    this.getComments();
  },
  props: [ "id" ]
}
</script>

<style lang="scss" scoped>
  .cmt-container {
    h3 {
      font-size: 18px;
    }
    textarea {
      font-size: 14px;
      height: 85px;
      margin: 0;
    }

    .cmt-list {
      margin: 10px 0;

      .cmt-item {
        font-size: 14px;
        .cmt-title {
          line-height: 30px;
          background-color: #ccc;
          display: flex;
          justify-content: space-between;
        }
        .cmt-body {
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>