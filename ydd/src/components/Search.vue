<template>
    <div>
        <div class="Search">
            <div class="Search1">
                <img src="../assets/icon_back_arrow.png" alt="" style="width:10px;" v-on:click="back">
            </div>
            <div class="Search2">
                <div style="margin-top:5px;">
                   <img src="../assets/nav_icon_search.png" alt="" style="width:15px;">
                </div> 
                <form >
                 <input type="text" placeholder="请输入商品名称" style="background:#dddddd;border:0;outline:0;caret-color:#ffb7dd" v-focus v-model="ssd">  
               </form>
            </div>
            <div class="Search3">
                <img src="../assets/icon_search01.png" alt="" style="width:20px;" @click="search">
            </div>
        </div>
        <!--搜索如下-->
          <div style="height:50px;"></div>
          <div style="margin-top:50px;widght:100%;border-top:1px solid #dddddd;" v-for="(item,i) of link" :key="i">
             <router-link :to="'/details'+'/'+item.tid" class="Search4">
             <div class="Search4-1">
                 <img :src="'http://127.0.0.1:4000/'+item.pic" alt="" style="width:100px;">
             </div>
             <div class="Search4-2">
                  
                 <p style="color:#aaaaaa;">{{item.title}}</p>
                 <p style="color:#ffb7dd;margin-top:5px;">￥ {{item.price}}</p>
             </div>
             </router-link>
          </div>
        <!--搜索如下结束-->
    </div>
</template>
<script>
export default {
  data(){
    return{
      ssd:"",
      link:[],
    }
  },
  methods:{
     back(){
         this.$router.go(-1)
     },
     search(){
       if(this.ssd.length==0){
         this.$messagebox("消息","请输入要查找的商品");
         return;
       }
       var u=this.ssd;
       var obj={title:u}
       this.axios.get("search",{params:obj}).then(res=>{
         this.link=res.data.data
         if(this.link.length==0){
         this.$toast("没有找到要搜索的商品");
         }else{
           this.link=res.data.data
         }
       })
     },
  },
  beforeRouteEnter(to,from,next){
  console.log(`进入搜索`);
   next();
}, 

    beforeRouteLeave(to,from,next){
   if(to.name=="details"){
      from.meta.keepAlive=true;
    }
    console.log(`离开搜索`);
    console.log(to);
    console.log(from);
   next();
}, 
}
</script>
<style scoped>
.Search{
  width: 100%;
  height: 50px;
 border-bottom: 1px solid #dddddd;
 position: fixed;
 display: flex;
 justify-content: space-around;
 align-items: center;
}
.Search1{
    width:5%;
    align-items: center;
    margin-top:5px;
}
.Search2{
    width:60%;
    height: 40px;
    border:1px solid #fff;
    border-radius:20px;
    background: #dddddd;
    display: flex;
    justify-content: space-around;
    align-items: center;
     margin-left:-30px;
}
.Search3{
    width:5%;
   align-items: center;
   margin-left:-30px;
   margin-top:5px;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:#aaaaaa;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #aaaaaa;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #aaaaaa;
}
:-moz-placeholder { /* Firefox 18- */
  color: #aaaaaa;
}
.Search4{
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 1px solid #dddddd;
}
.Search4-1{
    width:30%;
}
.Search4-2{
    width:60;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>