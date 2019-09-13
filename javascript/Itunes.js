var queryURL = "http://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=21"

function bandInfo() {
$.ajax({ 
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response)
  })}
  bandInfo()