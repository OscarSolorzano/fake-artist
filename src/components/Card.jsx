import { useState } from 'react'

function Card({word, index}) {
    const [showResults, setShowResults] = useState(false)
    const onClick = (e) => {
        setShowResults(!showResults)}
    return (
        <>
            <div class="card text-center mb-3">
            <div class="card-body">
                <h5 class="card-title">{index +1}</h5>
                { showResults ? <p class="card-text">{word}</p> : null }
                <a class="btn btn-primary" onClick={onClick}>Go somewhere</a>
            </div>
            </div>
        </>
    )
}



export default Card