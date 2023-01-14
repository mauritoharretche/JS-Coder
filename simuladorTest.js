let inputUser = prompt("¿Será Piedra, Papel o Tijera?");
let inputIa = Math.ceil(Math.random() * 3) - 1

// 0 = Papel  || 1 = Piedra || 2 = Tijera

//// Papel
while (inputUser.toLowerCase() == "papel") {
    inputIa = Math.ceil(Math.random() * 3) - 1 // ceil devuelve el entero mayor o igual más próximo a un número dado.
    if (inputIa == 0) {
        alert("EMPATE")
        inputUser = ""
    } else if (inputIa == 1) {
        alert("GANASTE")
        inputUser = ""
    } else if (inputIa == 2) {
        alert("PERDISTE")
        inputUser = ""
    }
    let repetir = prompt("¿Quieres jugar de nuevo?")
    if (repetir.toLowerCase() == "si") {
        inputUser = prompt("¿Será Piedra, Papel o Tijera?");
    }
}
// 0 = Papel  || 1 = Piedra || 2 = Tijera
//// Piedra
while (inputUser.toLowerCase() == "piedra") {
    inputIa = Math.ceil(Math.random() * 3) - 1
    if (inputIa == 0) {
        alert("PERDISTE")
        inputUser = ""
    } else if (inputIa == 1) {
        alert("EMPATE")
        inputUser = ""
    } else if (inputIa == 2) {
        alert("GANASTE")
        inputUser = ""
    }
    let repetir = prompt("¿Quieres jugar de nuevo?")
    if (repetir.toLowerCase() == "si") {
        inputUser = prompt("¿Será Piedra, Papel o Tijera?");
    }
}
// 0 = Papel  || 1 = Piedra || 2 = Tijera
//// Tijera
while (inputUser.toLowerCase() == "tijera") {
    inputIa = Math.ceil(Math.random() * 3) - 1
    if (inputIa == 0) {
        alert("GANASTE")
        inputUser = ""
    } else if (inputIa == 1) {
        alert("PERDISTE")
        inputUser = ""
    } else if (inputIa == 2) {
        alert("EMPATE")
        inputUser = ""
    }
    let repetir = prompt("¿Quieres jugar de nuevo?")
    if (repetir.toLowerCase() == "si") {
        inputUser = prompt("¿Será Piedra, Papel o Tijera?");
    }
}

