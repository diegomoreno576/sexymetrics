import { APP_URL } from "../constants";

export default function serviceConnectAccount(brand_id, user_id, type, name, picture_url, page_id, page_type, token) {
    return fetch(`${APP_URL}/api/v1/create_conexion`,{
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            "brand_id": brand_id, 
            "user_id": user_id,
            "name":name, 
            "type": type,
            "picture_url":picture_url,
            "oauth_token": token,
            "page_id": page_id,
            "page_type": page_type
        })
        
    }).then(res=> {
        
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
}