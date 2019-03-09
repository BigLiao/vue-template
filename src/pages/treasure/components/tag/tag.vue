<style lang="less" scoped>
@import '../../style/variable.less';

.by-tag {
  display: inline-block;
  color: #DF6A2B;
  border: 1px solid #DF6A2B;
  padding: 2px 6px;
  border-radius: 2px;
  // background-color: #fff;
  &.end {
    color: @text-light-color;
    border: 1px solid @text-light-color;
  }
}
</style>


<template functional>
  <div class="by-tag" :class="{end:props.end}">{{props.end ? '已结束' : '进行中'}}</div>
</template>
