import { getCookie } from "./cookie.js";

/**
 * 获取登录用户ticket
 *
 */
export const ticket = () => {
    let session = '';
    session = getCookie('login_ticket');
    return session
}

/**
 * 给响应的数据加上key
 * @param <Number> obj 响应的对象
 */
export const addKey = (obj) => {
    for(var key in obj){
        obj[key].key = parseInt(key)+1;
    }
    return obj
}
