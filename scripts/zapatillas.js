mostrarModelos;
agregarVariedad;
borrarVariedad;

let catalogoMenu = document.getElementById("catalogo");
let administrador = document.getElementById("formContainer");

class zapatilla {
  constructor(id, nombre, precioRojas, precioAzules, precioVerdes, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precioRojas = precioRojas;
    this.precioAzules = precioAzules;
    this.precioVerdes = precioVerdes;
    this.imagen = imagen;
  }
}

const roja1 = new zapatilla(1, "roja1", 950, 1100, 1800, "flyknit.webp");
const roja2 = new zapatilla(2, "roja2", 1100, 1200, 2100, "flyknit.webp");
const roja3 = new zapatilla(3, "roja3", 1100, 1200, 2100, "flyknit.webp");
const azul1 = new zapatilla(4, "azul1", 1200, 1200, 2100, "flyknit.webp");
const azul2 = new zapatilla(5, "morrón", 1200, 1400, 2200, "flyknit.webp");
const verde1 = new zapatilla(6, "verde1", 1850, 2000, 3300, "flyknit.webp");
const verde2 = new zapatilla(7, "verde2", 1500, 1600, 2600, "flyknit.webp");
const verde3 = new zapatilla(8, "verde3", 1300, 1400, 2400, "flyknit.webp");

const menu = [roja1, roja2, roja3, azul1, azul2, verde1, verde2];

menu.push(verde3);

console.log(menu);

//funcion para mostrar el menú
function mostrarModelos(array) {
  for (let zapatilla of array) {
    console.log(
      zapatilla.id,
      zapatilla.nombre,
      zapatilla.precioRojas,
      zapatilla.precioAzules,
      zapatilla.precioVerdes
    );
  }
}

function mostrarPreciosRojas(array) {
  for (let zapatillaRoja of array) {
    console.log(
      zapatillaRoja.id,
      zapatillaRoja.nombre,
      "$",
      zapatillaRoja.precioRojas
    );
  }
}

function mostrarPreciosAzules(array) {
  for (let zapatillaAzul of array) {
    console.log(
      zapatillaAzul.id,
      zapatillaAzul.nombre,
      "$",
      zapatillaAzul.precioAzules
    );
  }
}

function mostrarPreciosVerdes(array) {
  for (let zapatillaVerde of array) {
    console.log(
      zapatillaVerde.id,
      zapatillaVerde.nombre,
      "$",
      zapatillaVerde.precioVerdes
    );
  }
}
mostrarPreciosVerdes(menu);

let modelosZapas = menu.map((e) => e.nombre);
console.log(modelosZapas);

menu.forEach((e) => {
  console.log(`${e.nombre} $ ${e.precioRojas}`);
});

const menu2 = [];
const nuevoMenu = menu2.concat(menu);

console.log(nuevoMenu);
nuevoMenu.sort((a, b) => a.precioRojas - b.precioRojas);

function agregarVariedad(array) {
  let nuevoCodigo = document.getElementById("inputCod");
  let nuevoDiseño = document.getElementById("inputNombre");
  let precioRoja = document.getElementById("inputPrecioRoja");
  let precioAzul = document.getElementById("inputPrecioAzul");
  let precioVerde = document.getElementById("inputPrecioVerde");

  const nuevaZapa = new zapa(
    nuevoCodigo.value,
    nuevoDiseño.value,
    precioRoja.value,
    precioAzul.value,
    precioVerde.value,
    "flyknit.webp"
  );

  array.push(nuevaZapa);
  verMenu(menu);
  console.log(nuevaZapa);

  localStorage.setItem("CatalogoZapas", menu);

  nuevoCodigo.value = "";
  nuevoDiseño.value = "";
  precioRoja.value = "";
  precioAzul.value = "";
  precioVerde.value = "";
  /* precioGig.value ="" */
}

function verMenu(array) {
  catalogoMenu.innerHTML = "";

  for (let zapatillas of array) {
    let divMenu = document.createElement("div");
    divMenu.className = "col-12 col-md-6 col-lg-4 my-3";
    divMenu.innerHTML = `
    <div class="catalogo">
            <img class="card-img-top img-fluid" style=" width: 180px;"  src="imagenes/${zapatillas.imagen}" alt="${zapatillas.nombre}">
            <h3 style=" font-size: 1.2rem;">${zapatillas.nombre}</h3>
            <h3 style=" font-size: 1.2rem;">Precio Zapatilla Roja: ${zapatillas.precioRoja} <input type="radio" name="zapatilla${zapatillas.nombre}" id="zapatillaComun" style=" width: 1rem;"></h3>
            <h3 style=" font-size: 1.2rem;">Precio Zapatilla Azul: ${zapatillas.precioAzul} <input type="radio" name="zapatilla${zapatillas.nombre}" id="zapatillaComun" style=" width: 1rem;"></h3>
            <h3 style=" font-size: 1.2rem;">Precio Zapatilla Verde: ${zapatillas.precioVerde} <input type="radio" name="zapatilla${zapatillas.nombre}" id="zapatillaComun" style=" width: 1rem;"></h3>
            
            <button id="botonComprar ${zapatillas.id}" class="btn btn-outline-danger" >Comprar</button>
        </div>
    `;
    catalogoMenu.appendChild(divMenu);
  }
}
verMenu(menu);

function borrarVariedad(array) {
  let nombreAEliminar = prompt(`ingrese el modelo a eliminar`);
  let arrayNombre = array.map((variedad) => variedad.nombre);
  let indice = arrayNombre.indexOf(nombreAEliminar);

  array.splice(indice, 1);
  alert(`eliminaste ${nombreAEliminar}`);
}

administrador.innerHTML = "";

function verAdministrador() {
  administrador.innerHTML = "";
  divForm = document.createElement("div");
  divForm.innerHTML = `
           
               <form  id="cargarZapas">
                   <h2>Modelos</h2>
                   <label class="Label" for="id">Ingrese ID</label>
                   <input type="number" name="id" id="inputCod">
                   <label class="Label" for="Nombre">Nombre</label>
                   <input type="text" name="Nombre" id="inputNombre">
                   <label class="Label" for="precioRoja">Precio de la Zapa Roja</label>
                   <input type="number" name="precioRoja" id="inputPrecioChica">
                   <label class="Label" for="precioAzul">Precio de la Zapa Azul</label>
                   <input type="number" name="precioAzul" id="inputPrecioMedia">
                   <label class="Label" for="precioVerde">Precio de la Zapa verde</label>
                   <input type="number" name="precioVerde" id="inputPrecioGigante">
                   <br>
                   <input type="button" class="btn-cargar" id="btnCargar" >
                   <br>
                   <br>
                   <button type="button" class="btn btn-danger" id="salirAdministrador">Salir</button>
               </form>
           
           `;

  administrador.appendChild(divForm);

  let btnCargar = document.getElementById("btnCargar");
  btnCargar.onclick = () => {
    agregarVariedad(menu);
  };
  let $salirAdministrador = document.getElementById("salirAdministrador");
  $salirAdministrador.onclick = () => {
    administrador.innerHTML = "";
  };
}

let $mostrarAdministrador = document.getElementById("mostrarAdministrador");
$mostrarAdministrador.onclick = () => {
  verAdministrador();
};
