//basic exercise
//creating 3 empty img elements
$(document).ready(function() {
for (let i = 0; i < 9; i++) {
    var temp = $(`<div id="img${i}"><img src=""></div>`);
    $("main").append(temp.clone());

}

//$("main").css("background-color", "red");
});

//allocating img src to the img elements
$(document).ready(function() {
        $("img:odd").attr({
            "src": "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
            "value": "Gift Box"
    });         
        $("img:even").attr({
            "src": "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
            "value":"Santa Claus",
    });
});

// //click hearing function hide img
$(document).ready(function() {
    $('img').on('click', function() {
        //var pic = $(this).attr("value");
        if($(this).attr("value") == "Santa Claus"){
            $(this).hide();
        }
     })
});
