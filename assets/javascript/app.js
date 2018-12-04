/*

Gif API
Brett Billman December 2018

*/

const topics = ["owl", "elephant", "bear", "shark"];
let ind = 0;

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
            for (let ind = 0; ind < response.data.length; ind++) {
                let gif = $("<img>").attr("src", response.data[ind].images.fixed_width_still.url);
                gif.attr("data-still", response.data[ind].images.fixed_width_still.url);
                gif.attr("data-animate", response.data[ind].images.fixed_width.url);
                gif.attr("data-state", "still");
                gif.addClass("gif");
                let rating = response.data[ind].rating;
                $("#gif-container").prepend(gif);
                $("#gif-container").prepend("<p> Rating: " + rating + "</p>");

            }
        })
    }
 
    function clickAnimate() {
        var state = $(this).attr("data-state");

        console.log(state);

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
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
    
    $(document).on("click", ".api-button", animalInfo);
    $(document).on("click", ".gif", clickAnimate);
    
    buildBtn();

});
















