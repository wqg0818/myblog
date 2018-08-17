/**
 * @Version: 1.0.0
 * @date: 2018.08.08
 * @auth: wqg
 * @E-mail: wqg0818@foxmail.com
 */

// 初始化各自的脚本
$(function(){
	waypointsInit();
})
// Init waypoints for header and footer animations
function waypointsInit() {
    $('#masthead').waypoint(function(direction) {
       $(this).addClass('animation-on');
    });

    $('#main').waypoint(function(direction) {
       $('#masthead').toggleClass('animation-on');
    });

    $('#footer').waypoint(function(direction) {
      $(this).toggleClass('animation-on');
    } , { offset: 'bottom-in-view' });
}