$('.nav_item>li').click(function(){
	$(this).addClass('curr').siblings().removeClass('curr');	
	$(this).children().find('a').add('curr').siblings().removeClass('curr');
})