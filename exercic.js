/*var par = 0, msg = "isto e um numero par";
while (par <= 20) {
    if (par % 2 === 0) {
        if (par === 20){
            msg += par + ". ";
        }else{
            msg += par + ", ";
        }
    }
    par++;
}
document.write(msg);*/
/*var a;
for (a=0; a<10; a++){
	document.write(a + ", ");
	
}
var b = 9, r;
	if (b ==9){
		r = b*2;
		document.write(r);

	}*/

/*var b;
for (b=0; b<10; b++){
	let resultat = b *9;
	document.write(resultat + ",");
	multiplicar cada numero por 9
}
*/

/*var boucle;
for (b=0; b<100; b++){
	if(boucle<90){
		document.write("La grade est A");
		break;
	}else if(boucle<80){
		document.write("La grade est B");
		break;
	}else if(boucle<70){
		document.wrie("La grade est C");
		break;
	}else if(boucle<65){
		document.write("La grade est D");
		break;
	}else{
		document.write("La grade est F");
		break;
	}
}
*/

/*
Minha piramide 10 linhas
document.write("<center>"); //colucar piramide centro
for(var i = 0; i <= 10; i++) //conta estrelas
{
	for(var x = 0; x <= i; x++)// do 0 ate a estrela
	{
		document.write("*");//o meu caracter
	}
	document.write("<br/>"); //espaco
}
document.write("</center>"); //fechas*/
/*
window.onload = function() {
var valores = Array(1,2,3,4,5,6,7,8,9);
soma = 0;
for(i = 0; i < valores.length; i++) {
soma+=Number(valores[i]);
}
document.write(soma);
}Stalone','Bruce Lee','Tom Cruise'
*/
/*
var arr = new Array(4);
arr[0] = "Eu sou Stalone";
arr[1] = "Eu sou Bruce lee";
arr[2] = "Eu sou sei la quem";
arr[3] = "Agora fudeu ";

document.write(arr[1]+ " <br/>"  +arr[2]+ " <br/>" +arr[3]+ " <br/>" );
*/
/*
var arr = new Array(4);
arr[0] = "Mario";
arr[1] = "Luigi";
arr[2] = "Peach";


var clone = arr.slice(0);
clone[3]="eu nao sei";
document.write(clone);
*/
/*
var teste= parseFloat(10.4);
var bateau = Math.floor(teste);
document.write(bateau);
var bbateau = Math.ceil(teste);
document.write(bbateau);
*/

/*
Math.ceil(x)	//Returns the value of x rounded up to its nearest integer
Math.floor(x)	//Returns the value of x rounded down to its nearest integer
Math.max(x, y, z, ...)	//Returns the number with the highest value
Math.min(x, y, z, ...)	//Returns the number with the lowest value
Math.random()	//Returns a random number between 0 and 1
Math.round(x)	//Returns the value of x rounded to its nearest integer
*/
/*
var first =  Math.random() * (100 - 50) + 50;
document.write("50 e 100 : " +first+ "<br/>");

var second = Math.random();
document.write("0 e 1: " + second+ "<br/>");

var th = Math.random()*10;
document.write("0 e 10: " + th+ "<br/>");
*/
/*
function personagemAleatorio() {
    return (Math.round(Math.random())-0.10);
}
var arr = Array();
arr[0] = "GORO";
arr[1] = "Johny Cago";
arr[2] = "Kano";
arr[3] = "Liu Kano";
arr[4] = "Raiden";
arr[5] = "Reptil";
arr[6] = "scorpion";
arr[7] = "Shang Tsun";
arr[8] = "Sonya";
arr[9] = "Sub-zero";

arr.sort(personagemAleatorio);

document.write(arr[0]);
*/
/*
var Character = {
  age:24,
  name: "Crow",
  give:new Array('dfff', 'gggg', 'gggg', 'bbbb', 'gfgfgf'),
  giveItem(){
      var taille = this.give.length-1;
      var numeroItem=Math.floor(Math.random() * (taille+1)*5/5);
      var itemgived= this.give[numeroItem];
      return itemgived;
  }
};  

document.write(Character);
document.write("\n\n\n");
document.write("Item donné = " + Character.giveItem());
*/

