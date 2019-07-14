import React from 'react';
import { connect } from 'react-redux';
import TodoTitle from './TodoTitle';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {
    fetchTodos
} from './actions';
import './App.css';

class App extends React.Component {

    componentWillMount() {
        const { dispatchFetchTodos } = this.props;
        dispatchFetchTodos();
    }

    render() {
        return (
            <div className="App">
                <header>
                    <TodoTitle />
                </header>
                <main>
                    <TodoForm />
                    <TodoList />
                </main>
                <footer></footer>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchFetchTodos: () => dispatch(fetchTodos())
});

export default connect(null, mapDispatchToProps)(App);
