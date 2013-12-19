/*$("#lunbo_curso>li").click(function(){
	$(this).addClass("small_xz").siblings().removeClass('small_xz');	
	
})*/
	var b_width = 1000; // 大图的宽度
	var speed = 500; // 图片向左移动速度 
	var s_time = 3000 //图片自动滚动速度
	var pic_li = $("#lunbo_pic").children("li");
$(document).ready(function(e) {
	var $ul_width= pic_li.width() * pic_li.length; //轮播图的宽度
	$("#lunbo_pic").width($ul_width);
	var small_width = $(".lunbo_curso>a").width() * $(".lunbo_curso>a").length; 
	$(".lunbo_curso").width(small_width);
	$(".lunbo_curso").css("margin-left",-small_width/2);
});
	
	

$(document).live("click",function(e){
	$target = $(e.target);
	var id = $target.attr('id');	
	if($target.is("a") && $target.parent($("#lunbo_curso")) ){
		$target.addClass("small_xz").siblings().removeClass('small_xz');
		var mar_lf = parseInt($target.index() * b_width);
		$("#lunbo_pic").animate({
			left :	-mar_lf			
		},speed);
	}	
	if(id == "arr_l"){
		prePage();
	}
	if(id == "arr_r"){
		nextPage();
	}
});
	//上一个
	function prePage(){
		if($(".small_xz").index() == 0){
			$("#lunbo_pic").css("left",-4000);
			$("#lunbo_pic").animate({
				"left":	-parseInt(pic_li.length *b_width - b_width)		
			},speed);
			$("#lunbo_curso>a").eq(pic_li.length - 1).addClass("small_xz").siblings().removeClass("small_xz");
			$(".small_xz").index() == pic_li.length - 1;
		}else{
			$("#lunbo_curso>a").eq($(".small_xz").index()-1).addClass("small_xz").siblings().removeClass("small_xz");
			var mar_lf2 = parseInt($("#lunbo_pic").css("left")) + b_width;
			$("#lunbo_pic").animate({
				"left":	mar_lf2		
			},speed);
		}
	}
	//下一个
	function nextPage(){
		if($(".small_xz").index() == pic_li.length -1){
			$("#lunbo_pic").css("left",0);
			/*$("#lunbo_pic").animate({
				"left":	0		
			},speed);*/
			$("#lunbo_curso>a").eq(0).addClass("small_xz").siblings().removeClass("small_xz");
			$(".small_xz").index() == 0;
			
		}else{
			
			$("#lunbo_curso>a").eq($(".small_xz").index() + 1).addClass("small_xz").siblings().removeClass("small_xz");
			var mar_lf2 = parseInt($("#lunbo_pic").css("left")) - b_width;
			$("#lunbo_pic").animate({
				"left":	mar_lf2		
			},speed);
		}	
	}
	
/*	function picRun(){
		nextPage();
	}
	 intervalTime = setInterval(picRun,s_time);
	
	$("#pic_carousel").on("mouseover",function(){
		clearInterval(intervalTime);
	});
	$("#pic_carousel").on("mouseout",function(){
		intervalTime = setInterval(picRun,s_time);;
	});*/

