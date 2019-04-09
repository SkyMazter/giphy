// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let input = $("#search-term").val();
    const link = "https://api.giphy.com/v1/gifs/search?q="+ input +"&rating=r&api_key=dc6zaTOxFJmzC";

    function getRandomInt(min, max) {
        const final = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        console.log(final);
        return final;
       }
    $.ajax({
        url: link,
        method: "GET",
        success: function(response){
            let number = getRandomInt(0,response.data.length);
            console.log(response.data[number].images.original.url);
            $("#gif").html("<img src='"+response.data[number].images.original.url+"'>")
        },
    })
});

