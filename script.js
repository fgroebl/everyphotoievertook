const fotos = [];
let index = 1;

function ladeBilder() {
  const img = new Image();
  img.src = `website/bild-${String(index).padStart(3, '0')}.jpg`;
  img.onload = () => {
    fotos.push(img.src);
    index++;
    ladeBilder(); // nächstes Bild versuchen
  };
  img.onerror = () => {
    if (fotos.length > 0) {
      zeigeBilder();
    } else {
      document.getElementById('foto').alt = "Keine Bilder gefunden.";
    }
  };
}

function zeigeBilder() {
  const fotoElement = document.getElementById('foto');

  function wechsleBild() {
    const zufallsIndex = Math.floor(Math.random() * fotos.length);
    fotoElement.src = fotos[zufallsIndex];
  }

  wechsleBild(); // sofort erstes Bild setzen

  setInterval(wechsleBild, 5000); // ALLE 5000 Millisekunden (= 5 Sekunden)
}

ladeBilder();


