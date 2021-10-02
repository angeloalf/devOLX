import React from 'react'
import {Link} from 'react-router-dom' // component Link para a raiz (home)

import {HeaderArea} from './styled' 

function Header() {
    return (<>
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logoO">O</span>
                        <span className="logoL">L</span>
                        <span className="logoX">X</span>
                    </Link>

                </div>
                <nav>
                    <ul>
                        <li><Link to="">Login</Link></li>
                        <li><Link to="">Cadastrar</Link></li>
                        <li><Link to=""  className="button">Inserir Anúncio</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    
    </>

    )
}

export default Header