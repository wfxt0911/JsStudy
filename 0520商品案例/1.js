$(function() {
    $(".search").on("submit", function(e) {
        e.preventDefault();
    })
    var timer = null;
    $(".msg").on("keyup", function() {
        // if ($(".msg").val().trim() === "") {
        //     $(".msg").val("请输入商品名称");
        // }
        var fd = $(".search").serialize();
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            getGoodList(fd);
            timer = null;

        }, 800);


    })

    function getGoodList(goods) {
        $.ajax({
            type: "get",
            url: 'https://suggest.taobao.com/sug?' + goods,
            dataType: "jsonp",
            crossDomain: true,
            timeout: 20,
            success: function(response) {
                console.log(response);
                var tplStr = template("tpl", response);
                $(".item").html(tplStr).show();
                // $(".itemList").on("click", function(e) {
                //     // $(".text").text($(this).text());
                //     console.log(e.target);
                // })
            }
        })


    }
    $(".msg").on({
        "blur": function(e) {
            // $(".item").click();
            // console.log($(e));
            setTimeout(() => {
                $(".item").hide();
            }, 200);

        },
        "focus": function() {
            $(".item").show();
        }
    })
    $(".item").on("click", function(e) {
        // $(".text").text($(this).text());
        console.log($(e.target).text());
        $(".msg").val($(e.target).text());
    })


})