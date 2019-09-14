
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
      function showPosition(position) {
        lats=position.coords.latitude
        longs=position.coords.longitude
        console.log(lats)
        console.log(longs)
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lats, lng: longs},
            zoom: 10
          });
          }
            } 
    }

    getLocation()

  

