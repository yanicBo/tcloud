const Mock = require('mockjs');

// 登录模拟接口
Mock.mock('/api/customs/list', {
    "data|10-20": [
        {
            "auditStatus": "待核对",
            "auditTime": 1524551099000,
            "audits": "吴耀",
            "campany": {
                "fullName": "深圳市有棵树科技股份有限公司",
                "shortName": "科技股份"
            },
            "contractNumber": "SC-GB-FBA-20180408-1",
            "createOrderTime": 1524551099000,
            "createTime": 1524551099000,
            "creator": "欧阳雪菁",
            "customsNumber": "123453265747547",
            "destCountry": "测试内容8sn7",
            "id": 1223,
            "logisticsState": "代发货",
            "planNumber|1-3": [
                "180402222734933"
            ],
            "singles": "汪雪菁",
            "storage": "FBA-GB",
            "sum": 1221
        }
    ],
    "msg": "操作成功",
    "state": "000001",
    "total": 34
});