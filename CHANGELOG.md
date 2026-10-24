# Wijzigingen

## 1.12.0

- **Zelf inkleuren** in het tekenvenster voor eigen vormen: *Verfemmer* (tik in een vlak), *Kleurpotlood* en *Kleur wissen*, met een eigen verfkleur. Zo krijgt één vorm meerdere kleuren, bv. een donkere schaduwkant.
- **Basiskleur** voor eigen vormen: op een kleurenkaart krijgen ze nu een echte kleur in plaats van de papierkleur. Een nieuwe vorm neemt de kleur over van het voorbeeld waarover je tekent.
- Een omtrek met een kleine opening telt nu ook als gesloten, zodat de binnenkant gevuld en ingekleurd kan worden. Is hij echt open, dan zegt het tekenvenster dat.
- **Geüploade lijntekeningen** (met doorzichtige achtergrond) kun je nu ook inkleuren via de kleur van een symbool of penseel.
- **Grootte en draaiing op de kaart:** een geselecteerd symbool of tekst heeft een hoekgreep om te vergroten en een bolletje om te draaien (met Shift in stappen van 15°). Een symbool dat je met één klik neerzet, is meteen geselecteerd.
- Eigen vormen en uploads hebben een **potloodje** op hun tegel om ze te bewerken of te verwijderen, en een knop *Vorm bewerken…* of *Afbeelding beheren…* als je ze op de kaart selecteert.

## 1.11.0

- **Bijwerken met één klik.** Bij *Nieuwe versie* staat nu *Nu bijwerken*:
  - **Windows:** de app downloadt de update, bewaart je kaarten, installeert stil en start opnieuw.
  - **Android:** de app downloadt de APK zelf en opent het installatievenster van Android; daar tik je op *Bijwerken*. De eerste keer vraagt Android om Kartograpper toe te staan apps te installeren.
- Lukt het automatisch bijwerken niet, dan kun je zoals voorheen de installer zelf downloaden.
- Let op: dit werkt vanaf de update ná 1.11.0. Versie 1.11.0 zelf installeer je nog één keer op de oude manier.

## 1.10.0

- **Overschilderen** bij de strooipenselen: zet het aan en een penseel vervangt wat eronder staat, bv. een gebergte over heuvels of dode bossen over een loofbos. Alleen symbolen die een penseel kan schilderen maken plaats. Land, water, ondergrond, gebouwen, plekken en namen blijven altijd staan. Eén keer ongedaan maken zet de hele streek terug.

## 1.9.0

- Nieuwe symbolen voor de wereldkaart, in drie nieuwe categorieën:
  - **Elfen:** Elfenstad, Elfenboom, Elfenwoud (boom), Maanpoort en Elfentoren.
  - **Dwergen:** Bergpoort, Dwergenvesting, Smidse en Runensteen.
  - **Duistere landen:** Orkkamp, Duistere toren, Dode boom, Schedelrots en Doornen.
- Ook nieuw: Draak, Kraken, Draaikolk, Steencirkel, Magiertoren, Schat en een Kruisje (X).
- Nieuwe penselen: **Elfenwoud**, **Dode bossen** en **Doornenland**. Ze verschijnen ook als je al eigen penselen had.
- Nieuwe ondergronden: **Dorre grond** (gebarsten aarde) en **Bloemenweide**.

## 1.8.0

- De app heet nu overal **Kartograpper** (Kartograaf + mapper): in de titel, het venster, de snelkoppelingen, onder het app-icoon en in de namen van de installers en back-upbestanden.
- Je kaarten en bibliotheek blijven gewoon staan: de plek waar ze bewaard worden verandert niet. Oude back-upbestanden (`kartograaf-backup-….json`) kun je nog altijd importeren.

## 1.7.1

- Herstel: de keuze per soort bij de gum verscheen niet door een fout in 1.7.0.

## 1.7.0

