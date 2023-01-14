console.log("funciona esta wea")

//tres formas de reservar espacio en memoria

//primera con var --no recomendada

//declaramos variable
var autor
//asiganamos el valor con un =
autor = "borges"
console.log(autor)

//manera correcta con let, inicializando variables, declarar y asignar valor en la misma linea
let Autor = "Isabel allende"
//una variable podemos reasignar su value
Autor = "garcia marquez"
console.log(Autor)

//tercer forma de reservar 
//si o si inicializarla, declarar y asignar valor
const pi = "tres coma 14"
//no se le puede reasginar el value
console.log(pi)

//tres tipos de datos numbers, strigs, booleans
// primer tipo de dato entre '' , "" , `` son tipos de datos string
// segundo tipo de dato numerico 3.14 por ejemplo
let numFav = 5
console.log('mi numero fav es ' + numFav)
//tercer tipo de dato Boolean, solo true y false
let bandera = true
bandera = false
console.log(bandera)


//operaciones basicas aritmeticas
// + - * / 
console.log(3*2)
console.log(numFav * 3)
console.log(numFav + 3)


let precioProducto = 500
console.log(precioProducto + (precioProducto * numFav))

let precioConIva = precioProducto * numFav
console.log(precioConIva)

console.log("le precio del producto es " + precioProducto)
//concatenacion-- con los strings
//+ ademas de sumar concatena, si unimos o utilizamos string va a concatenar entre esos valores string

// forma alternativa de concatenar es con las backsticks `` las variables van entre ${variable}
console.log(`el precio del producto es ${precioProducto}`)

//prompo sirve para que el usuario ingrese datos
//cartel emergente con un INPUT
let precioIngresado = parseInt (prompt('ingrese el precio del producto'))
console.log(precioIngresado)
//si quiero guardar un numero tengo que parsearlo parseInt, tambien puedo utlizar Number

//tarea, ususario ingrese producto, nombre de producto y se calcule un descuento del %20

//que ingrese 3 productos, calcular total y promedio de c/precio

//console.log() muestra por consola 

//alert es solo un OUTPUT
alert('nuestro primer alert')
alert(`el precio del producto es ${precioProducto}`)