function ucitajLinije() {
  const potez = document.getElementById("potez").value;
  const linijeSelect = document.getElementById("linije");
  const LinijePrikazDiv = document.getElementsByClassName("LinijaPrikaz")[0];

  linijeSelect.innerHTML =
    '<option value="defaultPotez">Izaberite liniju</option>';

  let linijeLista = [];

  if (potez === "potez100") {
    linijeLista = [
      "Linija 100",
      "Linija 101",
      "Linija 102",
      "Linija 103",
      "Linija 104",
    ];
  } else if (potez === "potez600") {
    linijeLista = ["Linija 600", "Linija 601", "Linija 602", "Linija 603"];
  } else if (potez === "potez700") {
    linijeLista = ["Linija 700", "Linija 701", "Linija 702"];
  } else if (potez === "potez800") {
    linijeLista = ["Linija 800", "Linija 801"];
  }

  linijeLista.forEach((linija) => {
    const option = document.createElement("option");
    option.value = linija;
    option.innerText = linija;
    linijeSelect.appendChild(option);
  });

  LinijePrikazDiv.classList.add("hidden");
}

// Event listener za promenu poteza
document.getElementById("potez").addEventListener("change", ucitajLinije);

const LinijePrikazDiv = document.getElementsByClassName("LinijaPrikaz")[0];
document.getElementById("linije").addEventListener("change", function () {
  const izabranaLinija = this.value;
  const potez = document.getElementById("potez").value;

  if (
    izabranaLinija === "defaultPotez" ||
    izabranaLinija === "" ||
    izabranaLinija === "Izaberite liniju" ||
    potez === "defaultPotez" ||
    potez === "" ||
    potez === "Izaberite potez"
  ) {
    LinijePrikazDiv.classList.add("hidden");
    return;
  }

  let naslov = "";
  let pravac1 = "";
  let pravac2 = "";

  if (izabranaLinija === "Linija 100") {
    naslov = "Linija 100, Batajnica - Ovca";
    pravac1 = "Batajnica";
    pravac2 = "Ovca";
  } else if (izabranaLinija === "Linija 101") {
    naslov = "Linija 101, Padinska skela - Omladinski stadion";
    pravac1 = "Padinska skela";
    pravac2 = "Omladinski stadion";
  } else if (izabranaLinija === "Linija 102") {
    naslov = "Linija 102, Zemun - Zvezdara";
    pravac1 = "Zemun";
    pravac2 = "Zvezdara";
  }

  if (naslov !== "") {
    document.getElementsByTagName("h1")[0].innerText = naslov;
    dugmePravac1.innerText = pravac1;
    dugmePravac2.innerText = pravac2;
    LinijePrikazDiv.classList.remove("hidden");
  } else {
    LinijePrikazDiv.classList.add("hidden");
  }
});

//RED VOZNJE

const sledeciDugme = document.getElementById("next");
const prethodniDugme = document.getElementById("prev");

sledeciDugme.addEventListener("click", function () {
  const skriveniRedovi = document.querySelectorAll("tr.hidden");
  const vidljiviRedovi = document.querySelectorAll("tr.visible");

  // Prikazi sve skrivene
  skriveniRedovi.forEach((red) => {
    red.classList.remove("hidden");
    red.classList.add("visible");
  });

  // Sakrij sve vidljive (pre nego što smo prikazali skrivene)
  vidljiviRedovi.forEach((red) => {
    red.classList.replace("visible", "hidden");
  });

  if (sledeciDugme.innerText === "Sledeca strana") {
    sledeciDugme.innerText = "Prethodna strana";
  } else {
    sledeciDugme.innerText = "Sledeca strana";
  }
});

let pravac1 = document.getElementsByClassName("tabelaRedVoznjePravac1")[0];
let pravac2 = document.getElementsByClassName("tabelaRedVoznjePravac2")[0];
const dugmePravac1 = document.getElementsByClassName(
  "dugmeRedVoznjePravac1"
)[0];
const dugmePravac2 = document.getElementsByClassName(
  "dugmeRedVoznjePravac2"
)[0];
function prikaziPravac1() {
  pravac1.classList.add("visible");
  pravac1.classList.remove("hidden");
  dugmePravac1.classList.add("kliknutoDugme");
  dugmePravac2.classList.remove("kliknutoDugme");
  sledeciDugme.classList.remove("hidden");

  pravac2.classList.remove("visible");
  pravac2.classList.add("hidden");
}

function prikaziPravac2() {
  pravac2.classList.add("visible");
  pravac2.classList.remove("hidden");
  dugmePravac2.classList.add("kliknutoDugme");
  dugmePravac1.classList.remove("kliknutoDugme");
  pravac1.classList.remove("visible");
  pravac1.classList.add("hidden");
  sledeciDugme.classList.remove("hidden");
}
