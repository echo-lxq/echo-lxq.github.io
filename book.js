module.exports = {
    title:'开发知识总结',
    author:'WeiShan',
    lang:'zh-cn',
    description:'前后端开发知识总结',

    //插件列表
    plugins:[
    "splitter",
    "hide-element",
    "code",
    "theme-door",
    "-lunr",
    "-search",
    "-sharing",
    "-fontsettings",
    "search-pro-fixed",
    "chapter-fold"],
    "variables": {},
    //插件全局配置
    pluginsConfig:{
        "hide-element": {
            "elements": [".gitbook-link"]
          },
          "doorTheme": {
            "search-placeholder": "请输入关键字搜索",
            "logo": "./assets/images/icon.svg",
            "searchIcon":"./_media/index_search.svg",
            "favicon": "./_media/favicon.ico"
          }
    },
    //模板变量
    variables:{
        //自定义
    }
}