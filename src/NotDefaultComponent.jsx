import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

export const NotDefaultComponent = ({ defaultState }) => {
  const [todos, setTodos] = useState(defaultState || [])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    // Save todos to localStorage whenever the todos state changes
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(localStorage.getItem('todos'))
  }, [todos])

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const addTodo = () => {
    // Generate a unique identifier for each todo item
    const id = new Date().getTime()
    setTodos([...todos, { title: newTodo, done: false, id }])
    // Clear the input field after adding a todo
    setNewTodo('')
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
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
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
export default NotDefaultComponent
