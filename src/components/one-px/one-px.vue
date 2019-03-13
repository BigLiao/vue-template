<style lang="less">
@import '~@/style/variable.less';

.by-one-px {
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background-color: @background-color;
  @media screen and (min-device-pixel-ratio:2) {
    transform: scaleY(0.5);
  }
  @media screen and (min-device-pixel-ratio:3) {
    transform: scaleY(1/3);
  }
}
</style>

<template functional>
  <div class="by-one-px"></div>
</template>

