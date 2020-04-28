$(document).ready(function(){



  $('.pf_01').click(function(){
      $('.popup_1').addClass('active');

      });

  $('.popup_cancel').click(function(){
    $('.popup_1').removeClass('active');
    });

  $('.pf_01').click(function(){
        $('.body').addClass('noscroll');

      });

  $('.popup_cancel').click(function(){
        $('.body').removeClass('noscroll');
        });

    $(function () {
        baloonUp();

        function baloonUp() {
            $('.scroll').animate({
                'bottom': 85
            }, 900, null, baloonDown);
        }

        function baloonDown() {
            $('.scroll').animate({
                'bottom': 73
            }, 700, null, baloonUp);
        }
    });





});
