import fetch from 'isomorphic-fetch'
import auth from './auth'

const get = (menu) => {
    let options = auth()

    return fetch(`${process.env.API_URL}/api/menu_items/${menu}`, options)
    .then((response) => response.json())
}

export default {
    get
}