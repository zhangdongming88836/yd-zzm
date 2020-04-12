<template>
   <div>
    <v-touch  v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"> 
     <div :style="{width:innerWidth+'px'}" class="carousel" v-on:touchstart="stop" v-on:touchend="start"> 
        <ul class="carousel1" :style="ulStyle" :class="ulClass">
          <li v-for="(im,i) of list" :key="i" :style="{width:innerWidth+'px'}">
            <img :src="im.src" alt="" :style="{width:innerWidth+'px'}"  style="height:180px">  
          </li>
          <li :style="{width:innerWidth+'px'}">
             <img :src="list[0].src" alt="" :style="{width:innerWidth+'px'}"   style="height:180px"> 
          </li>
        </ul>
        <ul class="carousel2">
          <li v-for="(im,idx) of list" :key="idx" class="carousel2-1" :class="idx==i?'ass':''" @click="fn(idx)"></li>  
        </ul> 
     </div>
    </v-touch>
   </div> 
</template>
<script>
export default {
    data(){
        return{
            innerWidth:window.innerWidth,
            i:0,
            list:[
                {src:require("../assets/fss_sj.png")},
                {src:require("../assets/app_sj.jpg")},
                {src:require("../assets/1569464284673812320.jpg")},
                {src:require("../assets/bb.jpg")},
                {src:require("../assets/a796b727942cd42e650099e6f113b44.jpg")},
            ],
         ulClass:{tran:true},
         mm:true,
         cc:null,
        }
    },
     created(){
           window.addEventListener("resize",{
               innerWidth:window.innerWidth
           }) 
        },
     methods:{
         stop(){
             clearInterval(this.cc);
         },
         start(){
           this.cc=setInterval(() => {
               this.onSwipeLeft();
           },2000);
         },
        fn(e){
            this.i=e;
        },
        onSwipeLeft(){
         if(this.mm){
             this.mm=false;
             if(this.i==this.list.length-1){
                 this.i+=1;
                 setTimeout(()=>{
                  this.ulClass.tran=false;
                  setTimeout(()=>{
                      this.i=0;
                      setTimeout(()=>{
                          this.ulClass.tran=true;
                          setTimeout(()=>{
                              this.mm=true;
                          })
                      },50)
                  },50)
                 },1000)
             }else{
                this.i++; 
                this.mm=true;
             }
         }
    },
      onSwipeRight(){
       if(this.mm){
           this.mm=false;
           if(this.i==0){
               setTimeout(()=>{
                   this.ulClass.tran=false;
                   setTimeout(()=>{
                       this.i=this.list.length;
                       setTimeout(()=>{
                           this.ulClass.tran=true;
                           this.i--;
                           setTimeout(()=>{
                               this.mm=true;
                           })
                       },50)
                   },50)
               },200)
           }else{
               this.i--;
               this.mm=true;
           }
       }
 }
},   
        computed:{
         ulStyle(){
           var width=this.innerWidth*(this.list.length+1)+"px";
           var marginLeft=-this.i*this.innerWidth+"px";
           return{width,marginLeft}
         }
     }
}
</script>
<style scoped>
.carousel{
    overflow: hidden;
    position: relative;
}

.carousel1{
   display:flex;
}
.carousel2{
  position:absolute;
  display: flex;
  top:167px;left:37%;
}
.carousel2-1{
    width:10px;height:10px;
    margin-left: 5px;
    border-radius: 50%;
    background:#dddddd;
}
.ass{
    background: #ffb7dd;
}
.carousel1.tran{
transition: all 1s linear;
}
</style>