# Bogdan1247.github.io
body{
	background-color: #C8B9FF;
	margin: 0 115px;
	width: 1100px;
 	/*background: linear-gradient(to bottom, #C8B9FF, #FF7000)*/
}

a{text-decoration: none;}
/*----------------header------------------------*/
.logo img{
	width: 200px;

}

.logo span{
	position: relative;
	font: 200% Algerian, sans-serif;
	left: -10px;
	top: -50px;
	color: #2F2F2F;
}

.logo{
	width: 1000px;
	position: absolute;
}
nav {
	position: relative;
	font: bold 200% Gabriola, "Segoe print", sans-serif;
	left: 450px;
	top: 75px;
	margin: 0;
	padding: 0;
	width: 750px;
}

nav a {
	padding-right: 45px;
	color: #4D4D4D;
	/*transition: all 0.7s linear;*/
}
nav a:last-child{
	padding-left: 100px;
	padding-right: 0;
}
nav a:hover{
	font: 80% "Segoe print", sans-serif;
	padding-right: 26px;
	/*transition: all 0.7s linear;*/
}
/*----------------article------------------------*/
@font-face{
	font-family: 'Fira Sans';
	font-style: normal;
	font-weight: normal;
	src: url(FiraSans.ttf);
}
.content{
	font: 90% 'Fira Sans', Verdana, sans-serif;
	width: 500px;
	text-indent: 15px;
	text-align: justify;
	position: relative;
	top: 200px;
}

article{
	width: 600px;
	margin: 0;
	padding: 0 0 0 80px;
}

.content h2+p{
	line-height: 150%;
	font-size: 130%;
}

.imgMain img{
	width: 430px;
	/*height: 300px;*/
	position: relative;
	top: -200px;
	left: 600px;
	filter: drop-shadow(6px 6px 4px blue);
}
/************************aside****************/
aside{
	position: static;
	border: 2px solid black;
	height: 450px;
	margin: -100px 0 0 -100px;
	padding: 30px 230px 30px 130px;
	width: 1040px;
	background-color: #17129A;
}

aside img{
	/*margin: 55px 100px 55px 100px;*/
	margin: 50px 100px 55px 50px;
	padding: 0; 
}

/*aside img:first-child{
	margin-left: 0;
	margin: 70px 100px 55px 0;
}*/

aside h1{
	font-size: 200%;
	color: #FF7000;
	text-align: center;
	margin: 0;
	padding-left: 100px;
}

aside table{margin-left: 90px;}

aside span{
	display: block;
	font-weight: bold;
	font-family: Verdana, sans-serif;
	color: #DBDBDB;
	text-align: center;
}
/*#332C50*/
/*aside img:hover{
	transition: all 3s ease;
}*/
/*****************Slider*******************/
.S{
	background-color: #C8B9FF;
	display: flex;
}
.slider{
	width: 500px;
	height: 300px;
	margin: 100px auto;
	position: relative;
	top: 0;
	left: 0;
	right: 0;
}
.img{
	text-align: center;
	line-height: 300px;
	position: absolute;
	font-size: 50px;
	color: white;
	display: none;
	filter: drop-shadow(6px 6px 4px blue);
}

.img.currently{display: block;}
.img{width: 500px;}

.n a{
	color: #17129A;
	font-size: 500%;
}
.n a:hover{color: #FF7000;}

.previous{
	position: relative;
	top: 250px;
	left: 200px;
}
.next{
	position: relative;
	top: 250px;
	right: 100px;
}

#a,#b,#c,#d{width: 600px;}

/******************footer*********************/
footer{
	width: 1208px;
	height: 190px;
	padding: 100px;
	margin-left: -100px;
	background-color: #17129A;
	color: white;
	font: 110% 'Fira Sans', Verdana, sans-serif;
	line-height: 30px;
}

.links a{
	display: block;
	color: white;
	width: 200px;
	transition: all 0.7s ease;
}
.links a:hover{
	font: 110% Verdana, sans-serif;
	text-indent: 10px;
	transition: all 0.7s ease;
}

.links:hover{
	padding-top: 7px;
	line-height: 32px;
}

.links{
	margin-top: -50px;
	margin-left: 500px;
	width: 200px;
}

.end{margin-top: 50px;}

.end img{
	margin-left: 20px;
	height: 25px;
	transition: all 0.5s ease;
}

.end img:hover{
	height: 30px;
	transition: all 0.5s ease;
}

.end p{margin-left: 500px;}

/***********LOGIN*********************/
form{margin: 20px auto auto 500px;}

form input{
	display: block;
	margin-bottom: 10px;
	height: 40px;
	width: 300px;
	/*filter: drop-shadow(5px 5px 4px #17129A);*/
}

form .text{
	filter: drop-shadow(5px 5px 4px #17129A) drop-shadow(-5px -5px 4px #17129A);
	border-radius: 8px;
}

form .button{
	width: 310px;
	border-radius: 20px;
	background-color: #17129A;
	color: white;
	transition: all 0.5s ease;
}

form .button:hover{
	font-weight: bold;
	background-color: #DEDEDE;
	color: #17129A;
	transition: all 0.5s ease;
}

form .b{margin-top: 50px;}
form h2{margin-left: 75px;}
form .h2{margin-left: -70px;}

form a{
	color: black;
	font-size: 130%;
	margin-left: 80px;
	transition: all 0.3s ease;

}
form a:hover{
	color: #565656;
	filter: drop-shadow(7px 7px 5px #E76703) drop-shadow(-7px -7px 5px #E76703);
	transition: all 0.3s ease;
}
