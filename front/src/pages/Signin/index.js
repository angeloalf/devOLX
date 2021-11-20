import React, {useState} from 'react'
import { PageContainer, PageTitle } from '../../components/MainComponents'
import { PageArea } from './styled'
import useApi from '../../helpers/OlxApi'
import { doLogin } from '../../helpers/Authentication'


const Page = () => {
    const api = useApi(); // cria o obejto api
    // cria os states
    const [email, setemail] = useState('') 
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('') // trata erro do json

    // cria a função enviar()
    const enviar = async(e) => {
        e.preventDefault()   // evita consultar dados sem o preecnimento de todos dados             
        setDisabled(true)    // desabilita comandos do formulário

        const json = await api.login(email, password)

        if(json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = '/';
        }
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