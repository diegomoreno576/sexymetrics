import { APP_URL } from "../constants";


export default function currentUser () {

    return fetch(`${APP_URL}/api/v1/current_user`,{
        method: 'GET',
        headers: {
            "content-Type": "application/json",
            'token': sessionStorage.getItem("jwt") 
        },
        
    }).then(res=> {
        
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
    
}