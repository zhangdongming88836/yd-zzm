<template>
    <div>
      <!--顶部-->
    <div class="page-head">
     <div class="right-head" v-on:click="back">
          <img src="../assets/icon_back_arrow.png" alt="" style="width:10px;" >
     </div> 
       <div class="right-head1">
        <h3>购物袋</h3>
       </div>
       <div class="right-head2">
      </div>
    </div> 
    <!--顶部结束-->
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }, 
    },
}
</script>
<style scoped>
/*顶部 */
.page-head{
  display:flex;
  justify-content: space-around;
  position: fixed;
  background:#fff;
  z-index:3;
  width: 100%;
  height: 50px;
  align-items:center;
  border-bottom:1px solid #eeeeee;
}
.right-head{
  width:10%;
  margin-top:5px;
}
.right-head1{
  width:20%;
  display: flex;
  margin-left:5px;
  justify-content:space-between;
}
.right-head2{
  width:10%;
}
/*顶部结束 */



</style>