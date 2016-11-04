function generadorBinario() {
	var cero = 0;
	var uno = 1;
	var cantidadBucle = 250;
	var bucleActual = 1;

	while( bucleActual < cantidadBucle ){
		document.getElementById("binario").innerHTML = document.getElementById("binario").innerHTML + cero;
		++bucleActual;
	}

}
