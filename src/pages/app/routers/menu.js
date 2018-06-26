export const menu = [
    {
        "name": "平台授权",
        "router": "app/authorization",
        "icon": "contacts",
        "id": "27",
        "sub": [
            {
                "name": "速卖通授权",
                "router": "sys/authorization/smt",
                "id": "28"
            }
        ]
    },
    {
        "name": "用户中心",
        "router": "app/urc",
        "icon": "contacts",
        "id": "29",
        "sub": [
            {
                "name": "组织架构",
                "router": "app/urc/organize",
                "id": "19",
            },
            {
                "name": "角色管理",
                "router": "app/urc/role",
                "id": "20",
            },
            {
                "name": "用户管理",
                "router": "app/urc/user",
                "id": "21",
            }
        ]
    }
];
