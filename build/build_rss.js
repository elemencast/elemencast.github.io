let RSS = require('rss');
let fs = require('fs');
let path = require('path');

let currentDate = new Date();
currentDate = currentDate.toISOString();

let feed = new RSS({
    title: 'elemencast',
    description: 'Drops de conteúdo direto sobre diversos assuntos relacionados a Front-end, Javascript, CSS, SASS, Pug, HTML5, programação funcional, NodeJS, mapas e GIS e qualquer outra coisa que eu achar maneira. Me segue nas redes sociais (@luiguild) e vem trocar ideia comigo!',
    feed_url: 'http://elemencast.github.io/static/rss.xml',
    site_url: 'http://elemencast.github.io',
    link: 'http://elemencast.github.io',
    image_url: 'http://elemencast.github.io/static/img/seo.png',
    managingEditor: 'Luigui Delyer',
    webMaster: 'elemencast@s1x.com.br (Luigui Delyer)',
    copyright: '2018 - Luigui Delyer',
    language: 'pt-br',
    categories: [
        'Front-end',
        'HTML5',
        'Javascript',
        'JS',
        'CSS',
        'SASS',
        'Vue',
        'Web Components',
        'Web Development',
        'Atomic Design'
    ],
    image: {
        title: 'elemencast',
        link: 'http://elemencast.github.io',
        url: 'http://elemencast.github.io/static/img/seo.png'
    },
    pubDate: currentDate,
    ttl: '60',
    custom_namespaces: {
        'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
        { 'itunes:keywords': 'Front-end, HTML5, Javascript, CSS, SASS, Web Components, Web Development, Atomic Design' },
        { 'itunes:author': 'Luigui Delyer (elemencast)' },
        { 'itunes:explicit': 'no' },
        { 'itunes:subtitle': 'Que tal explodir seu código todo em componentes?' },
        { 'itunes:summary': 'Drops de conteúdo direto sobre diversos assuntos relacionados a Front-end, Javascript, CSS, SASS, Pug, HTML5, programação funcional, NodeJS, mapas e GIS e qualquer outra coisa que eu achar maneira. Me segue nas redes sociais (@luiguild) e vem trocar ideia comigo!' },
        {
            'itunes:owner': [
                { 'itunes:name': 'Luigui Delyer' },
                { 'itunes:email': 'elemencast@s1x.com.br' }
            ]
        },
        {
            'itunes:image': {
                _attr: {
                    href: 'http://elemencast.github.io/static/img/seo.png'
                }
            }
        },
        {
            'itunes:category': [
                {
                    _attr: {
                        text: 'Technology'
                    }
                },
                {
                    'itunes:category': {
                        _attr: {
                            text: 'Podcasting'
                        }
                    }
                },
                {
                    'itunes:category': {
                        _attr: {
                            text: 'Software How-To'
                        }
                    }
                }
            ]
        }
    ]
});

let episodesJSON = fs.readFileSync("./static/json/episodios.json");
let data = JSON.parse(episodesJSON);

/* loop over data and add to feed */
data.episodios.forEach((ep, indx) => {
    feed.item({
        title: `#${indx} [${ep.titulo.resumido}] ${ep.titulo.completo}`,
        description: `${ep.descricao}`,
        url: `http://elemencast.github.io/#/episodios/${indx+1}`,
        author: 'Luigui Delyer',
        date: ep.data,
        lat: -22.8808,
        long: -43.1043,
        enclosure: {
            url: `http://elemencast.github.io${ep.audio}`,
            file: `.${ep.audio}`
        },
        image: {
            title: 'elemencast',
            link: 'http://elemencast.github.io',
            url: 'http://elemencast.github.io/static/img/seo.png'
        },
        custom_elements: [
            { 'itunes:author': 'Luigui Delyer' },
            { 'itunes:subtitle': `#${indx} [${ep.titulo.resumido}] ${ep.titulo.completo}` },
            { 'itunes:summary': `${ep.descricao}` },
            { 'itunes:duration': `${ep.duracao}` },
            { 'itunes:explicit': 'no' },
            { 'itunes:block': 'no' },
            { 'itunes:owner': [
                    { 'itunes:name': 'Luigui Delyer' },
                    { 'itunes:email': 'elemencast@s1x.com.br' }
                ]
            },
        ]
    });
});
// cache the xml to send to clients
let xml = feed.xml();

fs.writeFileSync("./static/rss.xml", xml);
