// let edadIngresada = prompt("Respondar por si o no su mayoría edad")
// console.log(`La respuesta a la pregunta es ${edadIngresada}`)

// //Estructura condicional, condicional simple IF
// // if (condicion) -> bloque de instrucciones
// //un igual "=" es para asignar
// // dos iguales "==" ES PARA COMPARAR
// if (edadIngresada == "si"){
//     //se van a ejecutar si se cumple la condición
//     console.log("Usted es mayor de edad, puede comprar bebidas")

// }
//una condición siempre se resuelve por TRUE o FALSE

// //Transformar dato númerico: parseInt()
// let edad = parseInt(prompt("Ingrese su edad"))
// // let edadEntero = parseInt(edad)
// if(edad >= 18){
//     //Condición da TRUE ejecuta esto
//     console.log("Usted puede comprar en la tienda")
//     // alert("Usted puede comprar en la tienda")
// }else{
//     //Condición da FALSE ejecuta esto
//     console.log("Usted no es mayor de edad, no puede comprar en la tienda")
//     // alert("Usted no es mayor de edad, no puede comprar en la tienda")
// }

//Cómo podemos leer al ELSE? como un "sino.."

// //Otro if ELSE
// let color = "AMARILLO"
// console.log(color)
// //toLowerCase()
// console.log(color.toLowerCase())
// if(color.toLowerCase() == 'azul'){
//     console.log("Este color es azul")
// }else{
//     console.log("Este color no es azul")
// }
//toUpperCase() transforma a mays


// //ejemplo con if -- else if -- else
// let precio = 45;

// if (precio < 20) {
//     alert("El precio es menor que 20");
// }
// else if (precio < 50) {
//     alert("El precio es menor que 50");
// }
// else if (precio < 100) {
//     //si precio es 45, aquí ya no entra porque entro al else if anterior
//     alert("El precio es menor que 100");
// }
// else {
//     alert("El precio es mayor que 100");
// }

//forma que no conviene tanto para este caso, separar if (no anidarlos)
// if (precio < 20) {
//     alert("El precio es menor que 20");
// }
// if (precio < 50) {
//     alert("El precio es menor que 50");
// }
// if (precio < 100) {
//     //si precio es 45, aquí ya no entra porque entro al else if anterior
//     alert("El precio es menor que 100");
// }

// //Condicional anidado que evalue si es un color primario o no
// if(color.toLowerCase() == 'azul'){
//     console.log("Este color es azul y es primario")
// }else if(color.toLowerCase() == "amarillo"){
//     console.log("Este color es amarillo y es primario")
// }else if(color.toUpperCase() == "ROJO"){
//     console.log("Este color es rojo y es primario")
// }
// else{
//     console.log("Este no es un color primario")
// }

//Documentación toLowerCase()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//https://www.w3schools.com/jsref/jsref_tolowercase.asp

//OPERADORES LOGICOS

//comparación estricta ===

// let num = "5"

// if(num == "5"){
//     //Evalua sólo valor
//     console.log("Se cumple la condición es ==")
// }
// if(num === "5"){
//     //Evalua valor y tipo de dato
//     console.log("Se cumple la condición es ===   Estrictamente igual")
// }

// //Operador OR  ||
// if((color.toLowerCase() == 'azul') || (color.toLocaleLowerCase()) == "rojo" || (color.toLowerCase() == "amarillo") ){
//     //Esto me de TRUE con que UNA sola de las condiciones se cumpla, es TRUE --> por utilizar OR
//     console.log(`Este color es ${color} y es primario`)
// }
// else{
//     console.log(`Este no es un color primario. El color es ${color}`)
// }

//Operdador AND &&
let precioLibro = 600
let autorLibro = "Borges"

//condicional que me devuelva si el libro es de Borges y vale más de 750
if((autorLibro.toLowerCase() == "borges") && (precioLibro > 750)){
    //Aca va a entrar si todos los términos de la condición me dan TRUE
    console.log("El libro si es de Borges y vale más de 750")
}else{
    console.log("El libro no es de Borges o no vale más de 750")
}

