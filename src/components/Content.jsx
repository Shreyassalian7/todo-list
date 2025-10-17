import React, { useState } from 'react'
import Modal from './Modal'
import Todo from './Todo';

const Content = () => {
    
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [newTodoList, setNewTodoList] = useState([]);
    const [doneTodoList, setDoneTodoList] = useState([]);

    const handleDelete = (index) => {
      const updatedTodoList = todoList.filter((_, i) => i !== index);
      setTodoList(updatedTodoList);
    };

    const startTask = (index) => {
        setTodoList(prevList => prevList.map((item, i) =>
            i === index ? {...item, status: "in-progress"} : item
        ))
        const updatedTodoList = todoList[index]
        setNewTodoList(prev=> [...prev, updatedTodoList]);
    }

    const doneTask = (index) => {
        const updatedTodoList = newTodoList[index];
        setDoneTodoList(prev=> [...prev, updatedTodoList]);

        setNewTodoList(newTodoList.filter((_, i) => i !== index));
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='w-[80%] flex flex-col items-center justify-center'>
            <div className='flex py-2 px-2 w-full items-center justify-between'>
                <div>
                    <h1 className='text-5xl font-bold'>To-Do List</h1>
                </div>
                <div>
                    <button onClick={() => setOpenModal(true)} className='border bg-slate-200 rounded-lg hover:bg-slate-300 p-2 px-3  hover:cursor-pointer hover:scale-105 transition-all'>Add Task</button>

                    {openModal && <Modal closeModal={setOpenModal} input={input} setInput={setInput} inputDescription={inputDescription} setInputDescription={setInputDescription} setTodoList={setTodoList}/>}
                </div>
            </div>
            <div className='flex w-full md:flex-row flex-col'>
                <div className='flex-1 w-full min-h-[500px] text-center border' style={{backgroundColor: '#FFC7A7'}}>
                    <h1 className='text-2xl bg-slate-400 h-13 flex items-center justify-center border-b-1' style={{backgroundColor: '#F08787'}}>Todo</h1>
                    <div className='flex flex-col items-center justify-center my-3'>
                        <ul>
                            {todoList.map((t, index) => (
                                <li key={index} className='my-2'>
                                    <Todo input={t.title} inputDescription={t.description} date={t.date} status={t.status} handleDelete={() => handleDelete(index)} startTask={() => startTask(index)} showProgressButton={false}/>
                                </li>
                            ))}
                        </ul>
                        {/* <Todo input={input} inputDescription={inputDescription}/> */}
                    </div>
                </div>
                <div className='flex-1 w-full min-h-[500px] text-center border' style={{backgroundColor: '#FFC7A7'}}>
                    <h1 className='text-2xl bg-slate-400 h-13 flex items-center justify-center border-b-1' style={{backgroundColor: '#F08787'}}>In Progress</h1>
                    <div className='flex flex-col items-center justify-center my-3'>
                        <ul>
                            {newTodoList.map((t, index) => (
                                <li key={index} className='my-2'>
                                    <Todo input={t.title} inputDescription={t.description} date={t.date} status={t.status} showTodoButton={false} doneTask={() => doneTask(index)}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex-1 w-full min-h-[500px] text-center border' style={{backgroundColor: '#FFC7A7'}}>
                    <h1 className='text-2xl bg-slate-400 h-13 flex items-center justify-center border-b-1' style={{backgroundColor: '#F08787'}}>Done</h1>
                    <div className='flex flex-col items-center justify-center my-3'>
                        <ul>
                            {doneTodoList.map((t, index) => (
                                <li key={index} className='my-2'>
                                    <Todo input={t.title} inputDescription={t.description} date={t.date} status={t.status} showTodoButton={false} doneTask={() => doneTask(index)} showProgressButton={false}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        {/* <Modal/> */}
    </div>
  )
}

export default Content
