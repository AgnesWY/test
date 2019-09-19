<template>
<section class="hello">
    <myHeader></myHeader>
    <!-- <myHeader2></myHeader2> -->
    <hello></hello>

</section>
    

</template>
<script>
import myHeader from '@/components/myHeader'
import myHeader2 from '@/components/bFFFheader'
import hello from '@/components/HelloWorld'
export default {
    components:{
        myHeader,
        hello,
        myHeader2

    },
    data(){
        return{
        
        }
    },
    methods:{

    },

}
</script>
<style scoped>


</style>