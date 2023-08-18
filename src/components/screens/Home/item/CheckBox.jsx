import React, { useState } from 'react'
// Images
import { BsCheckLg } from 'react-icons/bs'

const CheckBox = ({ id, isCompleted, completeTodo, isEditing }) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<button
			className={`w-10 h-10 flex items-center justify-center ${
				isEditing ? 'cursor-default' : ''
			}`}
			onClick={() => completeTodo(id, isEditing)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`w-5 h-5 border-1 rounded border ${
					isCompleted
						? 'bg-[#278348] border-[#278348]'
						: isHovered
						? 'bg-[#EBF8F0] border-[#278348]'
						: 'border-[#2A3239]'
				} flex items-center justify-center  `}
			>
				{isCompleted && <BsCheckLg size={15} className='text-white' />}
			</div>
		</button>
	)
}

export default CheckBox
