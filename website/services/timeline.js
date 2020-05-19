import fetch from 'isomorphic-fetch'
import auth from './auth'

const getAll = () => {
    let options = auth()
    
    return fetch(`${process.env.API_URL}/timeline`, options)
    .then((response) => response.json())
}

const highlighted = () => {
    let options = auth()

    return fetch(`${process.env.API_URL}/timeline/highlighted`, options)
    .then((response) => response.json())
}

export default {
    getAll,
    highlighted
}