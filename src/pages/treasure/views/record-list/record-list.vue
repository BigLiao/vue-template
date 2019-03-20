<style lang="less" scoped>
@import '~@/style/variable.less';

.record-list {
  height: 100%;
  .record-list-content {
    .record-item {
      & + .record-item {
        .border1px(top);
      }
      &:last-child {
        .border1px(bottom);
      }
      .user-record {
        display: flex;
        padding: 10px 20px 10px 5px;
        align-items: center;
        .avatar-wrapper {
          padding-right: 10px;
        }
        .info-content {
          font-size: 12px;
          width: 100%;
          flex: 1 1 auto;
          .item {
            padding: 2px 0;
            .count {
              float: right;
              font-size: 12px;
              em {
                color: @secondary-color;
              }
            }
          }
          .name {
            font-size: 14px
          }
          .tips {
            color: @text-light-color;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="record-list">
    <ScrollBox
      ref="scrollBox"
      @pullingDown="initData"
      @pullingUp="moreData"
    >
      <ul class="record-list-content">
        <li class="record-item" v-for="(item, index) of recordList" :key="index">
          <div class="user-record">
            <div class="avatar-wrapper">
              <Avatar :src="item.headPic" />
            </div>
            <div class="info-content">
              <div class="item">
                <span class="name">{{item.userName}}</span>
                <span class="tips">({{item.ipAddress}})</span>
              </div>
              <div class="item">
                <div class="count">
                  <em>{{item.count}}</em>个抽奖码
                </div>
                ID:{{item.phone}}
                <span class="tips">(唯一)</span>
              </div>
              <div class="item">
                {{item.applyTime}}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </ScrollBox>
  </div>
</template>

<script>
import ScrollBox from '@/components/better-scroll/better-scroll';
import { activityRecord } from '../../api/http';
import Avatar from '_c/avatar/avatar';

export default {
  name: 'record-list',
  components: {
    ScrollBox, Avatar
  },
  data() {
    return {
      lastIdStr: '',
      recordList: [],
      activityIdStr: ''
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.lastIdStr = '0';
      this.activityIdStr = this.$route.params.id;
      const [err, res] = await activityRecord({ activityIdStr: this.activityIdStr, lastIdStr: this.lastIdStr });
      if (err) {
        return;
      }
      this.recordList = res.data.recordList;
      this.lastIdStr = res.data.lastIdStr;
      this.$refs.scrollBox.update();
    },
    async moreData() {
      const [err, res] = await activityRecord({ lastIdStr: this.lastIdStr });
      if (err) {
        return;
      }
      this.recordList = this.recordList.concat(res.data.recordList);
      this.lastIdStr = res.data.lastIdStr;
      this.allLoaded = !res.data.hasMore;
      this.$refs.scrollBox.update();
    },
  },
};
</script>
