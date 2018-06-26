/**
 * 时间戳转格式化时间
 *
 * @param <Number> params 13位时间戳
 * @return <String> type "yyyy/mm/dd"，"yyyy/mm/dd hh:MM:ss"，"yyyy-mm-dd"，"yyyy-mm-dd hh:MM:ss"
 */
export const timestampFromat = (params, type) => {
    if (params == 0 || params == undefined) {
        return '无';
    }
    const date = new Date(params);
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    mm = mm < 10 ? ('0' + mm) : mm;
    let dd = date.getDate();
    dd = dd < 10 ? ('0' + dd) : dd;
    let hh = date.getHours();
    hh = hh < 10 ? ('0' + hh) : hh;
    let MM = date.getMinutes();
    MM = MM < 10 ? ('0' + MM) : MM;
    let ss = date.getSeconds();
    ss = ss < 10 ? ('0' + ss) : ss;
    switch(type)
    {
        case 'yyyy/mm/dd':
            return yyyy + '/' + mm + '/' + dd;
            break;
        case 'yyyy-mm-dd':
            return yyyy + '-' + mm + '-' + dd;
            break;
        case 'yyyy/mm/dd hh:MM:ss':
            return yyyy + '/' + mm + '/' + dd + ' ' + hh + ':' + MM + ':' + ss;
            break;
        case 'yyyy-mm-dd hh:MM:ss':
            return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss;
            break;
        case 'hh:MM:ss':
            return hh + ':' + MM + ':' + ss;
            break;
        default:
            return '请输入正确的type类型';
    }
}

/**
 * 时间转时间戳
 *
 * @param <Number> moment 时间
 */
export const getTimeStamp = (moment) => {
    var time = timestampFromat(moment, 'yyyy-mm-dd hh:MM:ss')
    var date = new Date(time);
    var timeStamp = date.getTime();
    return timeStamp;
}