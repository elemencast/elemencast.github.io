import { endpoints } from '@/config'
import axios from 'axios'

const remote = axios.create({
    baseURL: endpoints.active,
    timeout: 100000
})

export default remote
