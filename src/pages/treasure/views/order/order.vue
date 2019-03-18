<style lang="less" scoped>
@import '~@/style/variable.less';

.page-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  .content {
    flex: 1 1 auto;
  }
  .bottom {
    flex: 0 0 auto;
  }
}

.order {
  .order-card {
    padding: 10px 12px;
    background-color: #ffffff;
    .issure {
      .tag-wrapper {
        float: right;
      }
      color: @text-light-color;
      font-size: 12px;
    }
    .product {
      margin-top: 10px;
      display: flex;
      .img-wrapper {
        width: p2v(84);
        flex: 0 0 auto;
        overflow: hidden;
        height: p2v(84);
        background-color: @background-color;
      }
      .info {
        padding: 2px 9px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .name {
          font-size: 16px;
        }
        .price {
          padding: 10px 0;
          font-size: 12px;
          & > em {
            color: @secondary-color;
          }
        }
        // .cart {

        // }
      }
    }
  }
  .order-bar {
    display: flex;
    flex-direction: row;
    .payment-button {
      flex: 0 0 auto;
      width: 126px;
      height: 50px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
      background-color: @secondary-color;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
    }
    .payment-info {
      flex: 1 1 auto;
      background-color: #4A4A4A;
      display: flex;
      flex-direction: row;
      align-items: center;
      .price {
        flex: 0 0 auto;
        color: #ffffff;
        font-size: 14px;
        padding-left: 15px;
        .number {
          font-size: 18px;
        }
      }
      .have {
        flex: 1 1 auto;
        font-size: 10px;
        color: #979797;
        padding: 2px 9px;
        border-left: 1px solid #979797;
        margin-left: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="order page-wrapper">
    <div class="content">
      <div class="order-card">
        <div class="issure">
          <div class="tag-wrapper">
            <Tag v-if="orderPageData.activityStatusEnum===0" text="进行中" />
            <Tag v-if="orderPageData.activityStatusEnum===1" type="end" text="已结束" />
            <Tag v-if="orderPageData.activityStatusEnum===2" type="end" text="已结束" />
            <Tag v-if="orderPageData.activityStatusEnum===3" type="fill" text="开奖单" />
          </div>
          编号：20190203001期
        </div>
        <div class="product">
          <div class="img-wrapper">
            <img :src="orderPageData.coverImageUrl" alt="product" width="100%" height="auto">
          </div>
          <div class="info">
            <div class="name">{{orderPageData.title}}</div>
            <div class="price">
              <em class="number">{{orderPageData.unitPrice}}</em>{{orderPageData.pointName}}积分/抽奖码
            </div>
            <div class="cart">
              <cart-input v-model="cartCount"></cart-input>
            </div>
          </div>
        </div>
        <div class="ticket"></div>
      </div>
    </div>
    <div class="bottom order-bar">
      <div class="payment-info">
        <div class="price">
          <span class="number">{{paymentPrice}}</span>{{orderPageData.pointName}}
        </div>
        <div class="have">
          拥有{{orderPageData.pointName}}积分：{{orderPageData.account}}
        </div>
      </div>
      <div class="payment-button" @click="handleSubmitClick">
        立即参与
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '_c/tag/tag';
import CartInput from '_c/cart-input/cart-input';
import { Indicator, Toast } from 'mint-ui';
import { orderPage, orderSubmit } from '../../api/http';

export default {
  name: 'order',
  components: {
    Tag, CartInput
  },
  data() {
    return {
      cartCount: 0,
      activityIdStr: '',
      orderPageData: {}
    };
  },
  computed: {
    paymentPrice() {
      if (!this.orderPageData.unitPrice) {
        return 0;
      }
      return (this.cartCount * this.orderPageData.unitPrice).toFixed(2);
    }
  },
  mounted() {
    this.initData();
  },
  beforeDestroy() {
    Indicator.close();
  },
  methods: {
    async initData() {
      this.activityIdStr = this.$route.params.id;
      const [err, res] = await orderPage({
        activityIdStr: this.activityIdStr
      });
      if (err) {
        return;
      }
      this.orderPageData = res.data;

    },
    handleSubmitClick() {
      if (this.paymentPrice >= this.orderPageData.account) {
        Toast('积分不足');
        return;
      }
      this.submit();
    },
    async submit() {
      Indicator.open({
        text: '分配中，请稍后',
        spinnerType: 'fading-circle'
      });
      const [err, res] = await orderSubmit({ activityIdStr: this.activityIdStr, count: this.cartCount });
      Indicator.close();
      if (err) {
        console.log(err);
        return;
      }
      const activityApplyId = res.data.extraValue;
      this.$router.push(`/order-info/${activityApplyId}`);
    }
  },
};
</script>