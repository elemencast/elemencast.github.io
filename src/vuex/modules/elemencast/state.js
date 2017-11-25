// import Vue from 'vue'

export default {
    episodios: [
        {
            titulo: '',
            subtitulo: '',
            audio: ''
        }
    ],
    player: {},
    canvas: {},
    currentTime: '00:00',
    audioStatus: 'stop',
    links: [
        {
            href: '/episodios',
            titulo: 'episódios'
        },
        {
            href: '/sobre',
            titulo: 'sobre'
        }
    ],
    icones: [
        {
            href: 'https://www.github.com/luiguild',
            imagem: '/static/img/github.svg'
        },
        {
            href: 'https://www.twitter.com/luiguild',
            imagem: '/static/img/twitter.svg'
        },
        {
            href: 'https://telegram.me/luiguild',
            imagem: '/static/img/telegram.svg'
        },
        {
            href: 'mailto:elemencast@s1x.com.br',
            imagem: '/static/img/email.svg'
        },
        {
            href: 'https://www.instagram.com/luiguild',
            imagem: '/static/img/instagram.svg'
        },
        {
            href: 'https://www.facebook.com/luiguild',
            imagem: '/static/img/facebook.svg'
        }
    ]
}
