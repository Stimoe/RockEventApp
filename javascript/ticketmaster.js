
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
var subGenreFromUser = ""
markerToMake = {}
venueForMarkers = []
artistAndGenre = []
eventsFromUserChoices = []
bigArrayWithAllInfoOfEvents = []
userchoice1 = []
userchoice2 = []
userchoice3 = []
userchoice4 = []
userchoice5 = []
userchoice6 = []
userchoice7 = []
userchoice8 = []
userchoice9 = []



var search = "seattle"
var currentLocation;
var seattle = (47.608013 + "," + -122.335167)

$(document).on("click", "#searchButton", function (event) {

  if ($("#distance").val() === "1") {
    radius = 5
  }
  if ($("#distance").val() === "2") {
    radius = 20
  }
  if ($("#distance").val() === "3") {
    radius = 50
  }
  subGenre()
  function subGenre() {
    var subGenress = $("#subGenre").val();

    if (subGenress === "1") {

      subGenreFromUser = ("Alternative Rock")
    }
    if (subGenress === "2") {

      subGenreFromUser = ("Blues Rock")
    }
    if (subGenress === "3") {

      subGenreFromUser = ("British Invasion")
    }
    if (subGenress === "4") {

      subGenreFromUser = ("Death Metal")
    }
    if (subGenress === "5") {

      subGenreFromUser = ("Hair Metal")
    }
    if (subGenress === "6") {

      subGenreFromUser = ("Hard Rock")
    }
    if (subGenress === "7") {

      subGenreFromUser = ("Metal")
    }
    if (subGenress === "8") {

      subGenreFromUser = ("Progressive Rock")
    }
    if (subGenress === "9") {

      subGenreFromUser = ("Punk Rock")
    }
    if (subGenress === "10") {

      subGenreFromUser = ("Rock & Roll")
    }
    if (subGenress === "11") {

      subGenreFromUser = ("Rockabilly")
    }
    if (subGenress === "12") {

      subGenreFromUser = ("Traditional Rock")
    }
  }
  mapFor()
  function mapFor() {
    if (search === "currentLocation") {
      getLocation()
    }
    if (search === "seattle") {
      seattleLocation()
    }
  }
})

function bandInfo(startLatLon) {

  // var locationQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+startLatLon+""
  var seattleQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=" + radius + "&latlong=" + startLatLon + ""

  $.ajax({
    url: seattleQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    embed = response._embedded.events;
    console.log('embed', embed);

    
    
    
    for (var i = 0; i < embed.length; i++) {
      if (embed[i].classifications[0].hasOwnProperty('subGenre')) {
        genre.push(embed[i].classifications[0].subGenre.name)
        if (embed[i]._embedded.hasOwnProperty('attractions')) {
          var bandName = embed[i]._embedded.attractions[0].name
          console.log(bandName)
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
    }
    itunesLink();
  })
  console.log('band names', bandNames);
  
}
console.log(bandNames);

  function makeArrays(artistLinks) {

    bigArrayWithAllInfoOfEvents.push(date)
    bigArrayWithAllInfoOfEvents.push(time)
    bigArrayWithAllInfoOfEvents.push(bandNames)
    bigArrayWithAllInfoOfEvents.push(images)
    bigArrayWithAllInfoOfEvents.push(genre)
    bigArrayWithAllInfoOfEvents.push(venues)
    bigArrayWithAllInfoOfEvents.push(latss)
    bigArrayWithAllInfoOfEvents.push(longg)
    bigArrayWithAllInfoOfEvents.push(artistLinks)
    console.log('artist links'+ artistLinks);

    artistAndGenre.push(genre)
    artistAndGenre.push(bandNames)
    locations.push(venues)
    locations.push(latss)
    locations.push(longg)
    createArrayWithAllEventInfoForSameGenre()
    console.log(bandNames)
  }



// console.log()
function createArrayWithAllEventInfoForSameGenre() {
  for (var l = 0; l < bigArrayWithAllInfoOfEvents[0].length; l++) {
    if (bigArrayWithAllInfoOfEvents[4][l] === subGenreFromUser) {

      userchoice1.push(bigArrayWithAllInfoOfEvents[0][l])
      userchoice2.push(bigArrayWithAllInfoOfEvents[1][l])
      userchoice3.push(bigArrayWithAllInfoOfEvents[2][l])
      userchoice4.push(bigArrayWithAllInfoOfEvents[3][l])
      userchoice5.push(bigArrayWithAllInfoOfEvents[4][l])
      userchoice6.push(bigArrayWithAllInfoOfEvents[5][l])
      userchoice7.push(bigArrayWithAllInfoOfEvents[6][l])
      userchoice8.push(bigArrayWithAllInfoOfEvents[7][l])
      userchoice9.push(bigArrayWithAllInfoOfEvents[8][l])
    }
  }
  
  eventsFromUserChoices.push(userchoice1)
  eventsFromUserChoices.push(userchoice2)
  eventsFromUserChoices.push(userchoice3)
  eventsFromUserChoices.push(userchoice4)
  eventsFromUserChoices.push(userchoice5)
  eventsFromUserChoices.push(userchoice6)
  eventsFromUserChoices.push(userchoice7)
  eventsFromUserChoices.push(userchoice8)
  eventsFromUserChoices.push(userchoice9)
  // displayNew(eventsFromUserChoices)
  cards(eventsFromUserChoices)
  console.log(eventsFromUserChoices)
}

