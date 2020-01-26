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

$('article.text-article').attr('data-aos','flip-down');
$('article.projects-article').attr('data-aos', 'flip-right');
$('article.cv-article').attr('data-aos', 'fade-up');
$('article.cv-article').attr('data-aos-delay', '400');
$('article.cv-article').attr('data-aos-duration', '300');
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
