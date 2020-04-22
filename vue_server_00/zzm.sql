set names utf8;
drop database if exists zzm;
create database zzm charset=utf8;
use zzm;
#1:创建zzm_login表
create table zzm_login(
    id int primary key auto_increment,
    uname varchar(50),
    upwd varchar(32)
);
#2:创建商品列表zzm_laptop表
create table  zzm_laptop(
     lid  int primary key auto_increment,
     title varchar(255),
     price  int,
     href varchar(128)
);
#3:创建商品详情zzm_details表
create table  zzm_details(
     tid  int primary key,
     title varchar(255),
     price  int,
     pic  VARCHAR(255)
);
#功能四:创建购物袋表
create table zzm_cart(
     id int primary key auto_increment, #数据编号
     gid INT,   #产品的编号
     lname VARCHAR(255),  #商品名
     price decimal(10,2),
     pic VARCHAR(255),
     count int,    #数量
     uid  int    #谁买的
);
#1:添加zzm_login测试数据
insert into zzm_login values(null,"tom",md5("123"));
insert into zzm_login values(null,"zhang",md5("123456"));
#2:添加商品列表zzm_laptop数据
insert into zzm_laptop values(null,"真珠美学丝滑滋养发膜",138,"details/1");
insert into zzm_laptop values(null,"肌源修护紧致眼霜",298,"details/2");
insert into zzm_laptop values(null,"焕活肌底精华液",298,"details/3");
insert into zzm_laptop values(null,"水润多效保湿面霜",238,"details/4");
insert into zzm_laptop values(null,"玫瑰润泽保湿舒缓面膜",238,"details/5");
insert into zzm_laptop values(null,"樱花珍珠凝霜",238,"details/6");
insert into zzm_laptop values(null,"晶樱美颜粉",198,"details/7");
insert into zzm_laptop values(null,"亮采焕颜洁面扑",138,"details/8");
insert into zzm_laptop values(null,"【B2B关闭】澳洲洁面精华露",238,"details/9");
insert into zzm_laptop values(null,"【B2B关闭】澳洲修护精华液",238,"details/10");
insert into zzm_laptop values(null,"【B2C关闭】多效保湿精华油",238,"details/11");
insert into zzm_laptop values(null,"积雪草保湿喷雾",198,"details/12");
insert into zzm_laptop values(null,"珍珠发酵精华面膜",198,"details/13");
insert into zzm_laptop values(null,"发酵精华金箔面膜",238,"details/14");
insert into zzm_laptop values(null,"花蜜私语护手霜礼盒",148,"details/15");
insert into zzm_laptop values(null,"柔滑细嫩身体磨砂膏",178,"details/16");
insert into zzm_laptop values(null,"甜梦蒸汽眼罩",158,"details/17");
insert into zzm_laptop values(null,"防嗮亮白BB霜",238,"details/18");
insert into zzm_laptop values(null,"精魅自动眉笔",168,"details/19");
insert into zzm_laptop values(null,"丝柔臻素妆前乳 ",188,"details/20");
insert into zzm_laptop values(null,"箐彩随行便携式刷具套组",198,"details/21");
insert into zzm_laptop values(null,"焕活紧致眼霜",238,"details/22");
insert into zzm_laptop values(null,"益生菌固体饮料",178,"details/23");
insert into zzm_laptop values(null,"雪梨花固体饮料",178,"details/24");
insert into zzm_laptop values(null,"茶树花绿茶果味饮料",368,"details/25");
insert into zzm_laptop values(null,"石榴红藜果蔬饮料",288,"details/26");
insert into zzm_laptop values(null,"胶原蛋白果味饮料",258,"details/27");
insert into zzm_laptop values(null,"莓蔬发酵饮料",258,"details/28");
insert into zzm_laptop values(null,"珍珠发酵精华水",208,"details/29");
insert into zzm_laptop values(null,"珍珠发酵精华乳",208,"details/30");
insert into zzm_laptop values(null,"泡泡洗面奶",198,"details/31");
#3:添加商品列表zzm_details数据 

insert into zzm_details values(1,"真珠美学丝滑滋养发膜",138,"image/01.jpg");
insert into zzm_details values(2,"肌源修护紧致眼霜",298,"image/15651665801692785803.png");
insert into zzm_details values(3,"焕活肌底精华液",298,"image/15550689821472832976.jpg");
insert into zzm_details values(4,"水润多效保湿面霜",238,"image/1578637780127749207.jpg");
insert into zzm_details values(5,"玫瑰润泽保湿舒缓面膜",238,"image/15411180311026184492.png");
insert into zzm_details values(6,"樱花珍珠凝霜",238,"image/1541117946399220390.png");
insert into zzm_details values(7,"晶樱美颜粉",198,"image/1541118003510743980.png");
insert into zzm_details values(8,"亮采焕颜洁面扑",138,"image/15415104431149175815.png");
insert into zzm_details values(9,"【B2B关闭】澳洲洁面精华露",238,"image/15411568791775390500.png");
insert into zzm_details values(10,"【B2B关闭】澳洲修护精华液",238,"image/15411567771409460016.png");
insert into zzm_details values(11,"【B2C关闭】多效保湿精华油",238,"image/15415104541662165406.png");
insert into zzm_details values(12,"积雪草保湿喷雾",198,"image/15411179051830899719.png");
insert into zzm_details values(13,"珍珠发酵精华面膜",198,"image/15411179001281516724.png");
insert into zzm_details values(14,"发酵精华金箔面膜",238,"image/15411179901860669418.png");
insert into zzm_details values(15,"花蜜私语护手霜礼盒",148,"image/1545038502908442228.png");
insert into zzm_details values(16,"柔滑细嫩身体磨砂膏",178,"image/15633453561768467389.jpg");
insert into zzm_details values(17,"甜梦蒸汽眼罩",158,"image/");
insert into zzm_details values(18,"防嗮亮白BB霜",238,"image/1541589957264438886.jpg");
insert into zzm_details values(19,"精魅自动眉笔",168,"image/1573795635649726637.jpg");
insert into zzm_details values(20,"丝柔臻素妆前乳 ",188,"image/15693070211200559225.jpg");
insert into zzm_details values(21,"箐彩随行便携式刷具套组",198,"image/15415899872113518510.jpg");
insert into zzm_details values(22,"焕活紧致眼霜",238,"image/");
insert into zzm_details values(23,"益生菌固体饮料",178,"image/");
insert into zzm_details values(24,"雪梨花固体饮料",178,"image/15852868031038197663.jpg");
insert into zzm_details values(25,"茶树花绿茶果味饮料",368,"image/15423645072142557246.png");
insert into zzm_details values(26,"石榴红藜果蔬饮料",288,"image/15410576811917950346.png");
insert into zzm_details values(27,"胶原蛋白果味饮料",258,"image/15410502921739947519.png");
insert into zzm_details values(28,"莓蔬发酵饮料",258,"image/15410576862013265770.png");
insert into zzm_details values(29,"珍珠发酵精华水",208,"image/1565159191557405035.png");
insert into zzm_details values(30,"珍珠发酵精华乳",208,"image/1565159099316436981.png");
insert into zzm_details values(31,"泡泡洗面奶",198,"image/15722485981570234231.jpg");

