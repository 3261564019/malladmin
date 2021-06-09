<template>
<div class="root">
  <div class="content">


    <ul class="main">
      <li> <label for="username"><img src="../assets/img/account.png" alt="" class="account"></label>
        <input v-model="username" type="text"  maxlength="10" placeholder="管理员账号" id="username" class="inp"></li>
      <li> <label for="num"> <img src="../assets/img/password.png" alt="" class="password"></label>
        <input v-model="password" type="password" maxlength="10" placeholder="管理员密码" id="num" class="inp"></li>
    </ul>
    <div class="btn">
      <div class="login" @click="loginClick">登录</div>
    </div>

  </div>
</div>
</template>

<script>
import {adminlogin} from "@/net/util"
import { Toast } from 'vant';
export default {
name: "login",
  created (){
  },
  data (){
      return{
          username:"",
          password:""
        }
    },
  methods:{
    loginClick (){

      // Toast.success('成功文案');
      // this.$router.push('/admin')
      adminlogin(this.username,this.password).then((resp)=>{
        if(resp.data.msg==="账号密码正确"){
          this.$router.push('/admin');
        }else{
          Toast("账号密码错误");
        }
      });
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  overflow: hidden;
}
.content {
  position: relative;
  margin: 100px auto;
  padding: 20px;
  height: 300px;
  width: 300px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
}
.main li img{
  position: absolute;
  width: 20px;
  height: 20px;
}
.main li .password{
  left: 45px;
  top: 158px;


}
.main li .account{
  left: 45px;
  top: 86px;

}
.main {
  height: 70px;
  width: 300px;
  margin-top: 50px;
  color: #fff;
}
li {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #4685ff;
}
li label {
display: inline-block;
  width: 55px;
  text-align: right;
}
li .inp {
  width: 200px;
  height: 50px;
  border: 0;
  outline: none;
  font-family: "Microsoft YaHei UI";
  font-size: 14px;
  margin-left: 10px;
}
.btn {
  height: 40px;
  margin: 100px auto 0;
}
.login {
  float: left;
  width: 100%;
  height: 40px;
  background-color: #4685ff;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;

}
a {
  float: right;
  font-size: 14px;
  text-decoration: none;
  color: #4685ff;
}

</style>