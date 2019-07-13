import React from 'react';
//import { connect } from '';

class TodoForm extends React.Component {
    state = {
        todo: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state.todo);
    };

    render () {
        return (
        <form action="" onSubmit={this.handleSubmit}>
            <input type="text" name="todo" id="todo" className="todo" placeholder="Enter Todo Item" required onChange={this.handleInput}/>
            <button type="submit">Add Todo</button>
        </form>
        );
    }
}

export default TodoForm;