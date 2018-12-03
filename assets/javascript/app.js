/*

Gif API
Brett Billman December 2018

*/

let topics = ["owl", "elephant", "bear", "shark"];

$(document).ready(function(){
    
    //loop through topics array and create button for each
    for (let i = 0; i < topics.length; i++) {
        let topicBtn = $("<button>");
        topicBtn.addClass("api-button");
        topicBtn.attr("data-animal", topics[i]);
        topicBtn.text(topics[i]);
        $("#button-container").append(topicBtn);
    }
    
    $(".api-button").on("click", function() {

        let search = $(this).attr("data-animal");

        console.log(search);
    
        let apiKey = "pLga1tNmXJRVzNc2V1mHcsMBondNnVSu";
        let queryURL = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key="+apiKey+"&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);

    });


});






});















