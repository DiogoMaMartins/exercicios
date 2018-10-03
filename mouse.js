  /*var hidden = document.querySelectorAll(".hoverMe");
        for (var x = 0; x < hidden.length; x++) {
            var hiddenR = hidden[x];
            hiddenR.addEventListener("mouseover", function testt (teste) {
                teste.target.style.display="none";
            })
          
        };

 function myFunction() {

    var x = hiddenR ;
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    }else {
        x.style.display = "none";
    }
}
 

function getPos(e){
    		x=e.clientX;
    		y=e.clientY;
    		cursor="Your Mouse Position Is : " + x + " and " + y ;
    		document.getElementById("displayArea").innerHTML=cursor
    	}
    
    	function stopTracking(){
    		document.getElementById("displayArea").innerHTML="";
    	}

var text = document.getElementById("text");
  text.addEventListener("keypress", function(evento){
    console.log(evento.keyCode);
})

var text= document.getElementById("text");
var result = document.getElementById("result");
  text.addEventListener("keypress", function(evento){
    if (evento.keyCode >= 48 && evento.keyCode <=58)
        result.style.background="red";
  })

*/

var haut = document.getElementById("up");
var bas = document.getElementById("down");
var droite = document.getElementById("right");
var gauche = document.getElementById("left");

body.addEventListener("keydown", function(event){
var fleche = event.key;
console.log(fleche);
switch (fleche) {
    case "ArrowUp":
      haut.classList.add("highlight");
      break;
    case "ArrowLeft":
      gauche.classList.add("highlight");
      break;
    case "ArrowDown":
      bas.classList.add("highlight");
      break;
    case "ArrowRight":
      droite.classList.add("highlight");
      break;
    default:break;
    return;
}
});

body.addEventListener("keyup", function(event){
var fleche = event.key;
console.log(fleche);
switch (fleche) {
    case "ArrowUp":
      haut.classList.remove("highlight");
      break;
    case "ArrowLeft":
      gauche.classList.remove("highlight");
      break;
    case "ArrowDown":
      bas.classList.remove("highlight");
      break;
    case "ArrowRight":
      droite.classList.remove("highlight");
      break;
    default:
    return;
}
});