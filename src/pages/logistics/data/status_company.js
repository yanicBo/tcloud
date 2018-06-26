// 申报主体
import {req} from '../../../utils'

require('../mock/campany');

export const status_company = (values={}) => {
    var result = [];
    return req.http('customs/declare/list', values).then(data => {
        result = data.data;
        return result
    })
}
