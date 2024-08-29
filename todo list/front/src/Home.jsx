import React, { useState, useEffect } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
function Home() {
  const [todos, setTodo] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodo(result.data))
    .catch(err => console.log(err)
    )
  }, [])


  return (
    <div>
      <h2>Todo list</h2>
      <Create />
      {
        todos.length === 0
          ?
          (<div><h2>No Record</h2></div>)
          :
          (todos.map(todo => {
            <div>
              {todo.task}
            </div>
          }))
      }
    </div>
  )
}

export default Home
