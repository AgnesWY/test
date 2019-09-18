<!-- 404 auth:liu-->
<template>
  <section class="nopage">
   <div class="header"></div>
    <div class="imgwarp">
      <img src="../assets/img/404x.png" alt>
    </div>
    <span>亲！暂时没有这个页面哦~</span>
  </section>
</template>

<script>


export default {
  name: "404",
  data() {
    return {};
  },
  components: {
   
  },

  computed: {
    
  },
  watch: {},
  created() {
     
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.nopage {
  height: 100%;
  background :#fff;
  text-align :center;
  .header{
      height :44px;
      background :#497EFE;
  }
  .imgwarp{
      margin-top:50%;
      img{
          width :80px;
      }
  }
  span{
      color :#888;
      font-size :16px;

  }
}
</style>
