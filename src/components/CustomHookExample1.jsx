import useFetch from "../hooks/useFetch";

function CustomHookExample1() {

    // https://jsonplaceholder.typicode.com/posts is a fake online REST API for Testing and Prototyping

    // This is an easy way to test your code
    // const res = useFetch('https://jsonplaceholder.typicode.com/posts', {})
    // console.log(res)
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if (loading) return <div>Loading...</div>


    return (
        <div>
            {data.map((post) => (
                {/* I made the results list items so they would be bulleted */ }
                < li key = { post.id } > { post.title }</li>

    ))
}
        </div >
    )
}
export default CustomHookExample1