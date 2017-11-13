import { remote } from '../http'

export const putContent = data => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }

    return remote.put(
        '',
        data,
        { headers }
    )
}
