<style lang="less">
.by-scroll-box {
  height: 100%;
  position: relative;
  overflow: auto;
}
</style>

<template>
  <div class="by-scroll-box" ref="betterScroll">
    <div class="scroll-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { Loadmore } from 'mint-ui';
import BetterScroll from 'better-scroll';

export default {
  name: 'by-scroll-box',
  components: {
    Loadmore
  },
  props: {
    pullDown: {
      type: [Function, Boolean],
      default: false
    },
    pullUp: {
      type: [Function, Boolean],
      default: false
    }
  },
  data() {
    return {
      hasMore: true,
      scroll: null
    };
  },
  watch: {
    //
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.scroll = new BetterScroll(this.$refs.betterScroll, {
        scrollX: false, scrollY: true,
      });
      if (this.pullDown) {
        this.scroll.openPullDown({
          threshold: -50,
          stop: 0
        });
        this.scroll.on('pullingDown', this.pullingDown);
      }
      if (this.pullUp) {
        this.scroll.openPullUp({
          threshold: -50
        });
        this.scroll.on('pullingUp', this.pullingUp);
      }
    },
    refresh() {
      this.scroll.refresh();
    },
    async pullingDown() {
      console.log('scroll pull Down start');
      await this.pullDown();
      // this.$nextTick(() => this.scroll.finishPullDown());
      console.log('scroll pull Down end');
      this.scroll.finishPullDown();
    },
    async pullingUp() {
      console.log('scroll pullUP start');
      await this.pullUp();
      console.log('scroll pullUp end');
      // this.$nextTick(() => this.scroll.finishPullUp());
      this.scroll.finishPullUp();
      // this.refresh();
    }
  },
};
</script>
