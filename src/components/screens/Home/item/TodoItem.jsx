import React, { useState } from 'react'
// Components
import CheckBox from './CheckBox'
// Images
import { RxCross1 } from 'react-icons/rx'
import { MdEdit } from 'react-icons/md'

const TodoItem = ({ todo, changeTodo, completeTodo, removeTodo }) => {
	const [todoHover, setTodoHover] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [editedTitle, setEditedTitle] = useState(todo.title)

	const handlerTodoHoverEnter = () => {
		setTodoHover(true)
	}

	const handlerTodoHoverLeave = () => {
		setTodoHover(false)
	}

	const handlerEditClick = () => {
		setIsEditing(true)
	}

	return (
		<div
			className='w-full mb-4 p-5 flex items-center justify-between rounded-2xl bg-zinc-800 '
			onMouseEnter={handlerTodoHoverEnter}
			onMouseLeave={handlerTodoHoverLeave}
		>
			<button
				className={`flex items-center ${isEditing ? 'cursor-default' : ''}`}
				onClick={() => completeTodo(todo.id, isEditing)}
			>
				<div>
					<CheckBox isCompleted={todo.isCompleted} />
				</div>
				{isEditing ? (
					<div>
						<input
							className='w-full bg-zinc-900 rounded outline-none border-none'
							type='text'
							value={editedTitle}
							onChange={(e) => setEditedTitle(e.target.value)}
							onKeyDown={(e) =>
								e.key === 'Enter' &&
								(changeTodo(todo.id, editedTitle), setIsEditing(false))
							}
							// onBlur={handlerSaveClick}
							autoFocus
						/>
					</div>
				) : (
					<span className={`${todo.isCompleted ? 'line-through' : ''}`}>
						{todo.title}
					</span>
				)}
			</button>
			<div className='flex items-center justify-between'>
				<button
					className={`mr-4 ${todoHover ? 'opacity-100' : 'opacity-0 cursor-default'
						}`}
					onClick={handlerEditClick}
				>
					<MdEdit
						className='text-gray-600 hover:text-gray-400 ease-in-out'
						size={24}
					/>
				</button>
				<button
					className={`${todoHover && todo.isCompleted
							? 'opacity-100'
							: 'opacity-0 cursor-default'
						}`}
					onClick={() => removeTodo(todo.id, todo.isCompleted)}
				>
					<RxCross1
						className='text-gray-600 hover:text-red-700 ease-in-out'
						size={24}
					/>
				</button>
			</div>
		</div>
	)
}

export default TodoItem
