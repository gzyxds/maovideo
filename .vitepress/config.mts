import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "猫影",
  description: "猫影官网,猫影app,在线电影,最新电影,免费电影,电影在线观看",
  themeConfig: {

    
    siteTitle: "猫影", // 网站标题
    
    logo: 'https://maovideo.oss-cn-guangzhou.aliyuncs.com/logo.png, // logo

    // // 搜索
    // search: {
    //   provider: 'local'
    // },

    // 生成静态文件
    outDir: 'docs',
    lastUpdated: true,
    sidebarMenuLabel: '目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gzyxds/maovideo' }
    ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/gzyxds/maovideo',
      text: '编辑本页'
    },


    // https://vitepress.dev/reference/default-theme-config

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'APP下载', link: '/markdown-examples' }
    ],


    // 左侧菜单
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [  // 社交链接
      { icon: 'github', link: 'https://github.com/gzyxds/maovideo' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MaoVideo Public License.',
      copyright: 'Copyright © 2024-MAOVIDEO All Rights Reserved'
    },
    
     prev  : '上一篇', // 上一篇

     returnToTopLabel : '返回顶部', // 返回顶部

     outline : '目录', // 目录

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gzyxds/maovideo' }
    ]
  }
})
