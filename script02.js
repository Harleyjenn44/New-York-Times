$(document).ready(function() {

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

    var headline = response.docs[0].headline.main;

})
 
function getArray(array){
    for (var i=0; i < getArray.length; i++)
    $('.whatever').append(array[i].main)
}

