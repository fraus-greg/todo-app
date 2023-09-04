import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const CreateTodoInput = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = (title) => {
		if (title.trim().length !== 0) {
			setTodos((prev) => [
				{
					id: nanoid(),
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
			className='h-12 w-full rounded border border-transparent bg-white py-0.5 pl-1 outline-none focus:border-[#278348] dark:bg-neutral-800'
			type='text'
			placeholder=' Add a todo'
			value={title}
			onChange={(event) => setTitle(event.target.value)}
			onKeyDown={(e) => e.key === 'Enter' && addTodo(title)}
		/>
	)
}

export default CreateTodoInput
