import { remote } from '../http'

export const put = data => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }

    return remote.put(
        '',
        data,
        { headers }
    )
}
