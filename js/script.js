$(document).ready(function() {
  $(".request-tesla-wrapper").click(function() {
    jQuery(".disclaimer").fadeOut();
    jQuery(this).addClass("im-too-lazy-to-handle-another-click");
    $(".request-tesla-text").fadeOut(function() {
      $(this).html() == "Order Tesla" ? $(this).html("<span class='loader'></span>Processing") : $(this).html("Order Tesla");
    });
    $(".request-tesla-text").fadeIn();
    setTimeout(function() {
      $(".request-tesla-text").fadeOut(function() {
         $(this).html("Completed!");
        $(this).delay(1700).fadeIn();
      })
      $(".request-tesla-wrapper").toggleClass("payment-complete");
    }, 2000);
  })
})