$(document).on("ready", function(){

    initialisePage();
    addEventListeners();

});

function initialisePage() {

    // displays page acccording to url path
    if (window.location.pathname === "/urban") {
        displayPage("urban");

    } else if (window.location.pathname === "/trees") {
        displayPage("trees");
    }

    // reloads page on back/forward button
    window.onpopstate = function(event) {
        location.reload();
    };
}

function addEventListeners() {

    // triggers changes on keydown
    $(document).keydown(function(e) {

        // if user presses up key
        if (e.which === 38) {
            switchPage("up");

        // if user presses down key
        } else if (e.which === 40) {
            switchPage("down");
        }

    });

    // triggers changes on scroll
    $(document).mousewheel(function(e) {

        // if user scrolls up
        if (e.originalEvent.wheelDelta > 0) {
            switchPage("up");

        // if user scrolls down
        } else if (e.originalEvent.wheelDelta < 0) {
            switchPage("down");
        }

    });

    // triggers changes on scroll [in firefox]
    window.addEventListener('DOMMouseScroll', function(e) {

        // if user scrolls up
        if (e.detail < 0) {
            switchPage("up");

        // if user scrolls down
        } else if (e.detail > 0) {
            switchPage("down");
        }

    });
}

function switchPage (direction) {
    var currentClass = getCurrentClass();

    // switches to urban if trying to go up from trees
    if (currentClass === "trees" && direction === "up") {
        $(".bgImage").removeClass("trees");
        displayPage("urban");
        replaceUrl("Urban", "/urban");

    // switches to trees if trying to go down from urban
    } else if (currentClass === "urban" && direction === "down") {
        $(".bgImage").removeClass("urban");
        displayPage("trees");
        replaceUrl("Trees", "/trees");
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

function replaceUrl(title, path) {

    // changes url displayed in window and updates history
    window.history.pushState(title, title, path);
}
