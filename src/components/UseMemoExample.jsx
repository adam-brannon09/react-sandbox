import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {
    // State variables to track 'number' and 'increment'
    const [number, setNumber] = useState(1)
    const [increment, setIncrement] = useState(0)

    // If not using useMemo() the following function would be used> const sqrt = getSqrt(number)
    // Calculate the square root of 'number' using useMemo to optimize performance
    const sqrt = useMemo(() => getSqrt(number), [number])

    // Ref to keep track of the number of renders
    const renders = useRef(1)

    // Effect to increment the render count
    useEffect(() => {
        renders.current++
    })

    // Function to handle button click and increment 'increment'
    const onClick = () => {
        setIncrement((prevState) => {
            console.log(prevState + 1)
            return prevState + 1
        })
    }

    return (
        <div>
            {/* Input for 'number' with an onChange handler */}
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <h2 className="my-3">
                {/* Display the square root of 'number' */}
                The square root of {number} is {sqrt}
            </h2>
            {/* Button to trigger a re-render */}
            <button className='btn btn-primary' onClick={onClick}>Re Render</button>
            {/* Display the number of renders */}
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}

// Function to calculate the square root of a number (for demonstration purposes)
// The for loop is used to simulate a long running process
function getSqrt(num) {
    for (let i = 0; i < 1000; i++) {
        console.log(i)
    }
    console.log('getSqrt function called')
    return Math.sqrt(num)
}

export default UseMemoExample
