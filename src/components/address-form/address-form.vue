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
        <Button size="small" plain type="primary" @click="popupVisible=true">+{{data.areaCode}}</Button>
      </field>
      <field label="详细地址" type="textarea" placeholder="所在城市、道路街道、小区、楼栋号、单元室等" rows="3" v-model="data.receiverAddress"></field>
    </form>
    <Popup
      v-model="popupVisible"
      position="center"
      class="popup-areacode"
      :closeOnClickModal="false"
    >
      <!-- <ul>
        <li v-for="(item, index) of areaCodeList" :key="index">
          {{item.zh}}
        </li>
      </ul> -->
      <div class="areacode-select-title">选择手机区号</div>
      <OnePx></OnePx>
      <div class="areacode-select-content">
        <Radio
          align="right"
          :value.sync="data.areaCode"
          :options="areaCodeList"
          ref="areaCodeRadio"
        ></Radio>
      </div>
      <OnePx></OnePx>
      <div class="areacode-select-button">
        <Button size="small" type="primary" plain style="margin-right:15px;" @click="popupVisible=false">取消</Button>
        <Button size="small" type="primary" @click="handleSetAreaCode">确定</Button>
      </div>
    </Popup>
  </div>
</template>

<script>
import { Field, Button, Popup, Cell, Radio } from 'mint-ui';
import codeList from './data/code.json';
import OnePx from '_c/one-px/one-px';

export default {
  name: 'by-address-form',
  components: {
    Field, Button, Popup, Radio, OnePx
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
    }
  },
};
</script>