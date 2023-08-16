import React, { useState } from 'react'

const CreateTodoInput = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = (title) => {
    if (title.trim().length !== 0) {
      setTodos((prev) => [
        {
          id: Math.random(),
          title,
          isCompleted: false
        },
        ...prev
      ])
      setTitle('')
    }
  }

  return (
    <div className='w-full mt-20 px-5 py-3 flex items-center justify-between rounded-2xl bg-transparent border-2 border-zinc-800 select-none'>
      <input
        className='w-full bg-transparent border-none outline-none'
        type='text'
        placeholder='Add a todo'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo(title)}
      />
    </div>
  )
}

export default CreateTodoInput
