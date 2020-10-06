





//$(document).ready(function(){
    var slides = JSON.parse(fotos);

    for (var i = 0; i < slides.lenght; i++){
        console.log("heay");
        document.getElementsByClassName("test").innerHTML += `<div class="swiper-slide"><img scr=${slides[i].foto} alt=${slides[i].info}></div>`;
    };
//});