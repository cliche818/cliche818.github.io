import React, { Component } from 'react';

export default class TodoList extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            activeItemsCount: 0
        }
    }
    
    onAddButtonClick = (e) => {
        const newItem = this.refs.inputText.value
        
        if (newItem !== "") {
            this.refs.inputText.value = ''
            const updatedItems = this.state.items.concat([newItem])
            const index = this.state.items.length
            this.setState({
                [`item${index}Active`]: true,
                items: updatedItems, 
                activeItemsCount: this.state.activeItemsCount + 1
            })
        }
    }
    
    taskDescription = () => {
        return (
            <span className="task-counter">
            {`${this.state.activeItemsCount} remaining out of ${this.state.items.length} tasks`}
            </span>
        )    
    }
    
    displayTodoItems = () => {
        return (
            <ul>
                {
                this.state.items.map((todoText, index) => {
                    return (
                        this.displayTodoItem(todoText, index)
                    )
                })
                }
            </ul>
        )
    }
    
    displayTodoItem = (todoText, index) => {
        return (
            <li 
                key={`${todoText}` + index}
                name={index}
                className={`${this.state[`item${index}Active`] ? '' : 'is-done'}`}
                onClick={this.todoItemClick}
                >{todoText}
            </li>
        )
    }
    
    todoItemClick = (e) => {
        const todoItemIndex = e.target.getAttribute("name")
        const updatedTodoIndexActive = !this.state[`item${todoItemIndex}Active`]
        const updatedActiveItemsCount = updatedTodoIndexActive ? 
        this.state.activeItemsCount + 1 : this.state.activeItemsCount - 1
        
        this.setState({
            [`item${todoItemIndex}Active`]: updatedTodoIndexActive,
            activeItemsCount: updatedActiveItemsCount
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <h2>
                        Todo List
                    </h2>
                    
                    <input ref="inputText"></input>
                    <button onClick={this.onAddButtonClick}>Add</button>
                    
                    <br/>
                    
                    {this.taskDescription()}
                    
                    {this.displayTodoItems()}
                </div>    
                <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
            </div>
        );
    }
}