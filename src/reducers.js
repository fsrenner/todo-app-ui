import {
    ADD_TODO,
    FETCH_TODOS,
    TOGGLE_TODO,
    REMOVE_TODO,
    TOGGLE_ALL_TODOS,
    CLEAR_LIST,
    MARK_MULTIPLE,
    DELETE_MULTIPLE,
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}  from './actions';

const initialState = {
    todos: []
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case ADD_TODO:
            return {
                ...state,
                todos: action.todos
            };
        default: return {...state};

    }
};

export default todosReducer;