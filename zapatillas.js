/* let saludo = prompt("Buenas! Queres entrar?")

if (saludo == "no") {
    let preguntar = prompt("te gustaría conocer nuestros productos?")
    if (preguntar == "si") {
        switch (preguntar) {
            case "si":
                alert("nuestras zapatillas son clave")
            case "si":
                let ofrecerMenu = prompt('te gusta alguna ? Hay varias opciones')
                switch (ofrecerMenu) {
                    case "roja":
                        alert("valor $33000")
                        break
                    case "azul":
                        alert("valor $30000 ")
                        break
                    case "amarilla":
                        alert("valor $16000")
                        break
                    case "verde":
                        alert("valor $19000")
                        break
                    case "azulMarino":
                        alert("valor $30897")
                        break
                    case "VerdeAgua":
                        alert("valor $19859")
                        break
                    case "Marron":
                        alert("valor $45000")
                        break
                    case "Violeta":
                        alert("valor $90000")
                        break
                }
            case "si":
                alert("Ya nos comunicaremos con vos. Muchas Gracias.")
        }
    } else {
        alert("Puedes seguir navegando la web")

    }
} else if (saludo == "si") {
    alert("gracias por elegirnos!")
} else {
    alert("Debes responder si o no")
}




let saberPrecios = prompt("queres conocer el precio?")
if (saberPrecios == "si") {
    alert(" podes elegir 2 pares y combinarlas")
    let zapatilla1 = parseInt(prompt("coloca el precio de la zapatilla que te guste. roja $33000, azul $30000, amarilla $16000, verde $30897"));
    let zapatilla2 = parseInt(prompt(" coloca el precio de la otra zapatilla, azulMarino $30897, VerdeAgua $19859, Marron $45000, Violeta $90000"));


    function calcularPrecios(x, y) {
        alert("Esa zapatilla cuesta " + "$" + (x + y) / 2)
        alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")
    }
    calcularPrecios(zapatilla1, zapatilla2)

} else { }



 */



calcularPrecios
mostrarModelos
mostrarPreciosRojas
mostrarPreciosAzules
mostrarPreciosVerdes
buscarDiseño


class zapatilla {
    constructor(id, nombre, precioRojas, precioAzules, precioVerdes) {
        this.id = id;
        this.nombre = nombre;
        this.precioRojas = precioRojas;
        this.precioAzules = precioAzules;
        this.precioVerdes = precioVerdes
    }
}

const roja1 = new zapatilla(1, "roja1", 950, 1100, 1800);
const roja2 = new zapatilla(2, "roja2", 1100, 1200, 2100);
const roja3 = new zapatilla(3, "roja3", 1100, 1200, 2100);
const azul1 = new zapatilla(4, "azul1", 1200, 1200, 2100);
const azul2 = new zapatilla(5, "morrón", 1200, 1400, 2200);
const verde1 = new zapatilla(6, "verde1", 1850, 2000, 3300);
const verde2 = new zapatilla(7, "verde2", 1500, 1600, 2600);
const verde3 = new zapatilla(8, "verde3", 1300, 1400, 2400);


const menu = [roja1, roja2, roja3, azul1, azul2, verde1, verde2];

menu.push(verde3)
console.log(menu)

//funcion para mostrar el menú
function mostrarModelos(array) {
    for (let zapatilla of array) {
        console.log(zapatilla.id, zapatilla.nombre, zapatilla.precioRojas, zapatilla.precioAzules, zapatilla.precioVerdes)

    }
}

function mostrarPreciosRojas(array) {
    for (let zapatillaRoja of array) {
        console.log(zapatillaRoja.id, zapatillaRoja.nombre, "$", zapatillaRoja.precioRojas)
    }
}



function mostrarPreciosAzules(array) {
    for (let zapatillaAzul of array) {
        console.log(zapatillaAzul.id, zapatillaAzul.nombre, "$", zapatillaAzul.precioAzules)
    }
}



function mostrarPreciosVerdes(array) {
    for (let zapatillaVerde of array) {
        console.log(zapatillaVerde.id, zapatillaVerde.nombre, "$", zapatillaVerde.precioVerdes)
    }
}

function buscarDiseño(array) {

    let pedirVariedad = prompt(`elige una variedad para conocer el precio:
    roja1
    roja3
    roja2
    verde1
    verde2
    verde3`)
    let variedad = array.find((variedad) => variedad.nombre.toLowerCase() == pedirVariedad.toLowerCase())
    alert(`"los precios de" ${variedad.nombre} son:
        $${variedad.precioRojas} la zapatilla chica,
        $${variedad.precioAzules} la media zapatilla
        $${variedad.precioVerdes} la zapatilla gigante`)

}

let respuestas = true
do {
    let saludo = prompt(`te gustaría conocer nuestros productos?
(responde con "si" o con "no" o escribí "salir" para acceder a la página)`)

    if (saludo == "no") {
        let preguntar = prompt("te gustaría conocer sobre nuestras zapatillas?")
        if (preguntar == "si") {
            switch (preguntar) {
                case "si":
                    alert("nuestras zapatillas son excelentes, podes elegír colores diferentes")
                case "si":
                    buscarDiseño(menu)
                case "si":
                    let respuesta3 = true
                    do {
                        let pregunta2 = prompt(`te gustaría conocer otro precio?`)
                        if (pregunta2.toLowerCase() == "si") {
                            buscarDiseño(menu)
                        } else if (pregunta2.toLowerCase() == "no") {
                            respuesta3 = false
                        } else {
                            alert(`debes responder "si" o "no"`)
                        }
                    } while (respuesta3)


                case "si":
                    alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")
                    respuestas = false
            }
        } else if (preguntar == "no") {
            alert("Puedes seguir conociendo nuestra página. Gracias.")
            respuestas = false
        } else {
            alert("Debes responder si o no")
        }
    } else if (saludo == "si") {
        alert("gracias por elegirnos nuevamente!!")
        respuestas = false
    } else if (saludo == "salir") {
        respuestas = false
    } else {
        alert("Debes responder si o no")

    }


} while (respuestas)
let respuestas2 = true
do {
    let saberPrecios = prompt(`te gustaría conocer el precio de las zapatillas de diferentes colores?
    responde "si" o "no" escribe "salir" para acceder a la página, `)
    if (saberPrecios == "si") {
        alert(" puedes elegir hasta 2 colores, coloca a continuacion el valor de los colores que te gusten")
        let zapatilla1 = parseInt(prompt(`coloca el precio de la primer zapatilla que te guste. 
    roja1 $700, 
    verde1 $1000, 
    Azul1 $800, 
    Azul2 $800`));
        let zapatilla2 = parseInt(prompt(` coloca el precio de la otra zapatilla, 
    roja1 $700, 
    verde1 $1000, 
    roja2 $800, 
    Verde2 $800`));

        function calcularPrecios(x, y) {
            alert("Esa zapatilla cuesta " + "$" + (x + y) / 2)
            alert("escribinos al whatsapp para finalizar tu compra. Muchas Gracias.")
            respuestas2 = false
        }
        calcularPrecios(zapatilla1, zapatilla2)

    } else if (saberPrecios == "no") {
        alert("Puedes seguir conociendo nuestra página. Gracias.")
        respuestas2 = false
    } else if (saberPrecios == "salir") {
        respuestas2 = false
    } else {
        alert("Debes responder si o no")
    }

} while (respuestas2)   