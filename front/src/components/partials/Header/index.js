import React from 'react'
import {Link} from 'react-router-dom' // component Link para a raiz (home)

import {HeaderArea} from './styled' 

import {isLogged} from '../../../helpers/Authentication'

function Header() {
    let logged = isLogged() // true or false

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
                        {logged && // se true
                            <>
                                <li><Link to="/account">Minha Conta</Link></li>
                                <li><Link to="/logout">Sair</Link></li>
                                <li><Link to="/post"  className="button">Inserir Anúncio</Link></li>
                            </>
                        }
                        {!logged && // se false
                            <>
                                <li><Link to="/signin">Login</Link></li>
                                <li><Link to="/signup">Cadastrar</Link></li>
                                <li><Link to="/signin"  className="button">Inserir Anúncio</Link></li>
                            </>
                        }                                                
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    
    </>

    )
}

export default Header