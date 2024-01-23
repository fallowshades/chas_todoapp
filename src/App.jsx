import React, { useState, useEffect } from 'react'
import NotDefaultComponent from './NotDefaultComponent'

const App = () => {
  // Use useState to create a state variable for defaultState
  const [defaultState, setDefaultState] = useState([])

  useEffect(() => {
    // Load todos from localStorage when the component mounts
    const storedTodos = localStorage.getItem('todos')
    console.log(storedTodos)
    if (storedTodos) {
      // Update the state using setDefaultState
      setDefaultState(JSON.parse(storedTodos))
    }
  }, [])

  console.log(defaultState)
  return <NotDefaultComponent defaultState={defaultState} />
}

export default App
