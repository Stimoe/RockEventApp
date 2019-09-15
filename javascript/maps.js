// infoWindow = new google.maps.InfoWindow;
var marker, i;
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    lat=position.coords.latitude,
    lng=position.coords.longitude

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(lat,lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP 

      
        
      });
    })
  }
  