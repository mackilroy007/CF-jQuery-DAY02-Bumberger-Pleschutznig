//pulling json content into for loop and inserting it into the slide library
var slides = JSON.parse(fotos);

var swiper = document.getElementsByClassName("swiper-wrapper")[0]; //swiper-wrapper is an array even if it is
for (var i = 0; i < slides.length; i++) {
    console.log(swiper);

    swiper.innerHTML += `<div class="swiper-slide"><img src=${slides[i].foto} alt=${slides[i].alt} value="${slides[i].info}"></div>`;
};

//adding click event for extra info from picture
$(document).ready(function() {
    $('img').on('click', function() {
        var pic = $(this).attr("value");
        $("#textbox").text(`Donald Trump ${pic}`);
    })
});