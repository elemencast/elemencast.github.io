import { remote } from '../http'

export const getContent = () => remote.get('', {})
