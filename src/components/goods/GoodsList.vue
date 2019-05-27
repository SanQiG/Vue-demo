<template>
  <div class="goods-list">

    <div class="goods-item">
      <img src="https://img14.360buyimg.com/n7/jfs/t17257/333/725724688/228993/fa59a8de/5aa65045N6b20f979.jpg" alt="">
      <h1 class="title">明基（BenQ）PD2710QC 27英寸IPS屏2K分辨率100%sRGB 四边窄边 专业设计电脑显示器（type-c拓展坞)</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥3699</span>
          <span class="old">¥3699</span>
        </p>
        <p class="sell">
          <span>618热卖中</span>
          <span>剩999+件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://img14.360buyimg.com/n7/jfs/t17257/333/725724688/228993/fa59a8de/5aa65045N6b20f979.jpg" alt="">
      <h1 class="title">明基（BenQ）PD2710QC 27英寸IPS屏2K分辨率100%sRGB 四边窄边 专业设计电脑显示器（type-c拓展坞)</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥3699</span>
          <span class="old">¥3699</span>
        </p>
        <p class="sell">
          <span>618热卖中</span>
          <span>剩999+件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://img14.360buyimg.com/n7/jfs/t17257/333/725724688/228993/fa59a8de/5aa65045N6b20f979.jpg" alt="">
      <h1 class="title">明基（BenQ）PD2710QC 27英寸IPS屏2K分辨率100%sRGB 四边窄边 专业设计电脑显示器（type-c拓展坞)</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥3699</span>
          <span class="old">¥3699</span>
        </p>
        <p class="sell">
          <span>618热卖中</span>
          <span>剩999+件</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 6px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 315px;

    img {
      width: 100%;
    }

    h1.title {
      font-size: 13px;
    }

    .info {
      background-color: #eee;

      p {
        margin: 0;
        padding: 5px;
      }

      .price {
        .now {
          color: red;
          font-weight: bold;
          font-style: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 16px;
          margin-left: 10px;
        }
      }

      .sell {
        display: flex;
        justify-content: space-between;
        font-style: 13px;
      }
    }

    img {
      width: 100%;
    }

    .title {
      font-size: 14px;
    }
  }
}
</style>
