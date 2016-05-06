$(function() {
	$("#welcom").animate({
		top: 0,
		opacity: 1
	}, 1000);

setTimeout(function() {
		$("#welcom").animate({
			top: "100%",
			opacity: 1
		}, 1000);
	}, 2000);
$(".demolist-cont .img").mouseover(function(){
	$(this).find(".name").css("opacity","1");
}).mouseout(function(){
	$(this).find(".name").css("opacity","0");
});

});