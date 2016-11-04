function generadorBinario() {
	var cantidadBucle = 230;
	while( 1 < cantidadBucle ){
		var aleatorio = "";
		if (Math.random() > 0.5) {
			aleatorio = 1;
		} else {
			aleatorio = 0;
		}
		document.getElementById("binario").innerHTML = document.getElementById("binario").innerHTML + aleatorio;
		--cantidadBucle;
	}
}

function limpiarBinario() {
	document.getElementById("binario").innerHTML = "";
	generadorBinario();
}
