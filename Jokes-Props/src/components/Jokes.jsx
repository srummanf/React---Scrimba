import React from 'react'

function Jokes(props) {
    return (
        <>
            <h1>{props.heading}</h1>
            <p>{props.joke}</p>
            <hr></hr>
        </>
    )
}

export default Jokes