<template>
   <div style="position:relative;">
       <!--数量div-->
          <div class="select" v-show="mnm">
           <div class="select1"></div>
           <div class="select2">
             <div class="select2-1">
               <div style="width:50%;"></div>
               <div style="width:50%;">
                 <img src="../assets/crop__ic_cancel.png" alt="" style="width:25px; margin-left:80%;" @click="fb">
               </div>
             </div>
               <div class="select2-2">
                 <div>
                   <img :src="'http://127.0.0.1:4000/'+product.pic"  alt="" style="width:100px;height:88px;">
                 </div>
                 <div>
                   <p style="margin-top:20px;color:#ffb6c1">￥ {{product.price}}</p>
                   <p style="margin-top:10px;font-size:15px;color:#aaaaaa;">{{product.title}}</p>
                 </div>
               </div>
               <div class="select2-3">
                 <div style="width:50%;">
                   <p style="margin-left:20px;color:#aaaaaa;">选择数量</p>
                 </div>
                 <div class="select2-3-2">
                   <div style="border:1px solid #dddddd;" @click="vn(-1)"> 
                     <img src="../assets/delete_car_img.png" alt="" style="width:20px;position:relative;top:-4px;">
                   </div>
                   <div style="border:1px solid #dddddd;width:40px;text-align:center;">
                     <span style="display:inline-block;text-align:center;width:40px;">{{count}}</span>        
                   </div>
                   <div style="border:1px solid #dddddd;" @click="vn(1)">
                     <img src="../assets/add_car_img.png" alt="" style="width:20px;position:relative;top:2px; ">
                   </div>
                 </div>
              </div>
              <div class="select2-3-3">
                <div style="background:#dddddd;width:50%;display:flex;justify-content:center;height:30px;" @click="vb(product.tid,product.title,product.price,product.pic,count)"> 
                  <p style="line-height:30px;color:#aaaaaa;">加入购物车</p>
                </div>
                <div style="background:rgba(255,182,193,0.6); width:50%; display:flex;justify-content:center;height:30px;" @click="va">
                  <p style="line-height:30px;color:#aaaaaa;">立即购买</p>
                </div>
              </div>
           </div>
          </div>
          <!--数量div结束-->
    <!--顶部-->
    <div class="page-head">
     <div class="right-head" v-on:click="back">
          <img src="../assets/icon_back_arrow.png" alt="" style="width:10px;" >
     </div> 
       <div class="right-head1">
         <h3 :style="mz" @click="fs">商品</h3>
         <h3 :style="mn" @click="fc">详情</h3>
       </div>
       <div class="right-head2">
      </div>
    </div> 
    <!--顶部结束-->
    <div style="height:50px;"></div>
    <!--详情-->
    <div class="handover" :style="mc">
     <div class="details">
        <div style="width:100%;overflow:hidden; ">
          <img :src="'http://127.0.0.1:4000/'+product.pic"  alt="图片" style="width:100%;height:327px;"/>
        </div>
        <div class="details1">
          <p style="margin-left:30px;">￥ {{product.price}}</p>
        </div>
        <div class="details2">
          <p style="margin-left:30px;">{{product.title}}</p>
        </div>
      </div>
      <div class="details3" >
        <table></table>
       <div class="details3-3" @click="fa">
      <div class="details3-1">
        <p style="margin-left:30px;">选择数量</p>
      </div>
      <div class="details3-2"> 
        <img src="../assets/icon_enter.png" alt="" style="width:30px;margin-left:140px;">
      </div>
      </div>
      </div>
     <!--详情页结束-->
    </div>
    <!--详情页-->
      <div class="page" :style="ma">
        <img src="../assets/20190826143300_38410.png" alt="" style="width:100%">
      </div>
      <div style="height:50px"></div>
    <!--底部-->
    <div class="foot">
    <div class="foot5">
     <div class="foot1" >
      <img src="../assets/icon_kefu_new.png" alt="" style="width:25px;">
      <p style="color:#aaaaaa;font-size:12px;">客服</p>
       </div>
      <div class="foot2" @click="vd">
      <img src="../assets/shop_1.png" alt="" style="width:25px;">
      <p style="color:#aaaaaa;font-size:12px;">购物袋</p>
      <p class="foot2-1" v-show="ddf">{{list.length}}</p>
      </div>
     </div>
     <div class="foot5">
     <div class="foot3" style="background:#dddddd;" @click="vc(product.tid,product.title,product.price,product.pic)">
       <p style="color:#aaaaaa;font-size:15px;">加入购物袋</p>
     </div>
     <div class="foot4" style="background:rgba(255,182,193,0.6);" @click="fp">
       <p style="color:#aaaaaa;font-size:15px;">立即购买</p>
     </div>
     </div>
    </div>
    <!--底部结束-->
   </div> 
