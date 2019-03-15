<style lang="less" scoped>
.address-form {
  // position: absolute;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  width: 100%;
  .form {
    background-color: #ffffff;
  }
  .form-buttons {
    margin: 52px 24px 0;
  }
}

</style>

<template>
  <div class="address-form">
    <form class="form">
      <field label="联系人" placeholder="姓名"></field>
      <field label="手机号码" placeholder="手机号码" type="tel"></field>
      <field label="详细地址" type="textarea" placeholder="所在城市、道路街道、小区、楼栋号、单元室等" rows="3"></field>
    </form>
    <div class="form-buttons">
      <Button type="primary" size="large">保存</Button>
      <Button plain size="large" style="margin-top:10px;" @click="$emit('cancel')">取消</Button>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'mint-ui';

export default {
  name: 'address-form',
  components: {
    Field, Button
  }
};
</script>
