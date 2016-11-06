var ContadorSubtitulo = 0;

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

function cambiarSubtitulo() {
	if (ContadorSubtitulo == 0) {
		document.getElementById("IMGsubtitulo").src = "./images/PortadaB.png";
		return ++ContadorSubtitulo;
	}else if (ContadorSubtitulo == 1) {
		document.getElementById("IMGsubtitulo").src = "./images/Portada.png";
		return --ContadorSubtitulo;
	}
}
