
## super naive implementierung

### csv input formate

es sollte immer die gleiche anzahl spalten sien, arrayzugriffe sidn statisch ;)

* lat lon datei
PLZ,Ort,Straﬂe,Hausnummer,Hausnummernzusatz,X-Koordinate,Y-Koordinate

* id datei
PLZ,Ort,Straﬂe,Hausnummer,Hausnummernzusatz,ID

### csv output

ID,X-Koordinate,Y-Koordinate

### und so l‰ufts:

git installieren
node installieren :)

git clone https://github.com/maddin1982/addresscompare.git

cd addresscompare
npm install
node compare.js 