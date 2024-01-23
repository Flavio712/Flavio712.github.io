const botonLeerMasVeganWok = document.getElementById("botonLeerMasVeganWok");

const descripcionVeganWok =document.getElementById("descripcionVeganWok");

botonLeerMasVeganWok.addEventListener("click", toggleTextVeganWok);

function toggleTextVeganWok() {
    descripcionVeganWok.classList.toggle("showDescripcionVeganWok")

    if(descripcionVeganWok.classList.contains("showDescripcionVeganWok")) {
        botonLeerMasVeganWok.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasVeganWok.innerHTML = "Leer mas";
    }
}