import { req } from '../../../../../utils';
import { page, path } from '../../../../../configs';
import { paginationAction } from '../../../../../reduxs/pagination';


/* 报关单列表 */
export const list = 'list';
export const list_action = value => ({
    type: list,
    payload: value
})
export const list_fetch = ({ name, value }) => (dispatch) => {
    return req.http(path.mock + '23/irp/api/sensitive/list', value).then((data) => {
        dispatch(list_action({ [name]: data.data.data, loading: false }));
        dispatch(paginationAction({
            current: value.pageNumber || page.defaultCurrent,
            total: data.data.total,
            pageSize: value.pageData || page.defaultPageSize
        }))
    });
}



const actions = {
    list_fetch
}

export default actions