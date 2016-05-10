var regexEnum = {
		tel: /^(((13[0-9]{1})|(14[0-9]{1})|(17[6,7,8])|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/,
		email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/,
		idcard:/^[1-9]([0-9]{14}|[0-9]{17})$/
	}
function validation(a,b) {
	var submitval = false;
	var e;
	switch(b){
		case "tel":
		e=regexEnum.tel;
		error_cont="请输入正确的手机号码";
		break;
		case "email":
		e=regexEnum.email;
		error_cont="请输入正确的邮箱号码";
	}
	if (!e.test(a)) {
		submitval = false;
		return error_cont;
	} else {
		submitval = true;
	}
	return submitval;
}

//身份证号码
var aCity = {
	11: "北京",
	12: "天津",
	13: "河北",
	14: "山西",
	15: "内蒙古",
	21: "辽宁",
	22: "吉林",
	23: "黑龙江",
	31: "上海",
	32: "江苏",
	33: "浙江",
	34: "安徽",
	35: "福建",
	36: "江西",
	37: "山东",
	41: "河南",
	42: "湖北",
	43: "湖南",
	44: "广东",
	45: "广西",
	46: "海南",
	50: "重庆",
	51: "四川",
	52: "贵州",
	53: "云南",
	54: "西藏",
	61: "陕西",
	62: "甘肃",
	63: "青海",
	64: "宁夏",
	65: "新疆",
	71: "台湾",
	81: "香港",
	82: "澳门",
	91: "国外"
}
function isCardID(sId) {
	var iSum = 0;
	var info = "";
	if (!/^\d{17}(\d|x)$/i.test(sId)) return "你输入的身份证长度或格式错误";
	sId = sId.replace(/x$/i, "a");
	if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
	for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
	if (iSum % 11 != 1) return "你输入的身份证号非法";
	return true; //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女")
}
window.onload=function(){
	var a = validation("18290257080","tel");
	var b = validation("18290257080","email");
	console.log(a);
	console.log(b);
	console.log(isCardID("500383199205232144"))
};