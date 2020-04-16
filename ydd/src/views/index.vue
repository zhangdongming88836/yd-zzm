<template>
   <div>
     <mt-tab-container v-model="active">
       <mt-tab-container-item  id="tab1">
         <first></first>
       </mt-tab-container-item>
       <mt-tab-container-item id="tab2">
         <shop></shop>
       </mt-tab-container-item>
       <mt-tab-container-item id="tab3">
         <cart></cart>
       </mt-tab-container-item>
        <mt-tab-container-item id="tab4">
         <mine></mine>
       </mt-tab-container-item>
     </mt-tab-container>
     <mt-tabbar v-model="active" fixed>
       <mt-tab-item id="tab1" @click.native="changeState(0)"> 
         <tabbaricon
           :focused="list[0].isSelect"
           :selectedImage="require('../assets/home_2.png')"
           :normalImage="require('../assets/home_1.png')">
           </tabbaricon>
         首页
       </mt-tab-item>
       <mt-tab-item id="tab2" @click.native="changeState(1)">
           <tabbaricon
           :focused="list[1].isSelect"
           :selectedImage="require('../assets/new_1.png')"
           :normalImage="require('../assets/new_2.png')"
         ></tabbaricon>
         商铺
       </mt-tab-item>
       <mt-tab-item id="tab3" @click.native="changeState(2)">
            <tabbaricon
            :focused="list[2].isSelect"
           :selectedImage="require('../assets/shop_car_2.png')"
           :normalImage="require('../assets/shop_1.png')"
         ></tabbaricon>
         购物袋
       </mt-tab-item>
       <mt-tab-item id="tab4" @click.native="changeState(3)">
            <tabbaricon
            :focused="list[3].isSelect"
           :selectedImage="require('../assets/my_center_2.png')"
           :normalImage="require('../assets/my_center_1.png')"
         ></tabbaricon>
         我的
       </mt-tab-item>
     </mt-tabbar>
  </div> 
</template>
<script>
import first from "../components/first.vue"
import shop  from "../components/shop.vue"
import cart  from "../components/cart.vue"
import mine  from "../components/mine.vue"
import tabbaricon from "../components/tabbaricon.vue"
export default {
  data(){
    return{
      active:"tab1",
     list:[
       {isSelect:true},
       {isSelect:false},
       {isSelect:false},
       {isSelect:false}
     ],
    }
},
methods:{
  changeState(e){
    var size=this.list.length;
    for(var i=0;i<size;i++ ){
      if(i==e){
        this.list[i].isSelect=true;
      }else{
         this.list[i].isSelect=false;
      }
    }
    
  }
},
beforeRouteEnter(to,from,next){
  console.log(`进入index`);
   next();
},
beforeRouteLeave(to,from,next){
  console.log(`离开index`);
  if(to.name=="Search"){
    to.meta.keepAlive=false;
  }
   next();
},
components:{first,shop,cart,mine,tabbaricon,}
}
</script>
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected{
  color:#ffb7dd ;
}
.mint-tabbar > .mint-tab-item{
  color:#999999;
}
</style>