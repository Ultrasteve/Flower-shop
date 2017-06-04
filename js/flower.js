var changeCarousel = function(t) {
		var onDisapper = document.getElementsByClassName("active");
		var slideTo = t.getAttribute("data-slide-to");
		if(slideTo === 0 && onDisapper[0].getAttribute('id') === 0)
			return;
		else
			onDisapper[0].className = "item";
		var onShow = document.getElementById("carousel"+slideTo);
		onShow.className = "item active";
}
var showDropdown = function() {
	var onShow = document.getElementsByClassName("dropdown-cate");
	if(onShow[0].style.display === "block")
		onShow[0].style.display = "none";
	else
		onShow[0].style.display = "block";
}

var reEdit = function() {
		var onNone = document.getElementsByClassName('complete-editBooker');
		var onShow = document.getElementsByClassName('editBooker');
		onNone[0].style.display = "none";
		onShow[0].style.display = "inline-block";
}
var completeEdit = function() {
	var onShow = document.getElementsByClassName('complete-editBooker');
	var onNone = document.getElementsByClassName('editBooker');
	//添加结果

	var result = document.getElementsByClassName('result');
	var editResult = document.getElementsByClassName('editResult');
	for(let i = 0;i<result.length;i++) {
		editResult[i].innerHTML = result[i].value;
	}

	onNone[0].style.display = "none";
	onShow[0].style.display = "inline-block";
}
var openAlert = function() {
	//if()
	var onOperate = document.getElementsByClassName("alert-box");
	onOperate[0].style.display = "block";
}
var closeAlert = function() {
	//if()
	var onOperate = document.getElementsByClassName("alert-box");
	onOperate[0].style.display = "none";
}
var submitInfo = function() {
	document.getElementById("addBooker").style.display = "none";
	
}
var editInfo = function() {
	openAlert();
}