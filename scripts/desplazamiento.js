$(document).ready(function(){
	// Agregar un controlador de eventos para todos los enlaces en el documento
	$('a[href^="#"]').on('click', function(event) {
		// Asegurarse de que el hash tiene un valor antes de anular el comportamiento predeterminado del enlace
		if (this.hash !== "") {
			// Evitar el comportamiento predeterminado del enlace
			event.preventDefault();

			// Almacenar el hash
			var hash = this.hash;

			// Definir el offset para el desplazamiento.
			var offset = -50;
			if (hash === "#comentarios") {
				offset = -80; // Puedes ajustar este valor según sea necesario
			}

			// Usar jQuery's animate() para animar el desplazamiento suave
			// La animación tardará 800 milisegundos
			$('html, body').animate({

				scrollTop: $(hash).offset().top + offset
				}, 800, function(){
				    // Agregar hash (#) a la URL cuando se haya desplazado con éxito
				    window.location.hash = hash;
			});
		}
	});
});
