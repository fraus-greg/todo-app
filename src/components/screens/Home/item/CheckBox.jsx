import React from 'react'
// Images
import { BsCheck } from 'react-icons/bs'

const CheckBox = ({ isCompleted }) => {
	return (
		<div
			className={`w-6 h-6 mr-2 border-2 rounded-lg border-blue-500 ${isCompleted ? 'bg-blue-500' : ''
				} flex items-center justify-center`}
		>
			{isCompleted && <BsCheck size={24} className='text-gray-900' />}
		</div>
	)
}

export default CheckBox
