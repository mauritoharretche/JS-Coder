// //CLASE N° 3
// //FUNCTIONS:
// //Primera forma de declarar functions (tradicional)
// //palabra reservada functio luego nombre()

// //DECLARACIÓN
// function pedirNombre(){
//     //las instrucciones a ejecutar cuando se llame esta function
//     let nombreIngresado = prompt("Ingrese su nombre")
//     // console.log(`Su nombre es ${nombreIngresado}`)
//     //concatenar/hacer functions que trabajen de conjunto
//     saludarAlumno(nombreIngresado)
    
// }

// //llamar/invocar
// // pedirNombre()
// // pedirNombre()
// // pedirNombre()

// function saludarAlumno(nombre){
//     console.log(`Hola alumno/a: ${nombre}`)
// }
// //si invocamos una function con parámetro y no le pasamos el parámetro, me devuelve/ lo toma como undefined
// saludarAlumno()
// //valores directos -- string
// saludarAlumno("Gaston")
// saludarAlumno("Salvador")
// //puede recibir variables como argumentos
// let nombreLet = "Rodrigo"
// saludarAlumno(nombreLet)

// function suma(num1, num2){
//     let resultado = num1 + num2
//     // console.log(resultado)
//     //retorna lo que le indiquemos al function
//     return resultado
// }
// let suma1 = suma(5, 13)
// console.log(suma1)

// let suma2 = suma(9, 2)
// console.log(suma2)
// function resta(num1, num2){
//     return num1 - num2
//     //cualquier linea desp del return no la va a leer
//     alert("El resultado de la resta es: " + num1 -num2)
// }
// let resta1 = resta(10, 4)
// console.log(resta1)
// let resta2 = resta(4,10)
// console.log(resta2)
// console.log(resta(5,3))

// // //ejemplo Coder 
// function ingresarDatosCalculadora(){
//     let primNum = parseInt(prompt("Ingrese el primer num"))
//     let segNum = parseInt(prompt("Ingrese el segundo num"))
//     let oper = prompt("Ingrese tipo de operacion")
//     console.log("El resultado con functions es " + calculadora(primNum, segNum, oper))
// }
// function calculadora(primerNumero, segundoNumero, operacion) {
//    switch (operacion) {
//        case "+":
//            return primerNumero + segundoNumero;
           
//        case "-":
//            return primerNumero - segundoNumero;
           
//        case "*":
//            return primerNumero * segundoNumero;
           
//        case "/":
//            return primerNumero / segundoNumero;
//        //else   
//        default:
//            return 0;
          
//    }
// }
// console.log(calculadora(5, 10, "+"))
// console.log(calculadora(5, 10, "*"))
// console.log(calculadora(5, 10, "ñ"))
// console.log(calculadora(23, 2, "/"))
// ingresarDatosCalculadora()
// // //SCOPE 
// //declaren con let y no con var ES5
// let nombre = "John Doe" // variable global

// function saludar() {
//     let nombre = "Juan Coder" // variable local
//     console.log(nombre)
// }
// //Accede a nombre global
// saludar()
// console.log(nombre)   // → “John Doe”
// console.log("El nombre de la variable global es: " +nombre)

// //OTRA FORMA DE DECLARAR FUNCTIONS
// //FUNCTION ANONIMA
// //si hay que respetar la cascada
// const mult = function(num1,num2){return num1 * num2}
// console.log(mult(5,3)) 
// console.log(mult(12,4))

// const div = function(x,y){return x / y}
// let div1 = div(5,2)
// console.log(div1)

// //FUNCTION ARROW (más simplificada)
// const sumar = (num1, num2) => {
//     //puede tener varias líneas
//     let resultado = num1 + num2
//     return resultado
// }
// console.log(sumar(5,6))
// //return implicito
// const restar = (x,y) => x - y
// console.log(restar(75,25))

