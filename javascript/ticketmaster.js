

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
var artistLinks = [];
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
userchoice10=[]
youtubeLink = []

var newDateStart
var newDateEnd
var search = "seattle"
// var currentLocation = "currentLocation"
var seattle = (47.608013 + "," + -122.335167)



//on click of search by location changes the search value to currentlocation, then runs userchoices
$(document).on("click", "#searchByLocationButton", function (event) {
  search = "currentLocation"
  userChoices()
})
//on click of search by location changes the search value to seattle, then runs userchoices
$(document).on("click", "#searchButton", function (event) {
  //this checks which distance they choose
  search = "seattle"
  userChoices()
})
//  
function userChoices() {
  //this checks which distance they choose
  if ($("#distance").val() === "1") {
    radius = 5
  }
  if ($("#distance").val() === "2") {
    radius = 20
  }
  if ($("#distance").val() === "3") {
    radius = 50
  }
  setDatesForSearch()

  //this checks the variable that the user entered for dates
  function setDatesForSearch() {
    var dateChoice = $("#date-choice").val();
    if (dateChoice === "1") {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      if (day < 10) {
        day = ("0" + day);
      }
      if (month < 10) {
        month = ("0" + month);
      }
      newDateStart = year + "-" + month + "-" + day;
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      }
      var date = new Date();
      var oneWeek = (date.addDays(7));
      var month = oneWeek.getUTCMonth() + 1; //months from 1-12
      var day = oneWeek.getUTCDate();
      var year = oneWeek.getUTCFullYear();
      if (day < 10) {
        day = ("0" + day);
      }
      if (month < 10) {
        month = ("0" + month);
      }
      newDateEnd = year + "-" + month + "-" + day;
    }
    if (dateChoice === "2") {
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      }
      var date = new Date();
      var oneWeek = (date.addDays(7));
      month = oneWeek.getUTCMonth() + 1; //months from 1-12
      day = oneWeek.getUTCDate();
      year = oneWeek.getUTCFullYear();
      console.log(day);
      if (day < 10) {
        day = ("0" + day);
      }
      if (month < 10) {
        month = ("0" + month);
      }
      newDateStart = year + "-" + month + "-" + day;
      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      }
      var date = new Date();
      var twoWeeks = (date.addDays(14));
      var month = twoWeeks.getUTCMonth() + 1; //months from 1-12
      var day = twoWeeks.getUTCDate();
      var year = twoWeeks.getUTCFullYear();
      if (day < 10) {
        day = ("0" + day);
      }
      if (month < 10) {
        month = ("0" + month);
      }
      newDateEnd = year + "-" + month + "-" + day;
    }
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
}
//after we have cordinates of user and variables such as genre and distance this starts the ajax pull to ticketmaster
// function bandInfo(startLatLon) {

 function seattleQuery(startLatLon){
  var seattleQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime="+newDateStart+"T14:00:00Z&endDateTime="+newDateEnd+"T14:00:00Z&radius=" + radius + "&latlong=" + startLatLon + "&size=80"
  $.ajax({
    url: seattleQueryURL,
    method: "GET"
  }).then(function (response) {
    embed = response._embedded.events;
    useQuery()
  })

}
  
  // var seattleQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime="+newDateStart+"T14:00:00Z&endDateTime="+newDateEnd+"T14:00:00Z&radius=" + radius + "&latlong=" + startLatLon + "&size=80"


