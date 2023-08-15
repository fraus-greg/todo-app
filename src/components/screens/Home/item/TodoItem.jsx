import React, { useState } from 'react'
// Components
import CheckBox from './CheckBox'
// Images
import { RxCross1 } from 'react-icons/rx'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	const [todoHover, setTodoHover] = useState(false)

	const handlerTodoHoverEnter = () => {
		setTodoHover(true)
	}
	const handlerTodoHoverLeave = () => {
		setTodoHover(false)
	}

	return (
		<div
			className='w-full mb-4 p-5 flex items-center justify-between rounded-2xl bg-zinc-800 '
			onMouseEnter={handlerTodoHoverEnter}
			onMouseLeave={handlerTodoHoverLeave}
		>
			<button className='flex items-center' onClick={() => changeTodo(todo.id)}>
				<CheckBox isCompleted={todo.isCompleted} />
				<span className={`${todo.isCompleted ? 'line-through' : ''}`}>
					{todo.title}
				</span>
			</button>
			<button
				className={`${todoHover && todo.isCompleted ? 'opacity-100' : 'opacity-0'
					}`}
				onClick={() => removeTodo(todo.id)}
			>
				<RxCross1
					className='text-gray-600 hover:text-red-700 ease-in-out duration-150'
					size={24}
				/>
			</button>
		</div>
	)
}

export default TodoItem
