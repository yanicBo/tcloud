/**
 * 过滤为空的请求参数,以及将格式化的时间转换成时间戳
 *
 * @param <Number> values 请求对象
 */
export const filterRequest = (values) => {
    for (var key in values) {
        if (!values[key] || values[key].length === 0) {
            delete values[key];
        }else{
            if (key.search('Time') > 0) {
                values[key] = values[key].map(item =>{
                    return item.valueOf()
                })
            }
        }  
        if(!values['searchContent']){
            delete values['searchType']
        } 
    }
    return values
}