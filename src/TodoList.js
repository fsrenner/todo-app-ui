import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

    render() {
        const { todos } = this.props;
        console.log(todos);
        return (
            <React.Fragment>
                {todos.map(todo => (
                    <div
                        className={(!todo.completed) ? 'completed' : ''}
                        key={todo._id}
                        id={todo._id}
                    >
                        <p>{todo.id} {todo.item}</p>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);