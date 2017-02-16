//console.log($('body').zySlide());//undefault 
//$('.zy-slide').zySlide()
//jqery 出让$符号 的使用权限 就是说 从这里开始$不是jquery 只能用变量Jquery
//jQuery.noConflict()
//zySlide() 只要轮播图的根标签 （任何选择器）
//jQuery('.zy-slide').zySlide()
//jQuery('.slide').zySlide({speed:1000})

// jQuery 出让 $ 符号的使用权限（也就是说，从这开始 $ 将不是 jQuery，只能用变量 jQuery）
jQuery.noConflict();

// zySlide() 只要轮播图的跟标签（任何选择器）
jQuery('.slide').zySlide({speed:1000}).css({
	'backgroundColor': 'yellow'
});
jQuery('#slide').zySlide({delay:2000,speed:5000}).css({
	'border': '2px solid red',
	'backgroundColor': 'green'
});
//插件里面的$符号 还是外面调用是jQuery
//自定义的(function(形式参数){})(实际参数)
//用户一旦把jquery 出让  时候   由
