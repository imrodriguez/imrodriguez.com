import fetch from 'isomorphic-fetch'
import auth from './auth'

const get = () => {
    let options = auth()
    
    return fetch(`${process.env.API_URL}/whoami`, options)
    .then((response) => response.json())
}

export default {
    get
}