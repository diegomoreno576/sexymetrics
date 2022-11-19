
import { APP_URL } from "../constants";


export default function registerServiceFacebook (facebook_access_token) {
    return fetch(`${APP_URL}/api/v1/register_facebook`,{
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({facebook_access_token})
        
    }).then(res=> {
        
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
}