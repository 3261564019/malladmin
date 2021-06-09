<template>
<div class="insert_goods">
  <div class="center">
    <div class="title">
      标题
      <input type="text" v-model="title">
    </div>
    <div>
      图片地址
      <input type="text" v-model="imgurl">
    </div>
    <div class="price">
      价格
      <input type="number" v-model="price">
    </div>
    <div class="add" @click="addto">
      添加
    </div>
  </div>
</div>
</template>

<script>
import {add_merchandise} from "@/net/util";
export default {
  name: "insert_goods",
  data(){
    return {
      title:"",
      imgurl:"",
      price:0
    }
  }
  ,methods:{
    addto(){
      add_merchandise(this.title,this.imgurl,this.price).then(
          (resp)=>{
            console.log(resp);
          }
      );
    }
  }
}
</script>

<style scoped>
@import "../../../assets/css/base.css";
.insert_goods{
  background-color: #F1F4F6;
  height: 100%;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box;
  padding: 10px;
}
  .center{
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
  }
  .add{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    font-size: 14px;
    border-radius: 5px;
    background-color: #205fd3 !important;
  }
  .center>div{
    width: 400px;
    margin: 30px;
    line-height: 40px;
  }
.center>div>input{
  float: right;
  width: 280px;
  height: 30px;
}
.center>div:first-child{
  margin-top: 0px;
}
</style>