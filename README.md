# 移动站模板
## 文件结构说明
* src 源码
	* assets: 静态资源文件
		* sass: [可选] [Sass](http://sass-lang.com/)的源码。最后会编译成css文件。
		* css
			* common.css
		* image
		* js
		* vendor: 第三方插件
			* jquery.js
			* caculate-rem.js 根据页面宽度设置根节点字号大小。使用`rem`做单位需要引用该脚本
	* views: 静态页面
		* _template.html: 空页面模板
		* demo: demo页面
			* layout.html: 布局demo
	* index.html: 静态页面的导航页面
* bulid： 将源码进行压缩，合并等优化操作后生成的代码。上线的时候用。
* gulpfile.js： 构建项目脚本。主要做的是：将源码进行压缩，合并等优化操作后生成的代码方式bulid文件夹。
* package.json：定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。详细见[这里](http://javascript.ruanyifeng.com/nodejs/packagejson.html)
* config.rb：  [可选] 基于Sass的框架[Compass](http://compass-style.org/)的配置。

## Tip
* 布局可参考 `src/views/demo/layout.html`
* 使用rem做单位时，按照在640px的设计稿中的量取的值除以100。如，设计稿中100px 为 1rem, 页面宽度的100%为6.4rem


## 构建
1. 安装依赖
	1. 安装 [Nodejs](http://nodejs.org/)
	1. 安装 [Gulp](http://gulpjs.com/)
		* `npm install -g gulp`
	1. 安装项目依赖
		* `cd 项目根目录`
		* `npm install`
1. `gulp build`

## 参考链接
* FlexBox
	* [Flex 布局语法教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 阮一峰
	* [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html) 阮一峰
	* [一个完整的Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html)
	* [Compass Flex](http://compass-style.org/reference/compass/css3/flexbox/)
* [Gulp 入门指南](https://github.com/nimojs/gulp-book)
* [Sass官网](http://sass-lang.com/) 世界上最成熟，稳定强大的专业的CSS拓展语言
* [Compass](http://compass-style.org/) 基于Sass的框架





