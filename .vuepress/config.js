module.exports = {
    title: 'DT-Three',
    description: '仅供公司内部使用',
    themeConfig: {
        nav: [
            {
                text: '指南',
                link: '/Guide/install',
            },
            {
                text: 'API',
                link: '/API/threeView',
            },
            {
                text: '源码仓库',
                link: 'http://172.30.251.13:8888/dtgd-web/three-dtgd',
            },
            {
                text: 'Three.js文档主页',
                link: 'https://threejs.org/',
            },
        ],
        sidebar: {
            '/Guide/': ['install', 'quickstart'],
            '/API/': [
                'threeView',
                'camera',
                'object3d',
                'animation',
                'css2DWidget',
                'css3DWidget',
                'cssAnimate',
                'curve',
                'events',
                'math',
            ],
        },
        sidebarDepth: 5,
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
    },
}
