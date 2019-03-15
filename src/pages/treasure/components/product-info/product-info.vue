<style lang="less" scoped>
@import '~@/style/variable.less';

.product-info {
  .product-card {
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
        width: 100%;
        .name {
          font-size: 16px;
        }
        .lucky-number {
          color: @secondary-color;
          font-size: 16px;
          font-weight: bold;
        }
        .lucky-user {
          font-size: 12px;
        }
        .end-time {
          font-size: 12px;
        }
        .count {
          font-size: 14px;
        }
      }

      // before
      .progress-wrapper {
        margin-top: 5px;
        color: @text-light-color;
        font-size: 12px;
        line-height: 2em;
      }
      .remail {
        margin-top: 5px;
        color: @text-light-color;
        font-size: 12px;
        line-height: 2em;
        .clearfix();
        .point-type {
          float: right;
          color: @ornament-color;
        }
        em {
          color: @secondary-color;
        }
      }
    }
  }
  .total-codes {
    margin-top: 10px;
    font-size: 12px;
    .list {
      margin-top: 4px;
    }
    .item {
      display: inline-block;
      padding: 0 5px 0 0;
      white-space: nowrap;
    }
  }
}
</style>

<template>
  <div class="product-info">
    <div class="product-card">
      <div class="issure">
        <div class="tag-wrapper">
          <Tag v-if="info.activityStatusEnum===0" text="进行中" />
          <Tag v-if="info.activityStatusEnum===1" type="end" text="已结束" />
          <Tag v-if="info.activityStatusEnum===2" type="end" text="已结束" />
          <Tag v-if="info.activityStatusEnum===3" type="fill" text="开奖单" />
        </div>
        编号：{{info.stage}}期
      </div>
      <div class="product">
        <div class="img-wrapper">
          <img :src="info.coverImageUrl | imageClip" alt="product" width="100%" height="auto">
        </div>
        <div class="info">
          <div class="name">{{info.title}}</div>
          <!-- 开奖前 -->
          <div class="before" v-if="info.activityStatusEnum===0">
            <div class="progress-wrapper">
              完成进度{{info.applyCount / info.totalCount}}%
              <Progress size="small" :persentage="info.applyCount / info.totalCount" />
            </div>
            <div class="remail">
              <div class="point-type">{{info.pointName}} 积分抽</div>
              <div class="remain-count">剩余人次 <em>{{info.leftCount}}</em>个抽奖码</div>
            </div>
          </div>
          <!-- 开奖中 -->
          <template class="doing" v-if="info.activityStatusEnum===1">
            <div class="lucky-number">开奖中 赶紧去看看！</div>
            <div class="end-time">揭晓时间：{{info.drawTime}}</div>
          </template>
          <!-- 已结束 -->
          <template class="result" v-if="info.activityStatusEnum>=2">
            <div class="lucky-number">幸运抽奖号码：{{info.luckyNumber}}</div>
            <div class="lucky-user">获奖者：{{info.luckyUserName}}</div>
            <div class="end-time">揭晓时间：{{info.drawTime}}</div>
          </template>
        </div>
      </div>
      <div class="total-codes">
        <div>本次已参与：{{info.count}}个抽奖码</div>
        <div class="list">
          抽奖码：
          <template v-if="myNumberListClose">
            <span class="item" v-for="(item, index) of info.drawNumbers.split(';').slice(0, 3)" :key="index">{{item}};</span>
            <a href="javascript:;" v-if="info.drawNumbers.split(';').length > 3" style="margin-left:10px;" @click="myNumberListClose=false">查看更多</a>
          </template>
          <template v-if="!myNumberListClose">
            <span class="item" v-for="(item, index) of info.drawNumbers.split(';')" :key="index">{{item}};</span>
            <a href="javascript:;" v-if="info.drawNumbers.split(';').length > 3" style="margin-left:10px;" @click="myNumberListClose=true">收起更多</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '_c/tag/tag';
import Progress from '_c/progress/progress';
import { imageClip } from '@/filters';

export default {
  name: 'product-info',
  components: {
    Tag, Progress
  },
  filters: {
    imageClip
  },
  props: {
    info: Object
  },
  data() {
    return {
      myNumberListClose: true,
      numberList: [
        '100002012', '100002012', '100002012', '100002012', '100002012',
        '100002012', '100002012', '100002012', '100002012',
      ],
    };
  }
};
</script>
