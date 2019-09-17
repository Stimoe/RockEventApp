
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
    

    console.log($(this).attr("data-name1"))
    console.log($(this).attr("data-name2"))
    console.log($(this).attr("data-name3"))
  
  })