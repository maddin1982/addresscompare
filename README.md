
## super naive implementierung

### csv input formate

es sollte immer die gleiche anzahl spalten sien, arrayzugriffe sidn statisch ;)

* lat lon datei
PLZ,Ort,Stra�e,Hausnummer,Hausnummernzusatz,X-Koordinate,Y-Koordinate

* id datei
PLZ,Ort,Stra�e,Hausnummer,Hausnummernzusatz,ID

### csv output

ID,X-Koordinate,Y-Koordinate

### und so l�ufts:

node installieren :)

npm install
node compare.js 