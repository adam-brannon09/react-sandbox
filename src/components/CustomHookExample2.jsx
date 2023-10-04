
import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookExample2() {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    const onSubmit = (e) => {
        e.preventDefault()

        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }
        setTasks([...tasks, taskObj])
        setTask('')
    }

    const clearTasks = () => {
        setTask('')
        setTasks([])
    }
    return (
        <>
            <form onSubmit={onSubmit} className="w-25">
                <div className="mb-3">
                    <label htmlFor="" className="from-label">Task</label>
                    <br />
                    <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <button className="btn btn-primary" type='submit'>Submit</button>
                <button className="btn btn-primary" type='submit' onClick={clearTasks}>Clear</button>
            </form>
            <hr />
            {tasks.map((task) => (
                <h3 key={task.task}>{task.task}</h3>
            )
            )}
        </>
    )
}
export default CustomHookExample2