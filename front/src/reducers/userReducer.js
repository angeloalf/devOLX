const initialState = { // cria o objeto initialState
    email: ''
}

// cria a função userReducer (state)
const userReducer = (state = initialState, action) => {
    switch(action.type) { // uso do switch no JSX
       case 'SET_EMAIL':
           return {...state, email: action.payload.email} 
        default:
            return {...state}
    }
}

export default userReducer