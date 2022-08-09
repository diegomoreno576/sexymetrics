import { APP_URL } from "../constants";


export default function loginService ({user:{ username, password }}) {
    return fetch(`${APP_URL}/api/v1/login`,{
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({user:{ username, password }})
        
    }).then(res=> {
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
}