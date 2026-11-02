# DA Explainer · Hotel National Bern

Visuelle, animierte Erklärung des Businessplans zur theoretischen Repositionierung des Hotels National Bern.

Enthalten ist der aktuelle Explainer mit 14 Szenen, Badezimmer V7 und Lobby/Treppenhaus V2 Dezent. Die Präsentation enthält Moodboard-Bezüge, Bildvergrösserungen, Originalgrundrisse und ein separates Rechnungsfenster.

## Öffnen

ZIP entpacken und `index.html` im Browser öffnen. Bilder, Schriften und Programmcode sind lokal enthalten. Es braucht weder npm noch externe Bibliotheken.

## Als Repository verwenden

Den Inhalt dieses Ordners in das gewünschte GitHub-Repository übernehmen. `index.html` liegt direkt im Stammverzeichnis. Das Projekt ist eine statische Website und kann mit GitHub Pages oder einem anderen statischen Webhost verwendet werden; ein Build ist dafür nicht erforderlich.

## Dateien

- `index.html`: Szenen, Inhalte und Quellenhinweise
- `style.css`: Gestaltung, Animationen und mobile Darstellung
- `app.js`: Navigation, Bildwechsel, Moodboard-Linien und Dialoge
- `assets/`: tatsächlich verwendete Bilder, Logo, Schriften und Schriftenlizenzen
- `build.py`: optionaler Export als einzelne Offline-HTML

## Einzelne Offline-HTML erzeugen

Mit Python 3 aus diesem Ordner:

```sh
python3 build.py
```

Unter Windows kann stattdessen `py build.py` verwendet werden. Das Skript benötigt ausschliesslich die Python-Standardbibliothek und erzeugt `DA_Explainer.html` mit eingebetteten Bildern, Schriften und Programmcode. Die generierte Datei und der Prüfbericht werden durch `.gitignore` vom Repository ausgeschlossen.

Bildherkunft und die Einordnung historischer Vorbilder sind in der Präsentation über das Info-Symbol zugänglich. Die Schriftenlizenzen liegen in `assets/`.