/*
function ITEMAleatorio() {
    return (Math.round(Math.random())-0.5);
}
var nome ="Crow";
var idade =24;
var arr = Array();
arr[0] = "dsdsd";
arr[1] = "dsdsd";
arr[2] = "dsd";
arr[3] = "dsd";
arr[4] = "dsd";


arr.sort(ITEMAleatorio);
document.write(nome+" "+idade+" "+"Item donne="+ arr[0]);
*/
/*

var ItemVendre = {
  title: "",
  physic:0,
  magic:0,
  minLevel:0,
  available:false,
  getTitle(){
    return this.title;
  }
}  
  


var sword= Object.create(ItemVendre);
sword.title="Epée";
sword.physic=10;
sword.magic=2;
sword.minLevel=4;
sword.available=true;

var hache= Object.create(ItemVendre);
hache.title="Hache";
hache.physic=15;
hache.magic=1;
hache.minLevel=3;
hache.available=true;


var sceptre= Object.create(ItemVendre);
sceptre.title="Sceptre";
sceptre.physic=5;
sceptre.magic=12;
sceptre.minLevel=10;
sceptre.available=true;

var laurier= Object.create(ItemVendre);
laurier.title="Laurier d'or";
laurier.physic=2;
laurier.magic=15;
laurier.minLevel=15;
laurier.available=true;

var AllItemsVendre=new Array(sword,hache,sceptre,laurier);


function voirTout(){
  var temp = Object.create(ItemVendre);
  for(i=0;i<AllItemsVendre.length;i++){
      temp=AllItemsVendre[i];
      document.write("Nom objet dispo : " + temp.title);
  }
}

function voirAllAvailable(){
  var temp = Object.create(ItemVendre);
  for(i=0;i<AllItemsVendre.length;i++){
      temp=AllItemsVendre[i];
      if (temp.available){
        document.write("Nom objet Available : " + temp.title);
      }
  }  
}

function voirLevel10(){
  var temp = Object.create(ItemVendre);
  for(i=0;i<AllItemsVendre.length;i++){
      temp=AllItemsVendre[i];
      if (temp.minLevel===10){
        document.write("Nom objet dispo : " + temp.title+ " avec le Level = " + temp.minLevel);
      }
  }  
}


document.write("Hello à tous !!");
document.write("<br/>");
voirTout(); 
document.write("<br/>");
voirAllAvailable();
document.write("<br/>");
voirLevel10();

*/
/*

document.write("Préparation classe arme + guerrier")

var weapon={
  name: "",
  damage:0  
}


var mainCharacter = {
  // ***classe mainCharacter**** 
  name: "",
  level:0,
  life:100,
  arme: Object.create(weapon),
  //attack (function)  
  attack(){
      document.write("tentative attaque...");
      var reponse=this.name + " ataque d arma"+ this.arme.name + "- Les degats sont de " + this.level*this.arme.damage;
      return reponse;
  },
  setArme(nom, degat ){
    document.write("tentativa de arma" + this.name)
    this.arme.name=nom;
    this.arme.damage= degat;
  }
  
}  


var guerrier01=Object.create(mainCharacter);
guerrier01.name="Arthur le terrrible !";
guerrier01.level=90;
guerrier01.life=110;
guerrier01.setArme("turboLaser", 12);

document.write("Description du soldat :"+guerrier01.name);
document.write("<br/>");
document.write("Arme de "+ guerrier01.name +" est " + guerrier01.arme.name);
document.write("<br/>");
document.write("Tentative lancement méthode attack...");
document.write("<br/>");
document.write(guerrier01.attack()  );
*/
