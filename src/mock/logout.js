const Mock = require('mockjs');

// 退出模拟接口
Mock.mock('/api/user/logout', {
    "msg": "操作成功",
    "state": "000001",
});