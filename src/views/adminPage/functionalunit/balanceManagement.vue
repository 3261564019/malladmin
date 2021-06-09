<template>
  <div class="root">
    <div class="content">
      <div class="top">
        <span>
          <img src="../../../assets/img/admin/flush.png" alt="">
        </span>
        <input type="text">
        <select name="" id="select">
          <option value="">根据账号</option>
          <option>根据昵称</option>
        </select>
        <span>查找用户</span>
      </div>


      <table class="bottom"   cellspacing="0">
        <thead align="left">
          <tr>
            <th width="30%">昵称</th>
            <th width="30%">账号</th>
            <th width="40%">余额</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item,index) of res" :key="index"
          >
            <td :class="{vip:item.identity===1}">
              {{item.username}}
              <img v-if="item.identity===1" src="../../../assets/img/admin/VIP.png" alt="">
            </td>
            <td>{{item.account}}</td>
            <td>
              <input class="price" type="number" @blur="onblur(index,item.id,item.balance)"  disabled v-model="item.balance">
              <span>
                <img  src="../../../assets/img/admin/updata_balance.png" @click="update_balance(index)" alt="">
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import login from "@/views/login";

export default {
name: "balanceManagement",
  data:function () {
    return {
      res:[
        {
          id:1,
          username:"陈江海",
          account:"326156",
          identity:0,
          balance:60,

        }, {
          id:2,
          username:"Jack",
          account:"656506",
          identity:1,
          balance:80,
        }
      ]
    }
  },
  methods:{
    update_balance(index){
      //此时修改对应的输入框为可用

      document.querySelector("tbody").querySelectorAll(".price")[index].disabled=false;
      document.querySelector("tbody").querySelectorAll(".price")[index].focus();
    },
    onblur(index,id,new_balance){
      console.log("失去焦点");
      //状态显示禁用
      document.querySelector("tbody").querySelectorAll(".price")[index].disabled=true;
      //向后端更新余额
      console.log(id,new_balance)

    }
  }
}
</script>

<style scoped>
.root{
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  background-color: #F1F4F6;
}
.content{
  height: 100%;
  background-color: white;
  border-radius: 5px;
}
.top>span:first-child{
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color:#2C3E50;
  border-radius: 5px;
}
.top>span:first-child>img{
  width: 15px;
  position: relative;
  left: 23px;
  top:6px;
}
.top>span:last-child{
  display: inline-block;
  width: 200px;
  height: 30px;
  background-color: #205fd3;
  color: white;
  line-height: 30px;
  text-align: center;
  vertical-align: bottom;
  font-size: 12px;
  margin-left: 10px;
  border-radius: 5px;
}
.top>input{
  height: 25px;
  margin: 0 10px;
  border-radius: 0px;
  border:1px solid black;
  outline: none;
  vertical-align: middle;
  position: relative;
  top:3px;
}
.top>#select{
  height: 30px;

  outline:none;
  vertical-align: bottom;
  font-size: 12px;
  padding: 3px;
}
.root>.content>.bottom{
  width: 100%;
  height: 30px;
  margin-top: 5px;
  list-style: none;
  padding-left: 20px;
  padding-right: 20px;
}
.root>.content>.bottom>li>div{
  background-color: #42b983;
}
.root>.content>.bottom>li>div>p{
  display: inline-block;
  width: 30px;
  margin: 0 10px;
  background-color: pink;
}
.bottom>thead>tr>th{
  line-height: 30px;
  padding-left: 20px;
  color: #2C3E50;
  border: 1px solid #cccccc;
}
.bottom>thead>tr>th:nth-child(1){
  border-right:none;
}
.bottom>thead>tr>th:nth-child(2){
  border-right:none;
}

.bottom>tbody>tr>td{
  line-height: 25px;
  padding-left: 20px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
}
.bottom>tbody>tr>td:first-child>img{
  width: 20px;
}
.vip{
  color: red;
}

.bottom>tbody>tr>td:last-child>input{
  line-height: 25px;
  font-size: 12px;
  border:none;
  outline: none;
  border-bottom: 2px solid #205FD3;
}
.bottom>tbody>tr>td>span>img{
  height: 24px;
  vertical-align: middle;
  margin-left: 10px;
}
</style>