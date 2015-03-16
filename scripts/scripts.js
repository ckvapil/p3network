$(document).ready(function(){
	$('.readMore').toggle(
            function(){$(this).siblings('.readMoreDesc').fadeIn(500);
		       $(this).text("READ LESS");
		       $('.flexslider').flexslider("pause");
                      },
	    function(){$(this).siblings('.readMoreDesc').fadeOut(500);
		       $(this).text("READ MORE");
		       $('.flexslider').flexslider("play");
                      });
        $('.event').click(
            function(){
                $(this).next('.eventDescription').slideToggle(300);}
        );   
});

function initialize() {
        var mapCanvas = document.getElementById('mapCanvas');
        var myLatlng = new google.maps.LatLng(32.8712851,-96.833166,12);
        var mapOptions = {
          center: myLatlng,
          zoom: 8,
        }
        
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello World!'
        });   
      }
      google.maps.event.addDomListener(window, 'load', initialize);
