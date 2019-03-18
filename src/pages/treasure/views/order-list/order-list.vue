<style lang="less" scoped>
@import '~@/style/variable.less';

.order-list {
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
  <div class="order-list">
    <ScrollBox
      @pullingDown="initData"
      @pullingUp="moreData"
      ref="scrollBox"
    >
      <ul class="list">
        <li class="item" v-for="(item, index) of recordList" :key="index">
          <ProductInfo :info="item" @goDetail="$router.push(`/detail/${item.activityId}`)" />
          <div class="button-wrapper">
            <Button
              v-if="item.activityStatusEnum===0"
              size="large"
              @click="$router.push(`/order/${item.activityId}`)"
            >立即追投</Button>
            <Button
              v-if="item.activityStatusEnum===2"
              size="large"
              type="warning"
              plain
              @click="$router.push(`/detail/${item.activityId}`)"
            >查看详情</Button>
            <Button
              v-if="item.activityStatusEnum===1"
              size="large"
              plain
              @click="$router.push(`/detail/${item.activityId}`)"
            >去开奖台</Button>
            <Button
              v-if="item.activityStatusEnum===3"
              size="large"
              @click="$router.push(`/tack-prize/${item.activityId}`)"
            >填写领奖地址</Button>
          </div>
        </li>
      </ul>
    </ScrollBox>
  </div>
</template>

<script>
import ProductInfo from '../../components/product-info/product-info';
import ScrollBox from '@/components/better-scroll/better-scroll';
import { Button } from 'mint-ui';
import { orderList } from '../../api/http';
import { imageClip } from '@/filters';

export default {
  name: 'order-list',
  components: {
    ProductInfo, Button, ScrollBox
  },
  filters: {
    imageClip
  },
  data() {
    return {
      lastIdStr: '',
      recordList: [],
      firstLoaded: false,
      allLoaded: false
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.lastIdStr = '0';
      const [err, res] = await orderList({ lastIdStr: this.lastIdStr });
      this.firstLoaded = true;
      if (err) {
        return;
      }
      this.recordList = res.data.recordList;
      this.lastIdStr = res.data.lastIdStr;
      this.allLoaded = !res.data.hasMore;
      this.$refs.scrollBox.update();
    },
    async moreData() {
      const [err, res] = await orderList({ lastIdStr: this.lastIdStr });
      if (err) {
        return;
      }
      this.recordList = this.recordList.concat(res.data.recordList);
      this.lastIdStr = res.data.lastIdStr;
      this.allLoaded = !res.data.hasMore;
      this.$refs.scrollBox.update();
    },
    async handleLoadTop() {
      if (!this.firstLoaded) {
        this.$refs.scrollBox.loadTopStop();
        return;
      }
      await this.initData();
      this.$refs.scrollBox.loadTopStop();
    },
    async handleLoadBottom() {
      if (!this.firstLoaded) {
        return;
      }
      await this.moreData();
      this.$refs.scrollBox.loadBottomStop();
    }
  },
};
</script>

