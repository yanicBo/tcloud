export const menu = [
    {
        "name": "平台订单",
        "router": "tcloud/oms/platform",
        "icon": "global",
        "id": "5",
        "sub": [
            {
                "name": "速卖通订单",
                "router": "tcloud/oms/platform/smt",
                "id": "6"
            },
            {
                "name": "订单导入",
                "router": "tcloud/oms/platform/export",
                "id": "7"
            }
        ]
    },
    {
        "name": "订单管理",
        "router": "tcloud/oms/list",
        "icon": "profile",
        "id": "8",
        "sub": [
            {
                "name": "全部订单",
                "router": "tcloud/oms/list/all",
                "id": "9"
            },
            {
                "name": "异常订单",
                "router": "tcloud/oms/list/abnormal",
                "id": "10"
            }
        ]
    },
    {
        "name": "分仓订单",
        "router": "tcloud/oms/warehouse",
        "icon": "api",
        "id": "11",
        "sub": [
            {
                "name": "分仓订单",
                "router": "tcloud/oms/warehouse/list",
                "id": "12"
            },
            {
                "name": "负利润审核",
                "router": "tcloud/oms/warehouse/profit",
                "id": "13"
            }
        ]
    },
    {
        "name": "订单配置",
        "router": "tcloud/oms/setting",
        "icon": "setting",
        "id": "14",
        "sub": [
            {
                "name": "订单转换",
                "router": "tcloud/oms/setting/conversion",
                "id": "15"
            },
            {
                "name": "渠道标记",
                "router": "tcloud/oms/setting/channel",
                "id": "16"
            },
            {
                "name": "指定仓发货",
                "router": "tcloud/oms/setting/deliver",
                "id": "17"
            },
            {
                "name": "收货人信息拦截",
                "router": "tcloud/oms/setting/collect",
                "id": "18"
            }
        ]
    }
]
