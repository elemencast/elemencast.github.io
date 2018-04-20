import http from '../http'

export const getAll = () =>
    http.get('/static/json/episodios.json', {})
        .then(response => response.data)
        .then(data => data.episodios.map((elm, indx) => {
            return {
                ...elm,
                id: (indx + 1).toString()
            }
        }))
