<template>
  <!-- 定位 -->
  <div class="position">
    <span class="iconfont position__icon">&#xe64c;</span>
    江苏省南京市栖霞区羊山北路1号
    <span class="iconfont position__notice">&#xe60d;</span>
  </div>

  <!-- 搜索区域 -->
  <div class="search">
    <span class="iconfont">&#xe741;</span>
    <span class="search__test">山姆会员商店优惠商品</span>
  </div>

  <!-- banner -->
  <div class="banner">
    <img
      src="https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/banner1.jpg"
      class="banner__img"
      alt=""
    />
  </div>
  <!-- <div>123</div> -->
  <!-- icon宫格区 -->
  <div class="icons">
    <div class="icons__item" v-for="item in iconsList" :key="item.desc">
      <!-- <img
          :src="`https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/${item.imgName}.png`"
          class="icons__item__img"
        /> -->
      <img
        :src="`http://120.78.125.171:9000/jingdong/${item.imgName}.png`"
        class="icons__item__img"
      />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
  <!-- 附近店铺 -->
  <div class="nearby" >
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="item in shopsList" :key="item.title">
        <img
          :src ="item.imgUrl"
          class="nearby__item__img"
        />
        <div class="nearby_content">
          <div class="nearby__content__title">{{item.title}}</div>
          <div class="nearby__content__tags">
            <span class="nearby__content__tag">{{item.tag1}}</span>
            <span class="nearby__content__tag">{{item.tag2}}</span>
            <span class="nearby__content__tag">{{item.tag3}}</span>
          </div>
          <div class="nearby__content__highlight">
            {{item.content}}
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      // { imgName: 'supermarket', desc: '超市便利' },
      // { imgName: 'vegetableM', desc: '菜市场' },
      // { imgName: 'fruitshop', desc: '水果店' },
      // { imgName: 'flowers', desc: '鲜花绿植' },
      // { imgName: 'MAH', desc: '医药健康' },
      // { imgName: 'home', desc: '家居时尚' },
      // { imgName: 'cake', desc: '烘培蛋糕' },
      // { imgName: 'checkin', desc: '签到' },
      // { imgName: 'BFT', desc: '大牌免运' },
      // { imgName: 'RP', desc: '红包套餐' },
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘培蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    const shopsList = [
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop1.png',
        title: '沃尔玛',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: 'VIP尊享满99减4元运费券（每月3张）'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop2.png',
        title: '山姆会员店',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: '联合利华洗护满10减5'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop1.png',
        title: '沃尔玛',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: 'VIP尊享满99减4元运费券（每月3张）'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop2.png',
        title: '山姆会员店',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: '联合利华洗护满10减5'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop1.png',
        title: '沃尔玛',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: 'VIP尊享满99减4元运费券（每月3张）'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop2.png',
        title: '山姆会员店',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: '联合利华洗护满10减5'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop1.png',
        title: '沃尔玛',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: 'VIP尊享满99减4元运费券（每月3张）'
      },
      {
        imgUrl: 'https://soft2176-use.oss-cn-hangzhou.aliyuncs.com/jingdong/icon/shop2.png',
        title: '山姆会员店',
        tag1: '月售1万+',
        tag2: '起送￥0元',
        tag3: '基础运费￥5',
        content: '联合利华洗护满10减5'
      }

    ]
    return { iconsList, shopsList }
  }
}
</script>
<style scoped lang="scss">
@import "../../style/virables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  /* hack技巧，预留高度防抖（图片高/图片宽） */
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0.06rem 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
.nearby {
  &__title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid $border-color;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
      &__tag {
        margin-right: 0.16rem;
      }
    }
    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>
