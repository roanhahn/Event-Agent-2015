$(document).ready(function() {

var hotelgridbody = $(".hotel-item-grid-body").outerHeight();
var hotelgridimg = $(".hotel-item-grid-image").outerHeight();
var hotelgridwrapper = $(".hotel-item-grid-wrapper").outerHeight();
var hotelgridcontent = $(".hotel-item-grid-image").outerHeight();

$(function() {
	$(".hotel-item-grid-wrapper").css("height",hotelgridimg * 2);
	$(".hotel-item-grid-content").css("height",hotelgridcontent); 
});

$(window).resize(function(){
	hotelgridbody = $(".hotel-item-grid-body").outerHeight();
	hotelgridimg = $(".hotel-item-grid-image").outerHeight();
	hotelgridwrapper = $(".hotel-item-grid-wrapper").outerHeight();
	hotelgridcontent = $(".hotel-item-grid-image").outerHeight();

	$(".hotel-item-grid-wrapper").css("height",hotelgridimg * 2);
	$(".hotel-item-grid-content").css("height",hotelgridcontent); 
});

$(".hotel-item-grid").hover
(
	function()
	{
		$(this).parent().find(".hotel-item-grid-slide").css("top",-hotelgridimg);
	},
	function()
	{
		$(this).parent().find(".hotel-item-grid-slide").css("top","0");
	}
	);

// Lazyloading the images
$("img.lazyimage").unveil(200, function() {
	$(this).load(function() {
		this.style.opacity = 1;
	});
});

// Message
$( ".message" ).delay( 2000 ).fadeOut( 400 );

// Accordion

$('#only-one [data-accordion]').accordion();

$('#single[data-accordion]').accordion({
  transitionEasing: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
  transitionSpeed: 200
});

// Show/hide cart
$('.show-cart').click(function()
{
	$('.cart').slideToggle("fast");
    $('.show-cart').toggleClass("cart-total-open");
});
$('.close-cart').click(function()
{
	$('.cart').slideToggle("fast");
    $('.show-cart').toggleClass("cart-total-open");
});

// Hide hotel on map

$('.hotel-map-close').click(function()
{
	$('.gmap-hotel').fadeToggle("fast");
});


// Show/hide tell me more
$('.show-tell').click(function()
{
	$('.tell-me-more-wrapper').slideToggle("fast");
});
$('.close-tell-me-more').click(function()
{
	$('.tell-me-more-wrapper').slideToggle("fast");
});

// Show more info at tickets
/* $('.show-more-info').click(function()
{
	$(this).parent().find(".more-info").toggle("fast");
});*/


// Paralax effect
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

}
else{
	$.stellar({
  // Set scrolling to be in either one or both directions
  horizontalScrolling: false,
  verticalScrolling: true,

  // Set the global alignment offsets
  horizontalOffset: 0,
  verticalOffset: 100,

  // Refreshes parallax content on window load and resize
  responsive: false,

  // Select which property is used to calculate scroll.
  // Choose 'scroll', 'position', 'margin' or 'transform',
  // or write your own 'scrollProperty' plugin.
  scrollProperty: 'scroll',

  // Select which property is used to position elements.
  // Choose between 'position' or 'transform',
  // or write your own 'positionProperty' plugin.
  positionProperty: 'position',

  // Enable or disable the two types of parallax
  parallaxBackgrounds: true,
  parallaxElements: false,

  // Hide parallax elements that move outside the viewport
  hideDistantElements: true,

  // Customise how elements are shown and hidden
  hideElement: function($elem) { $elem.hide(); },
  showElement: function($elem) { $elem.show(); }
});
}

//// Owl Carousel ////



var owl = $(".carousel");

owl.owlCarousel({
	items : 3, //10 items above 1000px browser width
	itemsDesktop : [1000,3], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,2], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : [480,2], // itemsMobile disabled - inherit from itemsTablet option
	mouseDrag: true,
	touchdrag: true,
	lazyLoad : false,
	responsive: true,
	autoPlay: 5000,
	stopOnHover: true,
});

// PIE loader
var loader = document.getElementById('loader')
  , border = document.getElementById('border')
  , α = 0
  , π = Math.PI
  , t = 10;

(function draw() {
  α++;
  α %= 360;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 100
    , y = Math.cos( r ) * - 100
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -100 A 100 100 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  loader.setAttribute( 'd', anim );
  border.setAttribute( 'd', anim );
  
  setTimeout(draw, t); // Redraw
})();


});