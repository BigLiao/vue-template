<style lang="less" scoped>
@import '~@/style/variable.less';
// @plugin '~@/style/less.plugin';

.home {
  .slider-wrapper {
    .clearfix();
  }
  .info {
    padding: 7px 15px 15px;
    background-color: #ffffff;
    .h2 {
      .title {
        font-weight: bold;
        vertical-align: middle;
        font-size: 18px;
        line-height: 24px;
        margin-left: 10px;
      }
    }
    .number {
      color: @text-light-color;
      font-size: 12px;
      margin-right: 15px;
    }
    .point {
      color: @ornament-color;
      font-size: 12px;
    }
    .price-wrapper {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      padding: 0 4px;
    }
    .price-per {
      color: @text-light-color;
      font-size: 10px;
    }
    .price-total {
      font-size: 12px;
    }
    .count-wrapper {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
    .count-remain {
      color: @text-light-color;
    }
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
    </div>
    <div class="info">
      <h2 class="h2">
        <tag />
        <span class="title">星巴克限量版樱花杯套组</span>
      </h2>
      <div style="margin-top:6px;">
        <span class="number">编号：20190203001期</span>
        <span class="point">STR</span>
        <span class="point">&nbsp;积分抽</span>
      </div>
      <div class="price-wrapper">
        <div class="price-per">0.25个积分/抽奖码</div>
        <div class="price-total">总需6850个抽奖码</div>
      </div>
      <Progress :percentage="60" style="margin-top:5px;"></Progress>
      <div class="count-wrapper">
        <div class="count-have">已参与685个抽奖码</div>
        <div class="count-remain">
          剩余<span class="count">800</span>个抽奖码
        </div>
      </div>
      <Button size="large">立即参与</Button>
    </div>
  </div>
</template>

<script>
import Slider from '../../components/slider/slider';
import Tag from '../../components/tag/tag';
import Progress from '@/components/progress/progress';
import { Button } from 'mint-ui';

export default {
  name: 'home',
  components: {
    Slider, Tag, Progress, Button
  }
};
</script>
