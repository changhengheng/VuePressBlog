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
        ],
        smoothScroll: true,
    }
}