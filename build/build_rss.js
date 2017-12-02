let RSS = require('rss');
let fs = require('fs');
let path = require('path');

let currentDate = new Date();
currentDate = currentDate.toISOString();

let feed = new RSS({
    title: 'elemencast',
    description: 'drops de conteúdo direto sobre diversos assuntos relacionados a Front-end, Javascript, CSS, SASS, Pug, HTML5, programação funcional, NodeJS, mapas e GIS, dentre outros ',
    feed_url: 'http://elemencast.github.io/static/rss.xml',
    site_url: 'http://elemencast.github.io',
    image_url: 'http://elemencast.github.io/static/img/letras-logo.svg',
    managingEditor: 'elemencast@s1x.net (Luigui Delyer)',
    webMaster: 'elemencast@s1x.net (Luigui Delyer)',
    copyright: '2017 Luigui Delyer',
    language: 'pt',
    categories: ['Front-end', 'Web Development', 'Atomic Design'],
    pubDate: currentDate,
    ttl: '60',
    custom_namespaces: {
        'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
        { 'itunes:subtitle': 'A show about everything' },
        { 'itunes:author': 'Luigui Delyer' },
        { 'itunes:explicit': "no"},
        { 'itunes:summary': 'drops de conteúdo direto sobre diversos assuntos relacionados a Front-end, Javascript, CSS, SASS, Pug, HTML5, programação funcional, NodeJS, mapas e GIS, dentre outros' },
        {
            'itunes:owner': [
                { 'itunes:name': 'Luigui Delyer' },
                { 'itunes:email': 'elemencast@s1x.net' }
            ]
        },
        {
            'itunes:image': {
                _attr: {
                    href: 'http://elemencast.github.io/static/img/letras-logo.svg'
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
                }
            ]
        }
    ]
});

let episodesJSON = fs.readFileSync("./static/json/episodios.json");
let data = JSON.parse(episodesJSON);

/* loop over data and add to feed */

data.episodios.forEach(ep => {
    feed.item({
        title: `${ep.titulo.resumido} - elemencast`,
        description: `${ep.titulo.completo}`,
        url: `http://elemencast.github.io${ep.audio}`,
        author: 'Luigui Delyer',
        date: currentDate, // Luigui: tem que mudar isso aqui.
        lat: -22.8808,
        long: -43.1043,
        enclosure: { url: 'http://elemencast.github.io', file: `.${ep.audio}` }, // optional enclosure
        custom_elements: [
            { 'itunes:author': 'Luigui Delyer' },
            { 'itunes:subtitle': `${ep.titulo.resumido} - elemencast` },
        ]
    });
});
// cache the xml to send to clients
let xml = feed.xml();

fs.writeFileSync("./static/rss.xml", xml);
