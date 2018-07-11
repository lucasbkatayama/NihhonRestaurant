var flag = 0;

function openNav(x){
	x.classList.toggle("change");
}
function opent(){
	if(flag == 0){
		document.getElementById("sideNavid").style.height = "100%";
		$('.menu-btn').css("position","fixed");
		flag = 1;
	} else {
		$('.menu-btn').css("position","absolute");
		document.getElementById("sideNavid").style.height = "0";
		flag = 0;
	}
}

// $(".logo").mouseover(function(){
// 		$(".logo-img").addClass("rightX ghost");
// });
//
// $(".logo").maouseleave(function(){
// 		$(".logo-img").removeClass("rightX ghost");
// });
//
// $("").mouseover(function(){
// 		$("x").addClass("downY ghost");
// });
//
// $("").maouseleave(function(){
// 		$("x").removeClass("downY ghost");
// });


setInterval(function() {
	if ($(".blink ").css("opacity") == 1) {
		$(".blink").css("opacity","0.2");
	}
	else {
		$(".blink").css("opacity", 1);
	}
}, 1000);
