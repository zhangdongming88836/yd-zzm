<template>
    <div>
      <!--顶部-->
    <div class="page-head">
     <div class="right-head" v-on:click="back">
          <img src="../assets/icon_back_arrow.png" alt="" style="width:10px;" >
     </div> 
       <div class="right-head1">
        <h3>购物袋</h3>
       </div>
       <div class="right-head2">
      </div>
    </div> 
    <!--顶部结束-->
      <div style="height:50px"></div>
      <!--购物袋列表-->
        <div class="cartItem" v-for="(item, i) of $store.getters.getList" :key="i">
          <div class="cartItem1">
            <input type="checkbox" v-model="item.cb" @change="changeItem">
          </div>
          <div class="cartItem2">
            <img :src="'http://127.0.0.1:4000/'+item.pic" alt="" style="width:100px;height:100px;">
          </div>
          <div class="cartItem3">
            <div>{{item.lname}}</div>
            <div style="margin-top:10px">￥ {{item.price}}</div>
          </div>
          <div class="cartItem4">
            <div>数量</div>
            <div style="margin-top:10px">{{item.count}}</div>
          </div>
          <div class="cartItem5" @click="del(item.id)">
            <p>删</p>
          </div>
        </div>
        <div style="height:90px"></div>
      <!--购物袋列表结束-->
      <!--底部-->
       <div class="base" v-show="ffd">
        <div>
        <input type="checkbox" v-model="allcb" @change="selectAll">全选
        </div>
        <div @click="empty">
          <p>清空</p>
        </div>
        <div @click="delm">
          <p>删除选中</p>
        </div>
        <div>
          <p>总计:￥ {{$store.getters.getCount}}</p>
        </div>
        <div class="base4">
          <p>结算</p>
        </div>
      </div>
      <!--底部结束-->
    </div>
</template>
<script>
export default {
  data(){
    return{
      list:[{pic:""}],
      ffd:false,
      allcb:false,
      cont:0,
    }
  },
    created(){
      this.loadMore();
    },
    methods:{
      empty(){
        if(this.list.length==0){
          this.$messagebox("消息","当前购物车为空");
          return;
        }
        var str="";
        for(var item of this.list){
          str+=item.id+","
        }
        str=str.substring(0,str.length-1)
        var obj={id:str};
        this.$messagebox.confirm("是否清空购物车?").then(res=>{
          this.axios.get("delm",{params:obj}).then(res=>{
             this.loadMore();
             this.$toast("购物车以清空");
          })
        }).catch(err=>{})
      },
      delm(){
        if(this.list.length==0){
          this.$messagebox("消息","当前购物车为空");
          return;
        }
        var str="";
        for(var item of this.list){
           if(item.cb){
             str+=item.id+","
           }
        }
        if(str.length==0){
          this.$messagebox("消息","请选择要删除的商品");
          return;
        }
        str=str.substring(0,str.length-1)
        var obj={id:str};
        this.$messagebox.confirm("是否要删除已选中的商品?").then(res=>{
          this.axios.get("delm",{params:obj}).then(res=>{
             this.loadMore();
             this.$toast("删除成功");
          })
        }).catch(err=>{})
      },
        selectAll(){
          for(var item of this.list){
            item.cb=this.allcb;
          }
        },
        changeItem(){
          var sum=0;
          for(var item of this.list){
            if(item.cb)sum++;
           }
          if(this.list.length==sum){
            this.allcb=true;
          }else{
            this.allcb=false;
          }
        },
        back(){
            this.$router.go(-1)
        },
        del(id){
          console.log(id);
          //1.显示交互对话框
          this.$messagebox.confirm("是否删除选中商品?").then(res=>{
          //2.如果用户选确认
          //3.创建变量url 保存中间人删除程序的值 /del
          var url="del";
          //4.创建变量obj 保存id
          var obj={id};
          //5.发送ajax请求
          this.axios.get(url,{params:obj}).then(res=>{
              //6.获取返回结果 提示重新加载数据【刷新】
              if(res.data.code==1){
                this.$toast("删除成功");
                this.loadMore();
              }
          })
          }).catch(err=>{
            //用户点击取消
          })
        },
        loadMore(){
          this.axios.get("cart").then(res=>{
        if(res.data.code==-2){
           this.$toast("请登录");
           this.$router.push("/user");
        }else{
          console.log(res.data.data);
          //this.list=res.data.data;
          //获取全局数据购物车
          var rows=res.data.data;
          this.$store.commit("addmList",rows);
          this.cont=0
          for(var item of rows){
            item.cb=false;
          this.cont+=parseInt(item.price*item.count)
          }
         //获取全局总价
          this.$store.commit("addmCount",this.cont);
          this.list=rows;
             //全局数据购物车数量
          this.$store.commit("addmCart",this.list.length);
            if(this.list.length>0){
             this.ffd=true;
           }else{
             this.ffd=false;
           }
        }
      })
        }, 
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
  width:20%;
  display: flex;
  margin-left:5px;
  justify-content:space-between;
}
.right-head2{
  width:10%;
}
/*顶部结束 */
/*购物袋列表 */
.cartItem{
  display:flex;
  width: 100%;
  justify-content:space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.cartItem1{
  width:5%;
}
.cartItem2{
  width: 20%;
}
.cartItem3{
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cartItem4{
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cartItem5{
  width: 10%;
}
/*购物袋列表结束 */
/*底部 */
.base{
  display:flex;
  height: 50px;
  width: 100%;
  justify-content:space-around;
  align-items: center;
  position: fixed;
  top:617px; left:0px;
  background:rgba(255 255 255);
}
.base4{
  background: rgba(255 228 225);
  border-radius: 30%;
}
/*底部结束 */

</style>