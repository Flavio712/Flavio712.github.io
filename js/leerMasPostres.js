const botonLeerMasCheesecakeFrutosRojos = document.getElementById("botonLeerMasCheesecakeFrutosRojos");
const botonLeerMasMousseDeChocolate = document.getElementById("botonLeerMasMousseDeChocolate");
const botonLeerMasBalcarce = document.getElementById("botonLeerMasBalcarce");
const botonLeerMasCheesecakeMaracuya = document.getElementById("botonLeerMasCheesecakeMaracuya");
const botonLeerMasCheesecakeOreo = document.getElementById("botonLeerMasCheesecakeOreo");
const botonLeerMasBrownie = document.getElementById("botonLeerMasBrownie");
const botonLeerMasCarrotCake = document.getElementById("botonLeerMasCarrotCake");
const botonLeerMasChocotorta = document.getElementById("botonLeerMasChocotorta");
const botonLeerMasCrumbleDeManzana = document.getElementById("botonLeerMasCrumbleDeManzana");
const botonLeerMasLemonPie = document.getElementById("botonLeerMasLemonPie");
const botonLeerMasTiramisu = document.getElementById("botonLeerMasTiramisu");

const descripcionCheesecakeFrutosRojos =document.getElementById("descripcionCheesecakeFrutosRojos");
const descripcionMousseDeChocolate =document.getElementById("descripcionMousseDeChocolate");
const descripcionBalcarce =document.getElementById("descripcionBalcarce");
const descripcionCheesecakeMaracuya =document.getElementById("descripcionCheesecakeMaracuya");
const descripcionCheesecakeOreo =document.getElementById("descripcionCheesecakeOreo");
const descripcionBrownie =document.getElementById("descripcionBrownie");
const descripcionCarrotCake =document.getElementById("descripcionCarrotCake");
const descripcionChocotorta =document.getElementById("descripcionChocotorta");
const descripcionCrumbleDeManzana =document.getElementById("descripcionCrumbleDeManzana");
const descripcionLemonPie =document.getElementById("descripcionLemonPie");
const descripcionTiramisu =document.getElementById("descripcionTiramisu");

botonLeerMasCheesecakeFrutosRojos.addEventListener("click", toggleTextCheesecakeFrutosRojos);
botonLeerMasMousseDeChocolate.addEventListener("click", toggleTextMousseDeChocolate);
botonLeerMasBalcarce.addEventListener("click", toggleTextBalcarce);
botonLeerMasCheesecakeMaracuya.addEventListener("click", toggleTextCheesecakeMaracuya);
botonLeerMasCheesecakeOreo.addEventListener("click", toggleTextCheesecakeOreo);
botonLeerMasBrownie.addEventListener("click", toggleTextBrownie);
botonLeerMasCarrotCake.addEventListener("click", toggleTextCarrotCake);
botonLeerMasChocotorta.addEventListener("click", toggleTextChocotorta);
botonLeerMasCrumbleDeManzana.addEventListener("click", toggleTextCrumbleDeManzana);
botonLeerMasLemonPie.addEventListener("click", toggleTextLemonPie);
botonLeerMasTiramisu.addEventListener("click", toggleTextTiramisu);


function toggleTextCheesecakeFrutosRojos() {
    descripcionCheesecakeFrutosRojos.classList.toggle("showDescripcionCheesecakeFrutosRojos")

    if(descripcionCheesecakeFrutosRojos.classList.contains("showDescripcionCheesecakeFrutosRojos")) {
        botonLeerMasCheesecakeFrutosRojos.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasCheesecakeFrutosRojos.innerHTML = "Leer mas";
    }
}

function toggleTextMousseDeChocolate() {
    descripcionMousseDeChocolate.classList.toggle("showDescripcionMousseDeChocolate")

    if(descripcionMousseDeChocolate.classList.contains("showDescripcionMousseDeChocolate")) {
        botonLeerMasMousseDeChocolate.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasMousseDeChocolate.innerHTML = "Leer mas";
    }
}

function toggleTextBalcarce() {
    descripcionBalcarce.classList.toggle("showDescripcionBalcarce")

    if(descripcionBalcarce.classList.contains("showDescripcionBalcarce")) {
        botonLeerMasBalcarce.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasBalcarce.innerHTML = "Leer mas";
    }
}

function toggleTextCheesecakeMaracuya() {
    descripcionCheesecakeMaracuya.classList.toggle("showDescripcionCheesecakeMaracuya")

    if(descripcionCheesecakeMaracuya.classList.contains("showDescripcionCheesecakeMaracuya")) {
        botonLeerMasCheesecakeMaracuya.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasCheesecakeMaracuya.innerHTML = "Leer mas";
    }
}

function toggleTextCheesecakeOreo() {
    descripcionCheesecakeOreo.classList.toggle("showDescripcionCheesecakeOreo")

    if(descripcionCheesecakeOreo.classList.contains("showDescripcionCheesecakeOreo")) {
        botonLeerMasCheesecakeOreo.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasCheesecakeOreo.innerHTML = "Leer mas";
    }
}

function toggleTextBrownie() {
    descripcionBrownie.classList.toggle("showDescripcionBrownie")

    if(descripcionBrownie.classList.contains("showDescripcionBrownie")) {
        botonLeerMasBrownie.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasBrownie.innerHTML = "Leer mas";
    }
}

function toggleTextCarrotCake() {
    descripcionCarrotCake.classList.toggle("showDescripcionCarrotCake")

    if(descripcionCarrotCake.classList.contains("showDescripcionCarrotCake")) {
        botonLeerMasCarrotCake.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasCarrotCake.innerHTML = "Leer mas";
    }
}

function toggleTextChocotorta() {
    descripcionChocotorta.classList.toggle("showDescripcionChocotorta")

    if(descripcionChocotorta.classList.contains("showDescripcionChocotorta")) {
        botonLeerMasChocotorta.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasChocotorta.innerHTML = "Leer mas";
    }
}

function toggleTextCrumbleDeManzana() {
    descripcionCrumbleDeManzana.classList.toggle("showDescripcionCrumbleDeManzana")

    if(descripcionCrumbleDeManzana.classList.contains("showDescripcionCrumbleDeManzana")) {
        botonLeerMasCrumbleDeManzana.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasCrumbleDeManzana.innerHTML = "Leer mas";
    }
}

function toggleTextLemonPie() {
    descripcionLemonPie.classList.toggle("showDescripcionLemonPie")

    if(descripcionLemonPie.classList.contains("showDescripcionLemonPie")) {
        botonLeerMasLemonPie.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasLemonPie.innerHTML = "Leer mas";
    }
}

function toggleTextTiramisu() {
    descripcionTiramisu.classList.toggle("showDescripcionTiramisu")

    if(descripcionTiramisu.classList.contains("showDescripcionTiramisu")) {
        botonLeerMasTiramisu.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasTiramisu.innerHTML = "Leer mas";
    }
}