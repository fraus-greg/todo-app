import React, { useState, useEffect } from 'react'
// Components
import TodoItem from './item/TodoItem'
// Data
import { commonData } from './commonData'

const Home = () => {
	const initialData = JSON.parse(localStorage.getItem('todos')) || commonData

	const [todos, setTodos] = useState(initialData)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const changeTodo = (id) => {
		const copy = [...todos]
		const current = copy.find((todo) => todo.id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = (id) => {
		const copy = [...todos]
		setTodos(copy.filter((todo) => todo.id !== id))
	}
	let todosList = todos.map((todo) => {
		return (
			<TodoItem
				key={todo.id}
				todo={todo}
				changeTodo={changeTodo}
				removeTodo={removeTodo}
			/>
		)
	})

	return (
		<div className='text-white w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>TODO APP</h1>
			{todosList}
		</div>
	)
}

export default Home
