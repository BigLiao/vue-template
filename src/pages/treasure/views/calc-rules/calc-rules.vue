<style lang="less" scoped>
@import '~@/style/variable.less';

.calc-rules {
  .rules {
    .box(360, 107);
    .bgImg('./img/rules')
  }
  .item {
    margin-top: 10px;
    padding: 12px 15px;
    background-color: #ffffff;
    font-size: 14px;
    line-height: 1.5em;
  }
  .title {
    font-weight: bold;
    .tips {
      color: @text-light-color;
      font-weight: normal;
    }
  }
  .content {
    margin-top: 10px;
    color: @text-light-color;
    & em {
      color: @text-color;
      font-weight: bold;
      padding: 0 4px;
    }
  }
  .button-wrapper {
    margin-top: 10px;
    text-align: right;
  }
}
</style>

<template>
  <div class="calc-rules">
    <div class="rules"></div>
    <div class="item">
      <div class="title">数值A</div>
      <div class="content">
        数值A=取截止该奖品开奖时间点<em>全站</em>最后50条参与时间记录之和 = <em>6016123123</em>
      </div>
      <div class="button-wrapper">
        <Button type="primary" plain>计算详情</Button>
      </div>
    </div>
    <div class="item">
      <div class="title">数值B</div>
      <div class="content">
        数值B=取当前时时彩开奖号，当前期为：20190203002 = <em>14837</em>
      </div>
    </div>
    <div class="item">
      <div class="title">数值C</div>
      <div class="content">
        数值A=奖品所需人次 = <em>1400</em>
      </div>
    </div>
    <div class="item">
      <div class="title">计算结果
        <span class="tips">(Mod为求余函数)</span>
      </div>
      <div class="content">
        (6016177970+14837) Mod 130 = 17<br>
        17（余数）+ 10000001（固定值） = <em>10002317</em><br>
        幸运号码：<em>100002317</em>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'mint-ui';

export default {
  name: 'calc-rules',
  components: {
    Button
  }
};
</script>
