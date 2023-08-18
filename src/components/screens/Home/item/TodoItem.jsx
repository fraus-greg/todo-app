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
			className={`w-full flex items-center rounded-md bg-white hover:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.02),0px_2px_10px_0px_rgba(0,0,0,0.04),0px_10px_20px_0px_rgba(0,0,0,0.04)]`}
			onMouseEnter={() => setTodoHover(true)}
			onMouseLeave={() => setTodoHover(false)}
		>
			<div className='w-full p-1.5 flex items-center gap-2'>
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
					<span className={`w-full h-10 px-1 flex items-center`}>
						{todo.title}
					</span>
				)}
			</div>
			<div className='flex gap-2 pr-1 py-1.5'>
				{!isEditing && (
					<button
						className={`group w-10 h-10 flex justify-center items-center rounded ${
							todoHover ? 'opacity-100' : 'opacity-0 cursor-default'
						} hover:bg-[#EBF8F0]`}
						onClick={() => setIsEditing(true)}
					>
						<LuEdit
							className='text-[#97a3af] group-hover:text-[#278348] ease-in-out'
							size={20}
						/>
					</button>
				)}
				<button
					className={`group w-10 h-10 flex justify-center items-center rounded ${
						todoHover ? 'opacity-100' : 'opacity-0 cursor-default'
					} hover:bg-red-100`}
					onClick={() => removeTodo(todo.id)}
				>
					<LuTrash
						className='text-[#97a3af] group-hover:text-red-700 ease-in-out'
						size={20}
					/>
				</button>
			</div>
		</div>
	)
}

export default TodoItem
