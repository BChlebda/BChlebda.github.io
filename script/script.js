$(window).on('scroll', function(){    
 if($(window).scrollTop()){
     $('.nav-cont').addClass('black');
     $('.home').addClass('visible');
     $('.down').addClass('notVisible');
 } else {
     $('.nav-cont').removeClass('black');
     $('.home').removeClass('visible');
     $('.down').removeClass('notVisible');
 }
})

$('div.text-article').attr('data-aos', 'fade-in');
$('div.projects-article').attr('data-aos', 'flip-right');
$('div.cv-article').attr('data-aos', 'fade-up');
$('div.cv-article').attr('data-aos-delay', '400');
$('div.cv-article').attr('data-aos-duration', '300');
$('.cv-span').attr('data-aos', 'zoom-in');
$('.cv-span').attr('data-aos-duration', '40');

AOS.init();


var posD = $('#Start').height();
$('#downBox').css('top', posD - 90);

$(document).ready(function(){
  $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$('a').focus(function(){
   $(this).blur(); 
});
