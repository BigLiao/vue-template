<style lang="less" scoped>
@import '~@/style/variable.less';
// @plugin '~@/style/less.plugin';

.home {
  .slider-wrapper {
    .clearfix();
  }
  .info {
    padding: 7px 15px 10px;
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
  }
  .status-before{
    background-color: #ffffff;
    padding-bottom: 15px;
    .price-wrapper {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
    }
    .price-per {
      color: @text-light-color;
      font-size: 10px;
    }
    .price-total {
      font-size: 12px;
    }
    .progress-wrapper {
      margin: 5px 15px 0;
    }
    .count-wrapper {
      margin: 6px 15px 0;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
    .button-wrapper {
      margin: 12px 15px 0;
      padding-bottom: 10px;
    }
    .count-remain {
      color: @text-light-color;
    }
  }
  .invite-friend-tips {
    padding: 14px 15px;
    text-align: center;
    color: @secondary-color;
    font-size: 14px;
    font-weight: bold;
    background-color: #ffffff;
  }
  .links {
    margin-top: 11px;
  }
  .detail {
    background-color: #ffffff;
    .title {
      padding: 14px 0;
      margin: 0 15px;
    }
  }

  // 抽奖结束
  .status-end {
    .result-number {
      padding: 10px 15px;
      background-color: @secondary-color;
      color: #ffffff;
      line-height: 36px;
      font-size: 16px;
      .cacl-button {
        float: right;
        padding: 0 10px;
        border: 1px solid #ffffff;
        border-radius: 2px;
        color: #ffffff;
        text-align: center;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
      }
    }

    .result-user {
      display: flex;
      padding: 15px;
      background-color: #ffffff;
    }
    .avatar-wrapper {
      flex: 0 0 auto;
      padding: 10px 10px 0 0;
    }
    .user-info {
      flex: 1 1 auto;
      font-size: 12px;
      .item {
        & + .item {
          margin-top: 6px;
        }
        .tips {
          color: @text-light-color;
        }
      }
    }
  }

  .participate-tips {
    .not-participate {
      margin: 10px 15px 0;
      color: @text-light-color;
      background-color: @background-color;
      padding: 4px 0;
      text-align: center;
      border-radius: 2px;
      font-size: 12px;
      line-height: 17px;
      .icon-warning {
        display: inline-block;
        width: 12px;
        height: 12px;
        line-height: 12px;
        text-align: center;
        border-radius: 50%;
        background-color: #D8D8D8;
        color: #ffffff;
      }
    }
    .have-participate {
      padding: 5px 15px;
      background-color: @background-red-color;
      font-size: 12px;
      line-height: 1.2em;
      .my-numbers {
        margin-top: 4px;
      }
      .number {
        display: inline-block;
        padding: 0 5px 0 0;
        white-space: nowrap;
      }
    }
  }
  .city-picker-wrapper {
    height: 400px;
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
    </div>
    <div>
      <!-- 下面是不同状态 -->
      <!-- 开奖前 -->
      <div class="status-before" v-if="status==='before'">
        <div class="price-wrapper">
          <div class="price-per">0.25个积分/抽奖码</div>
          <div class="price-total">总需6850个抽奖码</div>
        </div>
        <div class="progress-wrapper">
          <Progress :percentage="60" style="margin-top:5px;"></Progress>
        </div>
        <div class="count-wrapper">
          <div class="count-have">已参与685个抽奖码</div>
          <div class="count-remain">
            剩余<span class="count">800</span>个抽奖码
          </div>
        </div>
        <div class="button-wrapper">
          <Button size="large">立即参与</Button>
          <Button size="large" type="plain" style="margin-top:10px;">邀请朋友即送抽奖码</Button>
        </div>
      </div>
      <!-- 夺宝开奖中 -->
      <div class="status-doing" v-if="status==='doing'">
        <Clocker :endAt="endAt" />
      </div>

      <!-- 夺宝已结束 -->
      <div class="status-end" v-if="status==='end'">
        <div class="result-number">
          <div class="cacl-button">计算详情</div>
          <div class="lucky-number">
            幸运中奖号码：100002317
          </div>
        </div>
        <div class="result-user">
          <div class="avatar-wrapper">
            <Avatar />
          </div>
          <div class="user-info">
            <div class="item">
              获奖者：口袋君***
              <span class="tips">(深圳 IP 183.123.12.88)</span>
            </div>
            <div class="item">
              182328****<span class="tips">(唯一)</span>
            </div>
            <div class="item">
              本次参与：50个抽奖码
              <a href="javascript:;">查看</a>
            </div>
            <div class="item">
              揭晓时间：2019.02.18 18:26:14
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="participate-tips">
      <OnePx v-if="false" />
      <div class="not-participate" v-if="false">
        <i class="icon-warning">!</i>
        您还没有参与本期夺宝哦！
      </div>
      <div class="have-participate">
        <div class="count">
          我本次活动已参与：<span>10</span>个抽奖码
        </div>
        <div class="my-numbers">
          抽奖码：
          <template v-if="myNumberListClose">
            <span class="number" v-for="(item, index) of numberList.slice(0, 3)" :key="index">100002348</span>
            <a href="javascript:;" v-if="numberList.length > 3" style="margin-left:10px;" @click="myNumberListClose=false">查看更多</a>
          </template>
          <template v-if="!myNumberListClose">
            <span class="number" v-for="(item, index) of numberList" :key="index">100002348</span>
            <a href="javascript:;" v-if="numberList.length > 3" style="margin-left:10px;" @click="myNumberListClose=true">收起更多</a>
          </template>
        </div>
      </div>
    </div>

    <!-- 链接 -->
    <div class="links">
      <Cell
        title="往期揭晓"
        is-link
      >
      </Cell>
      <Cell
        title="本期参与记录"
        is-link
      >
      </Cell>
    </div>

    <!-- 图文详情 -->
    <div class="detail" v-if="true">
      <h2 class="title">图文详情</h2>
      <article class="content">
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
        ...<br>
        这里是图文详情<br>
      </article>
    </div>
  </div>
</template>

<script>
import Slider from '../../components/slider/slider';
import Tag from '../../components/tag/tag';
import Progress from '@/components/progress/progress';
import { Button, Cell } from 'mint-ui';
import OnePx from '_c/one-px/one-px';
import Avatar from '_c/avatar/avatar';
import Clocker from './components/clocker/clocker';

export default {
  name: 'home',
  components: {
    Slider, Tag, Progress, Button, Cell, OnePx, Avatar, Clocker
  },
  data() {
    return {
      status: 'doing',
      numberList: [
        '100002012', '100002012', '100002012', '100002012', '100002012',
        '100002012', '100002012', '100002012', '100002012',
      ],
      myNumberListClose: true,
      endAt: new Date().getTime() + 40000
    };
  }
};
</script>
