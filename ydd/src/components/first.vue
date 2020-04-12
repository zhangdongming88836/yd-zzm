<template>
<div>
    <div class="page-head">
     <div class="right-head">
       <img src="../assets/image_search_new.png" alt="" style="width:25px" @click="fa">
       </div> 
       <div class="right-head1">
         <img src="../assets/zhengzhumeixuelong1.png" alt="" style="width:100px">
       </div>
       <div class="right-head2">
      <img src="../assets/icon_message_new.png" alt="" style="width:25px; margin-left:15px;"> 
     </div>
    </div>
    <!--扫码的div-->
    <div class="scan" v-show="scan" >
      <div class="scan1">
      <div class="scan2">
        <img src="../assets/fangweichaxun.png" alt="" style="width:80px">
        <p style="color:#999999;">防伪查询</p>
      </div>
      <div class="scan2">
         <img src="../assets/huoquanzhuanyi.png" alt="" style="width:80px">
        <p style="color:#999999;">货权转移</p>
      </div>
      <div class="scan2">
         <img src="../assets/dailichaxun_icon.png" alt="" style="width:80px">
        <p style="color:#999999;">代理查询</p>
      </div>
      <div class="scan2" @click="fb"></div>
      </div>
      <div style="width:100%;height:360px;" @click="fc"></div>
    </div>
    <!--扫码的div结束-->
    <!--轮播图-->
    <div style="height:50px"></div>
    <carousel></carousel>
    <!--轮播图结束-->
    <!--导航栏-->
    <div class="navigation">
      <div>
        <router-link to="/aboutUs">
          <img src="../assets/new_guanyuzhenzhu.png" alt="" style="width:50px">
          <p style="color:#666666; font-size:12px">关于真珠</p>
        </router-link>
      </div>
      <div>
         <router-link to="">
          <img src="../assets/new_zhenzhusucai.png" alt="" style="width:50px">
          <p  style="color:#666666; font-size:12px">真珠素材</p>
        </router-link>
      </div>
      <div>
         <router-link to="">
          <img src="../assets/new_chanpingjieda.png" alt="" style="width:50px" @click="openToast">
          <p  style="color:#666666; font-size:12px">答疑中心</p>
        </router-link>
      </div>
    </div>
    <!--导航栏结束-->
    <!--泡泡-->
     <div class="bulb">
       <table></table>
      <div class="bulb1">
        <router-link to=""></router-link>
      </div>
      <div  class="bulb2">
        <router-link to=""></router-link>
      </div>
      <div class="bulb3" >
        <router-link to=""></router-link>
      </div>
     </div>
    <!--泡泡结束-->
    <!--护肤-->
    <div style="width:100%">
      <img src="../assets/1.jpg" alt="" style="width:100%">
    </div>
    <!--护肤结束-->
    <!--产品列表-->
    <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15758636001699226929.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">珍珠美学丝滑滋养发膜</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 138</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15651665801692785803.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">肌源修护紧致眼霜</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 298</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
    <hr style="margin-top:5px;border-top:1px solid #dddddd;">
    <!--产品第二列-->
     <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15550689821472832976.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">焕活肌底精华液</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 298</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15411180311026184492.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">樱花珍珠凝霜</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 238</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
    <!--产品第二列结束-->
    <hr style="margin-top:5px;border-top:1px solid #dddddd;">
    <!--产品第三列-->
    <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/1541118003510743980.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">晶樱美颜粉</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 198</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15415104431149175815.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">亮采焕颜洁面扑</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 138</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
    <!--产品第三列结束-->
    <hr style="margin-top:5px;border-top:1px solid #dddddd;">
    <!--产品第四列-->
    <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15411568791775390500.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">澳洲洁面精华露</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 238</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15411567771409460016.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">澳洲修护精华液</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 238</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
    <!--产品第四列结束-->
     <hr style="margin-top:5px;border-top:1px solid #dddddd;">
     <!--产品第五列-->
      <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15415104541662165406.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">多效保湿精华油</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 238</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15411179051830899719.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">积雪草保湿喷雾</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 198</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
     <!--产品第五列结束-->
     <hr style="margin-top:5px;border-top:1px solid #dddddd;">
     <!--产品第六列-->
       <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15411179001281516724.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">真珠美学珍珠发酵精华面膜</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 198</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15411179901860669418.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">真珠美学发酵精华金箔面膜</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 238</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
     <!--产品第六列结束-->
     <hr style="margin-top:5px;border-top:1px solid #dddddd;">
     <!--产品第七列-->
       <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/1545038502908442228.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">花蜜私语护手霜礼盒</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 148</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15633453561768467389.jpg" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">柔滑细嫩身体磨砂膏</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 178</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
     <!--产品第七列结束-->
     <div style="width:100%;margin-top:10px">
      <img src="../assets/2.jpg" alt="" style="width:100%">
    </div> 
     <!--产品第八列-->
       <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/1541589957264438886.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">防晒亮白BB霜</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 238</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/1573795635649726637.jpg" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">精魅自动眉笔</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 168</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>
     <!--产品第八列结束-->
     <hr style="margin-top:5px;border-top:1px solid #dddddd;">  
      <!--产品第九列--> 
        <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15693070211200559225.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">丝柔臻颜妆前乳</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 188</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15415899872113518510.jpg" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">菁彩随行便携式刷具套组</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 198</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>    
      <!--产品第九列结束--> 
        <div style="width:100%;margin-top:10px">
      <img src="../assets/3.jpg" alt="" style="width:100%">
    </div>
      <!--产品第10列-->  
         <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15410576862013265770.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">莓蔬发酵饮料</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 258</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15410502921739947519.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">胶原蛋白果味饮料</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 258</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>    
      <!--产品第10列结束-->
      <hr style="margin-top:5px;border-top:1px solid #dddddd;">  
      <!--产品第11列-->  
         <div class="EyeCream">
      <div class="EyeCream1">
         <router-link to="">
       <img src="../assets/15410576811917950346.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link to="">
       <p style="font-size:12px;color:#666666">石榴红藜果蔬饮料</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link to="">
           <p  style="font-size:12px;color:#666666">￥ 288</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link to=""> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link to="">
       <img src="../assets/15423645072142557246.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link to="">
       <p style="font-size:12px;color:#666666">茶树花绿茶果味饮料</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link to="">
          <p style="font-size:12px;color:#666666">￥ 368</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link to="">
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666" >立即购买</p>
           </router-link>
           </div>   
        </div>
       </div>
    </div>    
      <!--产品第11列结束-->   
    <!--产品列表结束-->
    <div style="width:100%;height:200px"></div>
