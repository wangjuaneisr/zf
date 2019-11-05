### 解决http协议无状态 记录客户状态的机制
### cookie原理：保存在B端 客户端
### session原理：保存在S端 服务器
json web token 
1. 用户输入登陆信息
2.服务器去验证信息是否正确 返回一个签名的token（令牌）
3.token存在客户端local storage
4.htpp请求都将这个token添加到请求
5.服务器解码，令牌有效，就接受请求，返回信息
6.token是无状态的