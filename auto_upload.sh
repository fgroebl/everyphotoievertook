#!/bin/bash

echo "📂 Generiere neue bilder.json..."
cd "website"
./generate_bilder_json.sh
cd ..

echo "➕ Dateien zu Git hinzufügen..."
git add .

echo "📝 Commit erstellen..."
git commit -m "Auto-Upload: neue Bilder + neue bilder.json"

echo "🚀 Auf GitHub pushen..."
git push

echo "✅ Fertig! Website wird automatisch aktualisiert."