function agregarLibro(){
    let autorIngresado = prompt("Ingrese el nombre del autor del libro")
    let tituloIngresado = prompt("Ingrese el titulo del libro")
    let precioIngresado = parseInt(prompt("Ingrese el precio del libro"))
    //agregamos crear objeto con los prompt
    const libroIngresado = {
        autor: autorIngresado,
        titulo: tituloIngresado,
        precio: precioIngresado
    }
    console.log(libroIngresado)
    mostrarDatosLibro(autorIngresado, tituloIngresado, precioIngresado)
}

function mostrarDatosLibro(autor, titulo, precio){
    console.log(`El libro fue escrito por ${autor} su titulo es ${titulo} y vale ${precio}`)   
}
// agregarLibro()
//CLASe PARTE 2 -- OBJETOS
//Tres formas de declarar objetos
//PRIMERA OBJETOS LITERALES
//caracter de los objetos {}

const integrante1 = {
    //decido propiedades que necesito o me convienen para mi código
    nombre: "Gonza",
    edad: 29,
    rol: "Profe",
    ciudad: "Buenos Aires"
}
console.log(integrante1)
const integrante2 = {
    nombre: "Luciano",
    edad: 33,
    rol: "Tutor",
    ciudad: "Córdoba"
}
console.log(integrante2)
const integrante3 = {
    nombre: "Fran",
    edad: 30,
    rol: "Estudiante",
    ciudad: "La Plata",
    helado:"Mascarpone con frutos rojos" 
}
console.log(integrante3)

//FORMAS DE ACCEDER AL OBJETO -- dos formas
//con []
console.log(integrante1["rol"])
console.log(integrante2["nombre"])
console.log(integrante3["helado"])

//undefined si el atributo no existe
console.log(integrante1["helado"])

//con .
console.log(integrante3.nombre)
console.log(integrante2.ciudad)

//re asignar valores -- valores de atributos son dinámicos (pueden cambiarse)
integrante1["nombre"] = "Gonzalo"
console.log(integrante1)
integrante3.helado = "Menta granizada"
console.log(integrante3)

// //esto si es con let, no recomendable
// integrante2 = "Vainilla"
// console.log(integrante2)

//SEGUNDA FORMA DE CREAR OBJETOS:
//function constructora
function Participante(nombre, edad, rol, ciudad){
    //function constructora
    this.nombre = nombre,
    this.edad = edad,
    this.rol = rol,
    this.ciudad = ciudad
    //método es una function (restringuida el dominio)
    this.mostrarInfo = function(){
        console.log(`La persona ${this.nombre} de ${this.edad} años con el rol ${this.rol} vive en ${this.ciudad}`)
    }
    this.duplicarEdad = function(){
        this.edad = this.edad * 2
        console.log("La nueva edad es: " + this.edad)
    }
}
//Instanciación de objetos
const participante1 = new Participante("Gonzalo", 29, "Profe", "Bs As")
console.log(participante1)
const participante2 = new Participante("Mauro", 30, "estudiante", "La Plata")
console.log(participante2)

console.log(participante2.ciudad)
console.log(participante1["rol"])

//aplicación de métodos
participante1.mostrarInfo()
participante2.mostrarInfo()

//utilizao en otros objetos -- error: is not a function
// integrante2.mostrarInfo()

participante1.duplicarEdad()
console.log(participante1)

// participante1.duplicarEdad()
// console.log(participante1)

//FOR IN ciclo que recorre objeto por dentro
for(let prop in integrante3){
    console.log(integrante3[prop])
}
let i = 0
for(const n in participante2){
    i++
    console.log("el valor de la propiedad n° " + i + " es " + participante2[n])
}

//tercera forma de crear objetos
//crear una class de Auto
class Auto{
    //propiedades - atributos
    constructor(modeloI, marcaI, precioI){
        //decido propiedades que necesito o me convienen para mi código
        this.modelo = modeloI,
        this.marca = marcaI,
        this.precio = precioI

    }
    //métodos 
}
//Instanciación: 
const fitito = new Auto("600", "Fiat", 75000)
console.log(fitito)


class Libro{
    constructor(autor, titulo, precio){
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio,
        this.vendido = false
    }
    mostrarInfoLibro(){
        //instrucciones del método:
        console.log(`El libro fue escrito por ${this.autor} su titulo es ${this.titulo} y vale ${this.precio}`)
    }
    
}
const libro1 = new Libro("Jorge Luis Borges", "Aleph", 900)
console.log(libro1)
libro1.mostrarInfoLibro()
// fitito.mostrarInfoLibro()


