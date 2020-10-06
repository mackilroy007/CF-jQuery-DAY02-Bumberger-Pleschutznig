
//$(document).ready(function(){
    var slides = JSON.parse(fotos);
    var swiper = document.getElementsByClassName("swiper-wrapper")[0];      //swiper-wrapper is an array even if it is
    for (var i = 0; i < slides.length; i++){
        console.log(swiper);

        swiper.innerHTML += `<div class="swiper-slide"><img src=${slides[i].foto} alt=${slides[i].info}></div>`;
    };
//});