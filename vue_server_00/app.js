//服务器程序
//1.引入模块
const express=require("express");
const mysql=require("mysql");
const session=require("express-session");
const cors =require("cors");
//2.创建连接池
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"zzm",
    port:3306,
    connectionLimit:15
})
//3.创建web服务器
var server=express();
//7.为服务器绑定监听端口
server.listen(4000);
console.log("服务器启动.......");
//4.配置跨域模块
server.use(cors({
    origin:[
        "http://127.0.0.1:8080",
        "http://localhost:8080",
        "*"
        ],
        credentials:true
}))
//来自任何客户端都允许访问
//res.set("Access-Control-Allow-Origin","*"); 
//response.setHeader("Access-Control-Allow-Credentials", "true");
//5.指定静态资源目录 public
server.use(express.static("public"));
//6.配置session对象
server.use(session({
   secret:"128位安全字符串",
   resave:true,
   saveUninitialized:true,
}));
//功能一：用户登录验证
server.get("/user",(req,res)=>{
    //1获取脚手架传递用户名和密码
    var u=req.query.uname;
    var p=req.query.upwd;
    //2创建sql语句并将用户密码加入
    var sql="select id,uname from zzm_login where uname=? and upwd=md5(?)";
    //3执行SQL语句并获取返回结果
    pool.query(sql,[u,p],(err,result)=>{
      if(err)throw err;
      if(result.length==0){
          res.send({code:-1,msg:"用户名或密码有误"});
      }else{
           req.session.uid=result[0].id;
           req.session.uname=result[0].uname;
          res.send({code:1,msg:"登录成功"})
      }  
    });
})
//功能二:显示商品列表
//1.get/index
server.get("/index",(req,res)=>{
//2.接受参数设置页码 一页几行
//var pno=req.query.pno;
//var ps=req.query.pageSize;
//3.为参数设置默认值 1   4
//if(!pno){pno=1}
//if(!ps){ps=4}
//4.创建SQL语句分页查询商品列表
var sql="select lid,title,price,href from zzm_laptop";//var sql="select lid,title,price from zzm_laptop limit ?,?";
//var offset=(pno-1)*ps;
 //ps=parseInt(ps);
//5.执行SQL语句并且将结果发送脚手架
pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
})
})
/*pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"查询成功",data:result})
})
})*/
//功能三:显示商品详情
//1.get/index
server.get("/details",(req,res)=>{
    var tid=req.query.tid;
    
    var sql="SELECT * FROM `zzm_details` where tid=?";
  
    pool.query(sql,[tid],(err,result)=>{
      if(err)throw err; 
        res.send({code:1,msg:"查询成功",data:result})
    })
    })
 //功能四：经商品添加至购物袋
 server.get("/cart1",(req,res)=>{
     //1.获取当前登录用户的凭证
     var uid=req.session.uid
     //2.如果没有登录凭证 输出请登录
     if(!uid){
         res.send({code:-2,msg:"请登录"});
         return;
     }
     //3.获取脚手架传递数据 gid lname price
     var gid=req.query.gid;
     var lname=req.query.lname;
     var price=req.query.price;
     var pic=req.query.pic;
     var count=req.query.count;
     //4.创建sql语句 查询当前用户是否购买过此商品
     var sql="select id from zzm_cart where uid=? and gid=?";
     //5.执行SQL语句
     pool.query(sql,[uid,gid],(err,result)=>{
     //6.在回调函数（钩子函数）
     if(err)throw err;
     //7.获取查询结果【判断是否购买过此商品】
     if(result.length==0){
     //8.如果没买过此商品 创建 insert sql
     var sql=`insert into zzm_cart values(null,${gid},'${lname}',${price},'${pic}',${count},${uid})`;
     }else{
     //9.如果买过此商品 创建 update sql
     var sql=`update zzm_cart set count=count+${count} where uid=${uid} and gid=${gid}`;
     }
     //10.执行sql
     pool.query(sql,(err,result)=>{
         if(err)throw err;
         res.send({code:1,msg:"添加成功"})
     })
     //11.返回结果给脚手架
    })
 })
//功能5：查询指定用户购物车数据表
server.get("/cart",(req,res)=>{
    //1.获取用户登录的凭证uid
    var uid=req.session.uid;
    //2.没有uid表示此用户没登录 发送请登录信息
    if(!uid){
        res.send({code:-2,msg:"请登录",data:[]});
        return;
    }
    //3.创建SQL语句
    var sql="select id,gid,lname,price,count,pic from zzm_cart where uid=?";
    //4.发送sql语句并且查询结果返回脚手架 
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})
//6:删除购物袋中的一条商品的信息
 server.get("/del",(req,res)=>{
     //1.获取用户登录凭证
     var uid=req.session.uid;
     //2.如果没有登录凭证 请登录
     if(!uid){
         res.send({code:-2,msg:"请登录"});
         return;
     }
     //3.获取脚手架传递数据id
     var id=req.query.id;
     //4.常见sql一句ID删除数据
     var sql="delete from zzm_cart where id=? and uid=?";
     //5.执行sql语句获取返回结果
     pool.query(sql,[id,uid],(err,result)=>{
         if(err)throw err;
         if(result.affectedRows>0){
             res.send({code:1,msg:"删除成功"});
         }else{
             res.send({code:-1,msg:"删除失败"});
         }
     })
     //6.将结果返回脚手架
 })  
 //7:删除用户指定的商品
 server.get("/delm",(req,res)=>{
 //1.接受请求 /delm
 //2.获取用户登录凭证
 var uid=req.session.uid;
 //3.请登录
 if(!uid){
     res.send({code:-2,msg:"请登录"});
     return;
 }
 //4.接受参数 id=“2，3”
 var id=req.query.id;
 //5.创建sql语句执行删除多条记录功能
 var sql=`delete from zzm_cart where id in (${id})`;
 //6.判断是否删除多条记录功能
 pool.query(sql,(err,result)=>{
     if(err) throw err;
     if(result.affectedRows>0){
         res.send({code:1,msg:"删除成功"})
     }else{
         res.send({code:-1,msg:"删除失败"})
     }
 })
 })
//8.功能注册用户密码
server.get("/register",(req,res)=>{
    var u=req.query.uname;
    var p=req.query.upwd;
    var sql="insert into zzm_login values(null,?,md5(?))";
    pool.query(sql,[u,p],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
        }else{
            res.send({code:-1,msg:"注册失败"})
        }
    })
})
//9.功能用户登录凭证
server.get("/mine",(req,res)=>{
     var uname=req.session.uname;
     console.log(uname);
     if(!uname){
         res.send({code:-2,msg:"请登录"});
         return;
     }else{
     res.send({code:1,msg:"成功",data:uname});
     }
})
//10:功能搜索商品
server.get("/search",(req,res)=>{
    var u=req.query.title;
    var sql=`select * from zzm_details where title like '%${u}%'`;
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result});
    })
})