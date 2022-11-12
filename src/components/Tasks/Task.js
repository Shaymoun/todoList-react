import React from 'react'
import classes from './Task.module.css'

const Task = (props) => {
	return (
		<li className={classes.task}>
			<p>{props.title}</p>
			<div>
				<button className={classes.done}>Done</button>
				<button className={classes.delete}>Delete</button>
			</div>
		</li>
	)
}
export default Task
