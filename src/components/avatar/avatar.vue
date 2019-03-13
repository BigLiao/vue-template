<style lang="less">
@import '~@/style/variable.less';

.by-avatar {
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  background-color: @background-color;
  &.by-avatar-default {
    width: 30px;
    height: 30px;
  }
  .avatar-img {
    width: 100%;
    height: 100%;
  }
  .avatar-placeholder {}
}
</style>

<template>
  <div class="by-avatar" :class="`by-avatar-${size}`">
    <img v-if="src" :src="src" alt="avatar" class="avatar-img">
    <div v-else class="avatar-placeholder"></div>
  </div>
</template>

<script>
export default {
  name: 'by-avatar',
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'default'
    }
  }
};
</script>
