$(function(){
	var height =$(window).height();
	var width =$(window).width();
	$('.db_main').css({'height':height,'width':width})
	
	  var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
    var nScrollTop = 0;   //滚动到的当前位置
    var nDivHight = $(".db_main").height();
    $(".db_main").scroll(function(){
      nScrollHight = $(this)[0].scrollHeight;
      nScrollTop = $(this)[0].scrollTop;
      
      $('.db_top').css({'top':nScrollTop})
      });
    $(window).resize(function(){
    	var height =$(window).height();
  		var width =$(window).width();
  		$('.db_main').css({'height':height,'width':width})
    });
    $('.db_close').click(function(){
    	$(this).parent().remove();
    });
    $('.top_plus a').click(function(){
      $('.top_plus a').hide();
      $('#db_search').show();
    });
    $('#db_search').focus(function(){
      $('.dbsearch_box').show();
    });
    $('#db_search').blur(function(){
      $('.dbsearch_box').hide();
    });
    $('.dbsearch_box li').click(function(){
        $('#db_search').hide();
        $('.dbsearch_box').hide();
        $('.top_plus a').show();
         $('#db_search').val('');
         $('.dbsearch_box').removeHighLight();
    });
    //点击任意位置隐藏div
    $(document).mouseup(function(e){
      var _con = $('.mask'); 
      if(!_con.is(e.target) && _con.has(e.target).length === 0){
          $('.mask').hide();
          $('.top_plus a').show();
      }
    });
	
$('.bottom_tab li').click(function(){
    if($(this.className=='')){
    $(this).addClass('on').siblings().removeClass('on');
    }
    $(".bottom_tab_same").hide().eq($(this).index()).fadeIn();
  });
  $('.right_tab li').click(function(){
    if($(this.className=='')){
    $(this).addClass('on').siblings().removeClass('on');
    }
    $(".right_tab_box").hide().eq($(this).index()).fadeIn();
  });
  $('.right_tab2 li').click(function(){
    if($(this.className=='')){
    $(this).addClass('on').siblings().removeClass('on');
    }
    $(".right_tab_box2").hide().eq($(this).index()).fadeIn();
  });
  $('.right_tab3 li').click(function(){
    if($(this.className=='')){
    $(this).addClass('on').siblings().removeClass('on');
    }
    $(".right_tab_box3").hide().eq($(this).index()).fadeIn();
    });
  //弹出
  $('.big_detail').click(function(){
    $('.big_wind').animate({left:"0px"});
  });
  $('.wind_close').click(function(){
    $('.big_wind').animate({left:"100%"});
  });	
  $('.big_que').mouseover(function(){
        var offset = $(this).offset();
        var _height = $('.big_tip').height();
        var _h = $(window).height();
        if( offset.top + _height > _h ){
          $('.big_tip').css({'top': offset.top -_height-35+ 'px','left':offset.left+30}).show();
        }else{
          $('.big_tip').css({'top': offset.top -35+ 'px','left':offset.left+30}).show();
        }
    });
  $('.big_que').mouseleave(function(){
    $('.big_tip').hide();
  });
})