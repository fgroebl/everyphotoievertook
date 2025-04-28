const totalImages = 999; // oder so viele Bilder wie du hast
let aktuellesBild = Math.floor(Math.random() * totalImages) + 1; // Zufälliges Startbild

function ladeNeuesBild() {
  const fotoElement = document.getElementById('foto');
  const headlineElement = document.getElementById('headline');

  let bildPfad = `website/bild-${aktuellesBild.toString().padStart(3, '0')}.jpg`;

  const img = new Image();
  img.src = bildPfad;

  img.onload = function() {
    fotoElement.src = img.src;

    // Sobald das neue Foto geladen ist, passe die Überschrift an
    headlineElement.style.maxWidth = (fotoElement.clientWidth * 0.8) + 'px';
  };

  img.onerror = function() {
    console.error("Fehler beim Laden von Bild:", img.src);
  };

  aktuellesBild = Math.floor(Math.random() * totalImages) + 1;
}

// Beim ersten Laden
ladeNeuesBild();

// Alle 5 Sekunden neues Bild
setInterval(ladeNeuesBild, 5000);

// Beim Fenster-Resize auch Überschrift anpassen
window.addEventListener('resize', function() {
  const fotoElement = document.getElementById('foto');
  const headlineElement = document.getElementById('headline');
  headlineElement.style.maxWidth = (fotoElement.clientWidth * 0.8) + 'px';
});
