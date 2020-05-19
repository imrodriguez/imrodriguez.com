import fetch from 'isomorphic-fetch'
import auth from './auth'

const getAll = () => {
    let options = auth()

    return fetch(`${process.env.API_URL}/blog`, options)
    .then((response) => response.json())
}

const get = (id) => {
    let options = auth()

    return fetch(`${process.env.API_URL}/post/${id}`, options)
    .then((response) => response.json())
}

export default {
    getAll,
    get
}