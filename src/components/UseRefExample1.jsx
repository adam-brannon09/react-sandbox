//This is an example of how to use the useRef() hook to target DOM elements in React. 

// Import the useRef hook from React.
import { useRef } from "react";

// Define a component called UseRefExample1.
function UseRefExample1() {

    // Create two refs, one for the input element and one for the paragraph element.
    const inputRef = useRef();
    const paraRef = useRef();

    // Define a function to handle the form submit event.
    const onSubmit = (e) => {
        // Prevent the default form submit behavior.
        e.preventDefault();

        // Log the value of the input element to the console.
        console.log(inputRef.current.value);

        // Set the value of the input element to "Hello".
        inputRef.current.value = "Hello";

        // Set the background color of the input element to blue.
        inputRef.current.style.backgroundColor = "blue";

        // Set the inner text of the paragraph element to "Goodbye".
        paraRef.current.innerText = "Goodbye";
    };

    // Return the JSX for the component.
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    ref={inputRef}
                    className="form-control"
                    id="name"
                />
                <br />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>
                Hello
            </p>
        </div>
    );
}
// Here are some additional comments that could be added to the code:

// inputRef and paraRef: The inputRef and paraRef refs are used to access the input element and paragraph element, respectively. This allows us to interact with the elements in our component code.

// onSubmit function: The onSubmit function is triggered when the form is submitted. In this function, we log the value of the input element to the console, set the value of the input element to "Hello", set the background color of the input element to blue, and set the inner text of the paragraph element to "Goodbye".

// onClick event handler: The onClick event handler on the paragraph element calls the focus() method on the input element. This will focus the input element when the paragraph element is clicked.

// Export the component.
export default UseRefExample1;




// The useRef() hook in React is used to access DOM elements or React elements created in the render method. It can also be used to store mutable values that do not cause a re-render when updated.

// Here are some common use cases for useRef():

// Accessing DOM elements: Refs can be used to access DOM elements directly, without having to rely on props or state. This can be useful for things like focusing an input element, scrolling to a particular element, or animating an element.
// Measuring DOM elements: Refs can be used to measure the size and position of DOM elements. This can be useful for things like creating responsive layouts or positioning elements relative to each other.
// Controlling animations: Refs can be used to control animations directly. This can be useful for things like creating custom scrollbars or animations that are synchronized with the DOM.
// Storing mutable values: Refs can be used to store mutable values that do not cause a re-render when updated. This can be useful for things like caching data or storing the state of a component that is not managed by React.
// To use useRef(), you first need to create a ref object by calling the useRef() hook. Then, you can pass the ref object to the element or component that you want to access. Once the element or component has mounted, you can access it through the ref object's current property.