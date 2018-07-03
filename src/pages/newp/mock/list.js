const Mock = require('mockjs');

// 登录模拟接口
Mock.mock('/api/customs/list', {
    "data": {
        "data|1-20": [
            {
                "address": "深圳市龙岗区华南城1号馆6楼",
                "country": "中国",
                "createInfo": {
                    "createTime": 1530496733227,
                    "creator": "杨波"
                },
                "depot": {
                    "code": "TSF12345",
                    "name": "华南一号",
                    "nature": "国内仓",
                    "type": "自营仓"
                },
                "director": "杨波",
                "id": 12323,
                "sNum|+1": 1,
                "state": 1
            }
        ],
        "total": 123
    },
    "msg": "操作成功",
    "state": "000001"
});