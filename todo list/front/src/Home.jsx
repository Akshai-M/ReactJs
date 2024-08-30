import React, { useState, useEffect } from 'react';
import Create from './Create.jsx';
import axios from 'axios';

function Home() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/get');
        setTodo(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Todo list</h2>
      <Create />
      <br />
      {todos.length === 0 ? (
        <div><h2>Loading...</h2></div>
      ) : (
        todos.map((todo, index) => (
          <div key={todo.id || index} className='flex border border-red-500 max-w-xs '>
            <div className='flex '>
              <input type="checkbox"/>
              <p>{todo.task}</p>
            </div>
            <div className= 'cursor-pointer'>
              &#9888;
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;