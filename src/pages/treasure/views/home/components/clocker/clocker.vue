<style lang="less">
@import '~@/style/variable.less';

.by-clocker {
  .box(357, 184);
  .bgImg('img/clock-bg');
  background-color: #ffffff;
  text-align: center;
  position: relative;
  .issure {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 12%;
    font-size: 10px;
    color: #ffffff;
  }
  .title {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 18%;
    font-size: 28px;
    font-weight: bold;
    color: #ffffff;
  }
  .clock {
    position: absolute;
    top: 0;
    width: 100%;
    padding-top: 36%;
    font-size: 28px;
    color: #ffffff;
    word-spacing: 0.2em;
    .unit {
      color: @secondary-color;
      font-size: 20px;
      vertical-align: 10%;
      padding-left: 4px;
    }
  }
}
</style>

<template>
  <div class="by-clocker">
    <div class="issure">期号：20190203001</div>
    <div class="title">揭晓倒计时</div>
    <div class="clock">
      {{minute}}<span class="unit">分</span>
      {{second}}<span class="unit">秒</span>
      {{millisecond}}
    </div>
  </div>
</template>

<script>

function numberToStr(number) {
  if (number < 10) {
    return '0' + number;
  } else {
    return number.toFixed(0);
  }
}

let clockCount = 650000;
export default {
  name: 'by-clocker',
  props: {
    endAt: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      clockCount: 650000, // ms
      timer: null,
      minute: 0,
      second: '00',
      millisecond: '00'
    };
  },
  computed: {
    // minute() {
    //   return '1';
    // },
    // second() {
    //   return '00';
    // },
    // millisecond() {
    //   return '00';
    // }
  },
  watch: {
    clockCount(count) {
      const minute = Math.floor(count / 60000);
      const second = Math.floor((count - minute * 60000) / 1000);
      const millisecond = Math.floor((count - minute * 60000 - second * 1000) / 10); // 百分秒
      this.minute = minute;
      this.second = numberToStr(second);
      this.millisecond = numberToStr(millisecond);
    }
  },
  mounted() {
    this.loop();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    loop() {
      const time = (new Date()).getTime();
      const remain = this.endAt - time;
      if (remain > 0) {
        this.clockCount = remain;
        this.timer = setTimeout(() => {
          this.loop();
        }, 50);
      } else {
        clockCount = 0;
        this.$emit('clockEnd');
      }
    }
  },
};
</script>

