//简单弹出框 插件
"use strict";//启用严格模式 ie6-9不支持
(function($) {
	//打开弹出框
	$.fn.openMyDiv = function(s){
		//默认值
		var defaults ={
			width         :  500,
			height        :  300,
			scrolling     :  true,
		    container     :  window,//弹出框所在的容器
		    minX          :  20,//靠左边最小位置
		    minY          :  20,//靠上边最小位置
			bgcolor       :  '#FFFFE1'//背景颜色
		};
		var settings = $.extend({},defaults,s);
		var $div = this;
		//定义一个弹出框类
		var myDiv = {
			//初始化方法
			init : function($div,settings){
				$div.css({
					'width':settings.width,
					'height':settings.height,
					'background-color': settings.bgcolor
				});
			},
			//定义div位置到正中心
			center : function($div,settings){
				var cssStr = {position:'absolute'}; 
				//div居中的css position:'absolute' top: 1 px left: 1px;
				//取到top值
				var $top = ($(settings.container).height() - $div.outerHeight()) / 2; 
				var $left = ($(settings.container).width() - $div.outerWidth()) / 2; 
				//如果是带滚动条的
				if(settings.scrolling){
					$top += $(settings.container).scrollTop()||0;
					$left += $(settings.container).scrollLeft()||0;
				}
				$top = $top > settings.minY ? $top : settings.minY;
				$left = $left > settings.minX ? $left : settings.minX;
				$.extend(cssStr,{top : $top});
				$.extend(cssStr,{left : $left});
				$div.css(cssStr);
			}
				
		};
		var init = function(){
			myDiv.init($div,settings);
			myDiv.center($div,settings);
		}
		var openDiv = function(){
			init();
			$div.show();
		}
		//滚动
		if(settings.scrolling){
			//当滚动条滚动时调整弹出框位置
			$(window).bind('scroll',function(){
				myDiv.center($div,settings);
			});
		}
		openDiv();
	};
	//关闭弹出框
	$.fn.closeMyDiv = function(){
		var $div = this;
		var closeDiv = function(){
			$div.hide();
		}
		closeDiv();
	};
})(jQuery);

/*
//使用方法
<button type="button" id="btn">弹出</button>
<div id="opendiv" style="display:none;">
<button id="btn1" type="button">关闭</button>
</div>
$(document).ready(function($){
	$('#btn').live('click',function(){
		$('#opendiv').openMyDiv();
	});
	$('#btn1').live('click',function(){
		$('#opendiv').closeMyDiv();
	});
});
 */
