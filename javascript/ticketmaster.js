
// // var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101"
var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-16T14:00:00Z&endDateTime=2019-09-18T14:00:00Z"

var embed=[]


function bandInfo() {
$.ajax({ 
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      

     var embed=response._embedded.events
     console.log(embed)
      for (var i = 0; i < embed.length; i++){ 
    var genres = embed[i].classifications[0].subGenre.name
    console.log(genres)

    
      


  }})}
  bandInfo()
