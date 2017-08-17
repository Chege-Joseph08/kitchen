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

    
