<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
</style>

<script>
export default {
  name: 'app',
  beforeCreate() {
    console.log('before app created');
  },
};
</script>