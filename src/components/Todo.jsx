// Import the useState, useEffect, and useRef hooks
import { useState, useEffect, useRef } from 'react'

// Define a functional component called Todo
function Todo() {

    // Create a state variable to track whether the todo is loading
    const [loading, setLoading] = useState(true)

    // Create a state variable to store the todo
    const [todo, setTodo] = useState({})

    // Create a ref to track whether the component is mounted
    const isMounted = useRef(true)

    // Use the useEffect hook to fetch a todo from the JSONPlaceholder API
    // and set the todo state variable
    useEffect(() => {
        // Fetch the todo from the API
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())

            // Set the todo state variable with the response data
            .then(data => {
                setTimeout(() => {
                    // Only update the state if the component is still mounted
                    if (isMounted.current) {
                        setTodo(data)
                        setLoading(false)
                    }
                }, 1000)
            })

        // Return a cleanup function that will be called when the component is unmounted
        return () => {
            // Set the isMounted ref to true
            isMounted.current = true
        }
    }, [isMounted])

    // Return the JSX for the Todo component
    return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

// Export the Todo component
export default Todo
