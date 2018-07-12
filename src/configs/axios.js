// 后端服务路径配置
export const path = {
    urc: '/urc/motan/service/api/IUrcService/', // 用户中心
    customs: '/customs/api/',                   // 报关管理
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
     


