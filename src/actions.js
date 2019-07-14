import Axios from 'axios';

export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_MULTIPLE_TODOS = 'TOGGLE_MULTIPLE_TODOS';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';

export const DELETE_TODOS = 'DELETE_TODOS';
export const CLEAR_LIST = 'CLEAR_LIST';

export const SHOW_COMPLETED = 'SHOW_COMPLETED';



export const updateSelected = (selectedItems) => {
    return {
        type: UPDATE_SELECTED,
        selectedItems
    };
};

export const fetchTodosForState = (todos) => {
  return {
      type: FETCH_TODOS,
      todos
  };
};

export const addTodoToState = (todos) => {
    return {
        type: ADD_TODO,
        todos
    };
};

export const showCompletedFromState = (todos) => {
    return {
        type: SHOW_COMPLETED,
        todos
    };
};

export const toggleTodosForState = (todos) => {
    return {
        type: TOGGLE_MULTIPLE_TODOS,
        todos
    };
};

export const toggleAllTodosForState = (todos) => {
  return {
      type: TOGGLE_ALL_TODOS,
      todos
  }
};

export const deleteTodosFromState = (todos) => {
    return {
        type: DELETE_TODOS,
        todos
    }
};

export const clearListFromState = (todos) => {
    return {
        type: CLEAR_LIST,
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
    };

};

export const showCompleted = (isCompleted) => {
    const url = 'http://localhost:3000/todos';
    return dispatch => {
        return Axios.get(url)
            .then(response => {
                const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                const filteredResults = results.filter(result => result.completed === isCompleted);
                dispatch(showCompletedFromState(filteredResults));
            });
    };
}

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

export const toggleTodos = (selected, completed) => {
    return dispatch => {
            const url = `http://localhost:3000/todo/${selected}/${completed}`;
            return Axios.put(url)
                .then (response => {
                    const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                    dispatch(toggleTodosForState(results));
                });
    }
}

export const toggleAllTodos = (toggle) => {
    const url = `http://localhost:3000/todos/all/${toggle}`;
    return dispatch => {
        return Axios.put(url)
            .then (response => {
                const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                dispatch(toggleAllTodosForState(results));
            });
    };
};

export const deleteTodos = (selected) => {
    const url = `http://localhost:3000/todo/${selected}`;
    console.log(url);
    return dispatch => {
        return Axios.delete(url)
            .then(response => {
                const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                dispatch(deleteTodosFromState(results));
            });
    };
};

export const clearList = () => {
    const url = `http://localhost:3000/todos/all`;
    return dispatch => {
        return Axios.delete(url)
            .then(response => {
                const results = (!Array.isArray(response.data)) ? [response.data] : response.data;
                dispatch(clearListFromState(results));
            });
    };
};
