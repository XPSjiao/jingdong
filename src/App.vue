<template>
<!-- 顶部导航 -->
<div class="wrapper">
    <!-- 定位 -->
    <div class="wrapper__position">
      <span class="iconfont">&#xe64c;</span>
      江苏省南京市栖霞区羊山北路1号
      <span class="iconfont position__notice">&#xe60d;</span>
    </div>

    <!-- 搜索区域 -->
    <div class="wrapper__search">
      <span class="iconfont">&#xe741;</span>
      <span class="search__test">山姆会员商店优惠商品</span>
    </div>

    <!-- banner -->
    <div class="wrapper__banner">
      <img
        src="https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/banner/jingdong/banner1.jpg"
        class="wrapper__banner__img"
        alt=""
      />
    </div>
    <!-- <div>123</div> -->

</div>

  <!-- 底部导航 -->
  <div class="docker">
    <!-- BEM block__element--modifier -->
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6b8;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe698;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe601;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe78b;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/index.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem;
  &__position {
    position: relative;
    padding: 0.16rem 0.16rem 0.16rem 0;
    font-size: 0.16rem;
    @include ellipse;
    .iconfont {
      font-size: 0.2rem;
    }
    // background: green;
    .position__notice {
      position: absolute;
      right: 0;
    }
    color: $content-fontcolor;
  }
  &__search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    border-radius: 0.16rem;
    background-color: $background-color;
    color: $placeholder-color;
    .iconfont {
      display: inline-block;
      padding: 0 0.12rem 0 0.16rem;
      font-style: 0.2rem;
    }
    &__text {
      // display: inline-block;
      font-size: 0.14rem;
    }
  }
  &__banner {
    height: 0;
    overflow: hidden;
    // hack技巧，预留高度防抖（图片高/图片宽）
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
  }
}
.docker {
  display: flex;
  position: absolute;
  left: 0;
  width: 100%;
  height: 0.49rem;
  bottom: 0;
  border-top: 0.01rem solid #f1f1f1;
  // background-color: green;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    // font-size: 0.2rem;
    // transform: scale(0.5, 0.5);
    // transform-origin: center top;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }

    &--active {
      color: $hightlight-color;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
