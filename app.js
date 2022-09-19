/*
//DEclaracion de funciones
function opcionValida(inputOpciones) {
    if (inputOpciones == 1 || inputOpciones == 2) {
        return true
    } else if (inputOpciones === null || inputOpciones === "" || inputOpciones === isNaN);{
        return false
    }
};  

function despedida() {
    alert(
        `Gracias por visitarnos y/o comprar con nosotros "  ${nombre}  " , Vuelva pronto`
    )
};


const productos = [
    {id: 1, nombre: "Tarjeta Madre", precio: 950000, stock:20},
    {id: 2, nombre: "Tarjeta Grafica", precio: 1350000, stock:50},
    {id: 3, nombre: "Refrigeracion liquida", precio: 700000, stock:15},
]

let nombre = prompt("Bienvenidos a Dragon Azul, Quien nos visita?");

alert (`Hola, ${nombre.toUpperCase()}. Adelante, explora todas nuestras opciones`)

let inputOpciones = prompt(`Que desea?: 
    1.componentes 
    2.computador`);

opcionValida(inputOpciones)

while (!opcionValida(inputOpciones)) {
    alert(`${nombre} has ingresado una opcion incorrecta`)
        inputOpciones = prompt(`Entre una opcion valida :
            1.componentes
            2.computador` );   
    };              
            
switch (inputOpciones) {
    case "1":
        alert("has seleccionado componentes")
            let componenetesDisp = prompt(`Los componentes disponibles son:
                ${productos.map(producto => {
                    return `n°${producto.id} : ${producto.nombre} \n`
                })}
            `);
                switch (componenetesDisp) {
                    case (productos.id === 1):
                        console.log(productos.precio, productos.nombre) 
                    break;
                    case (productos.id === 2):
                        console.log(productos.precio, productos.nombre)
                    break;
                    case (productos.id === 3):
                        console.log(productos.precio, productos.nombre)
                    break;
                }
        break;
    case "2":
        alert("has seleccionado computador")
            let computador = prompt(`Que quieres hacer:
            A.Cotizar computador
            B.Realizar una consulta`);
                if (computador === "a", "A") {
                    alert(`Pronto nos comunicaremos contigo ${nombre}`)
                    break;
                } else{
                    alert("procesaremos tu solicitud")
                    break;
                };
    default:
        
        };     

despedida();
*/

const productos = [
    {id: 1, nombre: "Tarjeta Madre Asus", precio: 950000, stock:20},
    {id: 2, nombre: "Tarjeta Madre Msi", precio: 1250000, stock:10},
    {id: 3, nombre: "Tarjeta Grafica 3080", precio: 3250000, stock:4},
    {id: 4, nombre: "Tarjeta Grafica 2060", precio: 1400000, stock:16},
    {id: 5, nombre: "Refrigeracion liquida corsair", precio: 600000, stock:15},
    {id: 6, nombre: "Refrigeracion liquida nzxt", precio: 1000000, stock:5},
]


