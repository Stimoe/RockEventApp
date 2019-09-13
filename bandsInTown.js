
var queryURL ="https://rest.bandsintown.com/artists/tool?app_id=bootcampspot"




function bandInfo() {
$.ajax({ 
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response)

  })}
  bandInfo()