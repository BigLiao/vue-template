<style lang="less" scoped>
.example {
  height: 500px;
}
</style>

<template>
  <div class="example">
    <better-scroll>
        <div v-for="(item, index) of (new Array(81)).fill(234)" :key="index">{{Math.random()}}</div>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from '_c/better-scroll/better-scroll';

export default {
  name: 'example',
  components: {
    BetterScroll
  }
};
</script>
