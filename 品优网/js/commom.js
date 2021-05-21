$(function() {
    $(".quickRight").hover(function() {
        console.log($(".quickRightList"));
        $(".quickRightList").toggle();
    });
    $(".search>input").focusin(function() {
        if ($(this).prop("value") === "请输入关键字！") {
            $(this).prop("value", " ");
        }
    })
    $(".search>input").focusout(function() {
        if ($(this).prop("value") === " ") {
            $(this).prop("value", "请输入关键字！");
        }
    })
    $(".mainShowLeft>ul>li").prop("class", "clearfix");

});