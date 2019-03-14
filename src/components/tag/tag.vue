<style lang="less" scoped>
@import '../../style/variable.less';

.by-tag {
  display: inline-block;
  color: #DF6A2B;
  border: 1px solid #DF6A2B;
  padding: 2px 6px;
  border-radius: 2px;
  font-size: 12px;
  // background-color: #fff;
  vertical-align: middle;
  &.end {
    color: @text-light-color;
    border: 1px solid @text-light-color;
  }
  &.fill {
    color: #ffffff;
    background-color: @secondary-color;
    border: 1px solid @secondary-color;
  }
}
</style>


<template functional>
  <div class="by-tag" :class="props.type">{{props.text}}</div>
</template>
