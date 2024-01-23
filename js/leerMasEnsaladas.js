const botonLeerMasColeslaw = document.getElementById("botonLeerMasColeslaw");
const botonLeerMasEnsaladaCapresseConPasta = document.getElementById("botonLeerMasEnsaladaCapresseConPasta");
const botonLeerMasEnsaladaCesar = document.getElementById("botonLeerMasEnsaladaCesar");
const botonLeerMasEnsaladaDtox = document.getElementById("botonLeerMasEnsaladaDtox");
const botonLeerMasEnsaladaPanzanella = document.getElementById("botonLeerMasEnsaladaPanzanella");
const botonLeerMasEnsaladaTabule = document.getElementById("botonLeerMasEnsaladaTabule");
const botonLeerMasMelanzana = document.getElementById("botonLeerMasMelanzana");

const descripcionColeslaw =document.getElementById("descripcionColeslaw");
const descripcionEnsaladaCapresseConPasta =document.getElementById("descripcionEnsaladaCapresseConPasta");
const descripcionEnsaladaCesar =document.getElementById("descripcionEnsaladaCesar");
const descripcionEnsaladaDtox =document.getElementById("descripcionEnsaladaDtox");
const descripcionEnsaladaPanzanella =document.getElementById("descripcionEnsaladaPanzanella");
const descripcionEnsaladaTabule =document.getElementById("descripcionEnsaladaTabule");
const descripcionMelanzana =document.getElementById("descripcionMelanzana");

botonLeerMasColeslaw.addEventListener("click", toggleTextColeslaw);
botonLeerMasEnsaladaCapresseConPasta.addEventListener("click", toggleTextEnsaladaCapresseConPasta);
botonLeerMasEnsaladaCesar.addEventListener("click", toggleTextEnsaladaCesar);
botonLeerMasEnsaladaDtox.addEventListener("click", toggleTextEnsaladaDtox);
botonLeerMasEnsaladaPanzanella.addEventListener("click", toggleTextEnsaladaPanzanella);
botonLeerMasEnsaladaTabule.addEventListener("click", toggleTextEnsaladaTabule);
botonLeerMasMelanzana.addEventListener("click", toggleTextEnsaladaMelazana);

function toggleTextColeslaw() {
    descripcionColeslaw.classList.toggle("showDescripcionPlatoColeslaw")

    if(descripcionColeslaw.classList.contains("showDescripcionPlatoColeslaw")) {
        botonLeerMasColeslaw.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasColeslaw.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaCapresseConPasta() {
    descripcionEnsaladaCapresseConPasta.classList.toggle("showDescripcionEnsaladaCapresseConPasta")

    if(descripcionEnsaladaCapresseConPasta.classList.contains("showDescripcionEnsaladaCapresseConPasta")) {
        botonLeerMasEnsaladaCapresseConPasta.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasEnsaladaCapresseConPasta.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaCesar() {
    descripcionEnsaladaCesar.classList.toggle("showDescripcionEnsaladaCesar")

    if(descripcionEnsaladaCesar.classList.contains("showDescripcionEnsaladaCesar")) {
        botonLeerMasEnsaladaCesar.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasEnsaladaCesar.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaDtox() {
    descripcionEnsaladaDtox.classList.toggle("showDescripcionEnsaladaDtox")

    if(descripcionEnsaladaDtox.classList.contains("showDescripcionEnsaladaDtox")) {
        botonLeerMasEnsaladaDtox.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasEnsaladaDtox.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaPanzanella() {
    descripcionEnsaladaPanzanella.classList.toggle("showDescripcionEnsaladaPanzanella")

    if(descripcionEnsaladaPanzanella.classList.contains("showDescripcionEnsaladaPanzanella")) {
        botonLeerMasEnsaladaPanzanella.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasEnsaladaPanzanella.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaTabule() {
    descripcionEnsaladaTabule.classList.toggle("showDescripcionEnsaladaTabule")

    if(descripcionEnsaladaTabule.classList.contains("showDescripcionEnsaladaTabule")) {
        botonLeerMasEnsaladaTabule.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasEnsaladaTabule.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaMelazana() {
    descripcionMelanzana.classList.toggle("showDescripcionMelanzana")

    if(descripcionMelanzana.classList.contains("showDescripcionMelanzana")) {
        botonLeerMasMelanzana.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasMelanzana.innerHTML = "Leer mas";
    }
}