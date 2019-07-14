import {
    UPDATE_SELECTED,
    ADD_TODO,
    FETCH_TODOS,
    TOGGLE_MULTIPLE_TODOS,
    TOGGLE_ALL_TODOS,
    CLEAR_LIST,
    DELETE_TODOS,
    SHOW_COMPLETED
}  from './actions';

const initialState = {
    todos: [],
    selectedItems: []
};

const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_SELECTED:
            return {
                ...state,
                selectedItems: action.selectedItems
            }
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
        case SHOW_COMPLETED:
            return {
                ...state,
                todos: action.todos
            };
        case TOGGLE_ALL_TODOS:
            return {
                ...state,
                todos: action.todos
            };
        case TOGGLE_MULTIPLE_TODOS:
            return {
                ...state,
                todos: action.todos
            };
        case DELETE_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case CLEAR_LIST:
            return {
                ...state,
                todos: action.todos
            }
        default: return {...state};

    }
};

export default todosReducer;