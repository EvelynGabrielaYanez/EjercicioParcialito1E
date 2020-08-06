/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let vRespuesta;
	let vNombreArticulo;
	let vCategoria;
	let vPrecio;
	let vMayorPrecio = 0;
	let vNomMayorPrecio = "No se ingresaron";
	let vMayorPrecioLacteos = 0;
	let vNomMayorPrecioLacteos = "No se ingresaron";
	let vCantBebidas = 0;

	do {
		vNombreArticulo = prompt("Ingrese el nombre del artículo");

		do {
			vCategoria = prompt("Ingrese la categoria del artículo.");
		} while (vCategoria != "almacen" && vCategoria != "lácteos" && vCategoria != "limpieza" && vCategoria != "bebidas")

		do {
			vPrecio = parseFloat(prompt("Ingrese el precio del artículo"))
		} while (vPrecio < 0 || vPrecio > 1000)

		if (vMayorPrecio < vPrecio) {

			vMayorPrecio = vPrecio;
			vNomMayorPrecio = vNombreArticulo;
		}
		if (vCategoria == "lácteos" && vMayorPrecioLacteos < vPrecio) {
			vMayorPrecioLacteos = vPrecio;
			vNomMayorPrecioLacteos = vNombreArticulo;
		}
		if (vCategoria == "bebidas") {
			vCantBebidas++;
		}
		vRespuesta = prompt("¿Desea ingresar otro artículo?(si/no)");

	} while (vRespuesta == "si")

	alert("El articulo con mayor precio es: " + vNomMayorPrecio + ".\nEl artículo con mayor precio de la categoria lacteos es: " + vNomMayorPrecioLacteos +
		".\nLa cantidad de artiuclos de categoria bebidas es: " + vCantBebidas);


}