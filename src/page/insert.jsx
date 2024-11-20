import React, { useState } from 'react'

import Add from '../assets/add.svg';

const D = () => {

  const [todoInput, setTodoInput] = useState({
     todoText: ""
  })
  const saveTodo = () => {
    sessionStorage.setItem('todoText', todoInput.todoText);
    console.log(todoInput);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      saveTodo();
    }
  }

  return (
    <div className="w-full bg-slate-800 flex flex-col justify-center items-center">
    <div className="flex flex-row justify-center items-center gap-4 p-4 w-1/2 bg-white rounded-lg shadow-lg">
      <div className="w-4/5">
        <input
          type="text"
          id='todoText'
          placeholder="Add a new task"
          className="p-3 rounded-lg border-2 border-gray-400 focus:outline-none focus:border-indigo-500 w-full"
          value={todoInput.todoText}
          onChange={(e)=>setTodoInput({...todoInput, [e.target.id] : e.target.value})}
          onKeyDown={(e)=>handleKeyDown(e)}
        />
      </div>
      <div className="w-1/5">
        <button
          type="button"
          onClick={saveTodo}
          className="w-full flex flex-row justify-center items-center gap-2 p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:scale-105 hover:bg-indigo-700 transition-all duration-300"
        >
          <span>Create</span>
          <img src={Add} alt="Add icon" className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default D