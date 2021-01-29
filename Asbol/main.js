(function($) {

   "use strict";

    //    Naviation
   var OnePageNavigation = function() {
    $('body').scrollspy({target:'#ftco-navbar'});
    $('#ftco-navbar li a').on('click', function(e){
        if(this.hash !== ''){
            e.preventDefault();

        const hash= this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 600, function(){
            window.location.hash= hash;
        });
        }
    });
  };
  OnePageNavigation();



   var fullHeight = function() {

       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
           $('.js-fullheight').css('height', $(window).height());
       });

   };
   fullHeight();

   // loader
   var loader = function() {
       setTimeout(function() { 
           if($('#ftco-loader').length > 0) {
               $('#ftco-loader').removeClass('show');
           }
       }, 1);
   };
   loader();

   // Scrollax
  $.Scrollax();

   var carousel = function() {
       $('.wwd-slider').owlCarousel({
           center: true,
           loop: true,
           dots: true,
           items: 3,
           margin: 30,
           stagePadding: 0,
           nav: true,
           navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-left" aria-hidden="true"></i>'],
           responsive:{
               0:{
                   items: 1
               },
               325: {
                   items:2
               },
               600:{
                   items: 2
               },
               1200:{
                   items: 3
               }
           }
       });


   };
   carousel();


})(jQuery);

