
//自定义的(function(形式参数){})(实际参数)
//(function(a){在方法体里面得$符号可以被a取代   注意这里的a可标识符号})(jQuery))  这里a相当与jQuery
(function($){
	
			
	

			var slide=function(ele,options){
			//把上午代码复制过来 会只有一个全局 slide
			var $ele=$(ele)//转化成jquery标签对象
			
			//设置默认
			var setting={
				//控制刚刚 炸开的时间
				delay:3000,
				//控制interval的时间 （轮播速度）
				speed:2000
			}
			//options
			//对象合并     setting 里面没有不会 被后面的替换掉     
			//
			$.extend(true,setting,options);
			
			var states=[
				{ZIndex:1, width:120,height:150,top:69,left:134,ZOpacity:0.2},
				{ZIndex:2, width:130,height:170,top:59,left:0,ZOpacity:0.5},
				{ZIndex:3, width:170,height:218,top:35,left:110,ZOpacity:0.7},
				{ZIndex:4, width:224,height:288,top:0,left:263,ZOpacity:1},
				{ZIndex:3, width:170,height:218,top:35,left:470,ZOpacity:0.7},
				{ZIndex:2, width:130,height:170,top:59,left:620,ZOpacity:0.5},
				{ZIndex:1, width:120,height:150,top:69,left:500,ZOpacity:0.2}
				]

			var lis=$ele.find('li')
 	
 			function move(){
 				lis.each(function(index,value){
 					var state=states[index];
 	
//					$(value).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity)
 				//传递参数进行修改
 				$(value).css('z-index',state.ZIndex).finish().animate(state,setting.delay).find('img').css('opacity',state.ZOpacity)
 				
 				
 				})
 			}
 	//move()  让li从正中间展开
 	move()
 	//点击下一张，让轮播图发生偏移
 	function next(){
 		states.unshift(states.pop());
 		move()
 	}
 //点击上一张，让轮播图发生偏移
 	function before(){
 		states.push(states.shift())
 		move();
 	}

 	$ele.find('.zy-next').click(function(){
 	 	next();
 	})

 	$ele.find('.zy-prev').click(function(){
 		before();
 	})
 	//自动播放
 	var interval=null;
 	function autoplay(){
 	 	interval=setInterval(function(){next();},setting.speed)
 	}
	autoplay();

	
	$ele.find('section').add(lis).hover(function(){
		clearInterval(interval)
		},
		function(){
			autoplay();
		}
	);
		
				
				
				
				
	}
			
			
			
//	//找到轮播图的根标签 调用slide方法
//	slide($('.zy-slide').eq(0));
//	slide($('.zy-slide').eq(1));
//	slide($('.zy-slide').eq(2));
//$.fn jquery暴露的插件的接口
//$.fn.zySlide=function(){
////	console.log(this);
//	$(this).each(function(i,ele){
//		slide(ele)
//	})
//}
$.fn.zySlide=function(options){
//	console.log(this);
	$(this).each(function(i,ele){
		slide(ele,options)
		//添加了option
		//支持链 方式 调用
	})
	return this ;
}






})(jQuery)
//以上减少了全局变量的定义和使用
/*
 * 用jQuery 封装插件的几种写法
 * 插件类写法
 * $.fn.customFun=function(){}
 * //自己定义的插件代码
 * 用法
 * $('selector').customFun();
 * 工具类写法
 *$.customFun=function(){ //自己定义的插件代码}
 * 用法
 * $.customFun()
 */