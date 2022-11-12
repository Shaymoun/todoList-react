import Task from "./Task"
import classes from './TaskList.module.css'

const TaskList = (props) => {
    return <div className={classes.list}>
        <ul>
            {props.todos.map(todo => <Task title={todo.title} isCompleted={todo.isCompleted}/>)}
        </ul>
    </div>
}
export default TaskList