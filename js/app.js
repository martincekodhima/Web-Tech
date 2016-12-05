$(document).ready(function () {
    // declare a search-term variable
    var searchTerm;
    // we use tick so that the browser knows that its a different image
    var tick = 0;
    // for formatting reasons 
    var page = 0;
    
    // onclick of the search in the menu toggle the search bar
    $("#search-navigation").click(function () {
        // if the window is not at the top scroll to the top
        if($(window).scrollTop() != 0) {
            // animate the scrolling up
            $("html,body").animate({ scrollTop: 0 }, "slow");
        }
        // fade in or out the search bar
        $("#search-dropdown").fadeToggle("slow", "easeOutSine", function() {
            // focus the text area
            $("#search").focus();
        });
    });
    
    // for searching in mobile view
    $("#search-navigation-mobile").click(function() {
        // close side nav
        $(".button-collapse").sideNav("hide");
        // if the window is not at the top scroll to the top
        if($(window).scrollTop() != 0) {
            // animate the scrolling up
            $("html,body").animate({ scrollTop: 0 }, "slow");
        }
        // fade in or out the search bar
        $("#search-dropdown").fadeToggle("slow", "easeOutSine", function() {
            // focus the text area
            $("#search").focus();
        });
    });
    
    // if enter is pressed while the search bar is active reset the screen and display images
    $('#search').keypress(function (e) {
      if (e.which == 13) {
          // togge the dropdown search
          $("#search-dropdown").fadeToggle("fast", "easeOutSine");
          // clean the screen
          cleanScreen();
          // pass the keyword so function
          searchTerm = $("#search").val();
          displayImages(searchTerm,page);
          return false;
      }
    });
    
    // when the x is pressed on the bar clean input
    $("#close-search").click(function() {
        $("#search").val(""); 
        $("#search").focus();
    });
    
    // if the random button is pressed then show random pictures
    $("#random").click(function() {
        if (!$("#random").hasClass("active")) {
            $("#random").addClass("active");
        }
        cleanScreen();
        displayImages(null,0);
    });
    
    // start side nav
    $(".button-collapse").sideNav();
    
    // check if user has scrolled near the bottom
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            delay(2000);
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                page++;
                $(".container").append('</div></div><center><h5>Page '+page+'</h5></center><div class="divider"></div><div class="row"><div class="col s12 cards-container main-content-'+page+'">');
                displayImages(searchTerm, page);
            }
        }
    });
    
    // function to clean the screen
    function cleanScreen() {
        page = 0;
        $(".row").html("").append('<div class="col s12 cards-container main-content-0">');
    }
    
    // function to display the images
    function displayImages(keyword,page) {
        if (keyword == null) {
            // show random pictures
            for (var i = 0; i < 30; i++) {
                tick++;
                $(".main-content-"+page).append('<div class="card"><div class="card-image waves-effect waves-block waves-light" data-src="https://source.unsplash.com/random?sig='+tick+'"><img class="activator" src="https://source.unsplash.com/random?sig='+tick+'"></div></div>');
            }
        } else {
            // show pictures from a specific keyword
            for (var i = 0; i < 30; i++) {
                tick++;
                $(".main-content-"+page).append('<div class="card"><div class="card-image waves-effect waves-block waves-light" data-src="https://source.unsplash.com/all/random?'+ keyword  +'&sig='+tick+'"><img class="activator" src="https://source.unsplash.com/all/random?'+ keyword  +'&sig='+tick+'"></div></div>');
            }
        }
        // init the light gallery
        $('.cards-container').lightGallery({
            selector: '.card-image',
            zoom: true,
            download: false
        });
    }
    
    // call the initial display images funciton which shows random pictures
    displayImages(null,page);
});