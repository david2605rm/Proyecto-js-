
let inputOpciones = prompt(`Que desea?:
    1.componentes
    2.computador`); 


function opcionValida(inputOpciones) {
    if (inputOpciones == 1 || inputOpciones == 2) {
        return true
    } else if (inputOpciones === null || inputOpciones === "" || inputOpciones === isNaN);{
        return false
    }
}   

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
                        alert("su valor es 950.000 cop");
                    break;
                    case "2":
                        alert("su valor es 1.350.000 cop");
                    break;
                    case "2":
                        alert("su valor es 700.000 cop");
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
                }
    default:
        
        }
    }        

