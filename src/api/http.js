import router from '@router/index'
import axios from "axios";
import qs from "qs";
import store from "@store";
import { Toast } from 'cube-ui'
import {SET_TOKEN} from "@store/mutation-types";

// 请求配置参数
const http = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://www.eosfinance.com/api"
      : "http://www.eosfinance.com/api", // 基础路径
  timeout: 30000, // 请求延时
});
http.defaults.withCredentials = true;

// // 请求拦截
http.interceptors.request.use(config => {
  // 参数解析
  config.method === "post"
    ? (config.data = qs.stringify({ ...config.data }))
    : (config.params = { ...config.params });
  // 数据类型
  config.headers["Accept"] = "application/json";
  // token
  if(store.state.access_token){
    // config.headers["Authorization"] =
    // process.env.NODE_ENV !== "production"
    //   ? `Bearer ${store.state.access_token}`
    //   : `Bearer ${store.state.access_token}`;
    config.headers.token = store.state.access_token;
  }
  return config;
});

// 请求返回拦截
http.interceptors.response.use(response => {
  const { data } = response;
  if (response.status === 200 && data.code === 200) {
    if(data.data.token){
      store.commit(SET_TOKEN, data.data.token)
    }
    return Promise.resolve(data);
  } else {
    if(data.code === 421){
      Toast.$create({
        txt: "登录过期,请重新登录",
        time: 2000,
        type:'txt'
      }).show()
      router.push('/login')
    }
    return Promise.reject(data);
  }
});

/**
 * post请求
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    http
      .post(url, data)
      .then(json => {
        resolve(json);
      })
      .catch(err => reject(err));
  });
}

/**
 * get请求
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns
 */
export function get(url, data = {}) {
  return new Promise((resolve, reject) => {
    http
      .get(url, {params:data})
      .then(json => {
        resolve(json);
      })
      .catch(err => reject(err));
  });
}