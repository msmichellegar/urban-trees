$(document).on("ready", function(){

    // displays page acccording to url path
    if (window.location.pathname === "/urban") {
        displayPage("urban");
    } else if (window.location.pathname === "/trees") {
        displayPage("trees");
    }

    // triggers changes on keydown
    $(document).keydown(function(e) {

        // if user presses up key
        if (e.which === 38) {
            switchUrbanTrees("up");

        // if user presses down key
        } else if (e.which === 40) {
            switchUrbanTrees("down");
        }

    });

    // triggers changes on scroll
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
        $(".bgImage").removeClass("trees");
        displayPage("urban");
        replaceUrl("/urban");

    // switches to trees if trying to go down from urban
    } else if (currentClass === "urban" && direction === "down") {
        $(".bgImage").removeClass("urban");
        displayPage("trees");
        replaceUrl("/trees");
    }
}

function displayPage(pageName) {

    // updates title
    $("#title").html(pageName);

    // updates image
    $(".bgImage").addClass(pageName);
}

function getCurrentClass() {

    // gets current class of featured image
    if ($(".bgImage").hasClass("urban")) {
        return "urban";
    } else {
        return "trees";
    }
}

function replaceUrl(path) {

    window.history.pushState("Trees", "Trees", path);
}