function usersLocationQuery(startLatLon){
 var locationQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime="+newDateStart+"T14:00:00Z&endDateTime="+newDateEnd+"T14:00:00Z&radius=" + radius + "&latlong=" + startLatLon + "&size=80"

  $.ajax({
    url: locationQueryURL,
    method: "GET"
  }).then(function (response) {
    embed = response._embedded.events;
    useQuery()
})

}
    //this runs the ajax call information we need into a bunch of arrays
    function useQuery(){
      console.log(embed);
      
    for (var i = 0; i < embed.length; i++) {
      if (embed[i].classifications[0].hasOwnProperty('subGenre')) {
        genre.push(embed[i].classifications[0].subGenre.name)
        if (embed[i]._embedded.hasOwnProperty('attractions')) {
          var bandName = embed[i]._embedded.attractions[0].name
          if (embed[i]._embedded.hasOwnProperty('attractions')) {
            if (embed[i]._embedded.attractions[0].hasOwnProperty("externalLinks")) {
              if (embed[i]._embedded.attractions[0].externalLinks.hasOwnProperty("youtube")) {
                youtubeLink.push(embed[i]._embedded.attractions[0].externalLinks.youtube[0].url)
              }
              else {
                youtubeLink.push("no youtube")
              }
            }
          }
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
    itunesLink()
    
  }

//this takes the arrays with the information we need and puts them into a bigger array
function makeArraYs() {
  bigArrayWithAllInfoOfEvents.push(date)
  bigArrayWithAllInfoOfEvents.push(time)
  bigArrayWithAllInfoOfEvents.push(bandNames)
  bigArrayWithAllInfoOfEvents.push(images)
  bigArrayWithAllInfoOfEvents.push(genre)
  bigArrayWithAllInfoOfEvents.push(venues)
  bigArrayWithAllInfoOfEvents.push(latss)
  bigArrayWithAllInfoOfEvents.push(longg)
  bigArrayWithAllInfoOfEvents.push(youtubeLink)
  bigArrayWithAllInfoOfEvents.push(artistLinks)
  artistAndGenre.push(genre)
  artistAndGenre.push(bandNames)
  locations.push(venues)
  locations.push(latss)
  locations.push(longg)
//  console.log(artistLinks)
//  console.log(bigArrayWithAllInfoOfEvents)
// console.log(artistLinks)
console.log(bigArrayWithAllInfoOfEvents)
  createArrayWithAllEventInfoForSameGenre(bigArrayWithAllInfoOfEvents)
}
//this checks the users choice of subgenre vs the ajax call.  if it matches it puts all the information from that line into more arrays
function createArrayWithAllEventInfoForSameGenre(arr) {
  console.log(arr)
  var iTunesArr = arr[9]
  console.log(iTunesArr.length)
  console.log(iTunesArr[1])
  console.log(iTunesArr[2])
  console.log(iTunesArr[3])
  console.log("sub genre",subGenreFromUser)
  console.log(arr[4][l] === subGenreFromUser)
 
  for (var l = 0; l < arr[2].length; l++) {
    if (arr[4][l] === subGenreFromUser) {
      console.log(arr[9][l])
      userchoice1.push(arr[0][l])
      userchoice2.push(arr[1][l])
      userchoice3.push(arr[2][l])
      userchoice4.push(arr[3][l])
      userchoice5.push(arr[4][l])
      userchoice6.push(arr[5][l])
      userchoice7.push(arr[6][l])
      userchoice8.push(arr[7][l])
      userchoice9.push(arr[8][l])
      userchoice10.push(arr[9][l])
    }
    // console.log(bigArrayWithAllInfoOfEvents
  }
  combineUserChoices()
}
  function combineUserChoices(){
  //this pushes all the choices that match up for subgenre into 1 array of all the information we need
  eventsFromUserChoices.push(userchoice1)
  eventsFromUserChoices.push(userchoice2)
  eventsFromUserChoices.push(userchoice3)
  eventsFromUserChoices.push(userchoice4)
  eventsFromUserChoices.push(userchoice5)
  eventsFromUserChoices.push(userchoice6)
  eventsFromUserChoices.push(userchoice7)
  eventsFromUserChoices.push(userchoice8)
  eventsFromUserChoices.push(userchoice9)
  eventsFromUserChoices.push(userchoice10)
  cards(eventsFromUserChoices)
  // console.log(eventsFromUserChoices)
}


function itunesLink() {
  for (var i = 0; i < bandNames.length; i++) {
    $.ajax({
      url: `http://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&output=json&media=music&limit=1&term=${bandNames[i].split(" ").join("+")}`,
      method: 'GET',
    })
      .then(function (response) {
        // if (response.hasOwnProperty()) {
        //   // console.log("no website")
        //   artistLinks.push("no website")
        // } else {
          var responseObject = JSON.parse(response);
          // console.log('response', responseObject);
          result = responseObject.results[0].artistLinkUrl;
          // console.log('result', result);
          // var urls = result.artistLinkUrl;
          // console.log('urls', urls);
          artistLinks.push(result)
        
      }).catch(function (err) {
        // console.log('this time it errored')
        artistLinks.push('no website')
      })
      setTimeout(function(){makeArraYs(artistLinks)},2000);
  }
  // console.log('artist links array', artistLinks);
  
}