import { combineReducers } from 'redux';
import { list } from '../actions';
import { paginationReducer } from '../../../../../reduxs/pagination';

// 列表
const list_reducer = (
    state = {
        data: [],
        loading: true,
    }, action) => {
    switch (action.type) {
        case list:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    list_reducer,
    paginationReducer
});

export default rootReducer
