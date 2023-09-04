import React, { useState } from 'react'
// Images
import { BsCheckLg } from 'react-icons/bs'

const CheckBox = ({ id, isCompleted, completeTodo, isEditing }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<button
			className={`flex h-10 w-10 items-center justify-center ${isEditing ? 'cursor-default' : ''
				}`}
			onClick={() => completeTodo(id)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`border-1 h-5 w-5 rounded border ${isCompleted
						? 'border-[#278348] bg-[#278348]'
						: isHovered
							? 'border-[#278348] bg-[#EBF8F0] dark:bg-green-500 dark:bg-opacity-10'
							: 'border-[#2A3239] dark:border-[#97a3af] dark:bg-neutral-800'
					} flex items-center justify-center`}
			>
				{isCompleted && <BsCheckLg size={15} className='text-white' />}
			</div>
		</button>
	)
}

export default CheckBox
