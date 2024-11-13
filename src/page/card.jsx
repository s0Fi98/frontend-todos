import React, { useState } from 'react'

import Done from '../assets/done.svg';
import Delete from '../assets/delete.svg';

const E = () => {

    const doneTodo = () => {
        alert("done");
    }

    const deleteTodo = () => {
        alert("delete");
    }

    const [cardData, setCardData] = useState([{
        id: "1", todoText: "Jump like a Monkey..!"
    }])

  return (
    <div className='w-full bg-slate-800 flex flex-col justify-center items-center font-mono'>
      {cardData.map((value) => (
          <div key={value.id}
          className='flex flex-row justify-between items-center gap-4 p-4 w-1/2 bg-white rounded-lg hover:translate-x-5 transition-all duration-300'>
          <div className=''>
              <img src={Done} alt="done" onClick={doneTodo} className='cursor-pointer hover:scale-110'/>
          </div>
          <div className='flex-grow-1'>
              <h5>{value.todoText}</h5>
          </div>
          <div className=''>
              <img src={Delete} alt="delete" onClick={deleteTodo} className='cursor-pointer hover:scale-110'/>
          </div>
      </div>
      ))}
    </div>
  )
}

export default E