- **Veel vlotter met veel bossen en bergen:** symbolen worden niet meer bij elke muisbeweging allemaal opnieuw getekend. Tijdens het schilderen wordt alleen het stukje onder het penseel bijgewerkt, en bij verschuiven alleen de rand die in beeld komt. Met 2.500 bomen op de kaart gaat een frame van ongeveer 5 ms naar 0,3 ms.
- **Gum per soort:** kies bij de gum welke soorten hij wegneemt, bv. enkel loofbomen, enkel woestijn als ondergrond of enkel rivieren. De lijst toont wat er op je kaart staat, met het aantal.
- **Updates vanuit de app:** de Windows- en Android-app kijken één keer per dag op GitHub of er een nieuwe versie is en tonen dan een knop om die te downloaden. Uit te zetten of met de hand te starten bij Instellingen › Back-up en updates. De webversie werkt zichzelf bij zoals voorheen.

## 1.6.0

- **Afdrukken op A4** (Menu, bij een plattegrond): de kaart wordt verdeeld over A4-bladen in een PDF, met elk vak op ware grootte (standaard 25 mm). Zo kun je de bladen aan elkaar plakken en er met figuurtjes op spelen.
  - Kies de vakgrootte, staand of liggend (of automatisch zo weinig mogelijk bladen) en of het raster mee wordt afgedrukt.
  - Een lijmrand van 8 mm laat de bladen overlappen. Snijtekens en een code per blad (A1, A2, …) helpen bij het in elkaar zetten.
  - Een overzichtsblad toont welk blad waar komt, legt uit hoe je ze samenvoegt en heeft een lijn van 10 cm om te controleren of op ware grootte is afgedrukt.
  - Elk blad wordt op hoge resolutie opnieuw getekend, zodat muren en symbolen scherp blijven.

## 1.5.0

- Betere indeling op de gsm:
  - Bovenaan staat alles op één rij, met een Menu voor Back-up, Instellingen, Feedback en de bestandsopties.
  - Het paneel is een uitklapbare balk onderaan, zodat de kaart het hele scherm krijgt. Kies je een symbool, penseel of ondergrond, dan klapt hij vanzelf weer dicht.
  - Categorieën en penselen staan in horizontaal scrollende rijen.
  - De tips verdwijnen na enkele seconden.
  - Een zwevende knop toont de hele kaart.
- Op de gsm opent de kaart ingezoomd, zodat hij het scherm vult.

## 1.4.1

- Eerste release met de Android-app (`.apk`), ondertekend met een vaste sleutel zodat latere versies er gewoon overheen installeren.

## 1.4.0

- Knop **Back-up** rechtsboven: alles exporteren naar één bestand, of een back-up importeren.
- Bij de eerste start van een nieuwe installatie kun je meteen je back-up importeren.
- Back-ups, kaarten en bibliotheken kun je ook op het venster slepen.
- Af en toe een herinnering om een back-up te maken.
- De koppeling met Google Drive is weggehaald: de app maakt geen verbinding meer met andere diensten.

## 1.3.0

- Google Drive: kaarten en bibliotheek (met geüploade assets) bewaren in een map *Kartograaf* in je Drive, automatisch of met de hand, en ophalen op een ander toestel. Overschrijft nooit stilzwijgend een nieuwere versie van een ander toestel. Werkt in de webversie.
- Volledige back-up: al je kaarten en je bibliotheek in één bestand, en weer terugzetten.
- Herstelpunten worden ook gemaakt vóór het terugzetten van een back-up en vóór het ophalen uit Drive.

## 1.2.0

- Windows-installer (.exe) en Android-app (.apk).
- In de Android-app opent *Opslaan als bestand* en *Exporteren als PNG* het deelmenu, zodat je kunt bewaren in Bestanden, Drive, …

## 1.1.0

- Feedbackknop in de app: meld een fout, idee of vraag rechtstreeks als GitHub-melding.
- Updates gooien nooit gegevens weg. Vóór een nieuwe versie iets doet, bewaart ze automatisch een herstelpunt van je kaarten en bibliotheek (Instellingen › Bibliotheek › Herstelpunten).
- Een kaart die niet geladen kan worden, wordt bewaard in plaats van overschreven.
- De browser wordt gevraagd je gegevens niet automatisch op te ruimen.
- Installeerbaar als app (PWA) en bruikbaar zonder internet.

## 1.0.0

- Eerste versie: wereldkaarten, steden en dungeons; strooipenselen; eigen vormen, ondergronden en uploads; land genereren; inkt, perkament en kleur.
