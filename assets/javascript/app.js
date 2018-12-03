/*

Gif API
Brett Billman December 2018

*/

let topics = ["owl", "elephant", "bear", "shark"];

$(document).ready(function(){

    function animalInfo() {
    
        let search = $(this).attr("data-animal");
    
        console.log(search);
    
        let apiKey = "pLga1tNmXJRVzNc2V1mHcsMBondNnVSu";
        let queryURL = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key="+apiKey+"&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
    
        })
    }


    
    //loop through topics array and create button for each
    function buildBtn () {
        $("#button-container").empty();
        for (let i = 0; i < topics.length; i++) {
            let topicBtn = $("<button>");
            topicBtn.addClass("api-button");
            topicBtn.attr("data-animal", topics[i]);
            topicBtn.text(topics[i]);
            $("#button-container").append(topicBtn);
        }
    }

    
    $("#add-button").on("click", function() {
        event.preventDefault();
        let input = $("#input-value").val().trim();
        topics.push(input);
        console.log(input);
        console.log(topics);
        $("#input-value").val("");
        
        buildBtn();
    })
    
    $(document).on("click", ".api-button", animalInfo)
    
    buildBtn();

});
















