import React from 'react'
// Images
import { RxCross1 } from 'react-icons/rx'

const ChangeTodoInput = ({
	id,
	editedTitle,
	setEditedTitle,
	setIsEditing,
	changeTodo
}) => {
	const EditingHandler = () => {
		setIsEditing(false)
	}

	return (
		<div className='relative h-10 w-full rounded outline outline-1 outline-[#278348]'>
			<input
				className='h-full w-full select-none border-none bg-transparent pl-1 pr-12 outline-none'
				type='text'
				placeholder=' Rename task'
				value={editedTitle}
				onChange={(e) => setEditedTitle(e.target.value)}
				onKeyDown={(e) =>
					e.key === 'Enter' && (changeTodo(id, editedTitle), EditingHandler)
				}
				// onBlur={() => (changeTodo(id, editedTitle), setIsEditing(false))}
				autoFocus
			/>
			<button
				className='group absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded hover:bg-[#EBF8F0] dark:hover:bg-green-500 dark:hover:bg-opacity-10'
				onClick={() => (
					setEditedTitle(''),
					document.querySelector('input[type="text"]').focus()
				)}
			>
				<RxCross1
					className='cursor-pointer text-[#97A3AF] transition-all group-hover:text-[#278348] '
					size={20}
				/>
			</button>
		</div>
	)
}

export default ChangeTodoInput