function agregarLibroClass(){
    let autor = prompt("Ingrese el nombre del autor del libro")
    let titulo = prompt("Ingrese el titulo del libro")
    let precio = parseInt(prompt("Ingrese el precio del libro"))
    const libroNuevo = new Libro(autor, titulo, precio)
    libroNuevo.mostrarInfoLibro()

}
// agregarLibroClass()
// agregarLibroClass()

//MENU
let salirMenu = true
do{
    let opcionMenu = prompt(`Ingrese la opción deseada
    1 - Agregar libro
    2 - Borrar libro
    3 - Consultar catálogo
    4 - Ordenar de mayor a menor por precio
    5 - Buscar libro por título
    0 - Salir del ménu`)
    switch(opcionMenu){
        case "1":
            agregarLibro()
        break
        case "2":
            console.log("Borrar libro")
        break
        case "3":
            console.log("Consultar")
        break
        case "4":
            console.log("Ordenar")
        break 
        case "5":
            console.log("Buscar")
        break
        case "0":
            console.log("Salir del menu")
            salirMenu = false
        break
        default:
            console.log("Opción no válida")
        break             
    }
}while(salirMenu)

//CÓDIGO AFTER CLASE 2:
// let bandera = true
// do{
//     let nombreIngresado = prompt("Ingrese el nombre del alumno/a")
//     let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar para: " + nombreIngresado))

//     //Validación para que cantNotas sea un número (que no pueda ingresar un string)
//     //isNaN
//     while(isNaN(cantidadNotas)){
//         //true cuando cantNotas no es un number
//         //false cuando cantNotas SEA un number
//         alert("El tipo de dato ingresado no es un número")
//         cantidadNotas = parseInt(prompt("REVISE EL TIPO DE DATO INGRESADO. Ingrese la cantidad de notas que desea ingresar para: " + nombreIngresado))
//     } 
//     let total = 0
//     for(let i = 1; i <= cantidadNotas; i++){
//         let nota = parseInt(prompt(`Ingrese el valor de la nota n°${i} `))
//         //controlar que nota sea un number
//         while(isNaN(nota)){
//             nota = parseInt(prompt(`ATENCIÓN INGRESE DATO CORRECTO. Ingrese el valor de la nota n°${i} `))
//         }
//         if(nota >=0 && nota <=10){
//             total = total + nota
//             console.log(`Total parcial: ${total}`)
//         }else{
//             nota = parseInt(prompt(`ATENCIÓN INGRESE NOTA ENTRE 0 y 10. Ingrese el valor de la nota n°${i} `))
//             total = total + nota
//             console.log(`Total parcial: ${total}`)
//         }

//     }
//     console.log(`El total de la notas es: ${total}`)
//     let promedio = total/cantidadNotas
//     //método para controlar decimales a mostrar toFixed(cantDec)
//     //Recomendable para mostrar datos
//     console.log(`El promedio de sus notas es: ${promedio.toFixed(2)}`)
//     //Condicional muestra msj según promedio:
//     if(promedio == 10){
//         console.log(`${nombreIngresado}: usted tiene nota de honor`)
//     }else if(promedio >= 7){
//         console.log(`${nombreIngresado}: usted ha promocionado`)
//     }else if(promedio >= 4){
//         console.log(`${nombreIngresado}: usted ha aprobado`)
//     }else if(promedio < 4){
//         console.log(`${nombreIngresado}: usted ha desaprobado`)
//     }else{
//         //Cuando validamos
//     }

//     let pregunta = prompt(`Desea seguir ingresando notas. Ponga "ESC" para salir`)
//     //tenemos que pensar una estructura que cuando usuario ponga ESC me transforme bandera a falso
//     if(pregunta.toUpperCase() == "ESC"){
//         bandera = false
//         console.log("Gracias por utilizar nuestra app de notas")
//     }
// }while(bandera)


