<style lang="less">
.by-input {
    width: 100%;
    height: 40px;
    display: block;
    margin: 0 auto;
    border-radius: 20px;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    outline: 0;
    border: none;
}
</style>

<template>
  <input :type="type" class="by-input" :placeholder="placeholder" :value="value" @input="handleInput">
</template>


<script>
export default {
  name: 'by-input',
  props: {
    placeholder: String,
    value: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {};
  },
  methods: {
    handleInput(e) {
      console.log(e);
    }
  },
};
</script>
