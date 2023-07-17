# gitbook-template #

## 环境安装 ##
### 1.nodejs安装 ###
nodejs官方下载地址：https://nodejs.org/zh-cn/

### 2.gitbook安装 ###


    npm install gitbook-cli -g

安装成功后执行

	gitbook -V


> 报错与解决方案
[http://wlphp.com/m/?post=369](http://wlphp.com/m/?post=369 "报错与解决方案")


## gitbook模板使用 ##

### 使用 ###
gitbook模板，克隆到本地执行 npm install 安装插件即可使用（之前需在本地安装gitbook环境）

	npm run serve -- 启动web服务，默认端口4000。
	
	npm run build -- 打包部署

### 目录 ###

> assets -- 资源文件目录

> pages -- 书章节存放目录

> books.js -- gitbook配置文件目录

> .bookignore -- gitbook打包忽略文件目录

> SUMMARY.md -- 目录文件

## 插件列表 ##

**插件使用如下命令安装使用**

	npm install gitbook-plugin-插件名


|  模块名称 |   功能描述     |
|----------|:-------------:|
|accordion | 手风琴折叠模块  |
|ace	|代码 ACE 显示|
|advanced-emoji	|显示 emoji 表情|
|alerts|	告警级别信息提示|
|anchor-navigation-ex|	悬浮目录和回到顶部|
|ancre-navigation|	悬浮目录和回到顶部|
|auto-scroll-table	|表格滚动条|
|back-to-top-button	|当页面超过一屏幕时，会显示一个 回到顶部按钮|
|change_girls	|可自动切换的背景|
|click-reveal	|默认隐藏，点击可显示|
|code|	代码添加行号&复制按钮|
|copy-code-button|	代码复制按钮|
|custom-favicon|	修改网页标题图标 favicon|
|chapter-fold	|导航目录默认折叠|
|Chart	|绘制图形|
|donate|	贡献|
|disqus|	评论系统|
|emphasize	|为文字加上底色|
|expandable-chapters	|导航目录折叠扩展|
|expandable-chapters-small	|expandable-chapters-small|
|edit-link	|添加编辑按钮|
|favicon|	显示网站图标|
|flexible-alerts	|flexible-alerts|
|github|	在右上角添加 github 图标|
|hide-element	|可以隐藏不想看到的元素，比如导航栏中 Published by GitBook|
|insert-logo	|插入logo|
|include-codeblock	|包含或显示文件|
|include-csv	|显示 CSV 文件内容|
|KaTex	|数学公式支持|
|klipse	klipse |嵌入类似IDE的功能|
|lightbox	|单击查看图片 点击图片可显示，大小不变|
|lunr|	lunr|
|local-video|	视频|
|mermaid|	流程图|
|Mermaid-gb3|	流程图|
|Musicxml|	乐谱渲染|
|page-copyright|	页面页脚版权|
|page-toc-button|	悬浮目录|
|page-top	|page-top.md|
|page-treeview|	生成页内目录|
|page-treeview-simle	|生成页内目录精简版本|
|pageview-count|	阅读量计数|
|popup	|单击图片，在新页面查看大图|
|prism	|语法高亮|
|PlantUML|	UML|
|reward	|赞赏组件|
|rss	|RSS 订阅|
|search|	搜索|
|search-pro|	高级搜索|
|search-plus	|search-plus|
|sectionx.md	|sectionx|
|[simple-page-toc(cat-article-content.md)	|plugins/simple-page-toc|
|sharing-plus|	分享当前页面|
|sidebar-style|	会替换掉 Published by GitBook|
|splitter|	侧边栏宽度可调节|
|sitemap-general	|自动生成 sitemap 文件|
|summary	|自动生成 SUMMARY.md|
|tbfed-pagefooter|	页面添加页脚|
|tags	|tags|
|todo	|todo|
|Terminal|	Terminal 终端|
|Version-select	|文档多版本|