<style lang="less" scoped>
@import '~@/style/variable.less';

.reward-detail {
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

  .result-user {
    display: flex;
    padding: 15px;
    background-color: #ffffff;
    margin-top: 10px;
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

  .order-buttons {
    margin: 20px 12px 0;
  }
}
</style>

<template>
  <div class="reward-detail">
    <div class="order-card">
      <div class="issure">
        <div class="tag-wrapper">
          <Tag />
        </div>
        编号：20190203001期
      </div>
      <div class="product">
        <div class="img-wrapper">
          <img src="https://www.petsworld.in/blog/wp-content/uploads/2018/10/Cat-Instinct-Tips.jpg" alt="product" width="100%" height="auto">
        </div>
        <div class="info">
          <div class="name">星巴克限量版樱花杯套组</div>
          <div class="price">
            <em class="number">{{price}}</em>STR积分/抽奖码
          </div>
          <div class="count">
            本次参与10个抽奖码：
          </div>
        </div>
      </div>
    </div>

    <!-- 获奖者信息 -->
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

    <!-- 抽奖码信息 -->
    <div class="code-info">
      <h3 class="title">抽奖码信息</h3>
      <ul class="code-list">
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
        <li class="code-item">100002348</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Tag from '_c/tag/tag';
import { Button } from 'mint-ui';

export default {
  name: 'reward-detail',
  components: {
    Tag, Button
  },
  data() {
    return {
      price: 0.25
    };
  }
};
</script>
