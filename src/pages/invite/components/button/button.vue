<style lang="less" scoped>
.by-button {
  display: block;
  height: 40px;
  line-height: 40px;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 20px;
  &:active {
    opacity: 0.6;
  }
  &.button-white {
    color: white;
    border: 1px solid #FFFFFF;
    box-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.1);
  }
  &.button-default {
    color: white;
    border: 1px solid #DD570F;
    box-shadow: inset 0 1px 2px 0 rgba(255, 255, 255, 0.1);
    background-color: #DD570F;
  }
}
</style>

<template>
  <button type="button" class="by-button" :class="`button-${type}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'by-button',
  components: {},
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
};
</script>
