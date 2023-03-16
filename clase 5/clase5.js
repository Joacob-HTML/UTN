const ejercicio1a = () => {
    let colorNuevo = "#ff0000"
    let div = document.getElementById("contenedor")
    div.style.backgroundColor = colorNuevo;
}

const ejercicio1b = () => {
    let colorNuevo = document.getElementById("colorIngresado")
    let div = document.getElementById("contenedor2")
    div.style.backgroundColor = colorNuevo;
}

const ejercicio1c = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    alert("Hola" + nombre + " " + apellido)
}

const ejercicio2 = () =>{
    let nombre = document.getElementById("nombre2").value;
    let apellido = document.getElementById("apellido2").value;
    let telefono = document.getElementById("telefono").value;
    let dni = document.getElementById("dni").value;
    let sexo = document.getElementById("sexo").value;
    document.getElementById("demo").innerHTML = 
    "Sus datos son" + nombre +
    " " + apellido + 
    " " + telefono + 
    " " + dni + 
    " " + sexo;
}

const personalizar = (option) => {
    let personalizado = document.getElementById("sexoPersonalizado")
    if(option.value == "Personalizado") {   
    personalizado.style.display="block";
} else {
    personalizado.style.display = "none";
}
}