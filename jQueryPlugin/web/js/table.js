//简单table 插件
"use strict";//启用严格模式 ie6-9不支持
(function($) {
	$.fn.myMenu = function(initsettings){
		//默认值
		var defaults ={
			width         :  800,
			height        :  500,
			trcolor       :  'white',
		    bgcolor       :  '#FFFFE1',//背景颜色
		    chosecolor    :  'yellow', //被选中的颜色
		    overflowy     :  'scroll',//visible | auto | hidden | scroll 四种任意选 默认滚动
		    trheight      :  30
		};
		
		var settings = $.extend({}, defaults, initsettings);//根据默认值和传入的init参数得到最终的参数
		var $container = this;
		var $table = $container.find('table');
		//初始化方法
		var init = function(){
			css_init();
		};
		//样式初始化
		var css_init = function(){
			$container.css({
				'background-color': settings.bgcolor,
				'height': settings.height,
				'width': settings.width,
				'margin': '0 auto',
				'overflow-y': settings.overflowy
			});
			
			$table.css({
				'border' : '1px solid #CCC',
				'border-collapse':'collapse',//把border边线合并成1条线
				'width': '100%'
			});
			$table.find('tr').css({
				"background-color" :"white",
				'height': settings.trheight
			});
			//标题栏另外置颜色
			$table.find('tr').eq(0).css({
				"background-color" :"green",
				'height': settings.trheight
			});
			$table.find('td').css({
				'border' : '1px solid #CCC',
				'padding-left' : 5,
   				'padding-right' : 5,
			});
			$table.find('th').css({
				'border' : '1px solid #CCC',
				'padding-left': 5,
				'padding-right': 5
			});
		};
		
		//绑定tr
		$table.find('tr').live('mouseover',function(){
			$(this).css("background-color", "#e5e5e5");
			$(this).siblings().css("background-color", "white")
			//标题栏不能变色
			$table.find('tr').eq(0).css({
				"background-color" :"green"
			});
		});
		init();
	};
})(jQuery);
    
    //创建一个div id=myMenuDiv（可以任意取）
   // $(document).ready(function($) {
   // 	  //调用插件方法
  //  $("#myMenuDiv").myMenu();
   // 	  
    //});