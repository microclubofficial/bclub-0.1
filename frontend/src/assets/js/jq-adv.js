// JavaScript Document
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','20px');	
	x.animate({top: t - 20 + 'px'},'slow');	//19为每个li的高度
	if(Math.abs(t) == h-20){ //19为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,5000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.bibar-news .swap').html($('.bibar-news-li').html());
	x = $('.bibar-news-li');
	y = $('.bibar-news .swap');
	h = $('.bibar-news-li li').length * 20; //19为每个li的高度
	setTimeout(b,5000);//滚动间隔时间 现在是3秒
	
})