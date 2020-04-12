<template>
    <div>
   <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" >
         <div class="content" :style="{width:innerWidth+'px'}">
          <ul class="ul1" :style="ulStyle">
             <li :style="{width:innerWidth+'px'}" v-for="(im,i) of imgs" :key="i">
               <router-link :to="im.to"> 
              <img :src="im.src" alt="" :style="{width:innerWidth+'px'}">
              </router-link> 
             </li> 
          </ul>
        </div>
   </v-touch> 
   </div> 
</template>
<script >
export default{
    data(){
        return{
            innerWidth:window.innerWidth,
            index:0,
            imgs:[
                {src:require("../assets/guide_one.jpg"),
                to:""
                },
                {src:require("../assets/guide_two.png"),
                 to:""
                },
                {src:require("../assets/guide_three.png"),
                 to:"/index"
                 }
            ]
        }
    },
    created(){
        window.addEventListener("resize",()=>{
            this.innerWidth=window.innerWidth;
        })
    },
   methods:{
    onSwipeLeft(){
         if(this.index<this.imgs.length-1){
             this.index++
         }
    },
    onSwipeRight(){
        if(this.index>0){
            this.index--;
        }
    },
   },
   computed:{
       ulStyle(){
          var  width=this.innerWidth*this.imgs.length+"px";
          var transition="all 0.5s linear";
          var marginLeft=-this.innerWidth*this.index+"px";
          return { width,transition,marginLeft}
       }

   }
}
</script>
<style scoped>
.content{
    overflow: hidden;
   
}
.ul1 li{
   float: left;
}
</style>