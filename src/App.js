import React, { useState } from 'react'
import AddTask from './components/Tasks/AddTask'
import TaskList from './components/Tasks/TasksList'
import Card from './components/UI/Card'

const App = () => {
	const [todos, setTodos] = useState([])

	const addTodoToList = task => {
		setTodos(todos => {
			return [...todos, task]
		})
	}

	return (
		<Card>
			<AddTask onAddTask={addTodoToList}></AddTask>
			<TaskList todos={todos} setTodos={setTodos}></TaskList>
		</Card>
	)
}

export default App
