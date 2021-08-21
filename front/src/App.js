import React from 'react'
// definir rotas
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

// importando componentes do Template
import {Template} from './components/MainComponents'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

function App() {
  return (<>

  <BrowserRouter>
    <Template>
      <Header />

      <Routes />

      <Footer />

    </Template>
  </BrowserRouter>
    
  
  
  </>)
}

export default App;
