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