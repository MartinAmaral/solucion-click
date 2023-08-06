
var input = document.getElementsByTagName("input");
input[0].addEventListener("click", function(e){
    alert('Hola!');
    e.stopPropagation();
});

var div = document.getElementsByTagName("div");
div[0].addEventListener("click", function(){ 
    alert('Hola! Soy el div');
});