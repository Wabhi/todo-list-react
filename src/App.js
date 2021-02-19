import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import ToDoList from './components/Todo';
import AddTodo from './components/AddTodo';
import uuid from 'react-uuid';
import './App.css';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(res=>this.setState({todos:res.data})
    )
  };
// toggle complete....
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id == id) {
          todo.complete = !todo.complete
        }
        return todo;
      })
    });
  }

// delete todo.....
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

//add to do......
  AddTodo = (title) => {
    //console.log(title);
    const newTodo = {
      id: uuid(),
      title: title,
      complete:false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    return (
    <Router>
      <div className="App">
        <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                  <AddTodo AddTodo={ this.AddTodo}/>
                  <ToDoList todos={this.state.todos} markComplete={this.markComplete} delTodo={ this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
        </div>
      </div>
    </Router>
  );
}
}

export default App;
