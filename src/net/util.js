import axios from "axios";

export function adminlogin(username,password){
    console.log(username,password);
    return axios({
        url:"http://192.168.66.194:8080/login",
        method:"post",
        params:{
            username,
            password
        }
    }).catch((err)=>{
        console.log("管理员登陆失败，错误信息："+err)
    });
}


export function add_merchandise(title,purl,price){
    return axios({
        url:"http://192.168.66.194:8080/login/news",
        method:"post",
        params:{
            title,
            purl,
            price
        }
    }).catch((err)=>{
        console.log("添加商品失败，错误信息："+err)
    });
}