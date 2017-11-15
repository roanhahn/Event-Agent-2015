
$(document).ready(function() {
/*
var hotelgridbody = $(".hotel-item-grid-body").outerHeight();
var hotelgridimg = $(".hotel-item-grid-image").outerHeight();
var hotelgridwrapper = $(".hotel-item-grid-wrapper").outerHeight();
var hotelgridcontent = $(".hotel-item-grid-image").outerHeight();
var gridfacilities = hotelgridbody - hotelgridimg;

$(function() {
  $(".hotel-item-grid-wrapper").css("height",hotelgridimg * 2);
  $(".hotel-item-grid-content").css("height",hotelgridcontent);
    $(".grid-facilities").css("height",gridfacilities);
});

$(window).resize(function(){
  hotelgridbody = $(".hotel-item-grid-body").outerHeight();
  hotelgridimg = $(".hotel-item-grid-image").outerHeight();
  hotelgridwrapper = $(".hotel-item-grid-wrapper").outerHeight();
  hotelgridcontent = $(".hotel-item-grid-image").outerHeight();
    gridfacilities = hotelgridbody - hotelgridimg;

  $(".hotel-item-grid-wrapper").css("height",hotelgridimg * 2);
  $(".hotel-item-grid-content").css("height",hotelgridcontent);
    $(".grid-facilities").css("height",gridfacilities);
});*/



/*
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
*/

// Video

// var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
  
//   if (isIOS) {
 
//     var canvasVideo = new CanvasVideoPlayer({
//       videoSelector: '.video',
//       canvasSelector: '.canvas',
//       timelineSelector: false,
//       autoplay: true,
//       makeLoop: true,
//       pauseOnClick: false,
//       audio: false
//     });
    
//   }else {
    
//     // Use HTML5 video
//     document.querySelectorAll('.canvas')[0].style.display = 'none';
    
//   } 


// VIMEO


//Select the #embeddedVideo element
// var video = document.getElementById('embeddedVideo');

// //Create a new Vimeo.Player object
// var player = new Vimeo.Player(video);

// //When the player is ready, set the volume to 0
// player.ready().then(function() {
//     player.setVolume(0);
// });

// responsive video







// PopOver

$(function () {
  $('[data-toggle="popover"]').popover();
})


// DATEPICKER

    $('.input-group.date').datepicker({
      startDate: '01/01/2017',
      endDate: '01/08/2017',
      autoclose: true
    });

// Tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// POPOVER


// Flights

$('.flight-row').click(function (event) {
   if (event.target.type !== 'radio') {
      $('.flight-radio-desk', this).trigger('click');
    }
});

// show more

$('.show-more-description').click(function()
{
    $(this).parent().find(".toggle-description").toggleClass("toggle-height");
    $(this).toggleClass("show-less-description");
});

// Flipping card

$(".hotel-card-container").hover
(
  function()
  {
    $(this).find(".hotel-card").addClass("flipped");
  },
  function()
  {
   $(this).find(".hotel-card").removeClass("flipped");
  }
);

//onclick="document.querySelector('#flip-toggle').classList.toggle('hover');

$('.toggleflip').click(function()
{
  $(this).parent().find(".flip-toggle").toggleClass("hover");
});



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

$('.showbookingform').click(function()
{
  $('.bookingform').slideToggle("fast");
});

// Mobile Menu
$('.show-mobilemenu').click(function()
{
  $('.mobile-menu').slideToggle("fast");
});

// Show/hide cart
$('.show-cart').click(function()
{
  $('.cart').slideToggle("fast");
  $.scrollLock( true );
  $('.mobile-menu').css('display', 'none');
  // $('.show-cart').toggleClass("cart-total-open");
    // $('body').addClass("overflow");
});
$('.close-cart').click(function()
{
  $('.cart').slideToggle("fast");
    $('.show-cart').toggleClass("cart-total-open");
    $.scrollLock( false );
    // $('body').removeClass("overflow");
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
  $('.mobile-menu').css('display', 'none');
  $.scrollLock( true );
    // $('body').addClass("overflow");
});
$('.close-tell-me-more').click(function()
{
  $('.tell-me-more-wrapper').slideToggle("fast");
  $.scrollLock( false );
   // $('body').removeClass("overflow");
});

// Show/hide Disclaimer
$('.show-disclaimer').click(function()
{
    $('.page-disclaimer').fadeToggle("fast");
    $.scrollLock( true );
});
$('.close-page').click(function()
{
    $('.page-text').fadeToggle("fast");
    $.scrollLock( false );
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

var $input = $('.typeahead');
$input.typeahead({source:
        [
         {id: "someId1", name: "Amsterdam (AMS)"},
         {id: "someId2", name: "New York (JFK)"},
         {id: "someId3", name: "Miami (MIA)"},
         {id: "someId4", name: "Paris Charles de Gaulle (CDG)"},
         {id: "someId5", name: "London Heathrow Airport (LHR)"},

        ],
        autoSelect: true});
$input.change(function() {
    var current = $input.typeahead("getActive");
    if (current) {
        // Some item from your model is active!
        if (current.name == $input.val()) {
            // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
        } else {
            // This means it is only a partial match, you can either add a new item
            // or take the active if you don't want new items
        }
    } else {
        // Nothing is active so it is a new value (or maybe empty value)
    }
});


});