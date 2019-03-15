<style lang="less">
.by-scroll-box {
  height: 100%;
  position: relative;
  overflow: auto;
}
</style>

<template>
  <div class="by-scroll-box">
    <Loadmore
      :bottom-method="loadBottom"
      :top-method="loadTop"
      ref="loadmore"
      :allLoaded="allLoaded"
    >
      <slot />
    </Loadmore>
  </div>
</template>

<script>
import { Loadmore } from 'mint-ui';

export default {
  name: 'by-scroll-box',
  components: {
    Loadmore
  },
  props: {
    bottomLoading: {
      type: Boolean,
      default: false
    },
    topLoading: {
      type: Boolean,
      defaut: false
    },
    allLoaded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasMore: true
    };
  },
  watch: {
    //
  },
  methods: {
    loadBottom() {
      this.$emit('load-bottom');
      console.log('loadbottom');
    },
    loadBottomStop() {
      this.$refs.loadmore.onBottomLoaded();
    },
    loadTop() {
      this.$emit('load-top');
      console.log('loadTop');
    },
    loadTopStop() {
      this.$refs.loadmore.onTopLoaded();
    },
  },
};
</script>
