import React, { useState } from 'react'
import classes from './AddTask.module.css'

const AddTask = (props) => {

	const [input, setInput] = useState('')
	const insertTodoHandler = (e) => {
		setInput(e.target.value)
	}
	const addTodoHandler = () => {
		const task = {title:input, isCompleted:false}
		props.onAddTask(task)
		setInput('')
	}
	return (
		<div className={classes.headerBody}>
			<h1>Todo List</h1>
			<input
				value={input}
				type='text'
				onChange={insertTodoHandler}
				className={classes.headerInput}
				placeholder='Add your task...'></input>
			<button onClick={addTodoHandler}>Add</button>
		</div>
	)
}

export default AddTask
