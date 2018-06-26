import { combineReducers } from 'redux';
import { customs_list } from '../actions';
import { paginationReducer } from '../../../../reduxs/pagination';

// 列表
const customs_list_reducer = (
    state = {
        data: [],
        loading: true,
    }, action) => {
    switch (action.type) {
        case customs_list:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    customs_list_reducer,
    paginationReducer
});

export default rootReducer
