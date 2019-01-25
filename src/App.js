import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
class App extends Component {
  
  state = {
    // black: false,
    todos: [
      {id: 1, content: 'Buy Chocolate', crossed: false},
      {id: 2, content: 'Play Games', crossed: false},
      {id: 3, content: 'Drink Water', crossed: false}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  
  render() {
    return (
      <div className="todo-app">
      <div>
        <h2>To Do's</h2>
        <ul>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </ul>
      </div>
      <AddTodo addTodo={this.addTodo}/>
    </div>
    );
  }
}

export default App;
