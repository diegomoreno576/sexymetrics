import { APP_URL } from "../constants";


export default function registerService (user) {
    return fetch(`${APP_URL}/api/v1/register`,{
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ user })
        
    }).then(res=> {
        
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
}