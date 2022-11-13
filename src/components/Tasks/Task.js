import React from 'react'
import classes from './Task.module.css'


const Task = props => {
	return (
		<li className={classes.task}>
			{props.title}
			<div className={classes.tools}>
				<button className={classes.done}><i class="fa-solid fa-check"></i></button>
				<button className={classes.done}><i class="fa-solid fa-pen-to-square"></i></button>
				<button className={classes.delete}><i class="fa-solid fa-xmark"></i></button>
			</div>
		</li>
	)
}
export default Task
