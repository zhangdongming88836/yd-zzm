<template>
<div>
    <div class="page-head">
     <div class="right-head" v-on:click="back">
          <img src="../assets/icon_back_arrow.png" alt="" style="width:10px" >
     </div> 
       <div class="right-head1">
         <h4 >注册账号 (1/2)</h4>
       </div>
       <div class="right-head2">
     </div>
    </div> 
     <!---->
    <div style="height:80px;"></div>
      <div class="users">
         <div style="width:80%; ">
           <form>
             <input type="text"   placeholder="手机号码"  class="users1" v-focus style="caret-color:#ffb7dd;margin-left:10px;" :disabled="!isAgree" >
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
             <input type="password" placeholder="短信验证码"  class="users1"  style="caret-color:#ffb7dd;margin-left:10px;"  :disabled="!isAgree">
           </form>
         </div>
         <div class="users2">
           <div class="note">
             <span style="color:#fff;font-size:8px;">获取验证码</span>
           </div>
         </div>
       </div>
        <!--登录-->
         <div class="enter">
           <span style="color:#666666">同意协议并注册</span>
         </div>
       <!--登录结束-->
       <!--单选-->
         <div class="MultipleChoice">
           <div class="MultipleChoice1">
             <form>
            <label> <input type="checkbox" v-model:checked=isAgree  style="margin-left:15px;">  </label>  
            </form>
           <p style="color:#aaaaaa;font-size:15px;">我已阅读并同意</p>    
           </div>  
           <div class="MultipleChoice2">
              <p style="color:#ffb7dd;font-size:12px;">《真珠美学用户注册协议》</p>
            </div>  
         </div>
       <!--单选结束-->
</div>
</template>
<script>
export default {
    data(){
        return{
           isAgree:false,
        }
    },
  methods:{
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
  width:20%;
}
.right-head1{
  width: 40%;
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
/*单选 */
 .MultipleChoice{
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
 }
 .MultipleChoice1{
    width: 50%;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
  .MultipleChoice2{
    width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 input:disabled{
     background:transparent;
 }
/* 单选结束*/ 
</style>