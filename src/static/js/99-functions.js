var hotelgridbody = $(".hotel-item-grid-body").outerHeight();
var hotelgridimg = $(".hotel-item-grid-image").outerHeight();
$(function() {
	$(".hotel-item-grid-wrapper").css("height",hotelgridbody); 
});

$(window).resize(function(){
	hotelgridbody = $(".hotel-item-grid-body").outerHeight();
	hotelgridimg = $(".hotel-item-grid-image").outerHeight();

	$(".hotel-item-grid-wrapper").css("height",hotelgridbody); 
});

$(".hotel-item-grid-wrapper").hover
(
	function()
	{
		$(this).find(".hotel-item-grid-slide").css("top",-hotelgridimg);
	},
	function()
	{
		$(this).find(".hotel-item-grid-slide").css("top","0");
	}
);

// Lazyloading the images
$("img.lazyimage").unveil(200, function() {
	$(this).load(function() {
		this.style.opacity = 1;
	});
});

