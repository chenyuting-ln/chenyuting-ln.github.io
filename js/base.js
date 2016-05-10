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
		"bottom": "150px"
	}, 1500);
	$(".name-cont").animate({
		"opacity": 1,
		"left": "0"
	}, 1500);
	//
	$(".demo li").hover(function() {
		$(this).find(".befor").stop().animate({
			"left": "-1px"
		}, 500);
		$(this).find(".titleli").stop().animate({
			"top": "-1px"
		}, 500);
		$(this).find(".after").stop().animate({
			"right": "-1px"
		}, 500);
	}, function() {
		$(this).find(".titleli").stop().animate({
			"top": "-50%"
		}, 500);
		$(this).find(".befor").stop().animate({
			"left": "-50%"
		}, 500);
		$(this).find(".after").stop().animate({
			"right": "-50%"
		}, 500);
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

function a(a) {
	if (a > 10) {
		return 11;
	} else {
		return 22;
	}
}
var a = a(11);
console.log(a)
var str_user = {
	"userid": 11
}
var _url = '/user/userarea.lk';

function jsonp(a, b) {
	var timestamp = new Date().getTime();
	var str_base = {
		"ln": "0",
		"pwd": "12345",
		"version": "1",
		"downsource": "1",
		"plattype": "1",
		"pac": "1",
		"oauth_once": "" + timestamp + "",
		"type": "0"
	}
	var str = $.extend(true, str_base, a);
	str = JSON.stringify(str);
	var base_data = window.btoa(window.encodeURIComponent(str));
	console.log(base_data);
	var parameter = {
		sign: 0,
		appSecret: base_data,
		plat: 100
	};
	return parameter;
}

function _ajax(callback) {
	var parameter = jsonp(str_user, _url);
	console.log(parameter);
	$.ajax({
		type: "get",
		url: "http://115.28.184.34:8083" + _url,
		data: parameter,
		async: false,
		dataType: 'JSONP',
		success: function(text) {
			console.log(text)
			callback(text.state);

		}
	});
	
}
function setA(a) {
	var state = a;
	if (state == 1) {

	}
	console.log(state);
}
_ajax(setA);//josnp的跨域 setA是业务函数，_ajax（）通过回调函数使用;
/*
 function ajaxTools(opts){
	var obj ={};
	var flage=true;
	var timestamp = new Date().getTime();
	var str_base = {
		"ln": "0",
		"pwd": "12345",
		"version": "1",
		"downsource": "1",
		"plattype": "1",
		"pac": "1",
		"oauth_once": "" + timestamp + "",
		"type": "0"
	}
	var str = $.extend(true, str_base, opts.data);
	str = JSON.stringify(str);
	var base_data = window.btoa(window.encodeURIComponent(str));
	console.log(base_data);
	var parameter = {
		sign: 0,
		appSecret: base_data,
		plat: 100
	};
	$.ajax({
		url:"http://115.28.184.34:8083"+opts.url,
		data:parameter,
		async:false,
		complete:function(xhr,opt){
			obj.xhr=xhr;
			obj.opt=opt;
			obj.status=xhr.status;
			obj.statusText=xhr.statusText;
		}
	});
	return obj;
}
var re=ajaxTools({
	url:"/user/userarea.lk",
	data:{"userid": 11}
});
console.log(re);*/