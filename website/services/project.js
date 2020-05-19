import fetch from 'isomorphic-fetch'
import auth from './auth'

const getAll = () => {
    let options = auth()
    
    return fetch(`${process.env.API_URL}/projects`, options)
    .then((response) => response.json())
}

const get = (id) => {
    let options = auth()
    
    return fetch(`${process.env.API_URL}/project/${id}`, options)
    .then((response) => response.json())
}

const getHighlighted = () => {
    let options = auth()
    
    return fetch(`${process.env.API_URL}/projects/highlighted`, options)
    .then((response) => response.json())
}

export default {
    getAll,
    get,
    getHighlighted
}