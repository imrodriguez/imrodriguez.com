import fetch from 'isomorphic-fetch'
import auth from './auth'

const getAll = () => {
    let options = auth()
    
    return fetch(`${process.env.API_URL}/pages`, options)
    .then((response) => response.json())
}

const get = (id) => {
    let options = auth()

    return fetch(`${process.env.API_URL}/page/${id}`, options)
    .then((response) => response.json())
}

export default {
    getAll,
    get
}