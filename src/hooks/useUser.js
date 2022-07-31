import { useCallback, useContext, useState } from "react"
import  UserContext  from "../context/userContext"
import loginService from "../services/login"

export default function useUser () {

    const { jwt, setJWT } = useContext(UserContext)
   
    const [state, setState] = useState( {loading: false, error: false} )

    const login = useCallback(({email, password}) => {
        setState({loading: true, error: false})

    loginService({email, password})
        .then(jwt => {
            window.sessionStorage.setItem('jwt', jwt)
            setState({loading: false, error: false})
            setJWT(jwt)
        })
        .catch(err => {
            window.sessionStorage.removeItem('jwt', jwt)
            setState({loading: false, error: true})
            console.error(err)
        })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    })    

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,

    }
}