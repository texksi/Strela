let map = null;
let routeLine = null;

function prikaziRutuNaMapi(busRoute) {
  const mapaDiv = document.getElementById("mapaLinije");
  mapaDiv.classList.remove("hidden");

  if (map) {
    map.remove();
  }

  // Uzmi samo koordinate lat,lng za poliliniju
  const koordinateLinije = busRoute.map(stop => [stop[0], stop[1]]);

  map = L.map("mapaLinije").setView(koordinateLinije[0], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  routeLine = L.polyline(koordinateLinije, {
    color: "blue",
    weight: 5,
    opacity: 0.7,
  }).addTo(map);

  map.fitBounds(routeLine.getBounds());

  busRoute.forEach(stop => {
    L.circleMarker([stop[0], stop[1]], {
      radius: 6,
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.7,
    })
    .addTo(map)
    .bindPopup(stop[2]);
  });
}

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
    document.getElementById("mapaLinije").classList.add("hidden");
    return;
  }

  let rutaKoordinate = [];

  if (izabranaLinija === "Linija 100") {
    rutaKoordinate = [
      [44.85, 20.48, "Batajnica"],
      [44.86, 20.5, "Neka stanica"],
      [44.87, 20.52, "Ovca"],
    ];
  } else if (izabranaLinija === "Linija 101") {
    rutaKoordinate = [
      [44.87, 20.53, "Padinska skela"],
      [44.84, 20.49, "MZ Krnjača"],
      [44.81, 20.48, "Omladinski stadion"],
    ];
  } else if (izabranaLinija === "Linija 102") {
    rutaKoordinate = [
      [44.83, 20.41, "Zemun"],
      [44.83, 20.45, "Neka stanica"],
      [44.81, 20.46, "Zvezdara"],
    ];
  } else {
    // Ako nema podataka za liniju
    document.getElementById("mapaLinije").classList.add("hidden");
    return;
  }

  // Prikaži mapu sa rutom
  prikaziRutuNaMapi(rutaKoordinate);
});
