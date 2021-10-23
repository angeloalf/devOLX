import React from 'react'
import {Link} from 'react-router-dom' // importa Link de router-dom

const Page = () => {
    return (<>
        <h1>Página não encontrada</h1>

        <Link to="/">Ir para a Página Inicial</Link>
    
    </>)
}

export default Page