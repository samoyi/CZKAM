# 性能优化

## 优化策略
### 目前可实现的优化策略
* 静态资源CND存储：图片、脚本、视频
* 静态资源设置超长时间缓存
* 分步加载
* 预判加载
* 一次请求加载完所有可能用到的小数据
* 缓存耗时操作
* 脚本合并压缩


### 目前没有实现的优化策略
* 用户上传图片的压缩  
    虽然作品组件提供了缩略图和大图两种图片规格，但目前并没有实现用户上传图片压缩的功能，
    所以作品组件的缩略图和大图都是同一个图片。
* 静态资源多域名部署突破单域名并发数限制  
    不过目前是两个域名，且一次加载时同一域名的请求数不超过10个，应该也不需要再增加DNS查
    询成本来添加新域名。


## 使用工具
* Chrome Audits
* Google PageSpeed Insights

## Preloading
* 作品缩略图加载完成后开始加载对应的大图

## Lazy Loading
* 只有当前需要显示的作品才加载缩略图

## 加速渲染
* 给没有通过样式指定尺寸的`image`指定`width`和`height`属性

## Minimize HTTP Requests
* 图标sprite
* 每个页面的数据库数据（目前是使用json文件）一次性请求


## Cache
https://stackoverflow.com/questions/6794033/google-speed-leverage-browser-caching
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
https://stackoverflow.com/questions/4480304/how-to-set-http-headers-for-cache-control
http://dev.mobify.com/blog/beginners-guide-to-http-cache-headers/

### max-age 设置
1. 该网站的静态资源目前都存储在阿里云对象存储（OSS），可以通过其客户端设定资源的max-age。
2. 静态资源统一设定为10年（315360000）的`max-age`。包括以下资源：
    * 由用户上传的图片和视频
    * build后的js文件
    * sprite图片
3. 上述三类资源中的后两类需要通过文件名的版本号改变来实现更新。详见下面的【更新策略】

**之前的同事在编写网站后台上传图片至OSS时并未设置`Cache-Control`，所以用户上传的内容
没有`max-age`**

### 更新策略
1. 例如当修改了一个js文件后，将该文件上传到服务器，不覆盖之前版本的js文件，而是根据约
定的版本规则将其改名或放在不同的目录。
2. html文件里修改对该js文件的引用路径。
3. 如果要版本回滚，只需要在html文件里修改回之前的路径即可。
4. 目前的具体方法是在静态文件名称后面加上年月日（例如`abc.20170427.js`），上传到OSS上
之前版本同一个目录下，然后再修改html文件中的路径并上传。
5. 虽然看到很多网站是使用请求参数的形式`abc.js?v=xyz`，但这种方法有可能会导致在请求资
源的过程中，某些缓存机制不合理的节点继续使用缓存的文件。  
最有名的就是长城宽带的例子，现在不知道是否还有，但至少在几年前，资源url的query部分的改
变并不会引起更新，也不会校验缓存文件和原始文件是否一致，因此必须要通过文件名的改变才能刷
新长城宽带的缓存。参考以下：
    * [为什么大家不选长城宽带？为什么又会选长城宽带？ - 知乎](https://www.zhihu.com/question/37320282/answer/74038997)
    * [大公司里怎样开发和部署前端代码？ - 张云龙的回答 - 知乎](https://www.zhihu.com/question/20790576/answer/32602154)下面的评论
    * [深圳长城宽带静态文件缓存代理，3个字-伤不起！](https://blog.csdn.net/huanghr_1/article/details/7680786)



http://www.websiteoptimization.com/secrets/performance/
https://github.com/davidsonfellipe/awesome-wpo
http://web.jobbole.com/82297/
http://www.cnblogs.com/lei2007/archive/2013/08/16/3262897.html
https://www.zhihu.com/question/40505685
https://www.zhihu.com/question/33032042
