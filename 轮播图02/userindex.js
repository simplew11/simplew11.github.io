//console.log($('body').zySlide());//undefault 
//$('.zy-slide').zySlide()
//jqery 出让$符号 的使用权限 就是说 从这里开始$不是jquery 只能用变量Jquery
jQuery.noConflict()
//zySlide() 只要轮播图的根标签 （任何选择器）
jQuery('.slide').zySlide()

//jQuery('.slide').zySlide()
//插件里面的$符号 还是外面调用是jQuery
//自定义的(function(形式参数){})(实际参数)
//用户一旦把jquery 出让  时候   由
