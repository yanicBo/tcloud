import { req } from '../../../../utils';
import { page } from '../../../../configs';
import { paginationAction } from '../../../../reduxs/pagination';


/* 列表 */
export const list = 'list';
export const list_action = value => ({
    type: list,
    payload: value
})
export const list_fetch = ({ name, value }) => (dispatch) => {
    return req.http('customs/list', value).then((data) => {
        dispatch(list_action({ [name]: data.data, }));
        dispatch(paginationAction({
            current: value.pageNumber || page.defaultCurrent,
            total: data.total,
            pageSize: value.pageData || page.defaultPageSize
        }))
    });
}



const actions = {
    list_fetch
}

export default actions