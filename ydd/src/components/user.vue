<template>
    <div>
       <div style="width:100%;height:50px;border-bottom:1px solid #dddddd;">
        <img src="../assets/icon_back_arrow.png" alt="" style="width:10px;position:relative;top:15px;left:23px;" v-on:click="back">
       </div>
       <div style="width:100%;">
           <div class="user1">
            <div class="user2">
           <img src="../assets/guanyuwom_logo.png" alt="" style="width:100px;">
           <p>始于爱，成于心</p>
           <p style="margin-top:5px;">love yourself</p>
           </div>
         </div>
       </div>
        <!--登录用户-->
       <div v-if="nuu">
       <div class="users">
         <div style="width:10%;">
           <img src="../assets/icon_username.png" alt="" style="width:20px;position:relative;top:4px;">
         </div>
         <div style="width:80%;">
           <form>
             <input type="text" v-model="aab"  placeholder="用户名"  class="users1" v-focus style="caret-color:#ffb7dd;"  >
            </form>
         </div>
         <div style="width:10%;">
           <img src="../assets/crop__ic_cancel.png" alt="" style="width:20px;" v-show="abb"  @click="fq">
         </div>
       </div>
       <!--登录用户结束-->
       <!--登录密码-->
         <div class="users">
         <div style="width:10%;">
           <img src="../assets/icon_mima.png" alt="" style="width:20px;position:relative;top:4px;">
         </div>
         <div style="width:60%;">
           <form>
             <input type="password" placeholder="输入密码"  class="users1"  style="caret-color:#ffb7dd;" v-if="fa" v-model="eec" >
             <input type="text" v-else v-model="eec" class="users1" style="caret-color:#ffb7dd;"  placeholder="输入密码">
           </form>
         </div>
         <div class="users2">
           <img src="../assets/icon_un_see.png" alt="" style="width:20px;" v-if="fa" @click="fb">
           <img src="../assets/icon_see.png" alt="" style="width:20px;" v-else @click="fc">
           <span style="display:inline-bolock;font-size:1px;padding:0 3px;color:#dddddd;">|</span>
           <router-link to="/find">
           <span style="font-size:12px; color:#aaaaaa;">忘记密码</span>
           </router-link>
         </div>
       </div>
       <!--登录密码结束-->
        <!--登录-->
         <div class="enter" @click="login">
           <span style="color:#fff">登录</span>
         </div>
       <!--登录结束-->
       </div>
             <!--快速登录-->
         <div v-else>
       <div class="users">
         <div style="width:80%; ">
           <form>
             <input type="text" v-model="aab"  placeholder="手机号码" disabled class="users1" v-focus style="caret-color:#ffb7dd;margin-left:10px;"  >
            </form>
         </div>
         <div style="width:10%;">
           <img src="../assets/crop__ic_cancel.png" alt="" style="width:20px;" v-show="abb"  @click="fq">
         </div>
       </div>
       <!--登录用户结束-->
       <!--登录密码-->
         <div class="users">
         <div style="width:60%;">
           <form>
             <input type="password" placeholder="短信验证码" disabled  class="users1"  style="caret-color:#ffb7dd;margin-left:10px;" v-if="fa" v-model="eec" >
           </form>
         </div>
         <div class="users2">
           <div class="note" @click="verification">
             <span style="color:#fff;font-size:8px;">获取验证码</span>
           </div>
         </div>
       </div>
       <!--登录密码结束-->
        <!--登录-->
         <div class="enter" >
           <span style="color:#fff">登录</span>
         </div>
       <!--登录结束-->
       </div>
       <!--快速登录结束-->
       <!--注册-->
        <div class="login">
          <div>
            <router-link to="/signLn">
            <span style="color:#aaaaaa">注册账号</span>
            </router-link>
          </div>
          <div>
            <span style="color:#aaaaaa" v-if="nuu" @click="unn">快速登录</span>
            <span style="color:#aaaaaa" v-else  @click="nun">账号登录</span>
          </div>
        </div>
       <!--注册结束-->
       <!--其他登录-->
       <div class="else">
        <div class="else1"></div>
        <div class="else2">
          <span>其他登录</span>
        </div>
        <div class="else3"></div>
       </div>
       <!--其他登录结束-->
       <div class="wx">
         <img src="../assets/weixing2.png" alt="" style="width:50px;">
       </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      fa:true,
      eec:"",
      aab:"",
      abb:false,
      nuu:true,
    }
  },
  methods:{
    verification(){
      this.$toast("请输入手机号");
    },
    back(){
        this.$router.go(-1);
    },
    fb(){
     this.fa=false;
    },
    fc(){
      this.fa=true;
    },
    fq(){
      this.aab=""
      this.eec=""
    },
    nun(){
      this.nuu=true;
    },
     unn(){
       this.nuu=false;
     },
     login(){
       //功能：完成用户登录
       //1.创建正则表达式用于验证用户名和密码
       var reg=/^[a-z0-9]{3,12}$/i;
       //2：获取用户名和密码
       var u=this.aab;
       var p=this.eec;
       console.log(u+"_"+p);
       //3：验证用户名如果格式不正确，提示错误信息
       if(!reg.test(u)){
         this.$messagebox("消息","用户名格式3-12位字母数字");
         return;//停止程序运行
       }
      // 4：验证用户密码如果格式不正确，提示错误信息
      if(!reg.test(p)){
        this.$messagebox("消息","密码格式3-12位字母数字");
        return;//停止程序运行
      }
      console.log(3);
      // 5：创建url变量，保存请求服务器地址
      var url="user";
      // 6：创建obj变量，保存请求是的参数
      var obj={uname:u,upwd:p};
     //  7：发送ajax请求
     this.axios.get(url,{params:obj}).then(res=>{
         // 8：接受服务器返回结果
         // 9：如果-1 提示用户名和密码有误
        // 10：如果1 跳转商品列表地
        console.log(res.data);
       if(res.data.code==-1){
         this.$messagebox("消息","用户名或密码有误");
       }else{
         this.$toast("登录成功");
         this.$router.go(-1);
       }
     })
     },

  },
  watch:{
    aab(){
      if(this.aab==""){
        this.abb=false;
      }else if(this.aab!=""){
          this.abb=true;
      }
    }
  },  
}
</script>
<style scoped>
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
/*注册 */
.login{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
}
.login1{
  width: 50%;
  display: flex;
  justify-content: start;
}
.login2{
  width: 50%;
  display: flex;
  justify-content: end;
}
/*注册结束 */
/*其他登录 */
.else{
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin:30px auto;
}
.else1{
  width: 30%;
  border-bottom: 1px solid #dddddd;
}
.else2{
  width: 20%;
  font-size: 12px;
  color:#aaaaaa;
  position: relative;
  left:6px;top:5px;
}
.else3{
  width: 30%;
   border-bottom: 1px solid #dddddd;
}
/*其他登录结束 */
.wx{
  width:80%;
  display: flex;
  justify-content: center;
  margin:10px auto;
}
 input:disabled{
     background:transparent;
 }
</style>