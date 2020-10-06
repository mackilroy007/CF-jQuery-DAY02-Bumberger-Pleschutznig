$("form").submit(function(e) {

    e.preventDefault();




});
//rmove the form element
/*$("form").remove()*/

//add 5 new divs in the article element 
$(document).ready(function() {
    var divi;
    for (var i = 0; i < 5; i++) {
        divi = $("<div> </div>");
        $("article").prepend(divi);
    }
});
//3.
$(document).ready(function(){
	$("input").val("Search for");
});
//4. it can be put inside the function, inside the document ready or here but it has to be in a document ready

$(document).ready(function(){
	$("div").addClass("box");
});
//5.
$(document).ready(function(){

	$("a[href ='http://www.codefactory.com/']").attr("href","www.codefactory.wien");
	//$("a").attr("href", "www.codefactory.wien")
});