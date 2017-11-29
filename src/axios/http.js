import endpoints from './endpoints'
import axios from 'axios'

const http = axios.create({
    baseURL: endpoints('development'),
    timeout: 100000
})

export default http
