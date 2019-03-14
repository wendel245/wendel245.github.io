$(window).on("scroll", function() {
    var y = $(window).scrollTop();

    //alert("ola");

    if(y >= $(window).height() / 3) {
        $("#menu").addClass("menu-style");
        $("#menu a").css("color", "#000");
    } else {
        $("#menu").removeClass("menu-style");
        $("#menu a").css("color", "#fff");
    }
});

// habilidades
$("#photoshop-item").click(function() {
    if($("#more-photoshop").css("display") == "none") {
        $("#more .content").hide();
        $("#more-photoshop").css("display", "flex");
    } else {
        $("#more .content").hide();
    }
});

$("#python-item").click(function() {
    if($("#more-python").css("display") == "none") {
        $("#more .content").hide();
        $("#more-python").css("display", "flex");
    } else {
        $("#more .content").hide();
    }
});