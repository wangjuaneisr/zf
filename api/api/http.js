import axios from 'axios';
import qs from 'qs';
/*
 * 根据环境变量区分接口的默认抵制process.env.NODE_ENV
*/
switch(process.env.NODE_ENV){
    case "production":
        axios.defaults.baseURL = "http://127.0.0.1:80";
        break;
    case "test":
        axios.defaults.baseURL = "http://127.0.0.1:3000";
        break;
    default:
        axios.defaults.baseURL = "http://127.0.0.1:8080";
        break;
}

/*
 * 设置超时时间和跨域是否允许携带凭证
*/
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

/** 
 * 设置请求传递数据的格式 
 * x-www-form-urlencode
*/
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode';
axios.defaults.transformRequest = data => qs.stringify(data);

/**
 * 设置请求拦截器
 * 客户端 - > 【请求拦截器】 - > 服务器:
 * TOKEN校验(JWT) ： 接受服务器返回的token，存储到vuex/本地存储，
 * 每次向服务器发请求，就把token带上
*/
axios.interceptors.request.use(config=>{
    //携带上token
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);

    return config;
}),error=>{
    return Promise.reject(error);
};

/**
 * 设置响应拦截器
 * 服务器发送信息 - > 【拦截的统一处理】 - > 客户端获取
 * TOKEN校验(JWT) ： 接受服务器返回的token，存储到vuex/本地存储，
 * 每次向服务器发请求，就把token带上
*/
axios.interceptors.response.use(response=>{
    return response.data;
},error=>{

    let {
        response
    } = error;
    if(response){
        //服务器有结果 但是异常
        switch(response.status) {
            case 401:   //权限
                break;
            case 403: //服务器拒绝执行 token过期
                break;
            case 404://找不到页面
                break;
        }
    }else{
        //服务器奔溃

        if(!window.navigator.onLine){//客户端断网
            //可跳转到断网页面
            return ;
        }
    }
    return Promise.reject(error);
})
export default axios;