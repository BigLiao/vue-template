<style lang="less">
@import '~@/style/variable.less';

.by-progress {
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #D8D8D8;
  border-radius: 4px;
  .by-progress-fill {
    position: absolute;
    height: 8px;
    left: 0;
    top: 0;
    background-color: @secondary-color;
    border-radius: 4px;
  }
}
</style>

<template>
  <div class="by-progress">
    <div class="by-progress-fill" :style="`width:${percentage}%`"></div>
  </div>
</template>

<script>
export default {
  name: 'by-progress',
  props: {
    percentage: {
      type: Number,
      default: 25
    }
  }
};
</script>
