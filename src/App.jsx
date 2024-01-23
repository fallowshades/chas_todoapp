import React, { useState } from 'react'
import TodoItem from './TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // Generate a unique identifier for each todo item
    const id = new Date().getTime()
    setTodos([...todos, { title, done: false, id }])
  }

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const filterDone = () => {
    // Filter todo items based on 'done' status
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done))
  }

  const filterNotDone = () => {
    // Filter todo items based on 'done' status
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.done))
  }

  return (
    <div>
      <input type="text" />
      <button onClick={() => addTodo(/* få titel från input-fältet */)}>
        Add
      </button>
      <button onClick={filterDone}>Filter Done</button>
      <button onClick={filterNotDone}>Filter Not Done</button>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleDone={() => toggleDone(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  )
}

export default App
