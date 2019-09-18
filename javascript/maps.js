var startLat
var startLong
var makeMarker = {}
var markerToMake={}
var venueForMarkers=[]
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


// function displayCards(arr) {
//   for (let i = 0; i < 1; i++) {


//     // <img src="${response.data[i].url}">

//     $(".main-card-container>.row").append(` <div class="col s2 m7">
//     <h2 class="header">Horizontal Card</h2>
//     <div class="card horizontal">
//     <div class="card-image">
//     <img id ="band-image" src="https://www.thegraciouspantry.com/wp-content/uploads/2018/08/clean-eating-lunch-box-burritos-v-1-.jpg">
//     </div>
//     <div class="card-stacked">
//         <div id= "card-contents" class="card-content">
//             <h5 id="artist-name">Artist name link here</h5>
//             <h6 id="venue-name">Venue name link here</h6>
//             <p>I am a very simple card. I am good at containing small bits of information.</p>
//         </div>

//         <div class="card-action">
//             <a href="#" id="venue">Venue Location</a>
//             <a href="#" id="itunes">iTunes</a>
//             <a href="#" id="event-details">Email Event Details</a>
//         </div>
//     </div>
// </div>
// </div>`)
//   }
// }



//this function creates the cards based off the users input
function cards() {
  // console.log(eventsFromUserChoices)
  for (let i = 0; i < eventsFromUserChoices[0].length; i++) {

    var a = $("<button>");
    a.attr({ "data-name1": eventsFromUserChoices[5][i] })
    a.attr({ "data-name2": eventsFromUserChoices[6][i] })
    a.attr({ "data-name3": eventsFromUserChoices[7][i] })
    a.attr("class", "venue-buttons")
    // a.text(eventsFromUserChoices[5][i]);
    $("#buttons-view").append(a)
    
    $(".main-container>.row").append(` <div class="col s2 m7"> 
    <h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
    <div class="card-image">
    <img id ="band-image" src="${eventsFromUserChoices[3][i]}">
    </div>
    <div class="card-stacked">
        <div id= "card-contents" class="card-content">
            <h5 id="artist-name">${eventsFromUserChoices[2][i]}</h5>
            <h6 id="venue-name">Venue Name: ${eventsFromUserChoices[5][i]}</h6>
            <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div> 

        <div class="card-action">
            <button data-name3 = ${ eventsFromUserChoices[7][i]} (data-name2 =${ eventsFromUserChoices[6][i]} data-name1= ${ eventsFromUserChoices[5][i]}class="venue-buttons" id="button-view">Venue Location</button>
            <a href="" id="itunes">iTunes</a>
            <a href="#" id="event-details">Email Event Details</a>
           
        </div>
    </div>
</div>
</div>`)
  }
}


//this function is used to get the users location, make a map and supply the cordinates to the ticketmaster api


// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {

//       lat = position.coords.latitude,
//         lng = position.coords.longitude
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         center: new google.maps.LatLng(lat, lng),
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//       });
//       startLat = lat
//       startLong = lng
//       latLon = (startLat + "," + startLong)
//       bandInfo(latLon)
//     })
//   }
// }







//if we dont have the users location this runs the map over seattle and supplies those cordinates for the ajax pull
function seattleLocation() {
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 12,
    center: new google.maps.LatLng(47.608013, -122.335167),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  latLon = (47.608013 + "," + -122.335167)
  bandInfo(latLon)
}
//this doesnt work currently
function displayNew(){
      
  $("#buttons-view").empty();
  for (var j = 0; j < eventsFromUserChoices[0].length; j++) {
      
    var a = $("<button>");
    a.attr({"data-name1": eventsFromUserChoices[5][j]}) 
    a.attr({"data-name2": eventsFromUserChoices[6][j]})
    a.attr({"data-name3": eventsFromUserChoices[7][j]})
   a.attr("class","venue-buttons")
    // a.text(eventsFromUserChoices[5][j]);
    $("#buttons-view").append(a)
}}
//this doesnt work either, it is supposed to draw the longitude/latitude/venue name out of the venue button for placing a marker
$(document).on("click", ".venue-buttons", function(event) {
  event.preventDefault();
  var lats=$(this).attr("data-name2")
  var lon=$(this).attr("data-name3")
   var ven=$(this).attr("data-name1")
lat2= JSON.parse(lats)
lon2= JSON.parse(lon)
ven2=JSON.stringify(ven)
console.log("venue name" +ven2)
  markerToMake={lat: lat2, lng: lon2}
   console.log(markerToMake)
  venueMarkers(markerToMake, ven2)
})

//after we have the information from the button this function places the markers
function venueMarkers() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(47.608013, -122.335167),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  console.log("venue name" + ven2)
  var marker = new google.maps.Marker({
    position: markerToMake,
    map: map,
    title: ven2
  });
}

function mapFor() {
    if (search === "currentLocation") {
      getLocation()
    }
    if (search === "seattle") {
      seattleLocation()
    }
  }




