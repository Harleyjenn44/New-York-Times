var nytimes = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M"
//var nytimes = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q="


$(document).ready(function(){
    console.log("here");
    var searchBtn = $("#searchBtn");
    searchBtn.click(function() {
       // let search = $("#search").value();
       // let numRec = $("#numRecords").value();
        console.log("clicked");
        $.ajax({
            url: nytimes,
            method: "GET"
        })
        .then(function(response){
            console.log("re");
            console.log(response.response.docs);
            getArray(response.response.docs);
        });
    
    })


})
function getArray(array){
    console.log("getArray");
    console.log(array);
    for (var i=0; i < array.length; i++) {
        $('.articles').append(array[i].headline.main);
        console.log(array[i].headline.main)
        
    }
}

