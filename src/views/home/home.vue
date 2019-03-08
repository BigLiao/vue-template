<style lang="less" scoped>
.detail {
  font-size: 48px;
  color: red;
}
</style>

<template>
  <div class="detail">首页
    <div id="nav">
      <router-link to="/detail?title=detail">Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
};
</script>
