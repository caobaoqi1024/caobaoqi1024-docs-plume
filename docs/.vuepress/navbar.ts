import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', icon: 'icon-park-outline:guide-board', link: '/'},
    {text: '博客', icon: 'material-symbols:article-outline', link: '/blog/'},
    // {text: 'maven', link: '/notes/maven/README.md'},
    {
        text: '笔记',
        icon: 'map:wind-surfing',
        items: [
            {text: 'maven', link: '/notes/maven/README.md'}
        ]
    },
    {
        text: '其它',
        icon: 'icon-park-outline:setting-two',
        items: [
            {text: '标签', link: '/blog/tags/'},
            {text: '归档', link: '/blog/archives/'},
        ]
    },
])
