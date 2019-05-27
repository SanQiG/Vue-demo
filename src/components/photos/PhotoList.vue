<template>
  <div class="">

    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="[ 'mui-control-item', item.id == 0 ? 'mui-active' : '' ]" v-for="item in cates" :key="item.id">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <!-- 图片 -->
    <ul class="photo-list">
      <router-link :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.abstract }}</div>
        </div>
      </router-link>
    </ul>

  </div>

</template>

<script>
  // 1. 导入 mui 的 js 文件
  import mui from '../../lib/mui/js/mui.js';

  export default {
    data() {
      return {
        cates: [],  // 图片分类数组
        list: [],  // 图片列表数组
      }
    },
    methods: {
      getAllCategory() {
        this.axios.get("https://easy-mock.com/mock/5ce666c3181bed1c7f889f42/getimgcategory").then(res => {
          if (res.data.status == 200) {
            res.data.message.unshift({ title: "全部", id: 0 });
            this.cates = res.data.message;
          }
        })
      },
      getImageList() {
        this.axios.get("https://easy-mock.com/mock/5ce666c3181bed1c7f889f42/getImageList").then(res => {
          if (res.data.status == 200) {
            this.list = res.data.message;
          }
        })
      }
    },
    created() {
      this.getAllCategory();
      this.getImageList();
    },
    mounted() {  // 当组件中的 DOM 结构被渲染好并放到页面中后，会执行这个钩子函数
      // 2. 初始化滑动控件
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    }
  }
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }

  .photo-list {
    list-style: none;
    margin: 0;
    padding: 0 10px;
    li {
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info {
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        color: white;
        text-align: left;
        max-height: 84px;
        overflow: hidden;

        .info-title {
          font-size: 14px;
        }
        .info-body {
          font-size: 13px;
        }
      }
    }
  }
</style>