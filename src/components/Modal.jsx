import React, { useRef, useState } from 'react'
import { IoClose } from "react-icons/io5";

const Modal = ({closeModal, input, setInput, inputDescription, setInputDescription, setTodoList}) => {

  const modalRef = useRef();
    // const [showTodo, setShowTodo] = useState(false);
    // const [todoList, setTodoList] = useState([]);

    const addTodoItem = () => {
      const item = {
        title: input,
        description: inputDescription,
        date: new Date().toLocaleString(),
        status: "pending"
      }

      setTodoList(prev=> [...prev, item]);
      setInput('');
      setInputDescription('');
    }
    
  const handleOutsideClick = (e) => {
    if(modalRef.current === e.target){
      closeModal(false);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodoItem();
    closeModal(false);
  }

  return (
    <div ref={modalRef} onClick={handleOutsideClick} className='fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50'>
      <div className='flex flex-col'>
        <button onClick={() => closeModal(false)} className='place-self-end mb-2 cursor-pointer'><IoClose className='text-white hover:text-black' size={30}/></button>
        <div className='flex flex-col items-center justify-between bg-slate-200 rounded-lg p-4 w-[500px] h-[500px] shadow-2xl shadow-black'>
            <h1 className='text-4xl font-bold mb-5'>TO-DO List</h1>
            <form onSubmit={handleFormSubmit} className='flex flex-1 w-full flex-col items-center justify-start'>
                <div className='w-full'>
                    <p className='text-2xl mb-2'>Title:</p>
                    <input type="text" placeholder='Add Task' value={input} onChange={(e) => setInput(e.target.value)} required className='border bg-white w-full pl-2 rounded-sm mb-8 h-10'/>
                    <p className='text-2xl mb-2'>Description:</p>
                    <textarea type="text" placeholder='Description' value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} className='border bg-white w-full pl-2 rounded-sm h-30 pt-2'/>
                </div>
                <div className='w-full mt-9'>
                    <button type='submit' className='w-full border px-6 py-2 mt-3 cursor-pointer hover:bg-green-300 rounded-lg'>Add Task</button>
                </div>
                
            </form>
            
        </div>
      </div>
    </div>
  )
}

export default Modal
