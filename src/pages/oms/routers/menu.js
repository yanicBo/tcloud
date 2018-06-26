export const menu = [
    {
        "name": "平台订单",
        "router": "oms/platform",
        "icon": "global",
        "id": "5",
        "sub": [
            {
                "name": "速卖通订单",
                "router": "oms/platform/smt",
                "id": "6"
            },
            {
                "name": "订单导入",
                "router": "oms/platform/export",
                "id": "7"
            }
        ]
    },
    {
        "name": "订单管理",
        "router": "oms/list",
        "icon": "profile",
        "id": "8",
        "sub": [
            {
                "name": "全部订单",
                "router": "oms/list/smt",
                "id": "9"
            },
            {
                "name": "异常订单",
                "router": "oms/list/abnormal",
                "id": "10"
            }
        ]
    },
    {
        "name": "分仓订单",
        "router": "oms/warehouse",
        "icon": "api",
        "id": "11",
        "sub": [
            {
                "name": "分仓订单",
                "router": "oms/warehouse/list",
                "id": "12"
            },
            {
                "name": "负利润审核",
                "router": "oms/warehouse/profit",
                "id": "13"
            }
        ]
    },
    {
        "name": "订单配置",
        "router": "oms/setting",
        "icon": "setting",
        "id": "14",
        "sub": [
            {
                "name": "订单转换",
                "router": "oms/setting/conversion",
                "id": "15"
            },
            {
                "name": "渠道标记",
                "router": "oms/setting/channel",
                "id": "16"
            },
            {
                "name": "指定仓发货",
                "router": "oms/setting/deliver",
                "id": "17"
            },
            {
                "name": "收货人信息拦截",
                "router": "oms/setting/collect",
                "id": "18"
            }
        ]
    }
]
