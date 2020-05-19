import qs from 'qs';
import { S_IFBLK } from 'constants';
/*
 * 根据环境变量区分接口的默认抵制process.env.NODE_ENV
*/
let baseURL = '';
switch(process.env.NODE_ENV){
    case "production":
        baseURL = "http://127.0.0.1:80";
        break;
    case "test":
        baseURL = "http://127.0.0.1:3000";
        break;
    default:
        baseURL = "http://127.0.0.1:8080";
        break;
}

export default function request(url,options={}){
    url = baseURL + url;
    !options.method ? options.method = "GET" : null;
    if(options.hasOwnProperty('param')){
        if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.method)){
            const ask = url.include('?')?'&':'?';
            url += `${ask}${qs.stringify(params)}`;
        }
        delete options.params;
    }
}

/** 
 * 合并配置项
 * 
*/
options = Object.assign({
    credentials:'include',//允许携带跨域资源凭证
    headers:{}
},options)

/**
 * token校验
*/
const token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);

/**
 * post请求处理
*/
if(/^(POST|PUT)$/i.test(options.method)){
    !options.type ? options.type = 'urlencode'
}
options.headers.Accept = 'application/json'
// export default fetch;