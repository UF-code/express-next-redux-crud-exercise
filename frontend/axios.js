import axios from 'axios'

const PORT = process.env.PORT_BACKEND || 3001

const axiosBaseURI = axios.create({
    baseURL: `http://localhost:3001/api/customers`,
})

export default axiosBaseURI
