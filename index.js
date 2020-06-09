$(function() {
	$("aside img:eq(0)").mouseover(function(){
		$("aside img:eq(0)").attr("src","img/_1.png");
	});
	$("aside img:eq(1)").mouseover(function(){
		$("aside img:eq(1)").attr("src","img/_2.png");
	});
	$("aside img:eq(2)").mouseover(function(){
		$("aside img:eq(2)").attr("src","img/_3.png");
	});
	$("aside img:eq(3)").mouseover(function(){
		$("aside img:eq(3)").attr("src","img/_4.png");
	});
	$("aside img:eq(4)").mouseover(function(){
		$("aside img:eq(4)").attr("src","img/_5.png");
	});
	$("aside img:eq(5)").mouseover(function(){
		$("aside img:eq(5)").attr("src","img/_6.png");
	});
	$("aside img:eq(6)").mouseover(function(){
		$("aside img:eq(6)").attr("src","img/_7.png");
	});
	$("aside img:eq(7)").mouseover(function(){
		$("aside img:eq(7)").attr("src","img/_8.png");
	});
//----------------------------------------------------
	$("aside img:eq(0)").mouseleave(function(){
		$("aside img:eq(0)").attr("src","img/1.png");
	});
	$("aside img:eq(1)").mouseleave(function(){
		$("aside img:eq(1)").attr("src","img/2.png");
	});
	$("aside img:eq(2)").mouseleave(function(){
		$("aside img:eq(2)").attr("src","img/3.png");
	});
	$("aside img:eq(3)").mouseleave(function(){
		$("aside img:eq(3)").attr("src","img/4.png");
	});
	$("aside img:eq(4)").mouseleave(function(){
		$("aside img:eq(4)").attr("src","img/5.png");
	});
	$("aside img:eq(5)").mouseleave(function(){
		$("aside img:eq(5)").attr("src","img/6.png");
	});
	$("aside img:eq(6)").mouseleave(function(){
		$("aside img:eq(6)").attr("src","img/7.png");
	});
	$("aside img:eq(7)").mouseleave(function(){
		$("aside img:eq(7)").attr("src","img/8.png");
	});
//------------------------------------------------------
	$("aside img:eq(1)").css("marginTop","40px");
	$("aside span:eq(1)").css({"textAlign":"left","textIndent":"40px"});
	$("aside span:eq(7)").css({"textAlign":"left","textIndent":"50px"});
	$(".end img:eq(0)").css("paddingLeft","450px");
	$(".next").click(function(){
		var currentImage = $(".img.currently");
		var currentImageIndex = $(".img.currently").index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $(".img").eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass("currently");
		if (nextImageIndex == ($(".img:last").index() + 1)){
			$(".img").eq(0).fadeIn(1000);
			$(".img").eq(0).addClass("currently");
		} else{
			nextImage.fadeIn(1000);
			nextImage.addClass("currently");
		}
	});

	$(".previous").click(function(){
		var currentImage = $(".img.currently");
		var currentImageIndex = $(".img.currently").index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $(".img").eq(prevImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass("currently");
		prevImage.fadeIn(1000);
		prevImage.addClass("currently");
		});


});