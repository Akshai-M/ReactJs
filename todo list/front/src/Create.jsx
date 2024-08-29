import React, { useState } from 'react'
import axios from 'axios'
function Create() {
    const [task, setTask ] = useState() 
    const handleAdd = async () => {
      try {
        const response = await axios.post('http://localhost:3001/add', { task: task });
        console.log(response.data); 
      } catch (err) {
        console.error(err);
        
      }
    };
  return (
    <div>
      <input type="text" name="" id="" placeholder='Enter something' className='border-[3px] text-white bg-[#4c453a] border-black rounded-2xl px-10 py-2' onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd} className='pl-4'>Add</button>
    </div>
  )
}

export default Create
