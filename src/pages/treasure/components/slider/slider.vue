<style lang="less" scoped>

</style>

<template>
  <Swipe
    :show-indicators="false"
    :auto="0"
  >
    <SwipeItem v-for="(item, index) of imageList" :key="index">
      <img :src="item.src" :alt="item.alt || ''" width="100%"
        @onload="imageLoaded"
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
    }
  },
  data() {
    return {};
  },
  mounted() {
    //
  },
  methods: {
    imageLoaded(e) {
      console.log(e);
    }
  },
};
</script>
