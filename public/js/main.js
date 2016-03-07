$(document).on("ready", function(){

    // trigger changes on keydown
    $(document).keydown(function(e) {

        // if user presses up key
        if (e.which === 38) {
            switchUrbanTrees("up");

        // if user presses down key
        } else if (e.which === 40) {
            switchUrbanTrees("down");
        }

    });

    //trigger changes on scroll
    $(document).mousewheel(function(e) {

        // if user scrolls up
        if (e.originalEvent.wheelDelta > 0) {
            switchUrbanTrees("up");

        // if user scrolls down
        } else if (e.originalEvent.wheelDelta < 0) {
            switchUrbanTrees("down");
        }

    });


});

function switchUrbanTrees (direction) {
    var currentClass = getCurrentClass();

    // switches to urban if trying to go up from trees
    if (currentClass === "trees" && direction === "up") {
        $("#title").html("Urban");
        $(".bgImage").removeClass("trees").addClass("urban");

    // switches to trees if trying to go down from urban
    } else if (currentClass === "urban" && direction === "down") {
        $("#title").html("Trees");
        $(".bgImage").removeClass("urban").addClass("trees");
    }
}

function getCurrentClass () {

    // gets current class of featured image
    if ($(".bgImage").hasClass("urban")) {
        return "urban";
    } else {
        return "trees";
    }
}
