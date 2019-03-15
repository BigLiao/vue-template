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
        <div class="address-detail" @click="popupVisible=true">
          <span>填写收货地址</span><i class="icon-right">&gt;</i>
        </div>
        <div class="user">
          陈小姐&nbsp;1827392839
        </div>
      </div>
    </div>
    <div class="product-info-wrapper">
      <product-info></product-info>
    </div>

    <!-- 填写地址弹窗 -->
    <Popup
      v-model="popupVisible"
      position="right"
      class="popup-fullscreen"
      :closeOnClickModal="false"
    >
      <AddressForm
        @cancel="popupVisible=false"
      ></AddressForm>
    </Popup>
  </div>
</template>

<script>
import ProductInfo from '../../components/product-info/product-info';
import { Popup } from 'mint-ui';
import AddressForm from './components/address-form/address-form';

export default {
  name: 'take-prize',
  components: {
    ProductInfo, Popup, AddressForm
  },
  data() {
    return {
      popupVisible: false,
    };
  },
  methods: {
    //
  },
};
</script>
