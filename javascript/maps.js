var startLat
var startLong
var makeMarker={}









 
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

      lat=position.coords.latitude,
      lng=position.coords.longitude
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(lat,lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP  
      });
      startLat=lat
      startLong=lng
    latLon=(startLat + ","  + startLong)
    bandInfo(latLon)
     console.log(latLon)
console.log(startLong)
console.log(startLat)
console.log(latLon)
    })
      }
    }
      function seattleLocation() {
      
      // var seattleLat=47.608013
      // var seattleLon=122.335167
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(47.608013,-122.335167),
        mapTypeId: google.maps.MapTypeId.ROADMAP  
      });
      // startLat=seattleLat
      // startLong=seattleLon
    latLon=(47.608013 + ","+ -122.335167  )
    console.log(latLon)
    bandInfo(latLon)

   
   

  }

  function venueMarkers(){
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(47.608013,-122.335167),
      mapTypeId: google.maps.MapTypeId.ROADMAP  
    });
    // startLat=seattleLat
    // startLong=seattleLon
  latLon=(47.608013 + ","+ -122.335167  )
 
  bandInfo(latLon)
  
    console.log("markers"+markerToMake)
    var marker = new google.maps.Marker({
      position: markerToMake,
      map: map,
      title: 'Hello World!'
    });
   

  }

  
  // function venueMarkers(){
  
  //   console.log(markerToMake)
  //   var marker = new google.maps.Marker({
  //     position: markerToMake,
  //     map: map,
  //     title: 'Hello World!'
  //   });
   

  // }
    
    
  
  


  // url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,