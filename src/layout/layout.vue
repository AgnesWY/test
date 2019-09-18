<!-- 没有头部布局 -->
<template>
  <div class="cube-page">
    <div class="wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
  },
  created() {
  },
  methods: {
   
  }
};
</script>

<style lang="stylus" scoped>
.cube-page {
  .wrapper {
    height: 100%;
  }
}
</style>
