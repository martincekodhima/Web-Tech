$(document).ready(function () {
    // declare an opening for unisplash api
    var photo = new UnsplashPhoto();
    
    // onclick of the search in the menu toggle the search bar
    $("#search-navigation").click(function () {
        $("#search-dropdown").fadeToggle("fast", "easeOutSine");
    });
    
    // function to display the images
    function displayImages(keyword) {
        if (keyword == null) {
            console.log(photo.all().fetch());
        }
    }
    
    
    displayImages();
});