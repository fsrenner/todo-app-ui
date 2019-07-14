import Axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const CLEAR_LIST = 'CLEAR_LIST';
export const MARK_MULTIPLE = 'MARK_MULTIPLE';
export const DELETE_MULTIPLE = 'DELETE_MULTIPLE';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

export const fetchTodosForState = (todos) => {
  return {
      type: FETCH_TODOS,
      todos
  }
};

export const addTodoToState = (todos) => {
    return {
        type: ADD_TODO,
        todos
    }
};

export const fetchTodos = () => {
    const url = 'http://localhost:3000/todos';
    return dispatch => {
        return Axios.get(url)
            .then(response => {
                const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                dispatch(fetchTodosForState(results));
            });
    }

};

export const addTodo = (todo) => {
    const url = 'http://localhost:3000/todo';
    return dispatch => {
        return Axios.post(url, todo)
            .then(response => {
                const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                dispatch(addTodoToState(results));
            });
    }

};

