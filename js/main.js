/*const responsive = {
    320: {
        items:1
    },
    560:{
        items:2
    }
}
*/


$(document).ready(function(){
    $nav=$('.nav');
    $togglecollapse=$('.toggle-collapse');
    
    /*** click event on togggle menu ***/
    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');
        
    })


// Owl-Carousel for blog

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-pre'),$('.owl-navigation .owl-nav-next')]
   // responsive: responsive
});

    // click to scroll top
    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0 
        }, 1000);
    })
    
    // AOS Instance
    AOS.init();
    
    
});    