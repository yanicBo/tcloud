const Mock = require('mockjs');

// 申报主体
Mock.mock('/api/customs/declare/list', {
    "data": [
        {
            "id": 0,
            "name": "全部",
        },
        {
            "id": 1,
            "name": "科技股份",
            "title": "深圳市有棵树科技股份有限公司"
        }, {
            "id": 2,
            "name": "京邦户外",
            "title": "深圳市有棵树京邦户外有限公司"
        }
    ],
    "msg": "操作成功",
    "state": "000001"
});