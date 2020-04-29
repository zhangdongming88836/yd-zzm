<template>
   <div>
        <!--顶部-->
      <div class="page-head">
      <div class="right-head">
        <router-link to="/Search">
       <img src="../assets/icon_search01.png" alt="" style="width:25px" >
        </router-link>
       </div> 
       <div class="right-head1">
         <p style="width:100px">商铺</p>
       </div>
       <div class="right-head2">
      <img src="../assets/icon_share_new.png" alt="" style="width:25px; margin-left:15px;"> 
     </div>
    </div>
     <!--顶部-->
     <!--列表-->
   <div style="background:#dddddd;weidth:100%;">
     <div style="height:50px"></div>
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[23].href">
         <img src="../assets/15852868031038197663.jpg" alt="" style="width:100%">
         </router-link>
         <router-link :to="list[23].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[23].title}}</p>
         </router-link>
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[23].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[23].price}}</p>
             </router-link>
           </div>
           <div style="width:40%;">
             <router-link :to="list[23].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link>
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[17].href">
         <img src="../assets/15843426861902871146.jpg" alt="" style="width:100%">
         </router-link>
           <router-link :to="list[17].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[17].title}}</p>
         </router-link>
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[17].href">
             <p style="font-size:12px;color:#ffb7dd">￥{{list[17].price}}</p>
             </router-link>
           </div>
           <div style="width:40%;">
             <router-link :to="list[17].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link>
           </div>
         </div>
       </div>
     </div> 
     <!--列表2-->
      <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[0].href">
         <img src="../assets/15758636001699226929.jpg" alt="" style="width:100%">
         </router-link>
          <router-link :to="list[0].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[0].title}}</p>
         </router-link>
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[0].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[0].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[0].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[18].href">
         <img src="../assets/1573795635649726637.jpg" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[18].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[18].title}}</p>
         </router-link>
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[18].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[18].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[18].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表2结束-->
     <!--列表3-->
      <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[19].href">
         <img src="../assets/15693070211200559225.jpg" alt="" style="width:100%">
         </router-link>
           <router-link :to="list[19].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[19].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[19].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[19].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[19].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[1].href">
         <img src="../assets/15651665801692785803.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[1].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[1].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[1].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[1].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[1].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表3结束-->
     <!--列表4-->
       <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[28].href">
         <img src="../assets/1565159099316436981.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[28].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[28].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[28].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[28].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[28].href">
              <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[29].href">
         <img src="../assets/1565159191557405035.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[29].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[29].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[29].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[29].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[29].href">
            <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表4结束-->
     <!--列表5-->
      <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[30].href">
         <img src="../assets/15722485981570234231.jpg" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[30].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[30].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[30].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[30].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[30].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link>
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[2].href">
         <img src="../assets/15550689821472832976.jpg" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[2].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[2].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[2].href">
             <p style="font-size:12px;color:#ffb7dd">￥{{list[2].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[2].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表5结束-->
     <!--列表6-->
      <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[3].href">
         <img src="../assets/1578637780127749207.jpg" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[3].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[3].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[3].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[3].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[3].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[4].href">
         <img src="../assets/1541117946399220390.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[4].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[4].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[4].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[4].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[4].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表6结束-->
     <!--列表7-->
      <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[5].href">
         <img src="../assets/15411180311026184492 (1).png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[5].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[5].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[5].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[5].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[5].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[6].href">
         <img src="../assets/1541118003510743980.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[6].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[6].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[6].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[6].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[6].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表7结束-->
     <!--列表8-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[7].href">
         <img src="../assets/15415104431149175815.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[7].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[7].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[7].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[7].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[7].href">
              <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[8].href">
         <img src="../assets/15411568791775390500.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[8].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[8].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[8].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[8].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[8].href">
              <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表8结束-->
     <!--列表9-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[9].href">
         <img src="../assets/15411567771409460016.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[9].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[9].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[9].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[9].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[9].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[10].href">
         <img src="../assets/15415104541662165406.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[10].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[10].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[10].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[10].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[10].href">
              <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表9结束-->
      <!--列表10-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[11].href">
         <img src="../assets/15411179051830899719.png" alt="" style="width:100%">
         </router-link>
           <router-link :to="list[11].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[11].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[11].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[11].price}}</p>
             </router-link>
           </div>
           <div style="width:40%;">
             <router-link :to="list[11].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[12].href">
         <img src="../assets/15411179001281516724.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[12].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[12].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[12].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[12].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[12].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表10结束-->
       <!--列表11-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[13].href">
         <img src="../assets/15411179901860669418.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[13].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[13].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[13].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[13].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[13].href">
              <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[14].href">
         <img src="../assets/1545038502908442228.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[14].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[14].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[14].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[14].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[14].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表11结束-->
      <!--列表12-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[24].href">
         <img src="../assets/15423645072142557246.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[24].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[24].title}}</p>
         </router-link>
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[24].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[24].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[24].href">
            <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[25].href">
         <img src="../assets/15410576811917950346.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[25].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[25].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[25].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[25].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[25].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表12结束-->
       <!--列表13-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[26].href">
         <img src="../assets/15410502921739947519.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[26].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[26].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[26].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[26].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[26].href">
              <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2">
         <router-link :to="list[27].href">
         <img src="../assets/15410576862013265770.png" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[27].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[27].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[27].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[27].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[27].href">
             <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
     </div> 
     <!--列表13结束-->
       <!--列表14-->
     <div class="Shops">
       <div class="Shops1">
         <router-link :to="list[15].href">
         <img src="../assets/15633453561768467389.jpg" alt="" style="width:100%">
         </router-link >
           <router-link :to="list[15].href">
         <p style="font-size:12px;color:#aaaaaa">{{list[15].title}}</p>
         </router-link >
         <div class="Shops1_1">
           <div style="width:40%;">
             <router-link :to="list[15].href">
             <p style="font-size:12px;color:#ffb7dd">￥ {{list[15].price}}</p>
             </router-link >
           </div>
           <div style="width:40%;">
             <router-link :to="list[15].href">
            <p style="font-size:12px;background:#ffb7dd;width:50px;color:#666666" >立即购买</p>
             </router-link >
           </div>
         </div>
       </div>
       <div class="Shops2"></div>
     </div> 
     <!--列表14结束-->
     <!--列表结束--> 
     <div style="width:100%; height:100px; text-align:center;">
       <span style="font-size:12px;color:#aaaaaa;">没有更多数据啦</span>
     </div>
    </div> 
  </div>
</template>
<script>
export default {
    data(){
      return{
        list:[],
      }
    },
    created(){
      this.loadMore();
    },
    methods:{
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
             //5.在data添加属性list保存商品
            //6.将返回数据保存list结束
        })
       /* this.axios.get(url,{params:obj}).then(res=>{
              //4.获取服务器端返回商品列表数据
              this.list=res.data.data;
              //分页的结果
              var rows=this.list.const(res.data.data);
              this.list=rows;
             //5.在data添加属性list保存商品
            //6.将返回数据保存list结束
        })*/
      
      }
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
  width: 20%;
  margin-left:10px;
}
.right-head2{
  width:10%;
}
/*顶部结束 */
/*列表 */
.Shops{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.Shops1,.Shops2{
  width: 48%;
  background:#fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:5px 0;
}
.Shops1_1{
  width:100%;
  margin-top:10px;
  display: flex;
  justify-content: space-between;
}
/*列表结束 */
</style>