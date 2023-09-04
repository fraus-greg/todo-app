import React, { useState } from 'react'
// Images
import { LuMoon, LuSun } from 'react-icons/lu'

const ThemeButton = () => {
	const [currentTheme, setCutentTheme] = useState(localStorage.theme)

	const toggleTheme = () => {
		if (localStorage.theme === 'dark') {
			localStorage.theme = ''
			document.documentElement.classList.remove('dark')
			setCutentTheme('')
		} else {
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
			setCutentTheme('dark')
		}
	}

	return (
		<button
			className='flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-neutral-800'
			onClick={toggleTheme}
		>
			{currentTheme === 'dark' ? (
				<LuMoon size={20} className='text-white' />
			) : (
				<LuSun size={20} className='text-[#2A3239]' />
			)}
		</button>
	)
}

export default ThemeButton
