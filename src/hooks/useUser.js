import { useCallback, useContext, useState, useEffect } from "react"
import { ThemeContext } from '../context';
import { setCurrentuser } from "../actions";
import  UserContext  from "../context/userContext"
import loginService from "../services/login"
import registerService from "../services/register"
import registerServiceFacebook from "../services/continue_with_facebook";
import currentUser from "../services/currentUser";

export default function useUser () {

    const { jwt, setJWT } = useContext(UserContext)
    const [state, dispatch] = useContext(ThemeContext);
    const [loading, setloading] = useState( {loading: false, error: false} )
    const [user, setUser] = useState(null)
 
    const login = useCallback(({user:{ email, password }}) => {
        setloading({loading: true, error: false})

    loginService({user:{ email, password }})
        .then(data => {
            dispatch(setCurrentuser(data));
            window.sessionStorage.setItem('jwt', data.token)
            window.sessionStorage.setItem('company', JSON.stringify(data.company) )
            setloading({loading: false, error: false})
            setJWT(data.token)
        })
        .catch(err => {
            window.sessionStorage.removeItem('jwt', jwt)
            window.sessionStorage.removeItem('company')
            setloading({loading: false, error: true})
            console.error(err)
        })
    }, [setJWT])

    const register = useCallback((user) => {
        
        setloading({loading: true, error: false})

        registerService(user)
            .then(data => {

                dispatch(setCurrentuser(data));
                window.sessionStorage.setItem('jwt', data.token)
                window.sessionStorage.setItem('company', JSON.stringify(data.company) )
                setloading({loading: false, error: false})
                setJWT(data.token)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt', jwt)
                window.sessionStorage.removeItem('company')
                setloading({loading: false, error: true})
                console.error(err)
            })
    }, [setJWT])


    const continueWithFacebook = useCallback((facebook_access_token) => {

        setloading({loading: true, error: false})

    registerServiceFacebook(facebook_access_token)
        .then(data => {
            dispatch(setCurrentuser(data));
            window.sessionStorage.setItem('jwt', data.token)
            window.sessionStorage.setItem('company', JSON.stringify(data.company) )
            setloading({loading: false, error: false})
            setJWT(data.token)
        })
        .catch(err => {
            window.sessionStorage.removeItem('jwt', jwt)
            window.sessionStorage.removeItem('company')
            setloading({loading: false, error: true})
            console.error(err)
        })
    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
        window.sessionStorage.removeItem('jwt', jwt)
    })    


    useEffect(() => {
        if(state.currentuser.length == 0){
            currentUser()
            .then(data => {
                dispatch(setCurrentuser(data));
                window.sessionStorage.setItem('jwt', data.token)
                window.sessionStorage.setItem('company', JSON.stringify(data.company) )
                setJWT(data.token)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt', jwt)
                window.sessionStorage.removeItem('company')
                setJWT(null)
                console.error(err)
            })
        }
    }, [state.currentuser])
    return {
        isLogged: Boolean(jwt),
        isLoginLoading: loading.loading,
        hasLoginError: loading.error,
        login,
        register,
        continueWithFacebook,
        logout
        

    }
}