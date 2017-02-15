
// 自运行的匿名函数
/*
(function(){
	alert('自运行匿名函数');
})()

$(function(){
	alert('自运行匿名函数');
});
*/
(function($){
	// 本函数每次调用只负责一个轮播图的功能
	// 也就说只会产生一个轮播图，这个函数的作用域只能分配一个轮播图
	// 所以要求在调用本函数的时候务必把当前轮播图的跟标签传递过来。
	// 这里的形参 ele 就是某个轮播的跟标签
	var slide = function(ele,options){
		// 转化为 jquery 标签对象
		var $ele = $(ele);
		// 默认设置选项
		var setting = {
			// 控制刚开炸开的时间
			delay: 1000,
			// 控制 interval 的时间（轮播速度）
			speed: 2000
		};
		// 对象合并
		$.extend(true, setting, options);
		// 规定好每张图片处于的位置和状态
		var states = [
						{ZIndex: 1,width: 120,height: 150,top: 69,left: 134,ZOpacity: 0.2},
						{ZIndex: 2,width: 130,height: 170,top: 59,left: 0,ZOpacity: 0.5},
						{ZIndex: 3,width: 170,height: 218,top: 35,left: 110,ZOpacity: 0.7},
						{ZIndex: 4,width: 224,height: 288,top: 0,left: 263,ZOpacity: 1},
						{ZIndex: 3,width: 170,height: 218,top: 35,left: 470,ZOpacity: 0.7},
						{ZIndex: 2,width: 130,height: 170,top: 59,left: 620,ZOpacity: 0.5},
						{ZIndex: 1,width: 120,height: 150,top: 69,left: 500,ZOpacity: 0.2}
					 ];
		
		var lis = $ele.find('li');
		// 让每个 li 对应上面 states 的每个状态
		function move(){
			lis.each(function(index,value){
				var state = states[index];
				$(value).css('z-index',state.ZIndex).finish().animate(state,setting.delay).find('img').css('opacity',state.ZOpacity);
			})
		}
		// 让 li 从正中间展开
		move();
		
		// 下一张，让轮播图发生偏移
		function next(){
			// 原理：把数组最后一个元素移到数组的第一位
			states.unshift(states.pop());
			move();
		}
		
		// 上一张，让轮播图发生偏移
		function prev(){
			// 原理：把数组第一个元素移动最后一位
			states.push(states.shift());
			move();
		}
		
		// 点击下一张（section）
		$ele.find('.zy-next').click(function(){
			next();	
		});
		
		// 点击上一张
		$ele.find('.zy-prev').click(function(){
			prev();	
		});
		
		// 自动轮播
		var interval = null;
		function autoPlay(){
			interval = setInterval(function(){
				next();
			},setting.speed);
		}
		autoPlay();
		
		// 停止轮播
		$ele.find('section').add(lis).hover(function(){
			clearInterval(interval);
		},function(){
			autoPlay();
		});
	}
	
	// 找到要轮播的轮播图的跟标签，调用 slide 方法
	$.fn.zySlide = function(options){
		$(this).each(function(i,ele){
			slide(ele,options);
		})
		
		// 支持链式调用
		return this;
	}
})(jQuery)

/*
 * 用 jQuery 封装插件的几种写法：
 * 
 * 插件类写法：
 * $.fn.customFun = function(){
 *    // 自定义插件的代码
 * } 
 * 用法：
 * $('selector').customFun();
 * 
 * 工具类写法：
 * $.customFun = function(){
 * 	  // 自定义工具类的代码  
 * }
 * 用法：
 * $.customFun()
 */




