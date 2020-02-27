$(document).ready (function(){
 $('.menu-toggler').on('click', function(){
 $(this).toggleClass('open');
 $('.topNav').toggleClass('open');
 });

 $('.topNav .nav-links').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.topNav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate(keyframes,{
            scrollTop: $($(this).attr('href')).offset().top - 100

        }, Options, 2000);
        });
$('#up').on('click', function(){
$('html, body').animate(keyframes,{
scrollTop: 0

}, Options, 2000);

 });      

});
