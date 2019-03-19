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
    <AddressForm :data="addressData"></AddressForm>
    <div class="form-buttons">
      <Button type="primary" size="large" @click="handleSaveButtonClick">保存</Button>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'mint-ui';
import AddressForm from '_c/address-form/address-form';
import { addAddress } from '../../api/http';

export default {
  name: 'add-address',
  components: {
    Field, Button, AddressForm
  },
  data() {
    return {
      addressData: {
        receiverName: '',
        areaCode: '86',
        receiverPhone: '',
        receiverAddress: ''
      }
    };
  },
  methods: {
    handleSaveButtonClick() {
      if (this.validate()) {
        this.submit();
      }
    },
    validate() {
      if (!this.addressData.receiverName) {
        return false;
      }
      return true;
    },
    async submit() {
      const [err, res] = await addAddress(this.addressData);
      if (err) {
        console.error(err);
        return;
      }
      this.$router.replace('/take-prize/1312');
    }
  },
};
</script>
