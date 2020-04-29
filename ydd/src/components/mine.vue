<template>
   <div>
     <div class="mine">
       <table></table>
       <div class="mine1">
         <div style="width:50%">
           <router-link to="">
           <img src="../assets/nav_icon_set.png" alt="" style="width:30px;margin-left:10px;">
           </router-link>
         </div>
         <div style="width:50%">
           <router-link to="">
           <img src="../assets/nav_icon_message.png" alt="" style="width:30px;margin-left:145px;">
           </router-link>
         </div>
       </div>
       <div class="mine2">
         <div style="width:20%;">
           <img src="../assets/icon_love_collect_null.png" alt="" style="width:60px;margin-left:10px" v-if="add">
           <img src="../assets/20185232085636261.jpg" alt="" style="width:60px;margin-left:10px" v-else>
         </div>
         <div style="width:80%;">
           <router-link to="/user" v-if="add">
           <span style="line-height:60px;color:#808080;margin-left:15px">登录</span>
           <span style="line-height:60px;color:#808080">/</span>
           <span style="line-height:60px;color:#808080">注册</span>
           </router-link>
           <span style="line-height:60px;color:#808080;margin-left:15px" v-else>{{muu}}</span>
         </div>
       </div>
     </div>
     <!--全部订单-->
     <div class="orderForm">
       <div class="orderForm1">
         <img src="../assets/icon_allorder.png" alt="" style="width:40px;margin-top:25px;">
         <p style="font-size:12px;color:#808080">全部订单</p>
       </div>
       <div class="orderForm2">
         <div class="orderForm2-1">
           <img src="../assets/icon_unpay.png" alt="" style="width:40px;">
           <p style="font-size:12px;color:#808080">待付款</p>
         </div>
         <div class="orderForm2-2">
            <img src="../assets/icon_car.png" alt="" style="width:40px;">
           <p style="font-size:12px;color:#808080">待发货</p>
         </div>
         <div class="orderForm2-3">
            <img src="../assets/icon_unreceive.png" alt="" style="width:40px;">
           <p style="font-size:12px;color:#808080">待收货</p>
         </div>
         <div class="orderForm2-4">
            <img src="../assets/icon_received.png" alt="" style="width:40px;">
           <p style="font-size:12px;color:#808080">已收货</p>
         </div>
       </div>
     </div>
     <!--全部订单结束-->
     <!--个人钱包-->
      <div class="wallet">
       <div class="wallet1">
         <img src="../assets/qianbao2.png" alt="" style="width:30px;height:25px; margin-left:14px;">
         <p style="font-size:16px; margin-left:10px; color:#808080">个人钱包</p>
       </div>
       <div class="wallet2">
         <img src="../assets/icon_enter.png" alt="" style="width:25px;margin-left:144px;">
       </div>
     </div>
     <!--个人钱包结束-->
     <!--我的收藏-->
        <div class="wallet">
       <div class="wallet1">
         <img src="../assets/icon_collect_un.png" alt="" style="width:30px;height:25px; margin-left:14px;">
         <p style="font-size:16px; margin-left:10px; color:#808080">我的收藏</p>
       </div>
       <div class="wallet2">
         <img src="../assets/icon_enter.png" alt="" style="width:25px;margin-left:144px;">
       </div>
     </div>
     <!--我的收藏结束-->
     <hr style="border-top:1px solid #f5f5f5;margin-top:10px;"> 
     <!--联系客服-->
        <div class="wallet">
       <div class="wallet1">
         <img src="../assets/kefu_user.png" alt="" style="width:30px;height:25px; margin-left:14px;">
         <p style="font-size:16px; margin-left:10px; color:#808080">联系客服</p>
       </div>
       <div class="wallet2">
         <img src="../assets/icon_enter.png" alt="" style="width:25px;margin-left:144px;">
       </div>
     </div>
     <!--联系客服结束-->
    </div> 
</template>
<script>
export default {
 data(){
   return{
     add:false,
     muu:"",
   }
 },
  created(){
    this.axios.get("mine").then(res=>{
      this.muu=res.data.data
      if(!this.muu){
        this.add=true
      }else{
        this.add=false;
      }
    })
  },
}
</script>
<style scoped>
.mine{
  width: 100%;
  height:200px;
  background:rgba(255,182,193,0.3);
}
.mine1{
  display:flex;
  justify-content: space-between;
  margin-top:30px;
}
.mine2{
   display:flex;
  justify-content: space-between;
  margin-top:15px;
}
/*订单 */
.orderForm{
  display: flex;
  justify-content: center;
  margin-top:15px;
}
.orderForm1{
  width:30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border:1px solid #f5f5f5;
  border-right: transparent;
  text-align: center;
}
.orderForm2{
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
   border:1px solid #f5f5f5;
}
.orderForm2-1,.orderForm2-2,.orderForm2-3,.orderForm2-4{
  display:flex;
  flex-direction: column;
  align-items: center;
  border:1px solid #f5f5f5;
  width: 50%;
}
.orderForm2-1{
  border-top:transparent;
  border-left: transparent;
}
.orderForm2-2{
   border-top:transparent;
  border-left: transparent;
  border-right: transparent;
}
.orderForm2-3{
   border-top:transparent;
  border-left: transparent;
  border-bottom: transparent;
}
.orderForm2-4{
   border-top:transparent;
  border-left: transparent;
  border-right: transparent;
  border-bottom: transparent;
}
/*订单结束 */
/*个人钱包 */
.wallet{
  display: flex;
  justify-content: center;
  margin-top:20px; 
}
.wallet1{
  display: flex;
  width: 50%;
  justify-content:start;
 
}
.wallet2{
  width: 50%;
}
/*个人钱包结束 */
/*我的收藏 */
/*我的收藏结束 */
/*联系客服 */
/*联系客服结束 */
</style>