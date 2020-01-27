// Dai Duong
$(document).ready(function(){
    $(".item_icon_search .icon i").click(function(){
        $(".main_body .form_search").css("top","0px");
        $(".item_icon_search .icon").css("visibility","hidden");
    });
    $(".form_search label i").click(function(){
        $(".main_body .form_search").css("top","-85px");
        $(".item_icon_search .icon").css("visibility","visible");
    });
});