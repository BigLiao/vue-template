<style lang="less" scoped>
@import '~_p/treasure/style/variable.less';

.home {
  font-size: 48px;
  color: red;
  .slider-wrapper {
    .clearfix;
  }
  .award-name {
  }
}
</style>

<template>
  <div class="home">
    <div class="slider-wrapper">
      <Slider
        :ratio="360 / 182"
        :imageList="[
          {src: 'https://www.petsworld.in/blog/wp-content/uploads/2018/10/Cat-Instinct-Tips.jpg'},
          {src: 'https://www.youthworker.com/articles/wp-content/uploads/2016/07/smiling-cat-750x400.jpg'},
          {src: 'http://www.yourpetswellness.net/wp-content/uploads/2015/09/New-Patient-Hub-Cat-Friendly-Practice-1-750x400.jpg'}
        ]"
      />
      <div class="award-name">
        星巴克限量版樱花杯套组
      </div>
    </div>

  </div>
</template>

<script>
import Slider from '../../components/slider/slider';

export default {
  name: 'home',
  components: {
    Slider
  }
};
</script>
