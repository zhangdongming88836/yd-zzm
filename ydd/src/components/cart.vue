<template>
    <div>
      <!--顶部-->
      <div class="page-head">
       <h3 style="color:#808080;">购物袋</h3>
       </div>
     <!--顶部-->
       <div style="height:50px"></div>
      <!--购物袋列表-->
        <div class="cartItem" v-for="(item, i) of list" :key="i">
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
        <div style="height:150px"></div>
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
          <p>总计:￥ {{mont}}</p>
        </div>
        <div class="base4">
          <p>结算</p>
        </div>
        <p class="foot2-1">{{list.length}}</p>
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
      mont:0,
    }
  },
    created(){
      this.loadMore();
    },
    methods:{
      empty(){
        //功能：清空购物车
        //1.判断商品数量如果为0 确认框没有可删除的商品 停止执行
        if(this.list.length==0){
          this.$messagebox("消息","当前购物车没有可清空的商品");
          return;
        }
        //2.创建变量str  目的是拼接字符串
        var str="";
        //3.创建循环遍历数组 获取id 拼接字符串
        for(var item of this.list){
          str+=item.id+","
        }
        //4.截取字符串
        str=str.substring(0,str.length-1);
          var obj={id:str};
        //5.显示确认交互框确认就发送ajax请求删除商品取消就什么也不做
        this.$messagebox.confirm("是否清空购物车?").then(res=>{
          this.axios.get("delm",{params:obj}).then(res=>{
             this.loadMore();
             this.$toast("购物车已清空");
        })
        }).catch(err=>{})
      },
      delm(){
        //功能：删除选中商品
        //1.判断商品数量如果数量为0 this.list
        if(this.list.length==0){
          //2.显示确认框 当前没有可删除商品
          this.$messagebox("消息","当前没有可删除的商品");
          //3.返回
          return;
        }
        //4.创建变量str 目的拼接字符串 "2,3,4"
        var str="";
        //5.创建循环遍历数组 this.list
        for(var item of this.list){
          if(item.cb){
            str+=item.id+","
          }
       }
        //6.判断当前商品是否是选中状态 cb==true 获取id拼接字符串str+“，”
        //7.判断如用户没有选中商品str.length==0
        if(str.length==0){
          this.$messagebox("消息","请选择需要删除的商品");
          return;
        }
        //8.显示确认框 请选择要删除的商品
        //8.1截取字符串 "2,3,"="2,3"
         str= str.substring(0,str.length-1);
        //9.显示确认交互框 是否删除指定数据
        this.$messagebox.confirm("是否删除指定商品?").then(res=>{
            //用户确定按钮
            var url="delm";
            var obj={id:str};
            this.axios.get(url,{params:obj}).then(res=>{
                this.loadMore();
                this.$toast("删除成功");
            })
        }).catch(err=>{})//取消按钮
        //10创建变量url obj
        //11.发送ajax请求删除指定数据
      
      },
      changeItem(){
         //功能：商品状态修改操作
         var sum=0;
         for(var item of this.list ){
           if(item.cb)sum++;
         }
         if(this.list.length==sum){
            this.allcb=true;
         }else{
           this.allcb=false;
         }    
     
      },
    selectAll(){
      //功能：全选按钮状态修改操作
      var cb=this.allcb;
      for(var item of this.list){
        item.cb=cb;
      }
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
           //this.list=res.data.data;
           var rows=res.data.data;
            this.mont=0
            for(var item of rows ){
              item.cb=false;
              this.mont+=parseInt(item.price);
            }
            console.log(rows);
            this.list=rows;
           if(this.list.length>0){
             this.ffd=true;
           }else{
             this.ffd=false;
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
  z-index:1;
  width: 100%;
  height: 50px;
  align-items:center;
  border-bottom:1px solid #eeeeee;
}
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
  top:560px; left:0px;
  z-index:4;
  background:rgba(255 255 255);
}
.base4{
  width: 10%;
  background: rgba(255 228 225);
  border-radius:25%;
  text-align: center;
}
/*底部结束 */
.foot2-1{
  width: 20px;height: 20px;
  background: rgba(255,182,193);
  color: #fff;
  font-size:1px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  position: absolute;
  top:53px; left:243px;
}

</style>