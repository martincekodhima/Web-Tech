$(document).ready(function () {
    // declare an opening for unisplash api
    var photo = new UnsplashPhoto();
    
    // onclick of the search in the menu toggle the search bar
    $("#search-navigation").click(function () {
        $("#search-dropdown").fadeToggle("fast", "easeOutSine");
    });
    
    // if enter is pressed while the search bar is active reset the screen and display images
    $('#search').keypress(function (e) {
      if (e.which == 13) {
          $("#search-dropdown").fadeToggle("fast", "easeOutSine");
          displayImages($("#search").val());
          return false;
      }
    });
    
    // when the x is pressed on the bar close the search bar
    $("#close-search").click(function() {
        $("#search-dropdown").fadeToggle("fast", "easeOutSine");        
    });
    
    // if the random button is pressed then show random pictures
    $("#random").click(function() {
        displayImages();
    });
    
    // function to display the images
    function displayImages(keyword) {
        $(".main-content").html("");
        if (keyword == null) {
            for (var i = 0; i < 10; i++) {
                $(".main-content").append('<div class="col s4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="https://source.unsplash.com/random?sig='+i+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span><p><a href="#">This is a link</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span><p>Here is some more information about this product that is only revealed once clicked on.</p></div></div></div>');
            }
        } else {
            for (var i = 0; i < 10; i++) {
                $(".main-content").append('<div class="col s4"><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="https://source.unsplash.com/all/random?'+ keyword  +'&sig='+i+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span><p><a href="#">This is a link</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span><p>Here is some more information about this product that is only revealed once clicked on.</p></div></div></div>');
            }
        }
    }
    
    // call the initial display images funciton which shows random pictures
    displayImages();
});