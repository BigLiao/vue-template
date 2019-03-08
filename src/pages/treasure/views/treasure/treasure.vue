<style lang="less" scoped>
.treasure {
  height: 300px;
}
</style>

<template>
  <div class="treasure">
    <Swipe>
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
  name: 'treasure',
  components: {
    Swipe, SwipeItem
  }
};
</script>
