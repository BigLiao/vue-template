<style lang="less" scoped>
@import '~@/style/variable.less';

.order-info {
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
        .count {
          font-size: 14px;
        }
      }
    }
  }

  .code-info {
    margin-top: 10px;
    padding: 10px 12px;
    background-color: #ffffff;
    .title {
      font-size: 16px;
    }
    .code-list {
      margin-top: 10px;
      padding-bottom: 25px;
      .code-item {
        display: inline-block;
        margin-right: 15px;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }

  .order-buttons {
    margin: 20px 12px 0;
  }
}
</style>

<template>
  <div class="order-info">
    <div class="order-card">
      <div class="issure">
        <div class="tag-wrapper">
          <Tag v-if="orderInfo.activityStatusEnum===0" text="进行中" />
          <Tag v-if="orderInfo.activityStatusEnum===1" type="end" text="已结束" />
          <Tag v-if="orderInfo.activityStatusEnum===2" type="end" text="已结束" />
          <Tag v-if="orderInfo.activityStatusEnum===3" type="fill" text="开奖单" />
        </div>
        编号：{{orderInfo.stage}}期
      </div>
      <div class="product">
        <div class="img-wrapper">
          <img :src="orderInfo.coverImageUrl" alt="product" width="100%" height="auto">
        </div>
        <div class="info">
          <div class="name">{{orderInfo.title}}</div>
          <div class="price">
            <em class="number">{{orderInfo.unitPrice}}</em>{{orderInfo.pointName}}积分/抽奖码
          </div>
          <div class="count">
            您本次获得{{orderInfo.count}}个抽奖码：
          </div>
        </div>
      </div>
    </div>

    <!-- 抽奖码信息 -->
    <div class="code-info">
      <h3 class="title">抽奖码信息</h3>
      <ul class="code-list" v-if="orderInfo.drawNumbers">
        <li class="code-item" v-for="(item, index) of orderInfo.drawNumbers.split(';')" :key="index">{{item}};</li>
      </ul>
    </div>

    <!-- 按钮 -->
    <div class="order-buttons">
      <Button size="large">立即追投</Button>
      <Button size="large" plain style="margin-top:10px;">邀请好友即送抽奖码</Button>
    </div>
  </div>
</template>

<script>
import Tag from '_c/tag/tag';
import { Button } from 'mint-ui';
import { orderInfo } from '../../api/http';

export default {
  name: 'order-info',
  components: {
    Tag, Button
  },
  data() {
    return {
      price: 0.25,
      activityApplyIdStr: '',
      orderInfo: {}
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.activityApplyIdStr = this.$route.params.id;
      const [err, res] = await orderInfo({ activityApplyIdStr: this.activityApplyIdStr });
      if (err) {
        console.log(err);
        return;
      }
      this.orderInfo = res.data;
    }
  },
};
</script>
