<!-- 白色底色头部 auth:wpp-->
<template>
    <header class="bfffheader" :class="[defaultBackground ? 'bfff':'blll']">
        <h1>{{ $route.name }}</h1> 
        <i v-if="showIcon" class="cubeic-back" @click="back"></i>
    </header>
</template>

<script>
export default {
  data() {
    return {
      showIcon: true,
      defaultBackground: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.bfff {
  background-color: rgb(228, 191, 72);
}
</style>
<style lang="stylus" scoped>
.bfffheader {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 5;

  h1 {
    font-size: 17px;
    font-weight: 700;
    color: #333;
    font-weight: 500;
  }

  .cubeic-back {
    color: #333;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 15px;
    font-size:20px;
  }
}

.bfff {
  background-color: #fff;
}

.blll {
  background-color: #00CAD3;

  h1 {
    color: #fff;
  }
}
</style>
