import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {

    const [name, setName] = useState('')

    // useRef hook is used to track the number of renders**
    const renders = useRef(1)

    // useRef hook is used to track the previous name state**
    const prevName = useRef('')

    useEffect(() => {
        // Increment the render count**
        renders.current = renders.current + 1

        // Set the previous name state**
        prevName.current = name
    }, [name])

    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>Prev Name State {prevName.current}</h2>
            <input type="text" className="form-control mb-3" onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
export default UseRefExample2

// The useState hook is used to manage the state of the component. The name state variable stores the current value of the input field.

// The useEffect hook is used to perform side effects in the component. In this example, the useEffect hook is used to track the number of renders and the previous name state.

// The useRef hook is used to create a ref object. A ref object is a mutable object that can be used to store a value between renders. In this example, the renders and prevName ref objects are used to track the number of renders and the previous name state, respectively.

// The useEffect hook is only re-run when the dependencies change. In this case, the dependency is the name state variable. So, the useEffect hook will be re-run every time the user changes the input field.

// Here is a breakdown of what happens when the user types a character into the input field:

// The input field's onChange event handler is triggered.
// The setName function is called with the new value of the input field.
// The useState hook updates the name state variable with the new value.
// The useEffect hook is re-run because the name state variable has changed.
// The useEffect hook increments the render count and sets the previous name state.
// The component is re-rendered.

// This is a very simple example of how to use the useEffect and useRef hooks in React. These hooks can be used to implement many different types of side effects, such as fetching data, manipulating the DOM, and setting timers.