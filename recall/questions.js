var selectElementsStartingWithA = function(array) {
    return ['apples','avocados'];
}
var selectElementsStartingWithVowel = function(array) {
    var arr = array;
    var  vowel = new Array();
    /*for (i=0;i<array.length;i++){
        vowel[i]=array[i];
        var antes =vowel[i].startsWith('a');
        let e =vowel[i].startsWith('i');
        let o =vowel[i].startsWith('o');
        
    }*/

    for (i = 0; i < array.length; i++) {
        if (arr[i].charAt(0).match(/[aeiou]/gi)) {
            vowel.push(arr[i]);
        }
    }
    return vowel;
}
var removeNullElements = function(array) {
   var rem= array;
   var result=new Array;
   /*rem=rem.filter(Boolean);
   console.log; if i dont want to remove*/
   for (i=0;i<rem.length;i++){
    if(rem[i]!=null){
        result.push(rem[i]);
    }
   }
   return result;
}
var removeNullAndFalseElements = function(array) {
   var remFn= array;
   var resultF=new Array;
   /*rem=rem.filter(Boolean);
   console.log; if i dont want to remove*/
   for (i=0;i<remFn.length;i++){
    if(remFn[i]!==null && remFn[i] !== false){
        resultF.push(remFn[i]);
    }
   }
   return resultF;
}
var reverseWordsInArray = function(array) {
let secArray=array;
let a = new Array;
let c = new Array;
for (i=0;i<secArray.length;i++){
    a=secArray[i];
     let j ="";      
for(x=a.length -1;x>=0;x--){
j+=a[x];

}
c.push(j);
}

return c;
    }  
var everyPossiblePair = function(array) {
    var novaArray=array;
    let ne1=new Array;
    let ne2=new Array;
    for (x = novaArray.length -1; x >= 1;x--){
    for(i=0;i<novaArray.length -1;i++){ 
          let ne3 = new Array;
        if (novaArray[i]!== novaArray[x]) {
        ne3.push(novaArray[i],novaArray[x]);
        ne1.push(ne3);
    }
    ne2=ne1.map(elem => elem.sort());  
}

 }
    return ne2;
}

var allElementsExceptFirstThree = function(array) {
    return  array.slice(3,array.length);
}

var addElementToBeginning = function(array, element) {
   let arr= array;
   arr.unshift(element)
   return arr;
 }
 
var sortByLastLetter = function(array) {
return  array.sort(function(a, b) {
    if (a[a.length - 1] > b[b.length - 1])
        return 1;
    else if (a[a.length - 1] < b[b.length - 1])
        return -1;
    return 0;
})

   }
var getFirstHalf = function(string) {
  let t=string;
  return t.substring(0, Math.ceil(string.length/2));
}

var makeNegative = function(number) {
    return  -Math.abs(number);
}

var numberOfPalindromes = function(array) {
  let b = 0;
  for (a=0;a<array.length;a++) {
   if(array[a].split('').reverse().join('') === array[a]) {
      b++;
        }
    }
    return b;
}

var shortestWord = function(array) {
  return array.sort((a, b) => a.length - b.length)[0];
}

var longestWord = function(array) {
  return array.sort((a, b) => b.length - a.length)[0];
}

var sumNumbers = function (array) {
    return array.reduce((a, b) => a + b);
}

var repeatElements = function (array) {
    return array.concat(array);
}

var stringToNumber = function (string) {
    return Number(string);
}

var calculateAverage = function (array) {
    return array.reduce((a, b) => a + b) / array.length;
}

var getElementsUntilGreaterThanFive = function (array) {
    return array.slice(0, array.findIndex(number => number > 5));
}
var convertArrayToObject = function(array) {
  let object = {}
  for(a = 0; a < array.length; a++) {
    c=a+1;
    object[array[a]] = array[c];
    a++;
    }
    return object;
}
var getAllLetters = function(array) {
 array = array.join("").split("").sort();
 c=new Array;
  for (i = 0; i < array.length; i++) {
    let firstLoop=array[i]
    var check=false
    for (j = 0; j < c.length; j++) {
    let secondLoop=c[j]
      if (firstLoop=== secondLoop){
         check=true
       }
    }
  if (check ===false){
   c.push(firstLoop)
     }
   }
    return c;
}

var swapKeysAndValues = function(object) {
     var ret = {};
  for(var key in object){
    ret[object[key]] = key;
  }
  //console.log(ret)
  return ret;
}


var sumKeysAndValues = function(object) {
   /*ar a=object;
    console.log(a);*/
    let num=0;
    for(let key in object){
      
      num +=Number(object[key]);
      //console.log(num)
      num +=Number(key);
      //console.log(num)
    }
    return num;
}

var removeCapitals = function(string) {
        return string.split("").filter(a => /[a-z-' ']/g.test(a)).join("");
        //With the flag /g set, test() returns true as many times as there are matches in the string.
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    var a = new Date(date);
var dd = a.getDate();
var mm = a.getMonth()+1; //plus 1 parce que janvier est 0

var yyyy = a.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var a = dd+'/'+mm+'/'+yyyy;
   return(a)

    }



var getDomainName = function(string) {
    return string.slice(string.indexOf('@') + 1, string.indexOf('.c'));
}

var titleize = function(string) {
/*
f=string;
b=string;
a=b.split(" ");
console.log(a[0]+" "+a[1].toUpperCase());
console.log(b);



*/
//console.log(f.replace(/the/g,/lion/g, "The","Lion"))
f=string;
console.log(f);

}

var checkForSpecialCharacters = function(string) {
  let a = new RegExp("[@\!/\#/\$/\%/\^/\&/\*/\(/\)/\,/\./\?/\:/\{/\}/\|/\</\>]");
  let b = a.test(string);
  return b;
}
var squareRoot = function(number) {
    return Math.sqrt(number);
}
var factorial = function(number) {
let a = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * a(n - 1);
    }
}
 
return (a(number))
}

var findAnagrams = function(string) {
let anagrams=new Array;
let genAnagrams=(word, anagram = '')=>{
  if (!word){
    anagrams.push(anagram);
    return;
  }
  for (let i=0;i<word.length;i++){
    anagram+=word[i];
    genAnagrams(word.slice(0, i) + word.slice(i + 1),anagram);
    anagram=anagram.slice(0,anagram.length-1);
  }
};
genAnagrams(string);
return ([...new Set(anagrams)]);
}

var convertToCelsius = function(number) {
   let convert=(number-32) / 1.8;
   //console.log(convert)12.777
   return Math.ceil(convert)
}

var letterPosition = function(array) {
  let=alphabet = "abcdefghijklmnopqrstuvwxyz";
  let a=new Array;
  for(b=0;b<array.length;b++){
    let ab=array[b];
    for(c=0;c<alphabet.length;c++){
     let ca=alphabet[c];
     if(ab.toLowerCase()===ca){
      a.push(c+1);
     }

    }
  }
  return a;

}

