/* https://developers.google.com/maps/documentation/javascript/geolocation?hl=es */

/* GEOLOCATION*/
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { 
      lat: -12.126084, 
      lng: -77.020682
    },
    zoom: 16
  });

  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Usted esta aquí');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'LABORATORIA' :
    'Error: Your browser doesn\'t support geolocation.');
}

/* INPUT*/
var $text = $('.textinput').keyup(function() {
  var $el = $(this).val();
  
  if (this.value == '') {
    $('#parent > ').fadeIn(450);
  } else {
    /* realiza la funcion para cada button contenido en el ID parent*/
    $('#parent > button').each(function() {
      var txt = $(this).attr('data-filtro');
      var match = txt.indexOf($el);
      if (match >= 0) {
        $(this).fadeIn(450);
      } else {
        $(this).fadeOut(250);
      }
    });
  }
  $text.removeClass('active');
  $(this).addClass('active');
}); 

/* funcion que hace que todos los buttons sean visibles si el texto de entrada es vacio*/
var $clear = $('.textinput').change(function() {
  if (this.value == '') {
    $('#parent > button').fadeIn(450);
  }
  $(this).addClass('active');
});

