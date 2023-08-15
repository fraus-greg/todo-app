import React, { useState } from 'react'
// Components
import CheckBox from './CheckBox'
// Images
import { RxCross1 } from 'react-icons/rx'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	useState()
	return (
		<div className='w-full mb-4 p-5 flex items-center justify-between rounded-2xl bg-zinc-800 '>
			<button className='flex items-center' onClick={() => changeTodo(todo.id)}>
				<CheckBox isCompleted={todo.isCompleted} />
				<span className={`${todo.isCompleted ? 'line-through' : ''}`}>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo.id)}>
				<RxCross1
					className='text-gray-600 hover:text-red-700 ease-in-out duration-300'
					size={24}
				/>
			</button>
		</div>
	)
}

export default TodoItem
