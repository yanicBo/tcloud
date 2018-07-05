const Mock = require('mockjs');

// 登录模拟接口
Mock.mock('/api/newp/detail', {
    "msg": "操作成功",
    "state": "000001"
});