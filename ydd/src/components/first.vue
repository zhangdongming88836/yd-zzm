<template>
<div>
    <div class="page-head">
     <div class="right-head">
       <img src="../assets/image_search_new.png" alt="" style="width:25px" @click="fa">
       </div> 
       <div class="right-head1">
         <img src="../assets/zhengzhumeixuelong1.png" alt="" style="width:100px">
       </div>
       <div class="right-head2" @click="zxc">
      <img src="../assets/icon_message_new.png" alt="" style="width:25px; margin-left:15px;"> 
     </div>
    </div>
    <!--扫码的div-->
    <div class="scan" v-show="scan" >
      <div class="scan1">
      <div class="scan2" @click="qws">
        <img src="../assets/fangweichaxun.png" alt="" style="width:80px">
        <p style="color:#999999;">防伪查询</p>
      </div>
      <div class="scan2" @click="qwa">
         <img src="../assets/huoquanzhuanyi.png" alt="" style="width:80px">
        <p style="color:#999999;">货权转移</p>
      </div>
      <div class="scan2" @click="qwd">
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
      <div @click="zxc">
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
        <router-link :to="list[30].href" >
      <div class="bulb1"></div>
      </router-link>
      <router-link :to="list[28].href">
      <div  class="bulb2"></div>
       </router-link>
       <router-link :to="list[29].href">
      <div class="bulb3" ></div>
       </router-link>
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
         <router-link :to="list[0].href">
       <img src="../assets/15758636001699226929.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[0].href">
       <p style="font-size:12px;color:#666666">{{list[0].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[0].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[0].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[0].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[1].href">
       <img src="../assets/15651665801692785803.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[1].href">
       <p style="font-size:12px;color:#666666">{{list[1].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[1].href">
          <p style="font-size:12px;color:#666666">￥ {{list[1].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[1].href">
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
         <router-link :to="list[2].href">
       <img src="../assets/15550689821472832976.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link  :to="list[2].href">
      <p style="font-size:12px;color:#666666">{{list[2].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link  :to="list[2].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[2].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link  :to="list[2].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link  :to="list[4].href">
       <img src="../assets/15411180311026184492.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[4].href">
       <p style="font-size:12px;color:#666666">{{list[4].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[4].href">
          <p style="font-size:12px;color:#666666">￥ {{list[4].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[4].href">
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
         <router-link :to="list[6].href">
       <img src="../assets/1541118003510743980.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[6].href">
       <p style="font-size:12px;color:#666666">{{list[6].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[6].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[6].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[6].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[7].href">
       <img src="../assets/15415104431149175815.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[7].href">
       <p style="font-size:12px;color:#666666">{{list[7].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[7].href">
          <p style="font-size:12px;color:#666666">￥ {{list[7].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[7].href">
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
         <router-link :to="list[8].href">
       <img src="../assets/15411568791775390500.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[8].href">
       <p style="font-size:12px;color:#666666;white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;width:130px;">{{list[8].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[8].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[8].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[8].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[9].href">
       <img src="../assets/15411567771409460016.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[9].href">
       <p style="font-size:12px;color:#666666;white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;width:130px;">{{list[9].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[9].href">
          <p style="font-size:12px;color:#666666">￥ {{list[9].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[9].href">
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
         <router-link :to="list[10].href">
       <img src="../assets/15415104541662165406.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[10].href">
       <p style="font-size:12px;color:#666666;white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;width:130px;">{{list[10].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[10].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[10].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[10].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[11].href">
       <img src="../assets/15411179051830899719.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[11].href">
       <p style="font-size:12px;color:#666666">{{list[11].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[11].href">
          <p style="font-size:12px;color:#666666">￥ {{list[11].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[11].href">
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
         <router-link :to="list[12].href">
       <img src="../assets/15411179001281516724.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[12].href">
       <p style="font-size:12px;color:#666666">{{list[12].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[12].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[12].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[12].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[13].href">
       <img src="../assets/15411179901860669418.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[13].href">
       <p style="font-size:12px;color:#666666">{{list[13].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[13].href">
          <p style="font-size:12px;color:#666666">￥{{list[13].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[13].href">
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
         <router-link :to="list[14].href">
       <img src="../assets/1545038502908442228.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[14].href">
       <p style="font-size:12px;color:#666666">{{list[14].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[14].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[14].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[14].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[15].href">
       <img src="../assets/15633453561768467389.jpg" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[15].href">
       <p style="font-size:12px;color:#666666">{{list[15].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[15].href">
          <p style="font-size:12px;color:#666666">￥ {{list[15].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[15].href">
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
         <router-link :to="list[17].href">
       <img src="../assets/1541589957264438886.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[17].href">
       <p style="font-size:12px;color:#666666">{{list[17].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[17].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[17].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[17].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[18].href">
       <img src="../assets/1573795635649726637.jpg" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[18].href">
       <p style="font-size:12px;color:#666666">{{list[18].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[18].href">
          <p style="font-size:12px;color:#666666">￥{{list[18].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[18].href">
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
         <router-link :to="list[19].href">
       <img src="../assets/15693070211200559225.jpg" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[19].href">
       <p style="font-size:12px;color:#666666">{{list[19].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[19].href">
           <p  style="font-size:12px;color:#666666">￥{{list[19].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[19].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[20].href">
       <img src="../assets/15415899872113518510.jpg" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[20].href">
       <p style="font-size:12px;color:#666666">{{list[20].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[20].href">
          <p style="font-size:12px;color:#666666">￥ {{list[20].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[20].href">
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
         <router-link :to="list[27].href">
       <img src="../assets/15410576862013265770.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[27].href">
       <p style="font-size:12px;color:#666666">{{list[27].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[27].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[27].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[27].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[26].href">
       <img src="../assets/15410502921739947519.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[26].href">
       <p style="font-size:12px;color:#666666">{{list[26].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[26].href">
          <p style="font-size:12px;color:#666666">￥ {{list[26].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[26].href">
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
         <router-link :to="list[25].href">
       <img src="../assets/15410576811917950346.png" alt="" style="width:100%;height:150px">
         </router-link>
         <router-link :to="list[25].href">
       <p style="font-size:12px;color:#666666">{{list[25].title}}</p>
       </router-link>
       <div class="EyeCream3">
         <div style="width:50%">
          <router-link :to="list[25].href">
           <p  style="font-size:12px;color:#666666">￥ {{list[25].price}}</p>
           </router-link>
           </div>
         <div style="width:50%">
           <router-link :to="list[25].href"> 
           <p style="font-size:12px;background:#ffb7dd;width:55%;color:#666666">立即购买</p>
           </router-link>
           </div>
       </div>
      </div>
      <div class="EyeCream2">
        <router-link :to="list[24].href">
       <img src="../assets/15423645072142557246.png" alt="" style="width:100%;height:150px">
        </router-link> 
        <router-link :to="list[24].href">
       <p style="font-size:12px;color:#666666">{{list[24].title}}</p>
       </router-link>
       <div class="EyeCream3">
        <div style="width:50%">
          <router-link :to="list[24].href">
          <p style="font-size:12px;color:#666666">￥ {{list[24].price}}</p>
          </router-link>
          </div>
         <div style="width:50%"> 
           <router-link :to="list[24].href">
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
       list:[],
       
     }
   },
    created(){
      this.loadMore();
    },
   methods:{
     zxc(){
       this.$toast("功能正在完善中")
     },
     qws(){
       this.$toast("建设中，敬请期待")
     },
     qwa(){
       this.$toast("建设中，敬请期待")
     },
     qwd(){
       this.$toast("建设中，敬请期待")
     },
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
    },
     loadMore(){
        //功能：发送ajax请求获取服务器返回商品列表
        //并且把数据保存data list:[]
        //1.创建url变量保存请求地址
        var url="index";
        //2.创建变量obj 请求服务器参数就是页数pno pageSize没有可以不写
        //var obj={pno:1,pageSize:4};
        //.发送ajax get请求
        this.axios.get(url).then(res=>{
              //4.获取服务器端返回商品列表数据
              this.list=res.data.data;
              console.log(this.list);
             //5.在data添加属性list保存商品
            //6.将返回数据保存list结束
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