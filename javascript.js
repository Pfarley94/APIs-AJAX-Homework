// START JS/JQ FOR TOP BUTTONS POPULATION AND RIGHTSIDE FORUM ENTRY
    // Initial array of animals //
    var animals = ["Dog", "Cat", "Fish", "Lizard", "Chicken", "Duck", "Bird", "Elephant", "Dolphin", "Lion"];

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
    });

    // renders buttons at start. 
    renderButtons();
// END FOR TOP BUTTONS POPULATION AND RIGHTSIDE FORUM ENTRY  


//SCRIPT FOR BUTTON CLICK AND GIFY POPULATION 
