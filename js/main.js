$(document).ready(function(){
    wow = new WOW(
        {

            animateClass: 'animate__animated', // default

        }
    )
    wow.init();

    $('.burger').click( function (){
        $('nav').css('display', 'flex').css('align-items','center');
        $('.menu').css('flex-direction', 'column').css('align-items','center');
        $('.menu-item').css('padding','10px 0');
        $('.burger').hide();
        $('.burger-close').css('display','flex');

    } )

    $('.burger-close').click( function (){
        $('nav').hide();
        $('.burger-close').hide();
        $('.burger').css('display','flex');


    } )
})