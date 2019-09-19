<template>
<section class="header">
    <h1>{{ $route.name }}</h1> 
    <i class="iconfont iconfanhui" @click="back"></i>

</section>
    

</template>
<script> 
export default {
    name:"myHeader",
    data(){
        return{
        
        
        }
    },
    methods:{
        back() {
            this.$router.go(-1);
        }


    },

}
</script>
<style  lang="less"  scoped >
.header{
    position: relative;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color:  rgb(228, 191, 72);
    h1 {
        font-size: 17px;
        font-weight: 700;
        color: #333;
        font-weight: 500;
        text-align: center;
    }
    .cubeic-back {
        color: #333;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        font-size:20px;
    }
    i{
        color: #333;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        font-size: 20px;

    }


}



</style>