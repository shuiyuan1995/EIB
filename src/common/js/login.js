import store from "@store"
import router from '@router/index'
import { Toast } from 'cube-ui'
import {SET_USER_INFO} from "@store/mutation-types";
import {post} from '@api';

// 登陆封装
const login = (data) => {
  if(!data&&!document.cookie.length){
    return false
  }
  if(!data){
    data = getCookie()
  }
  post('/login/login',data).then(json=>{
    let {user_info} = json.data
    store.commit(SET_USER_INFO, user_info)
    if(document.cookie.length <= 0||window.location.pathname=='/login'){
      setCookie(data.name, data.password, 1)
      Toast.$create({
        type: 'correct',
        txt: '登录成功',
        time: 1000,
      }).show()
      router.push('/')
    }
  })
}

//设置cookie
const setCookie = (name,pass,time) => {
  // 获取当前时间
  let exdate = new Date();
  //保存的天数
  exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * time);
  //字符串拼接cookie
  window.document.cookie = "userName" + "=" + name + ";path=/;expires=" + exdate.toGMTString();
  window.document.cookie = "password" + "=" + pass + ";path=/;expires=" + exdate.toGMTString();
}

//读取cookie用户数据
function getCookie(){
  // 切割字符串
  let data = {
    name:'',
    password:''
  }
  let arr = document.cookie.split('; ');
  for (var i = 0; i < arr.length; i++) {
    //再次切割
    var arr2 = arr[i].split('=');
    //判断查找相对应的值
    if (arr2[0] == 'userName') {
      data.name = arr2[1]
    } else if (arr2[0] == 'password') {
      data.password = arr2[1]
    }
  }
  return data
}

//清除cookie
const clearCookie = () => {
  store.commit(SET_USER_INFO, '')
  setCookie("", "", -1);
}


export {
  login,
  setCookie,
  clearCookie
};
