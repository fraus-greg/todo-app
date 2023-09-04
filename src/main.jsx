import React from 'react'
import ReactDOM from 'react-dom/client'
// Styles
import './main.css'
// Components
import App from './components/App'

if (localStorage.theme !== '') {
	document.documentElement.classList.add(localStorage.getItem('theme'))
} else {
	localStorage.setItem('theme', JSON.stringify(''))
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
