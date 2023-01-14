let saludo = prompt("Buenas! Queres entrar?")

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