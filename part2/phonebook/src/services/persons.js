import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'production' ? '/api/persons' : 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (personObject) => {
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const remove = (personId) => {
    return axios.delete(`${baseUrl}/${personId}`)
}

const update = (personId, personObject) => {
    const request = axios.put(`${baseUrl}/${personId}`, personObject)
    return request.then(response => response.data)
}

const personService = {
    getAll, create, remove, update
}


export default personService