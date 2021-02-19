import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todo extends Component {
    // markComplete = () => {
    //     console.log("hello todo")
    // }
    render() {
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={ this.props.delTodo}/>
        ));
}
}
//proptypes.....
Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

export default Todo;
