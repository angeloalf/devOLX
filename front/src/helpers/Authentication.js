import Cookies from 'js-cookie'

export const isLogged = () => {
    let token = Cookies.get('token')
    return (token) ? true : false
}

export const doLogin = (token, rememberPassword = false) => {
    if (rememberPassword) {
        Cookies.set('token', token, {expires:999}) // expira em 999 dias
    } else {
        Cookies.set('token', token)
    }
}

// pderia ser assim também
//function isLogged() {
    //let token = Cookies.get('token')
    //return (token) ? true : false
//}

//export default isLogged

//Obs.: Para isso voce teria que alterar o index.js
// de => import {isLogged} from '../../../helpers/Authentication'
// para => // import isLogged from '../../../helpers/Authentication'
// ou seja, sem chaves quando usa o export default