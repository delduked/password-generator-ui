
$(document).ready(function(){

      $(".api-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#api").offset().top},
                'slow');

                console.log('clicked');
        });

        $(".ws-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#ws").offset().top},
                'slow');

                console.log('clicked');
        });


      $(".home-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#home").offset().top},
                'slow');

                console.log('clicked');
        });

      $(".docker-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#docker").offset().top},
                'slow');

                console.log('clicked');
        });

      
        $(".web-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#web").offset().top},
                'slow');

                console.log('clicked');
        });

        $(".infra-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#infra").offset().top},
                'slow');

                console.log('clicked');
        });

        $(".images-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#images").offset().top},
                'slow');

                console.log('clicked');
        });

        $(".environments-scroll").click(function() {
            $('html,body').animate({
                scrollTop: $("#environments").offset().top},
                'slow');

                console.log('clicked');
        });

        $('.navbar-burger').click(function(){
            $('.navbar-menu').toggleClass('is-active')
        });

        //picture 4 modal appear and disappear
        $('.picture4').click(function(){
            $('.modal.four').addClass('is-active')
        });

        $('.modal-background').click(function(){
            $('.modal.four').removeClass('is-active')
        });
        //picture 4 modal appear and disappear

        //picture 2 modal appear and disappear
        $('.picture2').click(function(){
            $('.modal.two').addClass('is-active')
        });

        $('.modal-background').click(function(){
            $('.modal.two').removeClass('is-active')
        });
        //picture 2 modal appear and disappear
});