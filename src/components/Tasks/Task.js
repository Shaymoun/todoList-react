import React from 'react'
import classes from './Task.module.css'




const Task = props => {
	const deleteHandler = () => {
		props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
	}
	return (
		<li className={classes.task}>
			{props.title}
			<div className={classes.tools}>
				<button><i className="fa-solid fa-check"></i></button>
				<button><i className="fa-solid fa-pen-to-square"></i></button>
				<button onClick={deleteHandler}><i className="fa-solid fa-xmark"></i></button>
			</div>
		</li>
	)
}
export default Task
