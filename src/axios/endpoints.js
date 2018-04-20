import { logger } from '@/components/bosons'
import config from '@/config'

const host = level => {
    switch (level) {
    case 'stage':
        if (config.stage === undefined ||
            config.stage === '' ||
            typeof config.stage !== 'string') {
            return logger.typeError('Informe a URL correta de stage')
        }
        return config.stage

    case 'development':
        if (config.development === undefined ||
            config.development === '' ||
            typeof config.development !== 'string') {
            return logger.typeError('Informe a URL correta de development')
        }
        return config.development

    case 'production':
        if (config.production === undefined ||
            config.production === '' ||
            typeof config.production !== 'string') {
            return logger.typeError('Informe a URL correta de production')
        }
        return config.production

    default:
        if (config.production === undefined ||
            config.production === '' ||
            typeof config.production !== 'string') {
            return logger.typeError('Informe a URL correta de production')
        }
        return config.production
    }
}

const endpoints = (_level) => {
    if (_level === undefined ||
        typeof _level !== 'string') {
        logger.typeError('Você precisa informar um level correto para consumir a API')
        return null
    }

    const level = `${host(_level)}/`

    return level
}

export default endpoints
