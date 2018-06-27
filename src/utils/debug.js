import { config } from '../configs';

// 打印请求的参数和返回数据
export const debug = (key, obj) => {
    if (config.isDebug === true) {
        if (obj) {
            console.group(key + "  -  日志");
            console.log(obj);
            console.groupEnd();
        } else {
            console.info(key + "  -  日志");
        }
    }
}