</template>
<script>
export default {
  data(){
    return{
      mnm:false,
      mc:"",
      ma:"",
      mz:"color:#ffb6c1",
      mn:"color:#aaaaaa",
      product:{},
      count:0,
      list:[],
      ddf:false,
    }
  },
  created(){
    this.axios.get("details",{
      params:{
      tid:this.tid
    }}).then(res=>{
       this.product= res.data.data[0]
    });
    this.loadMore()
  },
    methods:{
        back(){
            this.$router.go(-1)
        },
        fa(){
          this.mnm=true;
          this.count=0;
        },
        fb(){
          this.mnm=false;
        },
        vd(){
          this.$router.push("/cart1")
        },
        vn(e){
          if(e==1){
            this.count++
          }else if(e==-1&&this.count>0){
            this.count--
          }
        },
        vb(gid,lname,price,pic,count){
         if(count==0){
           this.$toast("请选择数量")
           return;
         }
         var url="cart1";
         var obj={gid,lname,price,pic,count};
         this.axios.get(url,{params:obj}).then(res=>{
           if(res.data.code==-2){
             this.$toast("请登录");
             this.$router.push("/user");
           }else{
             this.$toast("添加成功");
             this.count=0;
             this.mnm=false;
             this.loadMore();
           }
         })
        },
         vc(gid,lname,price,pic){
          var count=1;
           //功能：将我们商品信息添加至购物车
           //1.创建变量url保存请求服务器地址
           var url="cart1";
           //2.创建变量obj请求数据 gid lname price pic
           var obj={gid,lname,price,pic,count};
           //3.发送ajax请求
           this.axios.get(url,{params:obj}).then(res=>{
             if(res.data.code==-2){
               this.$toast("请登录");
               this.$router.push("/user");
             }else{
               this.$toast("添加成功")
               this.loadMore();
             }
           })
           //4.接受服务器返回数据
           //5.判断code==-1提示请登录 跳转/登录页面
           //6.判断code==1 提示添加成功
        },
            loadMore(){
           this.axios.get("cart").then(res=>{
        if(res.data.code==-2){
           this.$toast("请登录");
           this.$router.push("/user");
        }else{
          this.list=res.data.data;
            if(this.list.length>0){
             this.ffd=true;
             this.ddf=true;
           }
        }
      })
        }, 
         fp(){
          this.mnm=true;
        },
        va(){
        this.$toast({
        message:"正在建设,敬请期待",
        position:"bottom"
      })
        },
        fs(){
         if(this.mz!==""){
           this.mz="color:#ffb6c1"
           this.mn="color:#aaaaaa"
           this.mc=""
           this.ma="height:0px"
         }
        },
        fc(){
          if(this.mn!==""){
            this.mn="color:#ffb6c1"
            this.mz="color:#aaaaaa"
            this.mc="height:0px"
            this.ma="height:1360px"
          }
        }
    },

beforeRouteEnter(to,from,next){
  console.log(`进入details`);
        

   next();
 },     
    beforeRouteLeave(to,from,next){
      console.log(`离开details`);
    if(to.path=="/index"){
        to.meta.keepAlive=true;
        
    }
    next();
  },   
  props:["tid"]    
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
  width: 40%;
  display: flex;
  justify-content:space-between;
}
.right-head2{
  width:10%;
}
/*顶部结束 */
/*详情 */
.details{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.details1{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  color:#ffb6c1;
}
.details2{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
   margin-top:10px;
}
.details3{
  width: 100%;
  height:150px;
  margin-top:25px;
  background:rgba(128,128,128,0.1);
}
.details3-3{
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  align-items: center;
  margin-top:20px;
}
.details3-1{
  width: 50%;
  display: flex;
  justify-content: start;
}
.details3-2{
  width: 50%;
   display: flex;
  justify-content:end;
}
/*详情结束 */
/*底部 */
.foot{
  display:flex;
  justify-content: space-between;
  position: fixed;
  top:617px;left:0px;
  background:#fff;
  z-index:3;
  width: 100%;
  height: 50px;
  align-items:center;
  border-top:1px solid #eeeeee; 
}
.foot1,.foot2{
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
}
.foot2-1{
  width: 20px;height: 20px;
  background: rgba(255,182,193);
  color: #fff;
  font-size:1px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top:0px; left:52px;
}
.foot3,.foot4{
  line-height: 50px;
  height: 50px;
  width: 50%;
  display: flex;
  justify-content: center;
}
.foot5{
  display: flex;
  justify-content: space-around;
  width:50%;
}
/*底部结束 */
/*选择 */
.select{
  width: 100%;
  height: 667px;
  position:absolute;
  z-index:4;
}
.select1{
  width: 100%;
  height:60%;
  background:rgba(128,128,128,0.7);
}
.select2{
  width: 100%;
  height:40%;
  background: #fff;
}
.select2-1{
  width: 100%;
  display: flex;
  justify-content:space-between;
}
.select2-2{
  width: 100%;
  display: flex;
  justify-content: start;
}
.select2-3{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top:30px;
}
.select2-3-2{
  width:50%;
  display: flex;
  justify-content:center;
}
.select2-3-3{
  width: 100%;
  display: flex;
  justify-content:space-around;
  align-items: center;
  margin-top:60px;
  height:31px;
}
/*选择结束 */
/*详情页 */
.page{
  width: 100%;
  height:0px;
  display: flex;
  flex-direction: column;
  align-items: center;
   transition: all 0.5s linear;
  overflow: hidden;
}
/*详情页结束 */
/*切换 */
.handover{
  width: 100%;
  height: 519px;
  transition: all 0.5s linear;
  overflow: hidden;
}
/*切换结束 */
</style>