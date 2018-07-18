// 销售平台
import { req } from '../../../utils';
import { path } from '../../../configs';

export const getPlatform = (values={}) => {
    var result = [];
    return req.http(path.oms_manage + 'ICompanyOrderManageApi/getPlatform', values).then(data => {
        result = data.data;
        return result
    })
}
