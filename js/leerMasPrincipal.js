const botonLeerMasBifeDeChorizo = document.getElementById("botonLeerMasBifeDeChorizo");
const botonLeerMasBondiola = document.getElementById("botonLeerMasBondiola");
const botonLeerMasPastaRellenaSorrentinos = document.getElementById("botonLeerMasPastaRellenaSorrentinos");
const botonLeerMasPolloAlCurry = document.getElementById("botonLeerMasPolloAlCurry");
const botonLeerMasRisottoCalabaza = document.getElementById("botonLeerMasRisottoCalabaza");
const botonLeerMasRisottoFunghi = document.getElementById("botonLeerMasRisottoFunghi");
const botonLeerMasVacioSouzVide = document.getElementById("botonLeerMasVacioSouzVide");
const botonLeerMasWokDePollo = document.getElementById("botonLeerMasWokDePollo");
const botonLeerMasWrapDeCarne = document.getElementById("botonLeerMasWrapDeCarne");
const botonLeerMasWrapDePolloYVegetales = document.getElementById("botonLeerMasWrapDePolloYVegetales");
const botonLeerMasÑoquisALaRomana = document.getElementById("botonLeerMasÑoquisALaRomana");

const descripcionBifeDeChorizo =document.getElementById("descripcionBifeDeChorizo");
const descripcionBondiola =document.getElementById("descripcionBondiola");
const descripcionPastaRellenaSorrentinos =document.getElementById("descripcionPastaRellenaSorrentinos");
const descripcionPolloAlCurry =document.getElementById("descripcionPolloAlCurry");
const descripcionRisottoCalabaza =document.getElementById("descripcionRisottoCalabaza");
const descripcionRisottoFunghi =document.getElementById("descripcionRisottoFunghi");
const descripcionVacioSouzVide =document.getElementById("descripcionVacioSouzVide");
const descripcionWokDePollo =document.getElementById("descripcionWokDePollo");
const descripcionWrapDeCarne =document.getElementById("descripcionWrapDeCarne");
const descripcionWrapDePolloYVegetales =document.getElementById("descripcionWrapDePolloYVegetales");
const descripcionÑoquisALaRomana =document.getElementById("descripcionÑoquisALaRomana");

botonLeerMasBifeDeChorizo.addEventListener("click", toggleTextBifeDeChorizo);
botonLeerMasBondiola.addEventListener("click", toggleTextBondiola);
botonLeerMasPastaRellenaSorrentinos.addEventListener("click", toggleTextEnsaladaPastaRellenaSorrentinos);
botonLeerMasPolloAlCurry.addEventListener("click", toggleTextPolloAlCurry);
botonLeerMasRisottoCalabaza.addEventListener("click", toggleTextRisottoCalabaza);
botonLeerMasRisottoFunghi.addEventListener("click", toggleTextRisottoFunghi);
botonLeerMasVacioSouzVide.addEventListener("click", toggleTextVacioSouzVide);
botonLeerMasWokDePollo.addEventListener("click", toggleWokDePollo);
botonLeerMasWrapDeCarne.addEventListener("click", toggleTextWrapDeCarne);
botonLeerMasWrapDePolloYVegetales.addEventListener("click", toggleTextWrapDePolloYVegetales);
botonLeerMasÑoquisALaRomana.addEventListener("click", toggleTextÑoquisALaRomana);

function toggleTextBifeDeChorizo() {
    descripcionBifeDeChorizo.classList.toggle("showDescripcionBifeDeChorizo")

    if(descripcionBifeDeChorizo.classList.contains("showDescripcionBifeDeChorizo")) {
        botonLeerMasBifeDeChorizo.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasBifeDeChorizo.innerHTML = "Leer mas";
    }
}

function toggleTextBondiola() {
    descripcionBondiola.classList.toggle("showDescripcionBondiola")

    if(descripcionBondiola.classList.contains("showDescripcionBondiola")) {
        botonLeerMasBondiola.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasBondiola.innerHTML = "Leer mas";
    }
}

function toggleTextEnsaladaPastaRellenaSorrentinos() {
    descripcionPastaRellenaSorrentinos.classList.toggle("showDescripcionPastaRellenaSorrentinos")

    if(descripcionPastaRellenaSorrentinos.classList.contains("showDescripcionPastaRellenaSorrentinos")) {
        botonLeerMasPastaRellenaSorrentinos.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasPastaRellenaSorrentinos.innerHTML = "Leer mas";
    }
}

function toggleTextPolloAlCurry() {
    descripcionPolloAlCurry.classList.toggle("showDescripcionPolloAlCurry")

    if(descripcionPolloAlCurry.classList.contains("showDescripcionPolloAlCurry")) {
        botonLeerMasPolloAlCurry.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasPolloAlCurry.innerHTML = "Leer mas";
    }
}

function toggleTextRisottoCalabaza() {
    descripcionRisottoCalabaza.classList.toggle("showDescripcionRisottoCalabaza")

    if(descripcionRisottoCalabaza.classList.contains("showDescripcionRisottoCalabaza")) {
        botonLeerMasRisottoCalabaza.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasRisottoCalabaza.innerHTML = "Leer mas";
    }
}

function toggleTextRisottoFunghi() {
    descripcionRisottoFunghi.classList.toggle("showDescripcionRisottoFunghi")

    if(descripcionRisottoFunghi.classList.contains("showDescripcionRisottoFunghi")) {
        botonLeerMasRisottoFunghi.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasRisottoFunghi.innerHTML = "Leer mas";
    }
}

function toggleTextVacioSouzVide() {
    descripcionVacioSouzVide.classList.toggle("showDescripcionVacioSouzVide")

    if(descripcionVacioSouzVide.classList.contains("showDescripcionVacioSouzVide")) {
        botonLeerMasVacioSouzVide.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasVacioSouzVide.innerHTML = "Leer mas";
    }
}

function toggleWokDePollo() {
    descripcionWokDePollo.classList.toggle("showDescripcionWokDePollo")

    if(descripcionWokDePollo.classList.contains("showDescripcionWokDePollo")) {
        botonLeerMasWokDePollo.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasWokDePollo.innerHTML = "Leer mas";
    }
}

function toggleTextWrapDeCarne() {
    descripcionWrapDeCarne.classList.toggle("showDescripcionWrapDeCarne")

    if(descripcionWrapDeCarne.classList.contains("showDescripcionWrapDeCarne")) {
        botonLeerMasWrapDeCarne.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasWrapDeCarne.innerHTML = "Leer mas";
    }
}

function toggleTextWrapDePolloYVegetales() {
    descripcionWrapDePolloYVegetales.classList.toggle("showDescripcionWrapDePolloYVegetales")

    if(descripcionWrapDePolloYVegetales.classList.contains("showDescripcionWrapDePolloYVegetales")) {
        botonLeerMasWrapDePolloYVegetales.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasWrapDePolloYVegetales.innerHTML = "Leer mas";
    }
}

function toggleTextÑoquisALaRomana() {
    descripcionÑoquisALaRomana.classList.toggle("showDescripcionÑoquisALaRomana")

    if(descripcionÑoquisALaRomana.classList.contains("showDescripcionÑoquisALaRomana")) {
        botonLeerMasÑoquisALaRomana.innerHTML = "Leer menos";
    }
    else{
        botonLeerMasÑoquisALaRomana.innerHTML = "Leer mas";
    }
}