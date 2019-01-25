import React from 'react'

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        
        <div key={todo.id}>
          <li>
        <label>
          <input type="checkbox" name=""></input>
          <span onClick={() => {deleteTodo(todo.id)}} className="icon"></span>
          <span className="list">{todo.content}</span>
          {/* <button onClick={() => {deleteTodo(todo.id)}} className="">Delete</button> */}
        </label>
      </li>
        </div>
      )
    })
  ) : (
    <p className="center">You have no Todo's left!</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos