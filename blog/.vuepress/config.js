module.exports = {
    title: "chh's Blog", // Title for the site. This will be displayed in the navbar.
    base: '/vuePressBlog/',
    dest: './dist',
    repo: 'https://github.com/changhengheng/vuePressBlog',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: 'Blog',
                link: '/informalessay/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/changhengheng/vuePressBlog',
                },
            ],
            copyright: [
                {
                    text: 'MIT Licensed | Copyright © 2022-present Vue.js',
                },
            ],
        },
        directories: [
            {
                id: 'informalEssay',
                dirname: '_informalEssay',
                path: '/informalessay/',
                title:'博客',
                itemPermalink: '/informalessay/:year/:month/:day/:slug'
            },
            {
                id: 'tasklibrary',
                dirname: '_tasklibrary',
                path: '/tasklibrary/',
                title:'任务库',
                itemPermalink: '/tasklibrary/:year/:month/:day/:slug'
            },
            {
                id: 'inbox',
                dirname: '_inbox',
                path: '/inbox/',
                title:'收集箱',
                itemPermalink: '/inbox/:year/:month/:day/:slug'
            },
            {
                id: 'WorldlyWisdom',
                dirname: '_WorldlyWisdom',
                path: '/WorldlyWisdom/',
                title:'普世智慧',
                itemPermalink: '/WorldlyWisdom/:year/:month/:day/:slug'
            },
            {
                id: 'AesopsFables',
                dirname: '_AesopsFables',
                path: '/AesopsFables/',
                title:'伊索寓言',
                itemPermalink: '/AesopsFables/:year/:month/:day/:slug'
            },
        ],
        smoothScroll: true,
    }
}