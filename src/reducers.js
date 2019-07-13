import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_ALL_TODOS,
    CLEAR_LIST,
    MARK_MULTIPLE,
    DELETE_MULTIPLE,
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}  from './actions';

const intialState = [];

const rootReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        default: return [...state];

    }
};

export default rootReducer;