// let nombreIngresado   = prompt("Ingresar nombre");

// if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
//     alert("Hola Ema"); 
// }else{
//     alert("Error: Ingresar nombre valido");
// }

///////////////////SEGUNDA PARTE CLASE DOS CICLOS//////////// 

//PRIMER CICLO/BUCLE
//FOR -- ciclo por conteo

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

//quiero hacer un for que replique los 11 console.log anteriores
//Un ciclo for tiene tres términos desde, hasta y la actualiación
for(let index = 0; index <=10;index = index + 1){
    //index en la primera iteración vale 0
    //ejecuta todas líneas
    console.log("Valor iteración: " + index)
}

//vamos pregunte al usuario un número y nosotros le devolvemos la tabla de multiplicar del 0 al 10 de ese número

// let numTabla = parseInt(prompt("Ingrese el num que desea saber la tabla de multiplicar"))
// console.log(numTabla)
// //una variable se le pasa++ es incrementarla de uno en uno i = i+1
// for(let i = 0; i <=10;i++){
//     console.log(`${numTabla} x ${i} = ${numTabla * i}`)
// }

//Pedir al usuario la cantidad de notas que desea ingresar, preguntarle cada una de esas notas. Sacar promedio de las notas ingresadas y suma total de la notas

// let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar"))
// let total = 0
// for(let i = 1; i <= cantidadNotas; i++){
//     let nota = parseInt(prompt(`Ingrese el valor de la nota n°${i} `))
//     // console.log(nota)
//     total = total + nota
//     console.log(`Total parcial: ${total}`)
// }
// console.log(`El total de la notas es: ${total}`)
// let promedio = total/cantidadNotas
// console.log(`El promedio de sus notas es: ${promedio}`)

//CICLO WHILE CICLO CONDICIONAL

// dado

// //DO WHILE
// let ganador = false
// let contador = 1
// do{
//     let adivinanza = prompt("Qué tiene 6 caras y 21 ojos?? Chance N°" + contador)
//     if(adivinanza.toLowerCase() == "dado"){
//         console.log("Felicitaciones has ganado. La respuesta es " + adivinanza)
//         ganador = true
//     }else{
//         console.log("La respuesta no es correcta siga intentando")
//         contador++
//         if(contador == 4){
//             console.log(`Ya tuviste tus chances. Has perdido. La respuesta era dado`)
            
//         }
//     }
// }while(!ganador && contador < 4)

//ESTRUCTURA SWITCH condicional con opciones múltiples

let color2 = "AZUL"
switch(color2.toLowerCase()){
    //múltiples case(casos) del switch
    case "azul":
        console.log("Este color es azul y es primario")
    break
    case "amarillo":
        console.log("Este color es amarillo y es primario")
    break
    case "rojo":
        console.log("Este color es rojo y es primario")
    break
    //default equivalente a else
    default:
        console.log("Este no es un color primario")
    break
}
// if(color.toLowerCase() == 'azul'){
//     console.log("Este color es azul y es primario")
// }else if(color.toLowerCase() == "amarillo"){
//     console.log("Este color es amarillo y es primario")
// }else if(color.toUpperCase() == "ROJO"){
//     console.log("Este color es rojo y es primario")
// }
// else{
//     console.log("Este no es un color primario")
// }

//MENU
let salirMenu = true
do{
    let opcionMenu = prompt(`Ingrese la opción deseada
    1 - Ingresar cant Notas y prom - total
    2 - Borrar libro
    3 - Consultar catálogo
    4 - Ordenar de mayor a menor por precio
    5 - Buscar libro por título
    0 - Salir del ménu`)
    switch(opcionMenu){
        case "1":
            let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar"))
            let total = 0
            for(let i = 1; i <= cantidadNotas; i++){
            let nota = parseInt(prompt(`Ingrese el valor de la nota n°${i} `))
            // console.log(nota)
            total = total + nota
            console.log(`Total parcial: ${total}`)
        }
        console.log(`El total de la notas es: ${total}`)
        let promedio = total/cantidadNotas
        console.log(`El promedio de sus notas es: ${promedio}`)
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