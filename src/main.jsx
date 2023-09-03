import React from 'react'
import ReactDOM from 'react-dom/client'
// Styles
import './main.css'
// Components
import App from './components/App'

if (localStorage.theme.trim() !== '') {
	document.documentElement.classList.add(localStorage.getItem('theme'))
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
