import React, { useState } from 'react'
// Components
import CheckBox from './CheckBox'
import ChangeTodoInput from './ChangeTodoInput'
// Images
import { LuEdit, LuTrash } from 'react-icons/lu'

const TodoItem = ({ todo, changeTodo, completeTodo, removeTodo }) => {
	const [todoHover, setTodoHover] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [editedTitle, setEditedTitle] = useState(todo.title)

	return (
		<div
			className={`flex w-full items-center rounded-md bg-white hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02),0px_2px_10px_0px_rgba(0,0,0,0.04),0px_10px_20px_0px_rgba(0,0,0,0.04)] dark:bg-neutral-800`}
			onMouseEnter={() => setTodoHover(true)}
			onMouseLeave={() => setTodoHover(false)}
		>
			<div className='flex w-full items-center gap-2 p-1.5'>
				<div>
					<CheckBox
						id={todo.id}
						isCompleted={todo.isCompleted}
						completeTodo={completeTodo}
						isEditing={isEditing}
					/>
				</div>
				{isEditing ? (
					<ChangeTodoInput
						id={todo.id}
						editedTitle={editedTitle}
						setEditedTitle={setEditedTitle}
						setIsEditing={setIsEditing}
						changeTodo={changeTodo}
					/>
				) : (
					<span className={`flex h-10 w-full items-center px-1`}>
						{todo.title}
					</span>
				)}
			</div>
			<div className='flex gap-2 py-1.5 pr-1'>
				{!isEditing && (
					<button
						className={`group flex h-10 w-10 items-center justify-center rounded transition-all duration-300 ${todoHover ? 'opacity-100' : 'cursor-default opacity-0'
							} hover:bg-[#EBF8F0] dark:hover:bg-green-500 dark:hover:bg-opacity-10`}
						onClick={() => setIsEditing(true)}
					>
						<LuEdit
							className='text-[#97a3af] transition-all duration-300 ease-in-out group-hover:text-[#278348]'
							size={20}
						/>
					</button>
				)}
				<button
					className={`group flex h-10 w-10 items-center justify-center rounded transition-all duration-300 ${todoHover ? 'opacity-100' : 'cursor-default opacity-0'
						} hover:bg-red-100 dark:hover:bg-red-500 dark:hover:bg-opacity-10`}
					onClick={() => removeTodo(todo.id)}
				>
					<LuTrash
						className='text-[#97a3af] transition-all duration-300 ease-in-out group-hover:text-red-700'
						size={20}
					/>
				</button>
			</div>
		</div>
	)
}

export default TodoItem
