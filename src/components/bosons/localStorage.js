import config from '@/config'
const prefix = config.prefix

const localStorage = window.localStorage

export const set = (key, _value) => {
    try {
        const value = JSON.stringify(_value)

        localStorage[`${prefix}${key}`] = value

        return Promise.resolve(_value)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const get = (key, defaultValue) => {
    try {
        const value = localStorage[`${prefix}${key}`]

        if (value === undefined) {
            return Promise.resolve(defaultValue)
        }

        return Promise.resolve(JSON.parse(value))
    } catch (e) {
        return Promise.reject(e)
    }
}

export const remove = key => {
    try {
        const result = localStorage.removeItem(`${prefix}${key}`)

        return Promise.resolve(result)
    } catch (e) {
        return Promise.reject(e)
    }
}

export const clear = () => {
    try {
        const result = localStorage.clear()

        return Promise.resolve(result)
    } catch (e) {
        return Promise.reject(e)
    }
}
