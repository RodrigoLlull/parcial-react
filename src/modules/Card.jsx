import React from 'react'

const Card = ({name, favoriteBand}) => {
    return (
        <div>
            <h2>Hola {name}</h2>
            <p>Tu banda favorita es {favoriteBand}</p>
        </div>
    )
}

export default Card