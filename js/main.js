
$(document).ready(function(){
  $('.btnAutoStart').click(function(){
    $('.dashCard').addClass('onStandBy');
    if ($('.dashCard').hasClass('onStandBy')){
      $('.standBy_off').css('display', 'none');
    }
  });


})
