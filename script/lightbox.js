$(document).ready(function(){

    var width = 1100;
    var animationSpeed = 1000;
    var pause = 5000;
    var interval;
    
    var currentSlide = 1;    
    var $Slider = $('#lt_Slider');
    var $Slides = $Slider.find('.lt_slides');
    var $Slide = $Slides.find('.lt_slide');
    var real = $Slide.length;
    
    function stopScrolling(){   
            $('.light').on('wheel', function(event2){
            event2.preventDefault();
            });
            }
    function startScrolling(){   
            $('.light').unbind('wheel');
            }
    
    $('.lt_switch').click(function(){
        var pos = $('#projects').position();
        console.log(pos.top, pos.left);
        $('.light').css('top', pos.top);
        $('.light').css('z-index', '49');
        $('.lt_backdrop').animate({'opacity':'.50'}, 500, 'linear');
        $('.lt_box').animate({'opacity':'1.00'}, 300, 'linear');
        $('.lt_backdrop, .lt_box').css('display', 'block');
        stopScrolling();
        if(real > 1){        
        addSlide();
        startSlider();
        $Slider.on('mouseover', stopSlider).on('mouseleave', startSlider);    
        }
    });
    
    function addSlide(){
        var ost = '<li class="lt_slide">'+$($Slide[0]).html();+'</li>';
        $('.lt_slides').append(ost);
        $Slide = $Slides.find('.lt_slide');
        $('.lt_slides').css('width', width*$Slide.length);
    }

    function startSlider(){
        interval = setInterval(function(){
        $Slides.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            if(currentSlide == $Slide.length){
                $Slides.css('margin-left', 0);
                currentSlide = 1;
            }
        });
    }, pause);    
    }
    
    function stopSlider(){
        clearInterval(interval);
    }    
    
    $('.lt_prev').click(function(){
        stopSlider();
            if(currentSlide == 1 ){
                stop();
            } else {       
                $Slides.animate({'margin-left': '+='+width}, animationSpeed, function(){ 
                currentSlide--;
                });        
            }
    });
    
    $('.lt_next').click(function(){
        stopSlider();
            if(currentSlide == real ){
                stop();
            } else {        
                $Slides.animate({'margin-left': '-='+width}, animationSpeed, function(){
                currentSlide++;
                });
        }
    });
    
    $('.lt_close').click(function(){
        startScrolling();
        stopSlider();
        $('.lt_backdrop, .lt_box').animate({'opacity':'0'}, 400, 'linear', function(){
        $('.lt_backdrop, .lt_box').css('display', 'none');
        $('.light').css('z-index', '-1');
        });
    });
});
