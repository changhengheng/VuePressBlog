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
                text: 'InformalEssay',
                link: '/informalEssay/',
            },
            {
                text: 'Blog',
                link: '/posts/',
            },
            {
                text: 'Writings',
                link: '/writings/',
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
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                },
            ],
        },
        directories: [
            {
                id: 'informalEssay',
                dirname: '_informalEssay',
                path: '/informalEssay/',
                frontmatter: { //Front matter for entry page.
                    tag: 'informalEssay'
                },
                itemPermalink: '/informalEssay/:year/:month/:day/:slug',
            },
            {
                id: 'post',
                dirname: '_posts',
                path: '/posts/',
                itemPermalink: '/posts/:year/:month/:day/:slug',
            },
            {
                id: 'writings',
                dirname: '_writings',
                path: '/writings/',
                frontmatter: { //Front matter for entry page.
                    tag: 'writings'
                },
                itemPermalink: '/writings/:year/:month/:day/:slug',
            },
        ],
        smoothScroll: true,
    }
}