<style lang="less">
@import '~@/style/variable.less';

.by-address-form {
  width: 100%;
  .form {
    background-color: #ffffff;
  }
}

.popup-areacode {
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
}
</style>

<template>
  <div class="by-address-form">
    <form class="form">
      <field label="联系人" placeholder="姓名" v-model="data.receiverName"></field>
      <field label="手机号码" placeholder="手机号码" type="tel" v-model="data.receiverPhone">
        <Button size="small" plain type="primary" @click="showAreacodeSelector">+{{data.areaCode}}</Button>
      </field>
      <field label="详细地址" type="textarea" placeholder="所在城市、道路街道、小区、楼栋号、单元室等" rows="3" v-model="data.receiverAddress"></field>
    </form>
    <!-- 选取手机区号 -->
    <AreacodeSelector
      ref="areacode"
      v-model="data.areaCode"
    ></AreacodeSelector>
  </div>
</template>

<script>
import { Field, Button, Popup, Cell, Radio } from 'mint-ui';
import codeList from './data/code.json';
import OnePx from '_c/one-px/one-px';
import AreacodeSelector from '_c/areacode-selector/areacode-selector';

export default {
  name: 'by-address-form',
  components: {
    Field, Button, Popup, Radio, OnePx, AreacodeSelector
  },
  model: {
    prop: 'data',
    event: 'update'
  },
  props: {
    data: Object
  },
  data() {
    return {
      popupVisible: false,
      areaCodeList: codeList.map(item => ({
        label: item.zh,
        value: item.code
      }))
    };
  },
  methods: {
    handleSetAreaCode() {
      const code = this.$refs.areaCodeRadio.currentValue;
      this.data.areaCode = String(code);
      this.popupVisible = false;
    },
    showAreacodeSelector() {
      this.$refs.areacode.show();
    }
  },
};
</script>