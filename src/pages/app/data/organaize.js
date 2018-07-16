// 申报主体
import {req} from '../../../utils';
import { path } from '../../../configs';

export const organize_data = (values={}) => {
    var result = [];
    return req.http(path.urc+'getAllOrgTree', values).then(data => {
        result = data.data;
        return result
    })
}
