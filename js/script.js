$(document).ready(function() {

  
  var navButton = $(".navigation-item_menu--landing");
    navButton.on("click", function() {
        $(".hidden-menu--landing").toggleClass("hidden-menu__visible");
        
    });
    var navButton = $(".navigation-item_menu--pages");
    navButton.on("click", function() {
        $(".hidden-menu--pages").toggleClass("hidden-menu__visible");
        
    });
    

});