
function seleccion(){
	let figu = document.getElementById('figu');
	let figura = figu.value;

	if(figura == "cuadrado"){
		document.getElementById('lado_1').disabled=false;

	}else if(figura == "rectangulo"){
		document.getElementById('lado_1').disabled=false;
		document.getElementById('lado_2').disabled=false;
		document.getElementById('lado_3').disabled=true;

	}else if(figura == "triangulo"){
		document.getElementById('lado_1').disabled=false;
		document.getElementById('lado_2').disabled=false;
		document.getElementById('lado_3').disabled=false;

	}else{
		document.getElementById('lado_1').disabled=false;
		document.getElementById('lado_2').disabled=false;
		document.getElementById('lado_3').disabled=false;
	}

}
