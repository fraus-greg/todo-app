import React from 'react'
// Components
import ThemeButton from './layoutComponents/ThemeButton.jsx'

const Layout = ({ children }) => {
	return (
		<main className='relative'>
			<section className='absolute right-4 top-4'>
				<ThemeButton />
			</section>
			{children}
		</main>
	)
}

export default Layout
