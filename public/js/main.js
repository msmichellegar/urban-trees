$(document).on("ready", function(){

    console.log("doc working")

    $(window).scroll(function() {
        console.log("scrolling");
    });

    $(document).keydown(function(e) {

        // if up key is pressed
        if (e.which === 38) {
            switchUrbanTrees("up");

        // if down key is pressed
        } else if (e.which === 40) {
            switchUrbanTrees("down");
        }

    });


});

function switchUrbanTrees (direction) {
    var currentClass = getCurrentClass();

    // switching to urban if trying to go up from trees
    if (currentClass === "trees" && direction === "up") {
        $("#title").html("Urban");
        $(".bgImage").removeClass("trees").addClass("urban");

    // switching to trees if trying to go down from urban
    } else if (currentClass === "urban" && direction === "down") {
        $("#title").html("Trees");
        $(".bgImage").removeClass("urban").addClass("trees");
    }
}

function getCurrentClass () {

    if ($(".bgImage").hasClass("urban")) {
        return "urban";
    } else {
        return "trees";
    }
}
