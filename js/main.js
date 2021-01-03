
$(document).ready(function(){
  
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:2,
            nav:true,
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
})
$(document).ready(function(){
    $("#demi").click(function(){
        $("#div-1").toggle();
    });
    });
    new WOW().init();
    function closeNav(){
        document.getElementById('mysidenav').style.display="none";
    }
    function openNav(){
        document.getElementById('mysidenav').style.display="block";
    }
    