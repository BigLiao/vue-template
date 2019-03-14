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
