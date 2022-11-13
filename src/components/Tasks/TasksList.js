import Task from './Task'
import classes from './TaskList.module.css'

const TaskList = props => {

	const deleteTodo = () => {
		props.setTodos(props.todos.filter(el => el.id !== todo.id))
	}
	return (
		<ul className={classes.list}>
			{props.todos.map(todo => (
				<Task title={todo.title} isCompleted={todo.isCompleted} key={todo.id} deleteTodo={deleteTodo}/>
			))}
		</ul>
	)
}
export default TaskList
