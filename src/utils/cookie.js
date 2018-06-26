
/**
 * 设置cookie
 * @param <String> name cookie-key
 * @param <String> value cookie-value
 * @param <Number> days 浏览器存储的天数,-1为删除
 * */
export const setCookie = (name, value, days) => {
    var exp = new Date();
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};

/**
 * 获取cookie
 * @param <String> name cookie-key
 * */
export const getCookie = (name) => {
    if (document.cookie.length > 0) {
        var index = document.cookie.indexOf(name + "=");
        if (index != -1) {
            index = index + name.length + 1;
            var end = document.cookie.indexOf(";", index);
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(index, end))
        }
        return "";
    }
    return "";
};
