import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from '../components/TodoList.jsx';
class App extends Component {
    render() {
        return (
            <TodoList />
        )
    }
} render(<App />, document.getElementById('root'));


