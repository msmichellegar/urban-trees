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

}

function addEventListeners() {

    // reloads page on back/forward button
    window.onpopstate = function(event) {
        location.reload();
    };

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
        $(".trees").removeClass("active");
        $(".urban").addClass("active");
        displayPage("urban");
        replaceUrl("Urban", "/urban");

    // switches to trees if trying to go down from urban
    } else if (currentClass === "urban" && direction === "down") {
        $(".urban").removeClass("active");
        $(".trees").addClass("active");
        displayPage("trees");
        replaceUrl("Trees", "/trees");
    }
}

function displayPage(pageName) {
    var $urban = $(".urban");
    var $trees = $(".trees");

    // transition if scrolling to trees
    if (pageName === "trees") {

        // removes urban
        TweenLite.to($urban, 0.8, {
            opacity: 0.1,
            top: 50,
            width: "80%"
        });

        // adds trees
        TweenLite.to($trees, 0.8, {
            top: 0,
            width: "100%"
        });

    // transition if scrolling to urban
    } else if (pageName === "urban") {

        // resets urban opacity
        TweenLite.set($urban, {
            opacity: 1,
            width: "100%",
            top: -100
        });

        // removes trees
        TweenLite.to($trees, 0.8, {
            top: "100%",
            width: "100%"
        });

        //adds urban
        TweenLite.to($urban, 0.8, {
            top: 0,
            width: "100%"
        });
    }

}

function getCurrentClass() {

    // gets current class of featured image
    if ($(".active").hasClass("urban")) {
        return "urban";
    } else {
        return "trees";
    }
}

function replaceUrl(title, path) {

    // changes url displayed in window and updates history
    window.history.pushState(title, title, path);
}
