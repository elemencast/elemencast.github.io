// import Vue from 'vue'

export default {
    episodios: [
        {
            titulo: '',
            subtitulo: '',
            audio: ''
        }
    ],
    player: null,
    canvas: null,
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
            href: '/static/audio/ep1-atomic-design.mp3',
            imagem: '/static/img/download.svg',
            nome: 'download'
        },
        {
            href: 'https://www.github.com/luiguild',
            imagem: '/static/img/github.svg',
            nome: 'github'
        },
        {
            href: 'https://www.twitter.com/luiguild',
            imagem: '/static/img/twitter.svg',
            nome: 'twitter'
        },
        {
            href: 'https://telegram.me/luiguild',
            imagem: '/static/img/telegram.svg',
            nome: 'telegram'
        },
        {
            href: 'mailto:elemencast@s1x.com.br',
            imagem: '/static/img/email.svg',
            nome: 'email'
        },
        {
            href: 'https://www.instagram.com/luiguild',
            imagem: '/static/img/instagram.svg',
            nome: 'instagram'
        },
        {
            href: 'https://www.facebook.com/luiguild',
            imagem: '/static/img/facebook.svg',
            nome: 'facebook'
        }
    ],
    ferramentas: [
        {
            tipo: 'hardware',
            area: 'microfone',
            href: 'https://zoom-na.com/products/field-video-recording/video-recording/zoom-q4-handy-video-recorder',
            titulo: ['ZOOM Q4'],
            subtitulo: 'The Camera for Creators'
        },
        {
            tipo: 'softwares',
            area: 'edição de áudio',
            href: 'http://www.audacityteam.org/',
            titulo: ['AUDACITY'],
            subtitulo: 'Audacity® is free, open source, cross-platform audio software for multi-track recording and editing'
        },
        {
            area: 'design',
            href: 'https://gravit.io/',
            titulo: ['GRAVIT DESIGNER'],
            subtitulo: 'A cross-platform design tool for the 21st century'
        },
        {
            area: 'edição de texto',
            href: 'https://www.libreoffice.org/',
            titulo: ['LIBREOFFICE'],
            subtitulo: 'Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity'
        },
        {
            tipo: 'webdev',
            area: 'framework Javascript',
            href: 'http://vuejs.org/',
            titulo: ['VUEJS'],
            subtitulo: 'The progressive JavaScript framework'
        },
        {
            area: 'gerência de estados',
            href: 'https://vuex.vuejs.org/',
            titulo: ['VUEX'],
            subtitulo: 'A state management pattern + library for Vue.js applications'
        },
        {
            area: 'gerenciador de requisições ajax',
            href: 'https://github.com/axios/axios',
            titulo: ['AXIOS'],
            subtitulo: ' Promise based HTTP client for the browser and node.js'
        },
        {
            area: 'template engine',
            href: 'http://pugjs.org/',
            titulo: ['PUGJS'],
            subtitulo: 'Robust, elegant, feature rich template engine for Node.js'
        },
        {
            area: 'pre-processor css',
            href: 'http://sass-lang.com/',
            titulo: ['SASS'],
            subtitulo: 'CSS with superpowers'
        },
        {
            tipo: 'trilha sonora',
            href: 'http://dig.ccmixter.org/',
            titulo: ['DIG CC MIXTER', 'KARA SQUARE'],
            subtitulo: 'Transmutation',
            imagem: '/static/img/cc.png'
        }
    ]
}
