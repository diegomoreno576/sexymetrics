import { APP_URL } from "../constants";


export default function deleteConexionService (id) {
    return fetch(`${APP_URL}/api/v1/connection_delete`,{
        method: 'DELETE',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            "id":id
        })
        
    }).then(res=> {
        
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
}