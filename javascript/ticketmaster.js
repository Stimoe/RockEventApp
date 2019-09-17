
//url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,


// var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z"


// var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+latLon+""

var embed = []
var genre = []
var date = []
var time = []
var map;
var longg = []
var latss = []
var venues = []
var bandNames = []
var images = []
var locations = []
var radius;
var subGenreFromUser=""
markerToMake={}
venueForMarkers=[]
artistAndGenre=[]
eventsFromUserChoices=[]


var search="seattle"
var currentLocation;
var seattle = (47.608013 + "," + -122.335167)

$(document).on("click", "#searchButton", function(event) {

  if($("#distance").val()==="1"){
    console.log("5 miles!!")
    radius=5
 
  }
  if ($("#distance").val()==="2"){
    radius=20

    console.log("20 Miles!!")
  }
  if ($("#distance").val()==="3"){
    radius=50
   
     
  }
subGenre()
  function subGenre(){ 
    var subGenress = $( "#subGenre" ).val(); 
  console.log(subGenress)

  if(subGenress==="1"){
    console.log("Alternative")
    subGenreFromUser=("Alternative Rock")
  }
  if(subGenress==="2"){
    console.log("Blues Rock")
    subGenreFromUser=("Blues Rock")
  }
  if(subGenress==="3"){
    console.log("British Invasion")
    subGenreFromUser=("British Invasion")
  }
  if(subGenress==="4"){
    console.log("Death Metal")
    subGenreFromUser=("Death Metal")
  }
  if(subGenress==="5"){
    console.log("Hair Metal")
    subGenreFromUser=("Hair Metal")
  }
  if(subGenress==="6"){
    console.log("Hard Rock")
    subGenreFromUser=("Hard Rock")
  }
  if(subGenress==="7"){
    console.log("Metal")
    subGenreFromUser=("Metal")
  }
  if(subGenress==="8"){
    console.log("Progressive Rock")
    subGenreFromUser=("Progressive Rock")
  }
  if(subGenress==="9"){
    console.log("Punk Rock")
    subGenreFromUser=("Punk Rock")
  }
  if(subGenress==="10"){
    console.log("Rock & Roll")
    subGenreFromUser=("Rock & Roll")
  }
  if(subGenress==="11"){
    console.log("Rockabilly")
    subGenreFromUser=("Rockabilly")
  }
  if(subGenress==="12"){
    console.log("Traditional Rock")
    subGenreFromUser=("Traditional Rock")
  }
  
}


 console.log(radius)
 mapFor()
  function mapFor(){
    if (search==="currentLocation"){
      getLocation()
    }
    
    if(search==="seattle"){
  
  seattleLocation()
    }
  }
})
function bandInfo(startLatLon){

  console.log(startLatLon, "inside bandInfo function")
  // var locationQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+startLatLon+""
  var seattleQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius="+radius+"&latlong="+startLatLon+""




  $.ajax({



    url: seattleQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    var embed = response._embedded.events

    //  console.log(embed)
    var longg = []
    var latss = []
    var venues = []

    for (var i = 0; i < embed.length; i++) {
      if (embed[i].classifications[0].hasOwnProperty('subGenre')) {
        genre.push(embed[i].classifications[0].subGenre.name)

        var bandName = embed[i].name
        var venue = embed[i]._embedded.venues[0].name
        var latit = embed[i]._embedded.venues[0].location.latitude
        var longit = embed[i]._embedded.venues[0].location.longitude
        var image = embed[i].images[0].url
        images.push(image)
        bandNames.push(bandName)
        venues.push(venue)

       latss.push(latit)
      longg.push(longit)
  
    date.push(embed[i].dates.start.localDate)
    time.push(embed[i].dates.start.localTime)   
      
      }
    }
    artistAndGenre.push(genre)
    artistAndGenre.push(bandNames)
   
      locations.push(venues)
      locations.push(latss)
      locations.push(longg)
    //   console.log("venues",venues)
    //   console.log("genre", genre)
    //   console.log("date",date)
    //   console.log("time",time)
    //  console.log("images",images)
    //   console.log("band names",bandNames)
    //   console.log("locations",locations)
    console.log(artistAndGenre)
    checkIfSameGenre()
      display(locations)
      
    })
    }
  
      function display(){
          
        $("#buttons-view").empty();
        for (var j = 0; j < locations[0].length; j++) {
            
          var a = $("<button>");
          a.attr({"data-name1": locations[0][j]}) 
          a.attr({"data-name2": locations[1][j]})
          a.attr({"data-name3": locations[2][j]})
         a.attr("class","venue-buttons")
          a.text(locations[0][j]);
          $("#buttons-view").append(a)
      }}
    
      $(document).on("click", ".venue-buttons", function(event) {
        // console.log("clicked")
        event.preventDefault();
        var lats=$(this).attr("data-name2")
        var lon=$(this).attr("data-name3")
         var ven=$(this).attr("data-name1")
    
        
    lat2= JSON.parse(lats)
    lon2= JSON.parse(lon)
      ven2=JSON.stringify(ven)
   
        markerToMake={lat: lat2, lng: lon2}
       
        venueMarkers(markerToMake, ven2)
        
      })

      function checkIfSameGenre(){
        for (var k = 0; k < artistAndGenre[0].length; k++) {
          if(artistAndGenre[0][k]===subGenreFromUser){
            console.log(artistAndGenre[1][k])
          console.log(artistAndGenre[0][k])
          eventsFromUserChoices.push(artistAndGenre[1][k])



          }
          
      }
      console.log(eventsFromUserChoices)

    }












































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






