import { getCookie } from "./cookie.js";

/**
 * 获取登录用户session
 * @param <Number> 获取cookie类型， ticket, username, funcVersion
 */
export const session = (type) => {
    let session = '';
    if(type === 'ticket'){
        session = getCookie('ticket');
    }else if(type === 'username'){
        session = getCookie('username');
    }else if(type === 'funcVersion'){
        session = getCookie('funcVersion');
    }else{
        session = null;
    }
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
