
// // var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101"
// var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z"

// url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,

// url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,

// url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,

// var embed=[]
// var genre=[]
// var date=[]
// var time=[]
// var event=[]
// var longg=[]
// var latss=[]
// var venues=[]
// var bandNames=[]
// var images=[]
// var locations=[];


//url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,


// var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z"


// var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+latLon+""

var embed=[]
var genre=[]
var date=[]
var time=[]
var map;
var longg=[]
var latss=[]
var venues=[]
var bandNames=[]
var images=[]
var locations=[]

var search
var zip;
var currentLocation;
var seattle=(47.608013+ "," + -122.335167)

function mapFor(){
  if (search===currentLocation){
    getLocation()
  }
  
  else{

  }
  
}



bandInfo(seattle)
function bandInfo(startLatLon){

  
  var locationQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+startLatLon+""
  var seattleQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+startLatLon+""


$.ajax({ 



    url: seattleQueryURL,
    method: "GET"
  }).then(function(response) {
  console.log(response)

     var embed=response._embedded.events
     
     console.log(embed)
     var longg=[]
     var latss=[]
     var venues=[]
     
      for (var i = 0; i < embed.length; i++){ 
        if (embed[i].classifications[0].hasOwnProperty('subGenre')){
  genre.push(embed[i].classifications[0].subGenre.name)
      
        var bandName=embed[i].name
    var venue=embed[i]._embedded.venues[0].name
var latit=embed[i]._embedded.venues[0].location.latitude
var longit=embed[i]._embedded.venues[0].location.longitude
var image=embed[i].images[0].url
          images.push(image)
        bandNames.push(bandName)
        venues.push(venue)
       latss.push(latit)
      longg.push(longit)

      
    date.push(embed[i].dates.start.localDate)
    time.push(embed[i].dates.start.localTime)   
      
      }
    }
      locations.push(venues)
      locations.push(latss)
      locations.push(longg)
      console.log(venues)
      console.log(genre)
      console.log(date)
      console.log(time)
     console.log(images)
      console.log(bandNames)
      console.log(locations)
    })
    }
  
  

// bandInfo(seattleLatLon)















































// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         var x = document.getElementById("location");
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     var x = document.getElementById("location");
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude; 
//     var latlon = position.coords.latitude + "," + position.coords.longitude;


//     $.ajax({
//       type:"GET",
//       url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,
//       async:true,
//       dataType: "json",
//       success: function(json) {
//                   console.log(json);
//                   var e = document.getElementById("events");
//                   e.innerHTML = json.page.totalElements + " events found.";
//                   showEvents(json);
//                   initMap(position, json);
                
//                },
//       error: function(xhr, status, err) {
//                   console.log(err);
//                }
//     });

// }

// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             x.innerHTML = "User denied the request for Geolocation."
//             break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML = "Location information is unavailable."
//             break;
//         case error.TIMEOUT:
//             x.innerHTML = "The request to get user location timed out."
//             break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML = "An unknown error occurred."
//             break;
//     }
// }


// function showEvents(json) {
//   for(var i=0; i<json.page.totalElements; i++) {
//     // $("#events").append("<p>"+json._embedded.events[i]+"</p>");
    



//   }
// }


// function initMap(position, json) {
//   var mapDiv = document.getElementById('map');
//   var map = new google.maps.Map(mapDiv, {
//     center: {lat: position.coords.latitude, lng: position.coords.longitude},
//     zoom: 10
//   });
//   for(var i=0; i<json.page.totalElements; i++) {
//     addMarker(map, json._embedded.events[i]);
    
//     var lats=json._embedded.events[i]._embedded.venues[0].location.latitude
//     var longgg=json._embedded.events[i]._embedded.venues[0].location.longitude
//     var dates=json._embedded.events[i].dates.start.localDate
//     var times=json._embedded.events[i].dates.start.localTime
//     var venueName=json._embedded.events[i]._embedded.venues[0].name
//     var bands=json._embedded.events[i].name
//     var img=json._embedded.events[i].images[0].url
//     var genres=json._embedded.events[i].classifications[0].subGenre.name

//     // json._embedded.events[""0""]
//     // _embedded.events[0].type
    

//     genre.push(genres)
//     longg.push(longgg)
//     latss.push(lats)
//     images.push(img)
//     bandNames.push(bands)
//     venues.push(venueName)
  
    
//     date.push(dates)
//     time.push(times)
   
   
//   }
 
// }

// console.log(latss)
// console.log(longg)
// console.log(venues)
// console.log(event)
// console.log(date)
// console.log(time)

// console.log(locations)
// console.log(bandNames)
// console.log(images)
// console.log(genre)
// function addMarker(map, event) {
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
//     map: map
//   });
//   marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
// //   console.log(marker);
// }




// getLocation();


// locations.push(venues)
// locations.push(latts)
// locations.push(longg)


  
  
  
  
 