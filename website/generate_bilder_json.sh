#!/bin/bash

# Alle bild-XXX.jpg Dateien finden, nur Dateinamen extrahieren
find . -type f -name "bild-*.jpg" | sed 's|^\./||' | sort > tmp_bilder.txt

# JSON Datei erstellen
echo "[" > bilder.json
while read -r line; do
  echo "  \"$line\"," >> bilder.json
done < tmp_bilder.txt

# Letztes Komma entfernen und JSON korrekt schließen
sed -i '' '$ s/,$//' bilder.json
echo "]" >> bilder.json

# Aufräumen
rm tmp_bilder.txt

echo "✅ bilder.json wurde erfolgreich aktualisiert!"


