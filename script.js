const fotos = [];
let index = 1;

// Lade das Bild sofort und starte das Lazy Loading
function ladeNeuesBild() {
  const fotoElement = document.getElementById('foto');
  const headlineElement = document.getElementById('headline');

  // Zufällig ein Bild auswählen
  const zufallsIndex = Math.floor(Math.random() * fotos.length);
  const bildPfad = `website/${fotos[zufallsIndex]}`;

  const img = new Image();
  img.src = bildPfad;

  img.onload = function () {
    fotoElement.src = img.src;
    // Berechne die Breite der Überschrift (50% der Fensterbreite)
    headlineElement.style.maxWidth = (window.innerWidth * 0.5) + 'px'; // 50% der Fensterbreite
  };

  img.onerror = function () {
    console.error("Fehler beim Laden von Bild:", img.src);
  };
}

// Lade die Bilderliste und starte das Bildladen
function ladeBilder() {
  const img = new Image();
  img.src = `website/bild-${String(index).padStart(3, '0')}.jpg`;
  img.onload = () => {
    fotos.push(img.src);
    index++;
    ladeBilder(); // Nächstes Bild hinzufügen
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
  const headlineElement = document.getElementById('headline');

  function wechsleBild() {
    const zufallsIndex = Math.floor(Math.random() * fotos.length);
    fotoElement.src = fotos[zufallsIndex];

    // Wenn das Bild geladen wird, wird die Überschrift-Breite angepasst
    fotoElement.onload = function () {
      headlineElement.style.maxWidth = (window.innerWidth * 0.5) + 'px'; // 50% der Fensterbreite
    };
  }

  wechsleBild(); // Sofort erstes Bild anzeigen

  setInterval(wechsleBild, 5000); // Alle 5 Sekunden ein neues Bild
}

// Hinzufügen eines Resize-Events für die Echtzeit-Anpassung der Überschrift
window.addEventListener('resize', function () {
  const headlineElement = document.getElementById('headline');
  headlineElement.style.maxWidth = (window.innerWidth * 0.5) + 'px'; // 50% der Fensterbreite
});

ladeBilder();
