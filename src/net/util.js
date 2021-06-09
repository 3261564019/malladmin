import axios from "axios";

export function adminlogin(username,password){
    console.log(username,password);
    axios({
        url:"http://192.168.66.194/login",
        method:"get",
        params:{
            username,
            password
        }
    })

}