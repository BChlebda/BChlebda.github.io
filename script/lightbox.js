$(document).ready(function(){

    var width;
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
    
    function size(){
        width = $('.lt_box').width() - 80;
        $('#lt_Slider').css('width', width);
        $('#lt_Slider').css('height', $('.lt_box').height() - 100);
        $('.lt_slide').css('width', width - 20);
    }
    
    $('.lt_switch').click(function(){
        if($(window).height() < 415 || $(window).width() < 601 ){
            return false;
        } else {
        size();
        var pos = $('#projects').position();
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
        }
    });
    
    function addSlide(){
        var ost = '<li class="lt_slide">'+$($Slide[0]).html();+'</li>';
        $('.lt_slides').append(ost);
        $Slide = $Slides.find('.lt_slide');
        $('.lt_slides').css('width', width*$Slide.length);
        $('.lt_slide').css('width', width - 20);
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