import React, { useState } from 'react'
import AddTask from './components/Tasks/AddTask'
import TaskList from './components/Tasks/TasksList'
import Card from './components/UI/Card'

const DUMMY_DATA = [
	{ title: 'zesrać się', isCompleted: false, id:1 },
	{ title: 'zjeść', isCompleted: false, id:2 },
	{ title: 'umyć się', isCompleted: false, id:3 },
]
const App = () => {
	const [todos, setTodos] = useState(DUMMY_DATA)

  const addTodoToList = (task) => {
    setTodos((todos)=>{
      return [...todos, task]
    })
  }
	return (
		<Card>
			<AddTask onAddTask={addTodoToList}></AddTask>
			<TaskList todos={todos}></TaskList>
		</Card>
	)
}

export default App
