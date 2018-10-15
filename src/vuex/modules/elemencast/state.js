// import Vue from 'vue'

export default {
    currentEpisode: {},
    allEpisodes: [],
    informationPopup: false,
    player: null,
    canvas: null,
    currentTime: '00:00',
    audioStatus: 'stop',
    links: [
        {
            href: '/episodios',
            title: 'episódios'
        },
        {
            href: '/sobre',
            title: 'sobre'
        }
    ],
    icons: [
        {
            href: 'https://elemencast.github.io/static/rss.xml',
            image: '/static/img/feed.svg',
            name: 'feed rss'
        },
        {
            href: 'https://open.spotify.com/show/5Chtv58MNINrj6ADC5e8ak?si=7wQaBy4XRnGnqI5SOXpKLQ',
            image: '/static/img/spotify.svg',
            name: 'spotify'
        },
        {
            href: 'https://www.github.com/luiguild',
            image: '/static/img/github.svg',
            name: 'github'
        },
        {
            href: 'https://www.twitter.com/luiguild',
            image: '/static/img/twitter.svg',
            name: 'twitter'
        },
        {
            href: 'https://telegram.me/luiguild',
            image: '/static/img/telegram.svg',
            name: 'telegram'
        },
        {
            href: 'mailto:elemencast@s1x.com.br',
            image: '/static/img/email.svg',
            name: 'email'
        },
        {
            href: 'https://www.instagram.com/luiguild',
            image: '/static/img/instagram.svg',
            name: 'instagram'
        },
        {
            href: 'https://www.facebook.com/luiguild',
            image: '/static/img/facebook.svg',
            name: 'facebook'
        }
    ],
    tools: [
        {
            type: 'hardware',
            area: 'microfone',
            href: 'https://zoom-na.com/products/field-video-recording/video-recording/zoom-q4-handy-video-recorder',
            title: ['ZOOM Q4'],
            subtitle: 'The Camera for Creators'
        },
        {
            type: 'softwares',
            area: 'edição de áudio',
            href: 'http://www.audacityteam.org/',
            title: ['AUDACITY'],
            subtitle: 'Audacity® is free, open source, cross-platform audio software for multi-track recording and editing'
        },
        {
            area: 'design',
            href: 'https://gravit.io/',
            title: ['GRAVIT DESIGNER'],
            subtitle: 'A cross-platform design tool for the 21st century'
        },
        {
            area: 'edição de texto',
            href: 'https://www.libreoffice.org/',
            title: ['LIBREOFFICE'],
            subtitle: 'Its clean interface and feature-rich tools help you unleash your creativity and enhance your productivity'
        },
        {
            type: 'webdev',
            area: 'framework Javascript',
            href: 'http://vuejs.org/',
            title: ['VUEJS'],
            subtitle: 'The progressive JavaScript framework'
        },
        {
            area: 'gerência de estados',
            href: 'https://vuex.vuejs.org/',
            title: ['VUEX'],
            subtitle: 'A state management pattern + library for Vue.js applications'
        },
        {
            area: 'gerenciador de requisições ajax',
            href: 'https://github.com/axios/axios',
            title: ['AXIOS'],
            subtitle: 'Promise based HTTP client for the browser and node.js'
        },
        {
            area: 'webplayer',
            href: 'https://github.com/wayou',
            title: ['WAYOU LIU'],
            subtitle: 'HTML5 Audio Visualizer'
        },
        {
            area: 'template engine',
            href: 'http://pugjs.org/',
            title: ['PUGJS'],
            subtitle: 'Robust, elegant, feature rich template engine for Node.js'
        },
        {
            area: 'pre-processor css',
            href: 'http://sass-lang.com/',
            title: ['SASS'],
            subtitle: 'CSS with superpowers'
        },
        {
            type: 'trilha sonora',
            href: 'http://dig.ccmixter.org/',
            title: ['KARA SQUARE Transmutation', 'DysfunctionAL Where you are'],
            subtitle: 'DIG CC MIXTER',
            image: '/static/img/cc.png'
        }
    ]
}
