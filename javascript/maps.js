// infoWindow = new google.maps.InfoWindow;
// var marker, i;
//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//     lat=position.coords.latitude,
//     lng=position.coords.longitude

//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: new google.maps.LatLng(lat,lng),
//         mapTypeId: google.maps.MapTypeId.ROADMAP 


      var cardDiv = $('<div class="card horizontal">')
      var cardImageDiv = $('<div class="card-image">')
      cardImageDiv.append('<img>').attr('src', fakeResponse.data[i].img-url )
      cardDiv.append(cardImageDiv)

      var cardStacked = $("<div class=")
      
//       });
//     })
//   }
  // url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,