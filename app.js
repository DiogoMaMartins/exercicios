
/*var body = document.getElementsByTagName("body");
body[0].removeAttribute("class", "bg-aqua");
body[0].setAttribute("class", "bg-olive");



var paragraph = document.getElementById("first-paragraph");
paragraph.classList.remove("bg-lime-gray");
paragraph.classList.add("aqua");


var block = document.getElementsByTagName("blockquote");
block[0].classList.add("bg-teal");
block[0].classList.remove("bg-silver");

var block = document.getElementsByTagName("blockquote");
block[0].classList.add("bg-white");
block[0].classList.remove("bg-teal");


/*Exercice deux*/
/*
var tableQuery document.getElementsByTagName("table").querySelectorAll("#my-table");
 tableQuery.classList.add("bg-purple");
 tableQuery.classList.remove("white")

var teste = document.querySelectorAll(".container p");
for (var x=0; x<teste.length; x++){
	console.log(teste[x]);
	(teste[x]).classList.add("shadow");

}

*/
/*Exercicio 3
preTeste = document.querySelectorAll("pre code");
for (var x=0; x<preTeste.length; x++){
	(preTeste[x]).style.color="red";
	(preTeste[x]).style.backgroundColor="blue";
	(preTeste[x]).style.borderTop="3px solid red";
	(preTeste[x]).style.borderBottom="3px solid red";

}

 
var teste=document.querySelector("h3");
teste.innerHTML="<em>Italic title ! yeah !</em>";
console.log(teste);


 var teste=document.querySelector("h2");
 teste.innerHTML="<strong>HTML doens't work !</strong>"


/*Exercicio 4 

teste =document.querySelector("ul");
var li = document.createElement("li");
li.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
teste.appendChild(li);
link = document.querySelector("ul").querySelector("a");
link.style.color="red";*/
/* Exercicio4 dois
teste = document.querySelector("ol");
while(teste.firstChild){
	teste.removeChild(teste.firstChild);
};

for (var i = 0; i < teste.length; i++) {
	var newli= document.createElement("li"); 
	teste.appendChild(newli);
	newli.innerHTML = teste[i];
