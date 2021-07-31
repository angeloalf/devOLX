import React from 'react'
import {Link} from 'react-router-dom' // importa o Link de router-dom

function Page() {

    return (<>
        <h1>Página home</h1>

        <Link to="/sobre">Sobre</Link>
    
    </>)
}

export default Page