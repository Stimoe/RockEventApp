

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
youtubeLink = []

var newDateStart
var newDateEnd
var search = "seattle"
// var currentLocation = "currentLocation"
var seattle = (47.608013 + "," + -122.335167)
//  if ($("#distance").val() === "1") {
//     radius = 5
//   }
//   if ($("#distance").val() === "2") {
//     radius = 20
//   }
//   if ($("#distance").val() === "3") {
//     radius = 50
//   }
//   subGenre()
//   //this checks which subgenre they choose
//   function subGenre() {
//     var subGenress = $("#subGenre").val();

//     if (subGenress === "1") {

//       subGenreFromUser = ("Alternative Rock")
//     }
//     if (subGenress === "2") {

//       subGenreFromUser = ("Blues Rock")
//     }
//     if (subGenress === "3") {

//       subGenreFromUser = ("British Invasion")
//     }
//     if (subGenress === "4") {

//       subGenreFromUser = ("Death Metal")
//     }
//     if (subGenress === "5") {

//       subGenreFromUser = ("Hair Metal")
//     }
//     if (subGenress === "6") {

//       subGenreFromUser = ("Hard Rock")
//     }
//     if (subGenress === "7") {

//       subGenreFromUser = ("Metal")
//     }
//     if (subGenress === "8") {

//       subGenreFromUser = ("Progressive Rock")
//     }
//     if (subGenress === "9") {

//       subGenreFromUser = ("Punk Rock")
//     }
//     if (subGenress === "10") {

//       subGenreFromUser = ("Rock & Roll")
//     }
//     if (subGenress === "11") {

//       subGenreFromUser = ("Rockabilly")
//     }
//     if (subGenress === "12") {

//       subGenreFromUser = ("Traditional Rock")
//     }
//   }
//   //this decides which function to run for the map, either based off seattle or at the users location
//   mapFor()
// })


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
      if (day <10) {
        day = ("0" + day);
    }
    if (month <10) {
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
      if (day <10) {
        day = ("0" + day);
    }
    if (month <10) {
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
      if (day <10) {
        day = ("0" + day);
    }
    if (month <10) {
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
      if (day <10) {
        day = ("0" + day);
    }
    if (month <10) {
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
function bandInfo(startLatLon) {

  // var locationQueryURL="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&radius=5&latlong="+startLatLon+""
  var seattleQueryURL = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&startDateTime="+newDateStart+"T14:00:00Z&endDateTime="+newDateEnd+"T14:00:00Z&radius=" + radius + "&latlong=" + startLatLon + "&size=80"

  $.ajax({
    url: seattleQueryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    console.log(newDateStart);
    console.log(newDateEnd);
    embed = response._embedded.events;
    console.log('embed', embed);
    // console.log(newdateStart)
    // console.log(newDatePlusWeek)
    //this runs the ajax call information we need into a bunch of arrays
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
    makeArraYs();
  })
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
  artistAndGenre.push(genre)
  artistAndGenre.push(bandNames)
  locations.push(venues)
  locations.push(latss)
  locations.push(longg)
  createArrayWithAllEventInfoForSameGenre()
}
//this checks the users choice of subgenre vs the ajax call.  if it matches it puts all the information from that line into more arrays
function createArrayWithAllEventInfoForSameGenre() {
  console.log(bigArrayWithAllInfoOfEvents)
  for (var l = 0; l < bigArrayWithAllInfoOfEvents[2].length; l++) {
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
  cards(eventsFromUserChoices)
  console.log(eventsFromUserChoices)
}


// function itunesLink() {
//   // console.log('bandNames', bandNames);
//   // console.log('bandNames length', bandNames.length);
//   for (var i = 0; i < bandNames.length; i++) {
//     // console.log('forloop triggered', bandNames[i])
//     $.ajax({
//       url: `http://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&output=json&media=music&limit=1&term=${bandNames[i].split(" ").join("+")}`,
//       method: 'GET'
//     })
//       .then(function (response) {
//       //  console.log( "response in itunes"+response)

//         var responseObject = JSON.parse(response);
//           // console.log(" right before if in itunes" +responseObject.results)
//         // console.log("responseObject" +responseObject)
//         console.log('response', responseObject);
//         // if (responseObject.results[0].hasOwnProperty('artistName')) {


//           if (responseObject.resultCount >= 0){
//           // console.log(responseObject.results[0].artistName);
//           // console.log(`${responseObject.results[0].artistName} is in the bandname array? ${bandNames.indexOf(responseObject.results[0].artistName)}')
//             console.log(responseObject.results[0].artistName)

//           console.log(bandNames[i]? bandNames[i]:"no match");
//           // var indexToInsert = bandNames.indexOf(responseObject.results[0].artistName);
//           // console.log('index to insert' + indexToInsert);
//           // if (indexToInsert >-1){
//           // artistLinks[indexToInsert] = responseObject.results[0].artistLinkUrl;
//           // artistLinks.push(responseObject.results[0].artistLinkUrl);
//           // if(responseObject.results[0].hasOwnProperty("artistLinkUrl")){
//           artistUrl = (responseObject.results[0].artistLinkUrl);
//           console.log("artist url in itunes" + artistUrl);
//           artistLinks.push(artistUrl)
//           }
//           else {
//             console.log("no website")
//             artistLinks.push("no website")
//           }

//           // console.log("artist link" + artistLinks)
//         }  )}
//         // console.log("this is after it runs" +artistLinks)

//         // console.log(" this has urls in it" +bigArrayWithAllInfoOfEvents)
//       }