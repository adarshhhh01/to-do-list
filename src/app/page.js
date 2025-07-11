"use client"

import React, { useState } from 'react'

const page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault()
    if (task.trim() === "" || description.trim() === "") return;
    setMainTask([...mainTask, { task, description }])
    setTask("");
    setDescription("");
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((item, index) => {
      return (
        <li key={index} className="flex items-center justify-between mb-5 p-4 bg-slate-700 rounded-lg">
          <div className="flex flex-col items-start w-2/3">
            <h5 className="text-2xl font-semibold">{item.task}</h5>
            <h6 className="text-lg font-medium text-gray-300">{item.description}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(index)
            }}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-colors">Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <form className="flex flex-col items-center justify-center  m-10 px-50 py-20 border-2 border-slate-500 rounded-lg no-scrollbar " onSubmit={submitHandler}>
        <h1 className="text-3xl bg-slate-600  bg-opacity-50 text-white font-bold text-center">
          To Do List
        </h1>
        <br />
        <input
          placeholder="Enter a Task Name"
          type="text"
          className="text-center bg-slate-600 border-2 border-slate-500 rounded-lg  p-2"
          value={task}
          onChange={(e) => { setTask(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Enter a Task Description"
          className="text-center bg-slate-600 border-2 border-slate-500 rounded-lg  p-2 m-3  w-70 min-2 h-30 flex-wrap"
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
        />
        <br />
        <button className="hover:scale-90  hover:text-white border-2 border-green-500 rounded-lg  p-2 bg-slate-600 bg-opacity-50 text-white font-bold text-center">Add Task</button>
        <br />
      </form>
      <hr className="border-slate-500" />
      <h3 className="text-2xl bg-slate-600  bg-opacity-50 text-white font-bold text-center my-5">
        Previous Tasks
      </h3>
      <div className="p-8 bg-slate-800 text-white border-2 border-slate-500 rounded-lg no-scrollbar">
        <br />
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}

export default page