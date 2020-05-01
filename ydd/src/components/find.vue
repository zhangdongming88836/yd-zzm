<template>
 <div>
    <div class="page-head">
     <div class="right-head" v-on:click="back">
          <img src="../assets/icon_back_arrow.png" alt="" style="width:10px" >
     </div> 
       <div class="right-head1">
         <h4 >找回密码</h4>
       </div>
       <div class="right-head2">
     </div>
    </div> 
    <!---->
    <div style="height:80px;"></div>
      <div class="users">
         <div style="width:80%; ">
           <form>
             <input type="text"   placeholder="手机号码"   class="users1" v-focus style="caret-color:#ffb7dd;margin-left:10px;"  >
            </form>
         </div>
         <div style="width:10%;">
         </div>
       </div>
       <!--登录用户结束-->
       <!--登录密码-->
         <div class="users">
         <div style="width:60%;">
           <form>
             <input type="password" placeholder="短信验证码"  class="users1"  style="caret-color:#ffb7dd;margin-left:10px;"  >
           </form>
         </div>
         <div class="users2">
           <div class="note">
             <span style="color:#fff;font-size:8px;" @click="lo">获取验证码</span>
           </div>
         </div>
       </div>
        <!--登录-->
         <div class="enter">
           <span style="color:#fff" @click="ol">下一步</span>
         </div>
       <!--登录结束-->
</div>
</template>
<script>
export default {
    methods:{
      lo(){
        this.$toast("正在建设，敬请期待")
      },
      ol(){
         this.$toast("正在建设，敬请期待")
      },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.page-head{
  display:flex;
  justify-content: space-around;
  position: fixed;
  background:#fff;
  z-index:1;
  width: 100%;
  height: 50px;
  align-items:center;
  border-bottom:1px solid #eeeeee;
}
.right-head{
  width:30%;
}
.right-head1{
  width: 40%;
  margin-left:10px;
}
.right-head2{
  width:10%;
}

.user1{
    display:flex;
    justify-content: center;
    margin-top:20px;
}
.user2{
  display:flex;
  flex-direction: column;
  align-items: center;
  color: #aaaaaa;
  font-size: 13px;
}
.users{
  width:80%;
  margin-top:30px;
  margin:20px auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dddddd;
}
.users1{
  border:transparent;
  outline:none;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:#dddddd;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #dddddd;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #dddddd;
}
:-moz-placeholder { /* Firefox 18- */
  color: #dddddd;
}
.users2{
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/*短信 */
.note{
  width: 80%;
  height:20px;
  border:1px solid #fff;
  border-radius:20px;
  margin-left:18px;
  background:rgba(255,182,193,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
/*短信结束 */
.enter{
  width: 80%;
  height:40px;
  border:1px solid #fff;
  border-radius:20px;
  margin: 10px auto;
  background:rgba(255,182,193,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

