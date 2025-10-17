import React, { useEffect, useState } from 'react'
import { GiCheckMark } from "react-icons/gi";

const Todo = ({input, inputDescription, date, status, handleDelete, startTask, doneTask, showTodoButton =true, showProgressButton = true}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle(input);
        setDescription(inputDescription);
    }, [input, inputDescription]);

  return (
    <div>
      <div className='relative bg-white w-full max-w-[400px] min-h-[200px] break-words flex flex-col items-start px-2 py-4 rounded-lg shadow-xl'>

        {/* {<div className='absolute top-2 right-3'>
          <GiCheckMark className='text-2xl text-green-400'/>
        </div>} */}
        
        <div className='flex items-start gap-1'>
            <h1 className='font-semibold'>Title:</h1>
            <p className='break-all text-left pb-1'>{title}</p>
        </div>
        <div className='flex flex-col items-start'>
            <h1 className='font-semibold'>Description:</h1>
            <p className='break-all text-left py-1'>{description}</p>
        </div>
        <div className='flex gap-1 items-start'>
            <h1 className='font-semibold'>Date created:</h1>
            <p className='break-words whitespace-normal text-left'>{date}</p>
        </div>
        {showTodoButton && (
          <div className='flex w-full items-center justify-center gap-2 mt-8'>
          <button onClick={() => startTask()} disabled={status !== "pending"} className={`border-1 px-8 py-2 ${status !== "pending" ? "bg-gray-300 cursor-not-allowed" : "hover:bg-green-300"} hover:cursor-pointer`}>
            {/* {status !== "pending" ? "In Progress...": "Start"} */}
            Start
          </button>
          <button onClick={() => handleDelete()} className='border-1 px-5 py-2 hover:bg-red-400 hover:cursor-pointer'>Delete</button>
        </div>
        )}
        {/* <div className='flex w-full items-center justify-center gap-2 mt-8'>
          <button onClick={() => startTask()} className='border-1 px-8 py-2 hover:bg-green-300'>Start</button>
          <button onClick={() => handleDelete()} className='border-1 px-5 py-2 hover:bg-red-400'>Delete</button>
        </div> */}
        {showProgressButton && (
          <div className='w-full mt-10'>
          <button onClick={() => doneTask()} className='border px-20 py-2 hover:bg-green-300 hover:cursor-pointer'>Completed</button>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default Todo
