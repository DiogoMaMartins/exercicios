<html>
<head>
  <title>Jeux Pendu</title>
  <link href="style.css" type="text/css" rel="stylesheet">
  <script type="text/javascript" src="main.js"></script>
</head>
<body>
	<h1>Jeu de Pendu</h1>
	<div id="tabelaComPalavras" onclick="myFunction()">
		<p>Tu as Encore</p>
		<button>A</button>
		<button >B</button>
		<button>C</button>
		<button>D</button>
        <button>E</button>
		<button>F</button>
		<button>G</button>
		<button>H</button>
		<button>I</button>
		<button>J</button>
		<button>K</button>
		<button>L</button>
		<button>M</button>
		<button>N</button>
		<button>O</button>
		<button>P</button>
		<button>Q</button>
		<button>R</button>
		<button>S</button>
		<button>T</button>
		<button>U</button>
		<button>V</button>
		<button>X</button>
		<button>Y</button>
		<button>Z</button>

		
	</div>
	<div id="tabelaLetrasErradas">
	 <p>Mot deja tappes</p>
	</div>
	<div clas="body">
	<div id="cabeca"></div>
	<div id="corpo"></div>
	<div id="bracoE" class="ladoE"></div>
	<div id="bracoD" class="ladoD"></div>
	<div id="pernaE" class="ladoE"></div>
	<div id="pernaD" class="ladoD"></div>
</div>
<div id="guess">
	<span class="letras">-</span>
	<span class="letras">-</span>
	<span class="letras">-</span>
	<span class="letras">-</span>
	<span class="letras">-</span>
	<span class="letras">-</span>

</div>

</body>
</html>
.....................................................................
css
............................
body{
	background-color:black;
}
#cabeca{
	height:100px;
	width:100px;
	background-color:white;
	border-radius:50%;
	left:100px;
	position:absolute;
}
#corpo{
	height:200px;
	width:20px;
	background-color:white;
	top:110px;
    left:140px;
    position:absolute;
}
#bracoE{
	height:100px;
	width:20px;
	background-color:white;
	top:150px;
	left:140px;
	position:fixed;
}
#bracoD{
	height:100px;
	width:20px;
	background-color:white;
	top:150px;
	left:140px;
	position:fixed;
}
#pernaE{
	height:200px;
	width:20px;
	background-color:white;
	top:300px;
	left:140px;
	position:fixed;
}
#pernaD{
	height:200px;
	width:20px;
	background-color:white;
	top:300px;
	left:140px;
	position:fixed;
}
.ladoE{
transform: rotate(30deg);
transform-origin: left top 0;
}
.ladoD{
	transform: rotate(-30deg);
transform-origin: left top 0;
}

#guess{
	left:500px;
	position:absolute;
}
h1{
	color:white;
	text-align: center;
}
p{
	font-weight:bold;
	font-size:20px;

}
#tabelaComPalavras{
	bottom:200px;
	position:absolute;
	left:500px;
	padding:10px;

}
#tabelaLetrasErradas{
    width:400px;
	height:150px;
	background-color:white;
	left:800px;
	bottom:20px;
	position:absolute;	

}
.letras{
	font-size:50px;
	padding:20px;
	color:white;
}
#guess{
   top:200px;
}
