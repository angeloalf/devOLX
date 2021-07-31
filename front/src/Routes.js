import React from 'react'
import { Switch, Route} from 'react-router' // define rotas

import Home from './pages/Home'
import Sobre from './pages/Sobre'

function Routes() {

    return (<>
        <Switch>            
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/sobre">
                <Sobre />
            </Route>
        </Switch>
    
    </>)
}

export default Routes