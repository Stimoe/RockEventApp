
var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4"




function bandInfo() {
$.ajax({ 
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response)

  })}
  bandInfo()