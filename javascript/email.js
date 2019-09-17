markerToMake={}
venueForMarkers=[]
ven=""
  
  // function displayNew(){
      
  //   $("#buttons-view").empty();
  //   for (var j = 0; j < eventsFromUserChoices[0].length; j++) {
        
  //     var a = $("<button>");
  //     a.attr({"data-name1": eventsFromUserChoices[5][j]}) 
  //     a.attr({"data-name2": eventsFromUserChoices[6][j]})
  //     a.attr({"data-name3": eventsFromUserChoices[7][j]})
  //    a.attr("class","venue-buttons")
  //     a.text(eventsFromUserChoices[5][j]);
  //     $("#buttons-view").append(a)
  // }}

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
    





