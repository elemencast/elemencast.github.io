import endpoints from './endpoints'
import axios from 'axios'

const http = axios.create({
    baseURL: endpoints('production'),
    timeout: 1000000
})

export default http
