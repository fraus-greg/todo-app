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
		<input
			className='h-12 py-0.5 pl-1 w-full rounded bg-white border border-[#278348] outline-none'
			type='text'
			placeholder=' Add a todo'
			value={title}
			onChange={(event) => setTitle(event.target.value)}
			onKeyDown={(e) => e.key === 'Enter' && addTodo(title)}
		/>
	)
}

export default CreateTodoInput
