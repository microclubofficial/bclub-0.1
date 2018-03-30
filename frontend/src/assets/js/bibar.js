//搜索框
$(function(){	
	//筛选
	function tk_search_dl_close(){
		$('.bibar-choice tr:gt(2)').each(function() {
			$(this).addClass('dn');
		});
	}
	tk_search_dl_close();
	$('.bibar-choice-more').click(function(){
		if($('.bibar-choice tr').hasClass('dn')){
			$('.bibar-choice tr').removeClass('dn');
			$('.bibar-choice-item-more').find('span').html('更多 <i class="iconfont icon-angledown"></i>');
			$('.bibar-choice').addClass('active');
			$(this).html('筛选收起 <i class="iconfont icon-angleup"></i>');
		}else{
			tk_search_dl_close();
			$('.bibar-choice').removeClass('active');
			$(this).html('筛选展开 <i class="iconfont icon-angledown"></i>');
		}
	});
	//选择单选
	$('.bibar-choice-single .bibar-choice-item').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active').siblings().removeClass('active');
		}
	});
	
	//选择多选
	$('.bibar-choice-multi .bibar-choice-item').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});	
});


// tab切换
$(function(){
	$('.bibar-tabs-listSty4 li').click(function(){
		if($(this).find('i').hasClass('icon-doted')){			
		}else{
			$(this).parent().find('i').removeClass('icon-dot').removeClass('icon-doted').addClass('icon-dot');
			$(this).find('i').removeClass('icon-dot').removeClass('icon-doted').addClass('icon-doted');
		}
	})
});

//每一个给个高度吧
/*
$(function(){
	$('.bibar-tabAll').each(function(){
		var tab_h=$(this).find('.bibar-tabitem.active').height();
		$(this).height(tab_h);
	})
})*/

//select
$(function(){
	if($('.select-noborder').length>0){
		$('.select-noborder').select2({
			language: 'zh-CN',
  			minimumResultsForSearch:-1,
			placeholder: "请选择"
		});
	}
	
	if($('.select-border').length>0){
		$('.select-border').select2({
  			minimumResultsForSearch:-1,
			placeholder: "请选择"
		});
	}
	
	if($('.select-multiple1').length>0){
		$('.select-multiple1').select2({
			language: 'zh-CN',
  			minimumResultsForSearch:-1,
			maximumSelectionLength: 1,
			placeholder: "请选择"
		});
	}
});

//提示
$(function(){
	$("[data-toggle='tooltip']").tooltip();
	$("[data-toggle='tooltip']").mouseout(function(){
		$("[data-toggle='tooltip']").tooltip('hide');
	});
});

//日期
$(function(){
	if($('.datepicker').length>0){
		//$('.datepicker').datepicker({orientation: "left",autoclose: true});
		jQuery(function($){ 
          $.datepicker.regional['zh-CN'] = {
              clearText: '清除', 
              clearStatus: '清除已选日期', 
              closeText: '关闭', 
              closeStatus: '不改变当前选择', 
              prevText: '< 上月', 
              prevStatus: '显示上月', 
              prevBigText: '<<', 
              prevBigStatus: '显示上一年', 
              nextText: '下月>', 
              nextStatus: '显示下月', 
              nextBigText: '>>', 
              nextBigStatus: '显示下一年', 
              currentText: '今天', 
              currentStatus: '显示本月', 
              monthNames: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'], 
              monthNamesShort: ['一月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十一月','十二月'], 
              monthStatus: '选择月份', 
              yearStatus: '选择年份', 
              weekHeader: '周', 
              weekStatus: '年内周次', 
              dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'], 
              dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'], 
              dayNamesMin: ['日','一','二','三','四','五','六'], 
              dayStatus: '设置 DD 为一周起始', 
              dateStatus: '选择 m月 d日, DD', 
              dateFormat: 'yy-mm-dd', 
              firstDay: 1, 
              initStatus: '请选择日期', 
              isRTL: false}; 
          $.datepicker.setDefaults($.datepicker.regional['zh-CN']); 
      });
		$( ".datepicker" ).datepicker({
		  showOtherMonths: true,
              selectOtherMonths: true,
              showButtonPanel: true,
              showOn: "both",
              buttonImageOnly: true,
              buttonImage: "/sirmproduct/sirmproduct/img/tmp.gif",
              buttonText: "",
              changeMonth: true,
              changeYear: true
		});
	}
	
	if($('.datetimepicker').length>0){
		$('.datetimepicker').datetimepicker({orientation: "left",autoclose: true});
	}
});

