import axios from 'axios'
const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 3000 ,// 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
})
// 请求相关处理 请求拦截 在请求拦截中可以补充请求相关的配置
// interceptors axios的拦截器对象
api.interceptors.request.use(config => {

    return config // 将配置完成的config对象返回出去 如果不返回 请求讲不会进行
}, err => {
    // 请求发生错误时的相关处理 抛出错误
    Promise.reject(err)
})
api.interceptors.response.use(res => {

    // console.log(res)
    return Promise.resolve(res)
}, err => {
    // 服务器响应发生错误时的处理

    return Promise.reject(err);
})
export default api