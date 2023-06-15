import api from './request'
// ipc接口数据
export function ipc() {
    return api({
        url: '/icp/index',
        method: 'GET',
    })
}
// 合作伙伴+818子业务接口数据
export function partner(params) {
    return api({
        url: '/udc/lists',
        method: 'GET',
        params: params
    })
}