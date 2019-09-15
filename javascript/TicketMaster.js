
// // var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101"
var queryURL ="https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z"

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
var bandInfo = function () {
 
$.ajax({ 
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  

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
    
         
        

      



  bandInfo()
 
  