</div>
</template>
<script>
import carousel from "./carousel.vue"
export default {
   data(){
     return{
       scan:false,
     }
   },
   methods:{
    fa(){
      this.scan=true;
    },
    fb(){
      this.scan=false;
    },
    fc(){
      this.scan=false;
    },
    openToast(){
      this.$toast({
        message:"正在建设,敬请期待",
        position:"bottom"
      })
    }
   }, 
   components:{
     carousel,
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
  margin-left:10px;
}
.right-head2{
  width:10%;
}
/*扫码 */
.scan{
  width: 100%;
  height: 720px;
  background:rgba(0,0,0,0.5);
  position: fixed;
  z-index:2;
}
.scan1{
  width: 100%;
  height: 360px;
  background:#fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items:center;
}
.scan2{
  width: 50%;
  height: 101px;
  display: flex;
  flex-direction:column;
  align-items:center;
}
/*扫码结束 */
/*导航 */
.navigation{
  width: 100%;
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin-top:10px;
}
/*导航结束 */
/*泡泡 */
.bulb{
  width:100%;
  height: 753px;
  margin-top:10px;
  background:url(../assets/home_three_goods.jpg) no-repeat ;
  background-size:100%100%;
}
.bulb1,.bulb2,.bulb3{
  width:100%;
  border:1px solid #f00;
}
.bulb1{
  margin-top:94px;
  height: 30%;
}
.bulb2{
 height: 25%; 
}
.bulb3{
   height: 30%;
}
/*泡泡结束 */
/*眼霜 */
.EyeCream{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.EyeCream1,.EyeCream2{
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
}
.EyeCream3{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top:10px;
}
/*眼霜结束 */
</style>