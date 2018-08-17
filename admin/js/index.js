/**
 * @Version: 1.0.0
 * @date: 2018.04.28
 * @auth: wqg
 * @E-mail: wqg0818@foxmail.com
 */

/*初始化各自的脚本*/
$(function(){
	sidebarNav();
	sidebarControl();
	stopBubbling();
	sidebarNavScroll();
	sidebarNavToggle();
	
	Waves.attach('.button');
	Waves.init();
})

/**
 * 侧边栏折叠
 */
function sidebarNav(){
	$("#toggle_nav_btn").on( "click", function() {
		$(".container-fluid").toggleClass('slide-nav-toggle');
		var marginL = $(".fixed-sidebar-left").css("margin-left");
		if(marginL == "0px"){
			setCookie("sidebarDisplay","0","/");
		}else{
			setCookie("sidebarDisplay","1","/");
		}
	});
}

function sidebarControl(){
	var value = getCookie("sidebarDisplay");
	if(value == 0){
		$(".container-fluid").addClass('slide-nav-toggle');
	}else if(value == 1){
		$(".container-fluid").removeClass('slide-nav-toggle');
	}
}

// 阻止事件冒泡
function stopBubbling(){
	$(".sub-menu li a").click(function(event){
		event.stopPropagation();
       	console.table(e.isPropagationStopped());
	});
}

/**
 * 侧边栏滚动条
 */
function sidebarNavScroll(){
	$('.fixed-sidebar-left').perfectScrollbar();
}

/**
 * 侧边栏菜单折叠
 */
function sidebarNavToggle(){
	$('.wraplist > li').on('click',function(){
		$(this).children('.sub-menu').slideUp(250);
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).parent().removeClass('active');
			$(this).find('span i').removeClass('add-transform-down').addClass('add-transform-up');
		}else{
			$(this).children('.sub-menu').slideDown(250);
			$(this).addClass('active');
			$(this).parent().removeClass('active');
			$(this).find('span i').removeClass('add-transform-up').addClass('add-transform-down');
		}
	});
}

/**
 * 设置、获取cookie
 */
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}