import React, { useState, useEffect } from 'react'
// Components
import TodoItem from './item/TodoItem'
import CreateTodoInput from './CreateTodoInput/CreateTodoInput'
// Data
import { commonData } from './commonData.js'

const Home = () => {
	const initialData = JSON.parse(localStorage.getItem('todos')) || commonData

	const [todos, setTodos] = useState(initialData)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const completeTodo = (id, isEditing) => {
		if (isEditing === false) {
			const copy = [...todos]
			const current = copy.find((todo) => todo.id === id)
			current.isCompleted = !current.isCompleted
			setTodos(copy)
		}
	}

	const changeTodo = (id, newValue) => {
		const copy = [...todos]
		const current = copy.find((todo) => todo.id === id)
		current.title = newValue
		setTodos(copy)
	}

	const removeTodo = (id, isCompleted) => {
		if (isCompleted) {
			const copy = [...todos]
			setTodos(copy.filter((todo) => todo.id !== id))
		}
	}

	const sortedTodos = [...todos].sort((a, b) =>
		a.isCompleted !== b.isCompleted ? (a.isCompleted ? 1 : -1) : 0
	)

	let todosList = sortedTodos.map((todo) => {
		return (
			<TodoItem
				key={todo.id}
				todo={todo}
				changeTodo={changeTodo}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
			/>
		)
	})

	return (
		<div className='text-white w-1/2 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>TODO APP</h1>
			{todosList}
			<CreateTodoInput setTodos={setTodos} todos={todos} />
		</div>
	)
}

export default Home
