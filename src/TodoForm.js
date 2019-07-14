import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class TodoForm extends React.Component {
    state = {
        item: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      const { todos, addTodo } = this.props;
      const { item } = this.state;
      const ids = (typeof todos !== 'undefined') ? todos.map(({id}) => id) : [0];
      const nextId = Math.max(...ids) + 1;
      const todo = {
          id: nextId,
          item,
          completed: false
      };
      addTodo(todo);
    };

    render () {
        return (
        <form action="" onSubmit={this.handleSubmit}>
            <input type="text" name="item" id="item" className="item" placeholder="Enter Todo Item" required onChange={this.handleInput}/>
            <button type="submit">Add Todo</button>
        </form>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => {
        dispatch(addTodo(todo));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);