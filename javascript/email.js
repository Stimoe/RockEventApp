markerToMake={}
venueForMarkers=[]

  
  
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
    console.log("clicked")
    event.preventDefault();
    var lats=$(this).attr("data-name2")
    var lon=$(this).attr("data-name3")
     var ven=$(this).attr("data-name")

    console.log($(this).attr("data-name1"))
    console.log($(this).attr("data-name2"))
    console.log($(this).attr("data-name3"))
lat2= JSON.parse(lats)
lon2= JSON.parse(lon)
  

    // var myLatLng = {lat: lats, lng: lon};
    markerToMake={lat: lat2, lng: lon2}
  
    //  var markers= JSON.parse(markerToMake)
    //  console.log(markers)
    console.log(markerToMake)
    // markerToMake.lat.push(lats)
    // markerToMake.lng.push(lon)
    // venueForMarkers.push(ven)
    // console.log(myLatLng)
    
    venueMarkers(markerToMake)
      
     
    
    

  })
    

    // addMarker()
//      function addMarker(){
//       console.log(myLatLng)
//       var marker = new google.maps.Marker({

       
          
        
        
//         position: myLatLng,
//         map: map,
//         title: 'Click to zoom'
//       });

//   }



