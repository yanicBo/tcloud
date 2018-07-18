// 销售平台
import { req } from '../../../utils';
import { path } from '../../../configs';

export const getTrademark = (values={}) => {
    var result = [];
    values.pageNumber = 1;
    values.pageData = 999;
    return req.http(path.mock + '23/irp/api/trademark/list', values).then(data => {
        result = data.data;
        return result
    })
}
