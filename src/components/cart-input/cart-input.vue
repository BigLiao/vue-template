<style lang="less">
@import '~@/style/variable.less';

.by-cart-input {
  display: flex;
  .icon {
    width: 15px;
    height: 15px;
    padding: 4px;
    background-color: @background-color;
  }
  .input {
    border: none;
    background-color: #FAFAFA;
    width: 80px;
    text-align: center;
  }
}
</style>

<template>
  <div class="by-cart-input">
    <div class="icon" @click="handleValueChange(value - 1)">
      <img src="./img/icon-mines.svg" alt="icon" width="100%" height="100%">
    </div>
    <input type="number" :value="value" class="input" @input="(e) => handleValueChange(e.target.value)">
    <div class="icon" @click="handleValueChange(value + 1)">
      <img src="./img/icon-plus.svg" alt="icon" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'by-cart-input',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleValueChange(v) {
      const value = parseInt(v, 10);
      if (value > 0) {
        this.$emit('input', value);
      }
    }
  },
};
</script>
