$(document).ready(function(){
    function stopScrolling(){   
            $(window).on("mousewheel DOMMouseScroll",function(){
            return false;
            });
            }
    function startScrolling(){   
            $(window).unbind("mousewheel DOMMouseScroll");
            }
    
    
    
    $('.lt_switch').click(function(){
        $('.lt_backdrop').animate({'opacity':'.50'}, 300, 'linear');
        $('.lt_box').animate({'opacity':'1.00'}, 300, 'linear');
        $('.lt_backdrop, .lt_box').css('display', 'block');
        stopScrolling();
    });
    
    var width = 820;
    var animationSpeed = 1000;
    var pause = 6000;
    var currentSlide = 1;
    var interval;
    
    var $Slider = $('#lt_Slider');
    var $Slides = $Slider.find('.lt_slides');
    var $Slide = $Slides.find('.lt_slide');

    function startSlider(){
        if($Slide.length == 1) {
            stop();
        } else {
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
    }
    
    function stopSlider(){
        clearInterval(interval);
    }
    
    $Slider.on('mouseover', stopSlider).on('mouseleave', startSlider);
    
    startSlider();
    
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
        $Slides.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++;
            if(currentSlide == $Slide.length){
                $Slides.css('margin-left', 0);
                currentSlide = 1;
            }
        });        
    });
    
    
    $('.lt_close').click(function(){
        startScrolling();
        $('.lt_backdrop, .lt_box').animate({'opacity':'0'}, 400, 'linear', function(){
        $('.lt_backdrop, .lt_box').css('display', 'none');
        });
    });
});