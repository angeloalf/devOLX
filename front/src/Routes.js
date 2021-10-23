import React from 'react'
import { Switch, Route} from 'react-router' // define rotas

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'

function Routes() {

    return (<>
        <Switch>            
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/sobre">
                <Sobre />
            </Route>
            <Route>
                <NotFound />
            </Route>

        </Switch>
    
    </>)
}

export default Routes