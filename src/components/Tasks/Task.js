import React from 'react'
import classes from './Task.module.css'

const Task = props => {
	const deleteHandler = () => {
		props.setTodos(props.todos.filter(el => el.id !== props.todo.id))
	}
	const isCompleteHandler = () => {
		
		props.setTodos(
			props.todos.map(item => {
				if (item.id === props.todo.id) {
					return { ...item, isCompleted: !item.isCompleted }
				}
				return item
			})
		)
	}

	return (
		<li className={`${classes.task} ${props.isCompleted && classes.completed}`}>
			{props.title}
			<div className={classes.tools}>
				<button onClick={isCompleteHandler}>
					<i className='fa-solid fa-check'></i>
				</button>
				<button>
					<i className='fa-solid fa-pen-to-square'></i>
				</button>
				<button onClick={deleteHandler}>
					<i className='fa-solid fa-xmark'></i>
				</button>
			</div>
		</li>
	)
}
export default Task
