//evento para ocultar tarjetas
const boton = document.getElementById("start");
var tarjetas = document.querySelectorAll(".tarjeta");

boton.addEventListener("click", () => {
	for (var i = 0; i < tarjetas.length; i++) {
		tarjetas[i].classList.add("oculto");
	}
});
	for (var i = 0; i < tarjetas.length; i++) {
		tarjetas[i].addEventListener("click", function() {
			this.classList.remove("oculto");
		});
	}

//evento para ver imagenes de nuevo
const boton2 = document.getElementById("ver");
var tarjetas = document.querySelectorAll(".tarjeta");

boton2.addEventListener("click", () => {
	location.reload();
});
