var startLat
var startLong
var makeMarker={}

// var cardHorizontalDiv = $('<div class="card horizontal">')
// var cardImageDiv = $('<div class="card-image">')
// cardImageDiv.append('<img>').attr('src', "https://www.thegraciouspantry.com/wp-content/uploads/2018/08/clean-eating-lunch-box-burritos-v-1-.jpg")
// cardHorizontalDiv.append(cardImageDiv)

// var cardStackedDiv = $('<div class="card-stacked">')
// var cardContentDiv = $('<div class"card-content">')
// cardContentDiv.append("<h5>").attr("#", fakeResponse2.data[i].img - url)
// cardContentDiv.append("<h1>").attr("#", fakeResponse2.data[i].img - url)
// cardStackedDiv.append(cardContentDiv)

// var cardActionDiv = $('<div class="card-action">')
// cardActionImgDiv.append('<a>').attr('#', fakeResponse.data[i].img - url)
// cardActionImgDiv.append('<a>').attr('#', fakeResponse.data[i].img - url)
// cardActionImgDiv.append('<a>').attr('#', fakeResponse.data[i].img - url)
// cardActionDiv.append(cardActionImgDiv)


function displayCards(arr){
  for (let i = 0; i <10; i++) {
  
    
    // <img src="${response.data[i].url}">
    
    $(".main-card-container>.row").append(` <div class="col s2 m7">
    <h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
    <div class="card-image">
    <img src="https://www.thegraciouspantry.com/wp-content/uploads/2018/08/clean-eating-lunch-box-burritos-v-1-.jpg">
    </div>
    <div class="card-stacked">
        <div class="card-content">
            <h5 id="artist-name">Artist name link here</h5>
            <h6 id="venue-name">Venue name link here</h6>
            <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>

        <div class="card-action">
            <a href="#" id="venue">Venue Location</a>
            <a href="#" id="itunes">iTunes</a>
            <a href="#" id="event-details">Email Event Details</a>
        </div>
    </div>
</div>
</div>`)
}
}
displayCards()
//       });
//     })
//   }


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

      lat = position.coords.latitude,
        lng = position.coords.longitude
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      startLat = lat
      startLong = lng
      latLon = (startLat + "," + startLong)
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
  console.log("venue name" +ven2)
    // console.log("markers"+markerToMake)
    var marker = new google.maps.Marker({
      position: markerToMake,
      map: map,
      title: ven2
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