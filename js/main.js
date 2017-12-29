
$(document).ready(function(){

  $('.btnSchedule').click(function(){
    $('.purchase').addClass('show');
    $('.barz').addClass('show');
    $('.foot').addClass('footOn');

  });

$('.barz').click(function(){
  $('.purchase').removeClass('show');
  $('.barz').removeClass('show');
  $('.foot').removeClass('footOn');
});


  $('.btnAutoStart').click(function(){
    $('.dashCard').addClass('onStandBy');
    autopilot();
    $('.speedometer').addClass('show');
    if ($('.dashCard').hasClass('onStandBy')){
      $('.standBy_off').css('display', 'none');
      $('.standBy_btnOff').css('display', 'none');
    }
  });

$('.dash .dashCard').click(function() {
  if ($('.dashCard').hasClass('onStandBy')){
    $('.dashCard').removeClass('onStandBy');
    $('.dashCard').addClass('started');
    $('.standBy_off').css('display', 'block');
  }
});

$('.started').click(function() {
  console.log('n');
});

function autopilot() {
  var start = 0;
  var speed = 10;

    go();
    var counter = setInterval(function () {
        go();
        if (start > 85) {
          HyperBoostStart();
        }
        if (start > 90) {
          HyperBoostOn();
        }
        if (start > 121) {
          clearThis();
        }
    }, speed);

    function go() {
        $(".speed").html(start.toFixed(0));
        start += 0.125;

    }

    function HyperBoostOn() {
      $('.dashCard').removeClass('onStandBy');
      $('.dashCard').addClass('HypeOn');
      $('.circle ').addClass('onHype');
      $('.info').css('color', 'white');
      $('.btn-hyperstop').css('display', 'block');
      $('.btn-autostop').css('display', 'none');
        }

    function HyperBoostStart() {
      $('.dashCard').addClass('HypeStart');
    }

    function clearThis() {
      clearInterval(counter);
    }

  }

})
