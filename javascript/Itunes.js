var artistLinks = [];

function itunesLink() {
    console.log('bandNames', bandNames);
    console.log('bandNames length', bandNames.length);
    for (var i = 0; i < bandNames.length; i++) {
        // console.log('forloop triggered', bandNames[i])
        $.ajax({
            url: `http://itunes.apple.com/WebObjects/MZStoreServices.woa/wa/itmsSearch?lang=1&output=json&media=music&limit=1&term=${bandNames[i].split(" ").join("+")}`,
            method: 'GET'
        })
        .then(function(response){
            // console.log('.then', JSON.parse(response));
            var responseObject = JSON.parse(response);
            console.log('response',);
            
            if (responseObject.resultCount > 0){
                // console.log(responseObject.results[0].artistName);
                // console.log(`${responseObject.results[0].artistName} is in the bandname array? ${bandNames.indexOf(responseObject.results[0].artistName)}`);
                // console.log(bandNames[i]? bandNames[i]:"no match");
                var indexToInsert = bandNames.indexOf(responseObject.results[0].artistName);
                console.log('index to insert' + indexToInsert);
                if (indexToInsert >-1){
                    // artistLinks[indexToInsert] = responseObject.results[0].artistLinkUrl;
                    // artistLinks.push(responseObject.results[0].artistLinkUrl);
                    var artistUrl = (responseObject.results[0].artistLinkUrl);
                    console.log(artistUrl);
                    
                    artistLinks.push(artistUrl);

                }
                
            
                // console.log('artist link', artistLinks);
            }
            
        })
        // console.log('artist links' + artistLinks);
        
        
    }
    // $.when.apply( undefined, artistLinks ).then(function(response) {
        //     // var objects = arguments;
        //     console.log('objects', response);
        // });

    console.log('artist links itunes', artistLinks);
    
        makeArrays(artistLinks);
    }
