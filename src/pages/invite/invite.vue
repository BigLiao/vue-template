<style lang="less" scoped>
@import '~@/style/variable.less';

.invite-wrapper {
  width:100%;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
  text-align: center;
  font-size: 16px;
  color: #081426;
  padding: 10px 0;
  .top {
    // flex: 0 0 auto;
  }
  .title {
    margin-top: 22px;
  }
  .desc {
    font-weight: bold;
    margin-top: 17px;
  }
  .banner {
    .banner-image {
      width: p2v(214);
      height: p2v(130);
      .bgImg('./img/banner');
      margin: 10px auto 0;
    }
  }
  // 信封
  .letter-wrapper {
    margin-top: 60px;
    background-color: #FFA200;
    // flex: 1 1 auto;
    position: relative;

    .letter-edge {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 160px;
      background-image: url('./img/triangle.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      z-index: 4;
    }

    .letter-edge-bg {
      height: 80px;
      background-color: #EB8200;
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      z-index: 2
    }

    .letter-sector {
      position: absolute;
      top: 2px;
      left: -2px;
      right: -2px;
      height: 120px;
      z-index: 5;
      // border-bottom: 1px solid rgba(157, 36, 36, 0.151);
      // border-bottom-left-radius: 100%  90px;
      // border-bottom-right-radius: 70% 96%;
      // box-shadow: 0 2px 5px rgba(157, 36, 36, 0.151);
      // background-color: #FFA200;
      perspective: 800px;
      transform-style: preserve-3d;
      transform-origin: top;
      backface-visibility: true;
      background-image: url('./img/sector.svg');
      background-size: 100%;
      background-repeat: no-repeat;
      transition: all 0.5s;
    }

    &.letter-open {
      .letter-sector {
        transform: rotateX(180deg);
        z-index: 2;
      }
      .letter-ticket {
        transform: translate(-50%, -50px);
      }
    }
    .form {
      position: relative;
      padding: 40px 40px 20px;
      min-height: 120px;
      .tips {
        color: #ffffff;
        font-size: 16px;
      }
    }
    .button-wrapper {
      padding: 40px 40px;
    }
    .form-item + .form-item {
      margin-top: 20px;
    }

    .letter-body {
      padding-top: 100px;
    }

    .letter-ticket {
      position: absolute;
      z-index: 3;
      left: 50%;
      top: 5px;
      padding: 30px 20px 40px 30px;
      transform: translateX(-50%);
      color: #DF6A2B;
      display: flex;
      align-items: center;
      transition: all 0.6s 0.5s;
      .point-count {
        font-size: 30px;
        padding: 0 10px 0 0;
        font-weight: bold;
      }
      .poinit-name {
        font-size: 14px;
      }
      background-image: url('./img/ticket.svg');
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>

<template>
  <div class="invite-wrapper">
    <div class="top">
      <h1 class="title">接受好友邀请</h1>
      <p class="desc">立即获得10个智慧积分奖励</p>
      <div class="banner">
        <div class="banner-image"></div>
      </div>
    </div>

    <div class="letter-wrapper" :class="{'letter-open': letterOpen}">
      <div class="letter-sector">
      </div>
      <div class="letter-edge"></div>
      <div class="letter-edge-bg"></div>
      <div class="letter-ticket">
        <div class="point-count">10.00</div>
        <div class="point-name">智慧<br>积分</div>
      </div>
      <div class="letter-body">
        <form class="form" v-if="!letterOpen">
          <div class="form-item">
            <Button type="white" @click.native="showAreacodeSelector">+{{formData.areacode}}</Button>
          </div>
          <div class="form-item">
            <b-input placeholder="请输入您的手机号接受邀请" type="tel"/>
          </div>
        </form>
        <form class="form" v-if="letterOpen">
          <div class="form-item">
            <p class="tips">可前往智慧积分APP领取</p>
          </div>
        </form>
         <div class="button-wrapper">
            <Button @click.native="handleClick" v-if="!letterOpen">领取积分</Button>
            <Button @click.native="handleClick" v-if="letterOpen">下载APP</Button>
          </div>
      </div>
    </div>

    <!-- 选择区号码 -->
    <AreacodeSelector v-model="formData.areacode" ref="areacode" />
  </div>
</template>

<script>
import Input from './components/input/input';
import Button from './components/button/button';
import AreacodeSelector from '_c/areacode-selector/areacode-selector';

export default {
  name: 'invite',
  components: {
    bInput: Input, Button, AreacodeSelector
  },
  data() {
    return {
      letterOpen: false,
      showAreacode: true,
      formData: {
        phone: '',
        areacode: '86'
      }
    };
  },
  methods: {
    handleClick() {
      this.letterOpen = true;
    },
    showAreacodeSelector() {
      this.$refs.areacode.show();
    }
  },
};
</script>
