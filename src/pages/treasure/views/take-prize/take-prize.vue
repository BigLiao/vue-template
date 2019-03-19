<style lang="less" scoped>
@import '~@/style/variable.less';

.take-prize {
  .address-info {
    color: #ffffff;
    background-color: @primary-color;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 1.5em;
    .address-detail {
      font-size: 20px;
      font-weight: bold;
      padding: 8px 0;
      .icon-right {
        display: inline-block;
        margin-left: 20px;
        font-weight: normal;
        color: #d8d8d8;
      }
    }
  }

  // 中奖单
  .product-info-wrapper {
    margin-top: 10px;
  }

  .button-wrapper {
    margin: 60px 20px;
  }
}

// 弹窗
.popup-fullscreen {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @background-color;
  height: 100%;
  transform: none;
}

</style>

<template>
  <div class="take-prize">
    <div class="header">
      <div class="address-info">
        <div>领奖地址：</div>
        <template v-if="pageData.address">
          <div class="address-detail" @click="handleAddAddressClick">
            <span>{{pageData.address.receiverAddress}}</span>
          </div>
          <div class="user">
            {{pageData.address.receiverName}}&nbsp;{{pageData.address.receiverPhone}}
          </div>
        </template>
        <template v-else>
          <div class="address-detail" @click="handleAddAddressClick">
            <span>填写收货地址</span><i class="icon-right">&gt;</i>
          </div>
        </template>
      </div>
    </div>
    <div class="product-info-wrapper">
      <product-info :info="pageData"></product-info>
    </div>
    <div class="button-wrapper">
      <Button size="large" type="primary">确认</Button>
    </div>
  </div>
</template>

<script>
import ProductInfo from '../../components/product-info/product-info';
import { takePrizePage } from '../../api/http';
import { Button } from 'mint-ui';

export default {
  name: 'take-prize',
  components: {
    ProductInfo, Button
  },
  data() {
    return {
      popupVisible: false,
      pageData: {}
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      const [err, res] = await takePrizePage();
      if (err) {
        console.error(err);
        return;
      }
      this.pageData = res.data;
    },
    handleAddAddressClick() {
      this.$router.push('/add-address');
    }
  },
};
</script>
