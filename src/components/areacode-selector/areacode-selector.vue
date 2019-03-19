<style lang="less">
@import '~@/style/variable.less';

.by-areacode-selector {
  width: p2v(300);
  // overflow: scroll;
  .areacode-select-content {
    max-height: 400px;
    overflow: scroll;
  }
  .areacode-select-title {
    padding: 10px 15px;
    font-size: 16px;
  }
  .areacode-select-button {
    padding: 10px 15px;
    text-align: right;
  }
  .areacode-select-list {
    padding: 5px 0;
    .areacode-select-item {
      display: flex;
      font-size: 14px;
      padding: 5px 10px;
      // width: p2v(160);
      .border1px();
      .flag {
        vertical-align: middle;
      }
      .name {
        vertical-align: middle;
        line-height: 24px;
        padding-left: 5px;
        flex: 1 1 auto;
        text-align: left;
      }
      .radio {
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-image: url('./img/ic_radio_normal.svg');
        &.active {
          background-image: url('./img/ic_radio_active.svg');
        }
      }
    }
  }
}
</style>

<template>
  <Popup
      v-model="visible"
      position="center"
      class="by-areacode-selector"
      :closeOnClickModal="false"
    >
    <div class="areacode-select-title">选择手机区号</div>
    <OnePx></OnePx>
    <div class="areacode-select-content">
      <ul class="areacode-select-list">
        <li class="areacode-select-item" v-for="(item, index) of codeList" :key="index" @click="currentCode=item.code">
          <img v-if="item.flag" :src="item.flag" alt="flag" class="flag" height="24px" width="24px">
          <span class="name">{{item.zh}}: {{item.code}}</span>
          <div class="radio" :class="currentCode==item.code?'active':'normal'"></div>
        </li>
      </ul>
    </div>
    <OnePx></OnePx>
    <div class="areacode-select-button">
      <Button size="small" type="primary" plain style="margin-right:15px;" @click="visible=false">取消</Button>
      <Button size="small" type="primary" @click="handleSetAreaCode">确定</Button>
    </div>
  </Popup>
</template>

<script>
import codeList from './data/code-with-flag.json';
import OnePx from '_c/one-px/one-px';
import { Popup, Button } from 'mint-ui';

export default {
  name: 'by-areacode-selecgtor',
  components: {
    Popup, OnePx, Button
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: '86'
    },
  },
  data() {
    return {
      codeList: codeList,
      currentCode: this.value,
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    handleChange() {
      //
    },
    handleSetAreaCode() {
      this.$emit('change', this.currentCode);
      this.visible = false;
    }
  },
};
</script>
