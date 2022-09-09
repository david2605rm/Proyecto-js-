
//DEclaracion de funciones
function pedirNombre(){
    let nombre = prompt("Bienvenidos a Dragon Azul, Quien nos visita?");
    console.log(nombre)
    alert(`Hola, ${nombre.toUpperCase()}. Adelante, explora todas nuestras opciones`)
};

function agregaComponentes (nombre,precio){
    this.nombre = nombre
    this.precio = precio
    this.disponibilidad = true
};

const motherboard = new agregaComponentes ("Tarjeta madre", 950000)
const grafics = new agregaComponentes ("Tarjeta grafica", 1350000)
const refrigliquid = new agregaComponentes ("Refrigeracion liquida", 700000)

function opcionValida(inputOpciones) {
    if (inputOpciones == 1 || inputOpciones == 2) {
        return true
    } else if (inputOpciones === null || inputOpciones === "" || inputOpciones === isNaN);{
        return false
    }
};  

function despedida() {
    alert(
        "Gracias por visitarnos y/o comprar con nosotros " + nombre.toUpperCase() + " , Vuelva pronto"
    )
};

pedirNombre();

let inputOpciones = prompt(`Que desea?: \n 1.componentes \n 2.computador`);

opcionValida(inputOpciones)

while (!opcionValida(inputOpciones)) {
        inputOpciones = prompt(`Entre una opcion valida :
            1.componentes
            2.computador` );   
            
            
switch (inputOpciones) {
    case "1":
        alert("has seleccionado componentes")
            let componenetesDisp = prompt(`Los componentes disponibles son:
            1.tarjeta madre
            2.tarjeta de video
            3.refrigeracion liquida`);
                switch (componenetesDisp) {
                    case "1":
                        console.log(motherboard)
                    break;
                    case "2":
                        console.log(grafics)
                    break;
                    case "2":
                        console.log(refrigliquid)
                    break;
                }
        break;
    case "2":
        alert("has seleccionado computador")
            let computador = prompt(`Que quieres hacer:
            A.Cotizar computador
            B.Realizar una consulta`);
                if (computador === "a") {
                    alert("Pronto nos comunicaremos contigo")
                    break;
                } else{
                    alert("procesaremos tu solicitud")
                    break;
                };
    default:
        
        };
    };        

despedida();