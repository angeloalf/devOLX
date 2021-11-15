import React, {useState} from 'react'
import { PageContainer, PageTitle } from '../../components/MainComponents'
import { PageArea } from './styled'


const Page = () => {
    // cria os states
    const [email, setemail] = useState('') 
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    // cria a função enviar()
    const enviar = (e) => {
        e.preventDefault()   // evita consultar dados sem o preecnimento de todos dados             
        setDisabled(true)    // desabilita comandos do formulário


    }
    return (<>
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form onSubmit={enviar}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" disabled={disabled}></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" disabled={disabled}></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input className="area--check"  type="checkbox" disabled={disabled}></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>                  
    
    </>)
}

export default Page