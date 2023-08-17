import React from 'react'
// Images
import { BsCheckLg } from 'react-icons/bs'

const CheckBox = ({ id, isCompleted, completeTodo, isEditing }) => {
	return (
		<button
			className={`w-10 h-10 flex items-center justify-center rounded ${isEditing ? 'cursor-default' : ''
				} ${!isCompleted ? 'hover:bg-[#EBF8F0] hover:border-[#278348]' : ''}`}
			onClick={() => completeTodo(id, isEditing)}
		>
			<div
				className={`w-5 h-5 border-1 rounded  border ${isCompleted ? 'bg-[#278348] border-[#278348]' : 'border-[#2A3239] '
					} flex items-center justify-center `}
			>
				{isCompleted && <BsCheckLg size={15} className='text-white' />}
			</div>
		</button>
	)
}

export default CheckBox
