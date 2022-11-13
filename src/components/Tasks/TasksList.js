import Task from './Task'
import classes from './TaskList.module.css'

const TaskList = props => {
	return (
		<ul className={classes.list}>
			{props.todos.map(todo => (
				<Task title={todo.title} isCompleted={todo.isCompleted} key={todo.id} />
			))}
		</ul>
	)
}
export default TaskList
