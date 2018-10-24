module.exports = {
    title: 'Euphymia',
    description: 'Welcome, friend! ',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [{
            text: 'Home',
            link: '/'
        },
        {
            text: 'Blog',
            link: '/blog/'
        },
        {
            text: 'Discuss',
            link: '/discuss/'
        },
        {
            text: 'Docs',
            link: '/logs/'
        },
        {
            text: 'Code',
            items: [{
                text: 'C/C++',
                link: '/algorithm/cpp/'
            },
            {
                text: 'Python',
                link: '/algorithm/python/'
            },
            {
                text: 'Leetcode',
                link: '/algorithm/leetcode/'
            },
            {
                text: 'Web&JS',
                link: '/algorithm/web/'
            }
            ]
        },
        {
            text: 'About',
            items: [{
                text: 'Main Blog',
                link: 'https://www.weigao.cc'
            }, {
                text: 'GitHub',
                link: 'https://github.com/chenweigao'
            }]
        }
        ],
        sidebar: {
            '/blog/': [
                '',
                'firstblog',
                'second'
            ],
            '/': [
                '',
            ]
        }
    }
}