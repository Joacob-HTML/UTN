function salirDeCasa() {
    if (llueve === false && ropalimpia ===true) {
        console.log("No voy a salir de Casa")
    } else {
        console.log("Voy a salir de Casa")
    }
}


let llueve = false;
let ropalimpia = true;

salirDeCasa();