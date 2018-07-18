// 销售平台
import { req } from '../../../utils';
import { path } from '../../../configs';

export const getCountry = (values={}) => {
    var result = [];
    values.pageNumber = 1;
    values.pageData = 999;
    return req.http(path.oms_manage + 'CommonBasicsDataApi/queryCountrlData', values).then(data => {
        result = data.data;
        return result
    })
}
