module.exports = {
    title: "chh's Blog", // Title for the site. This will be displayed in the navbar.
    base: '/VuePressBlog/',
    dest: './dist',
    theme: '@vuepress/theme-blog',
    repo: 'https://github.com/changhengheng/VuePressBlog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: 'Blog',
                link: '/informalessay/',
            },
            {
                text: '今日阅读',
                link: '/readtoday/',
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
                    link: 'https://github.com/changhengheng/VuePressBlog',
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
                title: '博客',
                itemPermalink: '/informalessay/:year/:month/:day/:slug',
                frontmatter: { //Front matter for entry page.
                    tag: 'informalessay'
                },
            },
            {
                id: 'tasklibrary',
                dirname: '_tasklibrary',
                path: '/tasklibrary/',
                title: '任务库',
                itemPermalink: '/tasklibrary/:year/:month/:day/:slug'
            },
            {
                id: 'inbox',
                dirname: '_inbox',
                path: '/inbox/',
                title: '收集箱',
                itemPermalink: '/inbox/:year/:month/:day/:slug'
            },
            {
                id: 'WorldlyWisdom',
                dirname: '_WorldlyWisdom',
                path: '/WorldlyWisdom/',
                title: '普世智慧',
                itemPermalink: '/WorldlyWisdom/:year/:month/:day/:slug'
            },
            {
                id: 'AesopsFables',
                dirname: '_AesopsFables',
                path: '/AesopsFables/',
                title: '伊索寓言',
                itemPermalink: '/AesopsFables/:year/:month/:day/:slug'
            },
            {
                id: 'guide',
                dirname: '_guide',
                path: '/guide/',
                title: '食用指南',
                itemPermalink: '/guide/:year/:month/:day/:slug'
            },
            {
                id: 'RelearnBasicVocabulary',
                dirname: '_RelearnBasicVocabulary',
                path: '/RelearnBasicVocabulary/',
                title: '重学基础词汇',
                itemPermalink: '/RelearnBasicVocabulary/:year/:month/:day/:slug'
            },
            {
                id: 'FollowuUpExercise',
                dirname: '_Follow-upExercise',
                path: '/followuUpExercise/',
                title: '跟进练习',
                itemPermalink: '/followuUpExercise/:year/:month/:day/:slug'
            },
            {
                id: 'ReadToday',
                dirname: '_ReadToday',
                path: '/readtoday/',
                title: '今日阅读',
                itemPermalink: '/readtoday/:year/:month/:day/:slug'
            },
            {
                id: 'Mind',
                dirname: '_Mind',
                path: '/mind/',
                title: '运用心智获得解放',
                itemPermalink: '/mind/:year/:month/:day/:slug'
            },
            {
                id: 'Plan',
                dirname: '_Plan',
                path: '/plan/',
                title: '计划',
                itemPermalink: '/plan/:year/:month/:day/:slug'
            },
        ],
        smoothScroll: true,
        comment: {
            service: 'vssue',
            owner: 'changhengheng',
            repo: 'https://github.com/changhengheng/VuePressBlog',
            clientId: 'fda7b35eaf2ce20f243c',
            clientSecret: '0a4507fec54caaf62f05388e9692c99955c1e57a',
        }
    },
}