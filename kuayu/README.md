### 同源策略
协议 域名 端口 同域

### 为什么浏览器不支持跨域：安全策略
cookie LocalStorage
DOM元素也有同源策略 iframe 
ajax 也不支持跨域

#### 跨域原因1 ： 前后端不属于同一个服务器

### 实现跨域
- jsonp：
只支持get请求 不支持post put delete
不安全 XSS攻击 不采用

- cors:


- postMessage
- document.domain
- window.name
- location.hash
- http-proxy
- nginx
- websocket
