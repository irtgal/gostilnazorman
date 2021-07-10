
$("#button-menu").click(function(){
    $("#menu").css("display", "flex");
  });

$("#menu-close").click(function() {
    console.log($("#menu").offset().top);
    $("#menu").slideUp();
})

$(".link").click(function(){
    $("#menu").slideUp();
    const url = $(this).data("url");
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#" + url).offset().top - 65
    }, 1000);
    
})