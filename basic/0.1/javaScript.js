//basic exercise
//creating 3 empty img elements
$(document).ready(function() {
for (let i = 0; i < 3; i++) {
    var temp = $(`<div id="img${i}"><img src=""></div>`);
    $("main").append(temp.clone());

}

//$("main").css("background-color", "red");
});

//allocating img src to the img elements
$(document).ready(function() {
        $("#img0 img").attr({
            "src": "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
            "value": "Gift Box"
    });         
        $("#img1 img").attr({
            "src": "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
            "value":"Santa Claus"
    });
        $("#img2 img").attr({
            "src": "https://freepngimg.com/download/christmas_bell/1-2-christmas-bell-png-image.png",
            "value":"Bells"
    });
});

// //click hearing function displays value of img
$(document).ready(function() {
    $('img').on('click', function() {
        var pic = $(this).attr("value");
        $("#textbox").text(`You clicked ${pic}`);
     })
});
