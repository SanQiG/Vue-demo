<template>
  <div class="photoInfo-container">
    <h4>{{ photoInfo.title }}</h4>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.add_time | dataFormat }}</span>
      <span>点击：{{ photoInfo.click }}次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->
    <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
    <vue-preview :slides="list" @close="handleClose"></vue-preview>

    <!-- 图片内容区域 -->
    <div class="content">{{ photoInfo.content }}</div>

    <!-- 评论子组件 -->
    <cmt-box></cmt-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue';

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      list: [
        {
          src: 'http://i0.hdslb.com/bfs/article/a8c6df0dd7455fdb133575965d0719ee17aab281.png',
          msrc: 'http://i0.hdslb.com/bfs/article/a8c6df0dd7455fdb133575965d0719ee17aab281.png',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'http://clubimg.club.vmall.com/data/attachment/forum/201904/19/072347eaumvasbmf6ugayz.png',
          msrc: 'http://clubimg.club.vmall.com/data/attachment/forum/201904/19/072347eaumvasbmf6ugayz.png',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'http://i0.hdslb.com/bfs/article/43d728f77e3df78155ed81c95efc49f0ef34fd6a.jpg',
          msrc: 'http://i0.hdslb.com/bfs/article/43d728f77e3df78155ed81c95efc49f0ef34fd6a.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'http://i0.hdslb.com/bfs/article/26b734250f5a7a7210a0ef144f900f4519ebd715.jpg',
          msrc: 'http://i0.hdslb.com/bfs/article/26b734250f5a7a7210a0ef144f900f4519ebd715.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
      ]
    }
  },
  methods: {
    getPhotoInfo() {
      this.axios.get("https://easy-mock.com/mock/5ce666c3181bed1c7f889f42/getImageInfo").then(res => {
        if (res.data.status == 200) {
          this.photoInfo = res.data.message[0];
        }
      })
    },
    handleClose() {
      console.log('close event');
    }
  },
  components: {
    "cmt-box": comment
  },
  created() {
    this.getPhotoInfo();
  }
}
</script>

<style lang="scss" scoped>
  .photoInfo-container {
    padding: 3px;

    h4 {
      color: #26A2FF;
      font-size: 15px;
      text-align: center;
      margin: 15px 0;
    }

    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }

    .content {
      font-style: 13px;
      line-height: 30px;
    }
  }
</style>
