$(".link-img").hover(
    function (){
    $('.link-box').toggle();
});

$(function(){
    $(".menu-toggle").on("click", function() {
        $(this).next().slideToggle();
    });
});