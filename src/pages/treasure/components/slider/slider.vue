<style lang="less">
.mint-swipe-items-wrap {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}
</style>

<template>
  <Swipe
    :show-indicators="false"
    :auto="5000"
    :style="{height:0,paddingBottom:`${1 / ratio * 100}%`}"
  >
    <SwipeItem v-for="(item, index) of imageList" :key="index">
      <img :src="item.src" :alt="item.alt || ''" width="100%"
      >
    </SwipeItem>
  </Swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: 'c-slider',
  components: {
    Swipe, SwipeItem
  },
  props: {
    imageList: {
      type: Array
    },
    // 长宽比
    ratio: {
      type: Number,
      default: 4 / 3
    }
  },
  data() {
    return {};
  },
  mounted() {
    //
  },
  methods: {
    //
  },
};
</script>