//单多选
$(function(){
	//控件
	if($('.icheck').length>0){
		$('.icheck').each(function() {
            $(this).iCheck({
			checkboxClass: 'icheckbox_minimal-orange',
			radioClass: 'iradio_minimal-orange',
			increaseArea: '20%' // optional
	  		});
        });		
	}
});	

//是否
$(function(){
	if($('.make-switch').length>0){
		$(".make-switch").bootstrapSwitch();
	}
});

//IE8 input-placeholder兼容
$(function(){
	if($('.input-placeholder').length>0){
		$('.input-placeholder').placeholder({isUseSpan:true});
	}
});

//弹出窗口高度
$('.modal').on('show',function(){
	$(this).find('.modal-contain').css({'max-height':$(window).height()-200});
});

//关闭块
$(function(){
		$('.icon-yuan-close').click(function(){
			$(this).parents('.bibar-gradingForm-table').removeClass('active');
			var href_val=$(this).parents('.bibar-gradingForm-table').attr('id');
			$("a[href$="+href_val+"]").parent('li').find('i.icon-checked').removeClass('icon-checked').addClass('icon-check').addClass('text-sky');
			return false;
		});
		
		$('.icon-yuan-close').click(function(){
			$(this).parents('.bibar-gradingForm-table').removeClass('active');
			var href_val=$(this).parents('.bibar-gradingForm-table').attr('id');
			$("a[href$="+href_val+"]").parent('li').find('i.icon-checked').removeClass('icon-checked').addClass('icon-check').addClass('text-sky');
			return false;
		});
});

//剩余字符	
    $(function(){
		if($("#wordCount").length>0){
			var wordCount = $("#wordCount"),
				textArea = wordCount.find("textarea"),
				word = wordCount.find(".word");
				statInputNum(textArea,word);	
		}
        
		if($("#wordCount1").length>0){
			var wordCount1 = $("#wordCount1"),
				textArea1 = wordCount1.find("textarea"),
				word1 = wordCount1.find(".word");
				statInputNum(textArea1,word1);	
		}		
    });
    function statInputNum(textArea,numItem) {
        var max = numItem.text(),
            curLength;
        textArea[0].setAttribute("maxlength", max);
        curLength = textArea.val().length;
        numItem.text(max - curLength);
        textArea.on('input propertychange', function () {
            numItem.text(max - $(this).val().length);
        });
    }
//省略字符
$(function(){
	$(".ellipsis").each(function(){
			var maxwidth=20;
			if($(this).text().length>maxwidth){
				$(this).text($(this).text().substring(0,maxwidth));
				$(this).html($(this).html()+'…');
			}
	});
})

//文件上传样式
$(function(){	
	$('.fileinput .btn.btn-file').mousemove(function(){
		$(this).find('.btn').addClass('active');
	});
	$('.fileinput .btn.btn-file').mouseout(function(){
		$(this).find('.btn').removeClass('active');
	});
});

//滚动到顶部  
  $(document).ready(function() {
    $('.pagTop').click(function(){
		$('html, body').stop().animate({scrollTop:0}, 'slow'); 
		return false; 
    });
  });


  
//框架
function sirm_frame(){
		var win_height=$(window).height();
		var win_width=$(window).width();
		var doc_height=$('body').height();
		var doc_width=$('body').width();	
		$('.bibar-content').css({'height':win_height-$('.bibar-header').height()});
	}

$(window).resize(function(){
	sirm_frame();
});	

$(document).ready(function (){	
	sirm_frame();
});