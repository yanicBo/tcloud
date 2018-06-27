import { req } from '../../../../utils';
import { page } from '../../../../configs';
import { paginationAction } from '../../../../reduxs/pagination';
require('../../mock/list');


/* 报关单列表 */
export const customs_list = 'customs_list';
export const customs_list_action = value => ({
    type: customs_list,
    payload: value
})
export const customs_list_fetch = ({ name, value }) => (dispatch) => {
    return req.http('customs/list', value).then((data) => {
        dispatch(customs_list_action({ [name]: data.data, }));
        dispatch(paginationAction({
            current: value.pageNumber || page.defaultCurrent,
            total: data.total,
            pageSize: value.pageData || page.defaultPageSize
        }))
    });
}



const actions = {
    customs_list_fetch
}

export default actions