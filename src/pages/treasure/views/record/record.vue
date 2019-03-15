<style lang="less" scoped>
@import '~@/style/variable.less';

.record {
  height: 100%;
  .list {
    .item {
      background-color: #ffffff;
      padding-bottom: 8px;
      & + .item {
        margin-top: 10px;
      }

      .button-wrapper {
        margin: 20px auto 0;
        width: p2v(140);
      }
    }
  }
}
</style>


<template>
  <div class="record">
    <ScrollBox>
      <ul class="list">
        <li class="item">
          <ProductInfo />
          <div class="button-wrapper">
            <Button size="large">立即追投</Button>
          </div>
        </li>
        <li class="item">
          <ProductInfo />
          <div class="button-wrapper">
            <Button size="large" type="warning" plain>查看详情</Button>
          </div>
        </li>
        <li class="item">
          <ProductInfo />
          <div class="button-wrapper">
            <Button size="large" plain>去开奖台</Button>
          </div>
        </li>
        <li class="item">
          <ProductInfo />
          <div class="button-wrapper">
            <Button size="large">填写领奖地址</Button>
          </div>
        </li>
      </ul>
    </ScrollBox>
  </div>
</template>

<script>
import ProductInfo from '../../components/product-info/product-info';
import ScrollBox from '@/components/scroll-box/scroll-box';
import { Button } from 'mint-ui';

export default {
  name: 'record',
  components: {
    ProductInfo, Button, ScrollBox
  }
};
</script>

