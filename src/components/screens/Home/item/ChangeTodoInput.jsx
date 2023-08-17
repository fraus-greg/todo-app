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
  return (
    <div className='h-10 relative w-full outline-1 outline outline-[#278348] rounded'>
      <input
        className='w-full h-full pl-1 pr-12 bg-transparent border-none outline-none select-none'
        type='text'
        placeholder=' Rename task'
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        onKeyDown={(e) =>
          e.key === 'Enter' &&
          (changeTodo(id, editedTitle), setIsEditing(false))
        }
        // onBlur={() => (changeTodo(id, editedTitle), setIsEditing(false))}
        autoFocus
      />
      <button
        className='group hover:bg-[#EBF8F0] w-10 h-10 absolute top-0 right-0 flex items-center justify-center rounded '
        onClick={() => (
          setEditedTitle(''),
          document.querySelector('input[type="text"]').focus()
        )}
      >
        <RxCross1
          className=' cursor-pointer group-hover:text-[#278348] text-[#97A3AF]'
          size={20}
        />
      </button>
    </div>
  )
}

export default ChangeTodoInput
