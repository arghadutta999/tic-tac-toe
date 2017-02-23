$(document).ready(function() {
    $(".but2").on("click", function() {
        $(this).toggleClass("animated shake");
    });
    $(".click").click(function() {
        $(this).toggleClass("animated bounceIn");
    });
    $("#child1").click(function(){
       $("#main1").css('display','block');
       $("#main2").css('display','none');
       $("#child1").css({'background-color':'#fff','color':'#00bfff'});
       $("#child2").css({'background-color':'#00bfff','color':'#fff'});
    });
    $("#child2").click(function(){
       $("#main2").css('display','block');
       $("#main1").css('display','none');
       $("#child1").css({'background-color':'#00bfff','color':'#fff'});
       $("#child2").css({'background-color':'#fff','color':'#00bfff'});
    });
});
