import React from 'react'

const Historial = ({match, location, Historial}) => (
    <>
        <div>
            { JSON.stringify(match)} <br></br>
            { JSON.stringify(location)}<br></br>
            { JSON.stringify(Historial)}<br></br>
        </div>
    </>
)

export default Historial