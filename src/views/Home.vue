<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from '_c/HelloWorld.vue';
import { getMessage } from '@/api/hello-world';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      const [err, res] = await getMessage();
      if (err) {
        console.log(err);
        return;
      }
      this.msg = res.data;
    }
  },
};
</script>
