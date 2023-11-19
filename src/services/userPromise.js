import axios from 'axios'

//Промисы пока не добавлены в логику, для облегчения проверки без json сервера
const baseUrl = 'http://localhost:3001/users'

const getUsers = () => {
   const request = axios.get(baseUrl)
   return request.then(response => response.data)
}

const register = newObject => {
   const request = axios.post(baseUrl, newObject)
   return request.then(response => response.data)
}

const auth = (newObject) => {
   const request = axios.post(baseUrl, newObject)
   return request.then(response => response.data)
}

export default { getUsers, register, auth }