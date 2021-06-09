<template>
<div class="root">
  <div class="left">

<!--    头部管理员信息-->
    <div class="top">
      <img src="../../assets/img/admin.png">
      <div class="info">
        <span>Admin</span>
        <span>
          <img src="../../assets/img/circle.png" alt="">
          在线
        </span>
      </div>
    </div>


<!--    功能列表-->
    <ul class="list">
      <li ref="li" v-for="(item,index) in items" @click="liclick(item.url)"
          @mouseout="outli(index)" @mousemove="moveli(index,item.sontitle.length)" :key="index">
        <img :src="item.icon" alt="">
        {{item.titele}}
        <img v-show="item.sontitle.length>0" src="../../assets/img/admin/toright.png" alt="">
        <div v-if="item.sontitle.length>0">
          <p v-for="(son,inner_index) in item.sontitle" @click.stop="path=son.url" :key="inner_index">
            {{son.title}}
          </p>
        </div>
      </li>
    </ul>

  </div>

<!--  右侧具体功能模块-->
  <div class="right">
    <keep-alive>
      <component :is="path">
      </component>
    </keep-alive>
  </div>
</div>
</template>

<script>
import balanceManagement from "@/views/adminPage/functionalunit/balanceManagement";
import goodsManagement from "@/views/adminPage/functionalunit/goodsManagement";
import memberManagement from "@/views/adminPage/functionalunit/memberManagement";
import orderList from "@/views/adminPage/functionalunit/orderList";
import logisticsManagement from "@/views/adminPage/functionalunit/logisticsManagement";
import update_goods from "@/views/adminPage/goods/update_goods";
import insert_goods from "@/views/adminPage/goods/insert_goods";
import goods_list from "@/views/adminPage/goods/goods_list";
export default {
name: "index",
  data(){
    return{
      path:"update_goods",
      // 左边的功能
      items:[
        {
          titele:"会员管理",
          icon:require("../../assets/img/admin/member.png"),
          url:"memberManagement",
          sontitle: []
        },{
          titele:"余额增减",
          icon:require("../../assets/img/admin/balance.png"),
          url:"balanceManagement",
          sontitle: []
        },{
          titele:"订单列表",
          icon:require("../../assets/img/admin/order.png"),
          url:"orderList",
          sontitle: []
        },{
          titele:"物流业务",
          icon:require("../../assets/img/admin/logistic.png"),
          url:"logisticsManagement",
          sontitle: []
        },{
          titele:"商品管理",
          icon:require("../../assets/img/admin/good.png"),
          url:"",
          sontitle:[
            {
              title:"添加商品",
              url:"insert_goods"
            }, {
              title:"更新商品",
              url:"update_goods"
            },{
              title:"商品列表",
              url:"goods_list"
            }
          ]
        }
      ]
    }
  },
  methods:{
  liclick(url){
    if(url){this.path=url}
    console.log(this.path);
  },
    moveli(index,size){
      let list =document.querySelectorAll(".list>li");
      //将向右的箭头旋转到向下
      list[index].getElementsByTagName("img")[1].style.transform="rotate(90deg)";
       //如果有子选项页显示一下
       if(list[index].getElementsByTagName("div").length===1){
         //让子元素的高度动态计算出来
         list[index].getElementsByTagName("div")[0].style.height=(40*size)+"px";
       }
    },
    outli(index){
      let list =document.querySelectorAll(".list>li");
      list[index].getElementsByTagName("img")[1].style.transform="rotate(0deg)";
      //如果有子元素就让子元素隐藏
      if(list[index].getElementsByTagName("div").length===1){
        list[index].getElementsByTagName("div")[0].style.height=0+"px";
      }
    }
  },components:{
    balanceManagement,
    goodsManagement,
    memberManagement,
    orderList,
    logisticsManagement,
    update_goods,
    insert_goods,
    goods_list
  }
}
</script>

<style scoped>
@import "../../assets/css/base.css";
  .root>.left{
    width: 20%;
    height: 100vh;
    background-color: #222D32;
    color: white;
    float: left;
  }
.info{
  display: inline-block;
  padding-left: 20px;
}
.info>span{
  display: block;
}
.info>span:last-child{
  font-size: 10px;
  line-height: 20px;
}
.info>span:last-child>img{
  vertical-align: middle;
  position: relative;
  width: 10px;
  top:-1px;
}
.top{
  padding: 10px;
}
.top>img:first-child{
  width: 40px;
  vertical-align: bottom;
  border-radius: 22px;
  border: 2px solid white;
}
.right{
  width: 80%;
  height: 100vh;
  float: right;
}
.left>ul>li{
  color: #AEC6B9;
  list-style: none;
  line-height: 40px;
  overflow: hidden;
  font-size: 13px;
  padding-left: 20px;
  position: relative;
}

.left>ul>li>img:first-child{
  width:12px;
  height: 12px;
  position: relative;
  right: 5px;
  top:2px;
}
.left>ul>li>img:nth-child(2){
  width:12px;
  float: right;
  position: absolute;
  top:14px;
  right: 5px;
  transition: all 100ms;
}
.left>ul>li>div{
  height: 0;
  transition: height 250ms;
}
</style>