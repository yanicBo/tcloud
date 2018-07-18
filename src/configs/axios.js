// 后端服务路径配置
export const path = {
    urc: '/urc/motan/service/api/IUrcService/', // 用户中心
    customs: '/customs/api/',                   // 报关管理
    oms_manage: '/oms/order/manage/motan/',   // oms 订单
    oms_grab: '/oms/order/grab/motan/',           // oms 抓单
    mock: '/mockjsdata/',                   // mockjsdata
}

// 传输类型
export const paramType = {
    // 字符串传输类型
    string: {
        'Content-Type': 'application/json', 
        'paramType': '1'
    },
    // Map结构类型
    map: {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'paramType': '2'
    }
}; 
     


