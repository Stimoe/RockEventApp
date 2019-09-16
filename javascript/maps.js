var startLat
var startLong


      var cardHorizontalDiv = $('<div class="card horizontal">')
      var cardImageDiv = $('<div class="card-image">')
      cardImageDiv.append('<img>').attr('src', fakeResponse.data[i].img-url )
      cardHorizontalDiv.append(cardImageDiv)

      var cardStackedDiv = $('<div class="card-stacked">')
      var cardContentDiv = $('<div class"card-content">')
      cardContentDiv.append("<h5>").attr("#", fakeResponse2.data[i].img-url)
      cardContentDiv.append("<h1>").attr("#", fakeResponse2.data[i].img-url)
      cardStackedDiv.append(cardContentDiv)
      
      var cardActionDiv = $('<div class="card-action">')
      cardActionImgDiv.append('<a>').attr('#', fakeResponse.data[i].img-url )
      cardActionImgDiv.append('<a>').attr('#', fakeResponse.data[i].img-url )
      cardActionImgDiv.append('<a>').attr('#', fakeResponse.data[i].img-url )
      cardActionDiv.append(cardActionImgDiv)

    $(".main-card-container").append(cardHorizontalDiv, cardStackedDiv, cardActionDiv) 

//       });
//     })
//   }
  // url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Rock&apikey=2yfzA8sRxB5Z2ujcvJv5y6mV7gCVIKK4&postalCode=98101&startDateTime=2019-09-14T14:00:00Z&endDateTime=2019-09-25T14:00:00Z&latlong="+latlon,