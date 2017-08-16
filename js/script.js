jQuery(document).ready(function($) {
  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
  });
});
var $ = jQuery.noConflict();
  $(function() {
    $('#activator').click(function(){
        $('#box').animate({'top':'0px'},500);
    });
    $('#boxclose').click(function(){
        $('#box').animate({'top':'-700px'},500);
    });
  });
  $(document).ready(function(){
  $(".toggle_container").hide();
  $(".trigger").click(function(){
    $(this).toggleClass("active").next().slideToggle("slow");
    return false;
  });

  });
  $(window).load(function() {

    $("#flexiselDemo3").flexisel({
      visibleItems: 3,
      animationSpeed: 1000,
      autoPlay: true,
      autoPlaySpeed: 3000,
      pauseOnHover: true,
      enableResponsiveBreakpoints: true,
      responsiveBreakpoints: {
        portrait: {
          changePoint:480,
          visibleItems: 1
        },
        landscape: {
          changePoint:640,
          visibleItems: 2
        },
        tablet: {
          changePoint:768,
          visibleItems: 3
        }
      }
    });

  });
  $(document).ready(function () {
                  $('#horizontalTab').responsiveTabs({
                      rotate: false,
                      startCollapsed: 'accordion',
                      collapsible: 'accordion',
                      setHash: true,
                      disabled: [4,5],
                      activate: function(e, tab) {
                          $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
                      }
                  });

                  $('#start-rotation').on('click', function() {
                      $('#horizontalTab').responsiveTabs('active');
                  });
                  $('#stop-rotation').on('click', function() {
                      $('#horizontalTab').responsiveTabs('stopRotation');
                  });
                  $('#start-rotation').on('click', function() {
                      $('#horizontalTab').responsiveTabs('active');
                  });
                  $('.select-tab').on('click', function() {
                      $('#horizontalTab').responsiveTabs('activate', $(this).val());
                  });

              });
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
