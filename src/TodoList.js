import React from 'react';
import { connect } from 'react-redux';
import {
    showCompleted,
    fetchTodos,
    toggleAllTodos,
    clearList,
    toggleTodos,
    deleteTodos
} from './actions';

class TodoList extends React.Component {

    state = {
        options: []
    };

    onChange = (e) => {
        const { options } = this.state;
        if (e.target.checked) {
            options.push(e.target.name);
        } else {
            const index = options.indexOf(e.target.name);
            options.splice(index, 1);
        }
        this.setState({ options });
        console.log(options);
    };

    render() {
        const {
            todos,
            showCompleted,
            dispatchFetchTodos,
            toggleTodos,
            toggleAllTodos,
            deleteTodos,
            clearList
        } = this.props;
        const {
            options
        } = this.state;
        return (
            <div id="todoLower">

                <form id="todoList">
                    {
                        (todos.length === 0)
                            ? <p >Enter a task to complete</p>
                            : todos.map(todo => (
                            <div key={todo._id} className={(!todo.completed) ? 'checkbox completed' : 'checkbox'}>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="todo-item"
                                        id={todo._id}
                                        name={todo._id}
                                        value={todo._id}
                                        onChange={this.onChange}
                                    />
                                    {todo.id} {todo.item}
                                </label>
                            </div>
                        ))

                    }
                </form>
                <button type="button" id="toggleTodo" onClick={() => toggleTodos(options, true)}>Mark as Done</button>
                <button type="button" id="toggleTodo" onClick={() => toggleTodos(options, false)}>Mark as Not Done</button>
                <button type="button" id="toggleAllTodos" onClick={() => toggleAllTodos(true)}>Mark all as Done</button>
                <button type="button" id="toggleAllTodos" onClick={() => toggleAllTodos(false)}>Mark all as Not Done</button>
                <br/>
                <button type="button" id="showCompleted" onClick={() => showCompleted(true)}>Show Done</button>
                <button type="button" id="showActive" onClick={() => showCompleted(false)}>Show Not Done</button>
                <button type="button" id="showCompleted" onClick={() => dispatchFetchTodos()}>Show All</button>
                <br/>
                <button type="button" id="removeTodo" onClick={() => deleteTodos(options)}>Remove Item</button>
                <button type="button" id="clearList" onClick={() => clearList()}>Remove All Items</button>


            </div>

        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    selectedItems: state.todos.selectedItems
});

const mapDispatchToProps = dispatch => ({
    showCompleted: isCompleted => dispatch(showCompleted(isCompleted)),
    dispatchFetchTodos: () => dispatch(fetchTodos()),
    toggleAllTodos: toggle => dispatch(toggleAllTodos(toggle)),
    toggleTodos: (selected, completed) => {
        for (let i=0; i < selected.length; i++) {
            dispatch(toggleTodos(selected[i], completed));
        }
    },
    deleteTodos: (selected) => {
        for (let i=0; i < selected.length; i++) {
            dispatch(deleteTodos(selected[i]));
        }
    },
    clearList: () => dispatch(clearList())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);