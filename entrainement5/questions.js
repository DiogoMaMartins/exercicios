/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
 let count = texte.length;
  return count;
}
var remplaceECar = function (texte) {
 texte=texte.replace("e"," ");
  return texte;
}
var concatString = function (texte1, texte2) {
 var texte3=texte1.concat(texte2);
 return texte3;
}
var afficherCar5 = function (texte) {
 let tex=texte[4];
 return tex;
}
var afficher9Car = function (texte) {
   let affiche=texte;
 if (affiche.length >9) affiche=affiche.substring(0,9);
 return(affiche);
}
var majusculeString = function (texte) {
let majus=texte.toUpperCase();
 return majus;
}
var minusculeString = function (texte) {
 let minu=texte.toLowerCase();
 return minu;
}
var SupprEspaceString = function (texte) {
 let suppr=texte.trim();
  return suppr;
}
var IsString = function (texte) {
  if (typeof texte ==="string"){
  return true;
}
}
/*  pour utilizer le indexoof je dois                                     */
var AfficherExtensionString = function (texte) {
	let aff= texte.substring(texte.indexOf(".")+1);
	return aff;

}
var NombreEspaceString = function (texte) {
	let espace=texte;
	return espace.split(" ").length-1;

}
var InverseString = function (texte) {
 return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
	return (Math.pow(x,y));

}
var valeurAbsolue = function (nombre) {
	return Math.abs(nombre);

}
var valeurAbsolueArray = function (array) {
  let teste = new Array(array.length);
  console.log(teste);
 for (i=0; i<array.length;i++) {
 	teste[i] = Math.abs(array[i]);
 }
 return teste;

}
var sufaceCercle = function (rayon) {
	let area=0;
	area=Math.PI *rayon *rayon;
	x =Math.round(area);
	return x;


}
var hypothenuse = function (ab, ac) {
let hypo=Math.sqrt(ab*ab + ac*ac);
return hypo;
}
var calculIMC = function (poids, taille) {
	let tai=taille*taille;
	let imc=poids/tai;
	let tteste=imc.toFixed(2);
	let fff=parseFloat(tteste);
	return fff;

}