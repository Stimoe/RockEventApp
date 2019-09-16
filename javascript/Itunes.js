console.log('Itunes.js loaded')
// var queryURL = "http://itunes.apple.com/WebObjects/MZStoreServices.woa/ws/genres?id=21"

//http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?


// https://itunes.apple.com/search?term=jack+johnson

//https://itunes.apple.com/search?parameterkeyvalue


// var queryURL = http://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&output=json&country=US&term=bandName&media=music

// artistLinkUrl - what we want to pull out from the api results

// use var bandNamesItunes in url to pull the bandNames from the results from the ticketmast events search

var artistLinks = [];

// function itunesLink() {
//     console.log('bandNames', bandNames);
//     console.log(typeof bandNames);
//     console.log('bandNames length', bandNames.length);
//     for (var i = 0; i < bandNames.length; i++){
//         console.log('forloop triggered')
//         var queryURL = "https://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&output=json&media=music&limit=1&term=&" + bandNames[i] + ""
//         $.ajax({ 
//             url: queryURL,
//             method: "GET"
//         }).then(function(response) {
//             console.log('.then', response);
//         })
//   }}

//   itunesLink();

function itunesLink() {
    console.log('bandNames', bandNames);
        console.log('forloop triggered')
        // bandNames = "metallica"
        var queryURL = `http://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&output=json&media=music&limit=1&term=${bandNames[0].split(" ").join("+")}`
        console.log(queryURL)
        $.ajax({ 
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log('.then', response);
            console.log();
            
        })
  }

//   itunesLink ()
