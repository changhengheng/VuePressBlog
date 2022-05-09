module.exports = {
    title: "chh's Blog", // Title for the site. This will be displayed in the navbar.
    dest: './dist',
    base: '/vuePressBlog/',
    repo: 'https://github.com/changhengheng/vuePressBlog',
    theme: '@vuepress/theme-blog',
    permalink: "/:year/:month/:day/:slug",
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: 'Tags',
                link: '/tag/',
            },
            {
                text: 'Blog',
                link: '/posts/',
            },
            {
                text: 'Writings',
                link: '/writings/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/changhengheng/vuePressBlog',
                },
            ],
        },
        directories: [
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
        smoothScroll:true,
    }
}