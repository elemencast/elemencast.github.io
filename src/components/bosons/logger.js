import config from '@/config'
const prefix = config.prefix

let logCounter = 0
let errorCounter = 0
let fatalCounter = 0
let warnCounter = 0

/**
 * Logger constructor
 * @param  {String} type - Type of the log message
 * @param  {String} _message - Your log text
 * @param  {Object} _object - If you pass an object or array, it's will be put together
 * @return {Function}
 */
const logControll = (type, _message, _object) => {
    const object = _object !== undefined
        ? _object
        : ''

    const messageMaker = (counter, message) =>
        `${logCounter} [${type}|${prefix}] ${message}`

    switch (type) {
    case 'LOG':
        logCounter++
        return console.log(
            messageMaker(logCounter, _message),
            object
        )
    case 'WARN':
        warnCounter++
        return console.warn(
            messageMaker(warnCounter, _message),
            object
        )
    case 'ERROR':
        errorCounter++
        return console.error(
            messageMaker(errorCounter, _message),
            object
        )
    case 'FATAL':
        fatalCounter++
        throw new Error(
            messageMaker(fatalCounter, _message)
        )
    default:
        return console.log(_message, object)
    }
}

/**
 * Add conter and prefix and execute simple console.log()
 * @param  {String} message - Your log text
 * @param  {Object} object - If you pass an object or array, it's will be put together
 * @return {Function}
 */
export const log = (message, object) =>
    logControll('LOG', message, object)

/**
 * Add conter and prefix and execute console.warn()
 * @param  {String} message - Your log text
 * @param  {Object} object - If you pass an object or array, it's will be put together
 * @return {Function}
 */
export const warn = (message, object) =>
    logControll('WARN', message, object)

/**
 * Add conter and prefix and execute console.error()
 * @param  {String} message - Your log text
 * @param  {Object} object - If you pass an object or array, it's will be put together
 * @return {Function}
 */
export const error = (message, object) =>
    logControll('ERROR', message, object)

/**
 * Add conter and prefix and create a throw new Error()
 * @param  {String} message - Your log text
 * @return {Function}
 */
export const fatal = message =>
    logControll('FATAL', message)
