$(document).ready(function () {
    var photo = new UnsplashPhoto();

    $(".background").css("background", "url(" + photo.randomize("daily").size(1920,1080).fetch() + ") no-repeat center center fixed");
    
});