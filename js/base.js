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

	var i = 20;
	$(".demolist-cont .img").hover(function() {
		$(this).find(".name").stop().animate({
			"height": "100%",
			"border-top-left-radius": "15px",
			"border-top-right-radius": "15px"

		}, 500);

	}, function() {

		$(this).find(".name").stop().animate({
			"height": "20%",
			"border-top-left-radius": "0",
			"border-top-right-radius": "0"
		}, 500);
	});
	//
	$(".first").stop().animate({
		"top": 0
	}, 1000);
	$(".first .cont").stop().animate({
		"opacity": 0.7
	}, 1000);
	$(window).scroll(function() {
		var h = $(document).scrollTop();
		console.log("dsjf=" + h)
		var wh = $(window).height();
		if (h >= wh) {
			$(".first").stop().animate({
				"top": "-100%"
			}, 1000);
			$(".second").stop().animate({
				"bottom": "0"
			}, 1000);
			$("#nav").slideDown(2000);

		} else {

			$(".first").stop().animate({
				"top": 0
			}, 1000);
			$(".second").stop().animate({
				"bottom": "-100%"
			}, 1000);
			$("#nav").slideUp(2000);
		}
		var fh = $(".first .perseon").offset().top;
		console.log(fh)

	});
	$(".name-cont").animate({
			"opacity": 0.5,
			"bottom":"150px"
		}, 1500);
	$(".name-cont").animate({
		"opacity": 1,
			"left": "0"
		}, 1500);
		//
$(".demo li").hover(function(){
	
	$(this).find(".befor").stop().animate({
		"left":"-1px"
	},500);
	$(this).find(".titleli").stop().animate({
		"top":"-1px"
	},500);
	$(this).find(".after").stop().animate({
		"right":"-1px"
	},500);
},function(){
	$(this).find(".titleli").stop().animate({
		"top":"-50%"
	},500);
	$(this).find(".befor").stop().animate({
		"left":"-50%"
	},500);
	$(this).find(".after").stop().animate({
		"right":"-50%"
	},500);
})
});

function cir() {
	var i, x, y, lx, ly;

	for (i = 2; i < parseInt(10 * Math.random()); i++) {
		x = parseInt(1000 * Math.random());
		y = parseInt(800 * Math.random());
		lx = parseInt(1000 * Math.random());
		ly = parseInt(800 * Math.random());
		w = parseInt(30 * Math.random()) + 10;
		$(".one").append("<div class='cri" + i + "'></div>");
		$(".cri" + i + "").css({
			"top": x,
			"left": y

		});
		$(".cri" + i + "").animate({
			"top": lx,
			"left": ly,
			"width": w,
			"height": w,
			"opacity": 1
		}, parseInt(1000 * Math.random()) + 1000);
		console.log(i + "," + x + "," + y + "," + lx + "," + ly);
	}

}
