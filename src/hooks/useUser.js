import { useCallback, useContext, useState, useEffect } from "react"
import  UserContext  from "../context/userContext"
import loginService from "../services/login"

export default function useUser () {

    const { jwt, setJWT } = useContext(UserContext)
   
    const [state, setState] = useState( {loading: false, error: false} )

    const login = useCallback(({user:{ username, password }}) => {
        setState({loading: true, error: false})

    loginService({user:{ username, password }})
        .then(data => {
            window.sessionStorage.setItem('jwt', data.token)
            window.sessionStorage.setItem('blog', JSON.stringify(data.blog) )
            setState({loading: false, error: false})
            setJWT(data.token)
        })
        .catch(err => {
            window.sessionStorage.removeItem('jwt', jwt)
            window.sessionStorage.removeItem('blog')
            setState({loading: false, error: true})
            console.error(err)
        })
    }, [setJWT])

 




    const logout = useCallback(() => {
        setJWT(null)
        window.sessionStorage.removeItem('jwt', jwt)
        window.sessionStorage.removeItem('blog')
    })    


    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
        

    }
}