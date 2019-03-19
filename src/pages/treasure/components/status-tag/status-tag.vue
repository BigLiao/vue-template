<style lang="less" scoped>
.status-tag {
  display: inline-block;
}
</style>

<template>
  <div class="status-tag">
    <Tag v-if="status===0" text="进行中" />
    <Tag v-if="status===1" type="end" text="已结束" />
    <Tag v-if="status===2" type="end" text="已结束" />
    <Tag v-if="status===3" type="fill" text="已发货" />
  </div>
</template>

<script>
import Tag from '_c/tag/tag';

export default {
  name: 'status-tag',
  components: {
    Tag,
  },
  props: {
    status: {
      type: Number,
      required: true
    }
  }
};
</script>
