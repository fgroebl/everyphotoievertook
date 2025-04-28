#!/bin/bash

echo "📂 Wechsel in Projektordner..."
cd "/Users/fori/Library/CloudStorage/Dropbox/CREATIVE/FOTO/every photo i ever took/"

echo "➕ Dateien merken (git add .)..."
git add .

echo "📝 Commit erstellen..."
git commit -m "Neue Bilder hochgeladen am $(date +"%Y-%m-%d %H:%M:%S")"

echo "🚀 Push auf GitHub..."
git push

echo "✅ Fertig! Website wird automatisch aktualisiert."


