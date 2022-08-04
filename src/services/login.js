const ENDPOINT = 'https://notecopies.herokuapp.com';

export default function loginService ({ email, password }) {
    return fetch(`${ENDPOINT}/auth/login`,{
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
        
    }).then(res=> {
        if (!res.ok) throw new Error('Response is no ok')
        return res.json()
    }).then(res=> {
        //const { jwt} = res
        return res
    })
}