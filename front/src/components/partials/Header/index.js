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
            </div>
        </HeaderArea>
    
    </>

    )
}

export default Header