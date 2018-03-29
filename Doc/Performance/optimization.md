# 性能优化

## 优化策略
* 静态资源托管：图片、脚本、视频
* 分步加载
* 预判加载
* 一次请求加载完所有可能用到的小数据
* 缓存耗时操作
* 脚本合并压缩

## 使用工具
* Chrome Audits
* Google PageSpeed Insights

## Preloading
* 首页加载完成后，预加载首页各连接的资源
* 作品预加载
    作品都是

## Lazy Loading
* 分页首个版块加载完成后，加载其他版块的图片


## 加速渲染
* 给没有通过样式指定尺寸的`image`指定`width`和`height`属性

## Minimize HTTP Requests
* 图标sprite
* 合并CSS


## Cache
https://stackoverflow.com/questions/6794033/google-speed-leverage-browser-caching
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
https://stackoverflow.com/questions/4480304/how-to-set-http-headers-for-cache-control
http://dev.mobify.com/blog/beginners-guide-to-http-cache-headers/

### max-age 设置
* 崔振宽艺术
    * 艺术年表：31536000 一年
    * 作品：31536000 一年
    * 艺术影像
        * 视频：31536000 一年
* sprite : 604800 一周




https://www.sitepoint.com/web-site-optimization-steps/
http://www.websiteoptimization.com/secrets/performance/
https://github.com/davidsonfellipe/awesome-wpo
http://web.jobbole.com/82297/
http://www.cnblogs.com/lei2007/archive/2013/08/16/3262897.html
https://www.zhihu.com/question/40505685
https://www.zhihu.com/question/33032042
