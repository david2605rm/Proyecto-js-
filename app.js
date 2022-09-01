
let listaComponentes = prompt(`Que desea?:
1.componentes
2.computador`); 

switch (listaComponentes) {
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
        alert("no has seleccionado una opcion valida")
        break;
}

