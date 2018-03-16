// START JS/JQ FOR TOP BUTTONS POPULATION AND RIGHTSIDE FORUM ENTRY
// Initial array of animals //


let animals = ["Dog", "Cat", "Fish", "Lizard", "Chicken", "Duck", "Bird", "Elephant", "Dolphin", "Lion"];

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=m5KCIGAcXgixGVIBlD4YGKWhjiAeCRU8&limit=10";


//GET request
$.ajax({
        url: queryURL,
        method: "GET"
    })


    //data comes back from GET response ".then"
    .then(function (response) {
        console.log(queryURL)

        var results = response.data;
        for (var i = 0; i < 10; i++) {

            var animalsDiv = $("<div>"); //jquery to make div
            var animalsImg = $("<img>"); //jquery to make place for images
            animalsImg.attr("src", results[i].images.fixed_height.url);


            $("button").click(function () {
                animalsDiv.append(animalsImg);
                $("#gif-space").prepend(animalsDiv)

            });

            
          

        }

    });

// Function for displaying animal data
function renderButtons() {
    // preventing repeat
    $("#animals-button").empty();


    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#animals-button").append(a);
    }
}

//adding animal once button is clicked
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    var animal = $("#animal-input").val()
    animals.push(animal);
    renderButtons();

    //SCRIPT FOR BUTTON CLICK AND GIFY POPULATION 

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=m5KCIGAcXgixGVIBlD4YGKWhjiAeCRU8&limit=10";

    //GET request
    $.ajax({
            url: queryURL,
            method: "GET"
        })


        //data comes back from GET response ".then"
        .then(function (response) {
            console.log(queryURL)

            var results = response.data;
            for (var i = 0; i < 10; i++) {

                var animalDiv = $("<div>"); //jquery to make div
                var animalImg = $("<img>"); //jquery to make place for images
                animalImg.attr("src", results[i].images.fixed_height.url);


                $("button").click(function () {
                    animalDiv.append(animalImg);
                    $("#gif-space").prepend(animalDiv)
    
                });

                
              

            }

        });
});


// renders buttons at start. 
renderButtons();