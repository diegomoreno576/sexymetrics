import { useCallback, useContext, useState, useEffect } from "react"
import { ThemeContext } from '../context';
import { setCurrentuser } from "../actions";
import  UserContext  from "../context/userContext"
import loginService from "../services/login"

export default function useUser () {

    const { jwt, setJWT } = useContext(UserContext)
    const [state, dispatch] = useContext(ThemeContext);
   
    const [loading, setloading] = useState( {loading: false, error: false} )

    const login = useCallback(({user:{ username, password }}) => {
        setloading({loading: true, error: false})

    loginService({user:{ username, password }})
        .then(data => {
            dispatch(setCurrentuser(data.user.data));
            window.sessionStorage.setItem('jwt', data.token)
            window.sessionStorage.setItem('blog', JSON.stringify(data.blog) )
            setloading({loading: false, error: false})
            setJWT(data.token)
        })
        .catch(err => {
            window.sessionStorage.removeItem('jwt', jwt)
            window.sessionStorage.removeItem('blog')
            setloading({loading: false, error: true})
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
        isLoginLoading: loading.loading,
        hasLoginError: loading.error,
        login,
        logout
        

    }
}