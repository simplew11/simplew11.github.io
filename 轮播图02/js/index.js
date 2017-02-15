//利用 像之前跑马灯的例子 将最后一个元素到最前面 获将第一个元素移动到最后一个元素位置
//规定好下每一张的图片的位置 注意不要把state 拼写成了系统保留字符status
//将7张图片当成对象 写出{键:值}形式用一个数组保存  其中有属性z-inde width height top left opacity
//位置计算如下  
//最外的box     width：754px   height:292px
//中间图4       width：224px   height:288px( box的高度减去下上下边框 就是 292-2*2=288)  top：0px   left:263px(（754-224-2*2）/2=263 （box的宽度-图4自己的宽度-左右边框的宽度）/2)
//图3           width：170px   height:218px   top:(292-4-218)/2=35                                 left:110px 大概的 [ 263-170=93（与图4有重叠的地方应该定于93）    ]
//图2（贴边框） width：130px   height:170px   top:（292-4-170）/2=59                               left:0px
//图1           width：120px   height:150px   top:（292-4-150）/2=69                               left:134px  （看不到了只要位于左边部分）
 
  
var states=[
	{ZIndex:1, width:120,height:150,top:69,left:134,ZOpacity:0.2},
	{ZIndex:2, width:130,height:170,top:59,left:0,ZOpacity:0.5},
	{ZIndex:3, width:170,height:218,top:35,left:110,ZOpacity:0.7},
	{ZIndex:4, width:224,height:288,top:0,left:263,ZOpacity:1},
	{ZIndex:3, width:170,height:218,top:35,left:470,ZOpacity:0.7},
	{ZIndex:2, width:130,height:170,top:59,left:620,ZOpacity:0.5},
	{ZIndex:1, width:120,height:150,top:69,left:500,ZOpacity:0.2}
	]
        // ZIndex ZOpacity 如果没有这么设置会发现后面的两张图后还会看到 ，这样不会切换图片透明度和切换后图片透明度不会干扰 
	//.find ()通过一个选择器 ，jQuery对象，或元素过滤 得到当前匹配的元素集合中的每个元素的后代
	var lis=$('#box li');
	//move()  让li从正中间展开
      	function move(){
 				lis.each(function(index,ele){
 					var state=states[index];
 					//$(ele).css(states);
 					//$(ele).animate(state,1000) 有两张图会在右边部分
 					//$(ele).css('z-index',state.zIndex).animate(state,1000)
					$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity)
 				})
 			}
 	
 	move()
 	//下一张 next()
	function next(){
		//原理 //pop() 方法用于删除并返回数组的最后一个元素会返回一个对象 unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
		//将删除掉数组的最后一个元素 pop （） 返回一个对象    将该元素 在插入到数组第一个位置unshift
		states.unshift(states.pop())
		//等价于
		/*var obj=state.pop;
 		states.unshift(obj)*/
 		move()
	}
	//上一张      原理把数组的第一张删掉 返回一个对象就是它  在把放在数组的最后一个位置
	function pre(){
		//把第一张元素shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
		states.push(states.shift())
		move()
	}
	$('.prev').click(function(){
		pre()
	})
	$('.next').click(function(){
		next()
	})
	//自动播放
	var interval=null;
	function autoplay(){
		interval=setInterval(
			function(){
				next();
			}
			,2000)
	}
	autoplay()
	//鼠标移动到某个图片 停止动画
	$('#box ul li').hover(function(){
		clearInterval(interval)
	},
	function(){
		autoplay()
	}
)
  
  //到目前为止实现 了但是不可以当作 插件使用
  	//插件中最好不要使用id 原因 ：插件最好是能被重复使用的  在同一个页面中可能多次使用  造成冲突
	////2.变量命名和方法名：states interval move(),next() 用户在使用时候这个插件时候 可以还会引入
	////自己创建 js 文件 ，也有这样命名 就会冲突
	////3 标签class的值的问题 prev next 。这些class太大众化  谁写了都命名prev next 
	////css命名太普通
	////4.插件文件名命名问题 index.js index.css 命名大众化，如 修改为jqery.ZYSlide
	////5.这个里面数据是固定的，如何数据灵活形
   
