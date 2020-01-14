$(document).ready(function() {
//http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M
var nytimes = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q="
$("#searchBtn").on("click", function(){
    let search = $("#search").value();
    let numRec = $("#numRecords").value();
    $.ajax({
        url: nytimes + search;
        method: "GET"
    })
    .then(function(response){
        console.log(response);
    });

    for (var i=0; i < response.length; i++) {
        console.log(response[i]);
    }
})
 


