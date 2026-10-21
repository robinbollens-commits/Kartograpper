# Kartograaf

Teken je eigen fantasykaarten in de browser: wereldkaarten met kusten, bergketens en bossen, of plattegronden van steden en dungeons. In zwart-wit inkt, sepia perkament of in kleur.

![Kartograaf met een wereldkaart in kleur](docs/screenshot-kleur.png)

![Dezelfde kaart in zwart-wit inkt](docs/screenshot-inkt.png)

**Openen:** https://robinbollens-commits.github.io/Kartograpper/

Gratis, zonder account. Je kaarten blijven op je eigen toestel.

## Installeren

Kartograaf is een website die je ook als app kunt installeren. Daarna start hij vanaf je bureaublad of beginscherm en werkt hij zonder internet.

| Toestel | Zo installeer je |
|---|---|
| Windows, Mac, Linux (Chrome of Edge) | Open de link en klik rechts in de adresbalk op het installeer-icoon, of kies in het menu *App installeren*. |
| Android (Chrome) | Open de link, tik op ⋮ en kies *App installeren* of *Toevoegen aan startscherm*. |
| iPhone en iPad (Safari) | Open de link, tik op Delen en kies *Zet op beginscherm*. |

**Zonder internet of eigen server:** kies op deze pagina *Code › Download ZIP*, pak het uit en open `index.html` in je browser. Lettertypen en zip-import hebben dan wel internet nodig de eerste keer.

## Wat kan het?

- **Wereldkaarten:** land en water schilderen met ruwe kusten, ondergronden (gras, woestijn, moeras, sneeuw, …), rivieren, wegen en grenzen.
- **Land genereren:** een volledig werelddeel, of een stuk land op je bestaande kaart, met bergen, bossen, plaatsen en namen.
- **Strooipenselen:** bergketens en bossen schilderen met tien vormen per soort. Stel zelf penselen samen.
- **Stad & dungeon:** kamers op een raster, gearceerde rotsmuren, deuren, meubels en meer.
- **Eigen materiaal:** teken je eigen vormen en ondergronden, of upload afbeeldingen en hele mappen of zips met assets, gesorteerd per type.
- **Stijlen:** inkt, perkament of kleur, per kaart te kiezen.
- **Exporteren:** als PNG, of als bewerkbaar bestand.

## Je gegevens

- Alles wordt in je eigen browser bewaard (IndexedDB). Er wordt niets naar een server gestuurd.
- **Updates wissen niets.** Vóór een nieuwe versie iets aanraakt, bewaart ze automatisch een herstelpunt. Je vindt het bij *Instellingen › Bibliotheek › Herstelpunten*.
- Kaarten en bibliotheek zitten vast aan de browser en het adres waar je ze maakte. Wil je ze op een ander toestel of in een andere browser, gebruik dan *Bestand › Opslaan als bestand* en *Bestand › Bibliotheek opslaan als bestand*, en open ze daar weer.
- Wis je je browsergegevens voor deze site, dan zijn je kaarten weg. Bewaar belangrijke kaarten dus ook als bestand.

## Feedback

Iets werkt niet, of heb je een idee? Klik in de app op het tekstballon-icoon rechtsboven, of [maak hier een melding](https://github.com/robinbollens-commits/Kartograpper/issues/new/choose).

## Voor ontwikkelaars

- De app is één HTML-bestand zonder buildstap. De bron staat in `src/kartograaf.html`.
- `python3 tools/build.py` maakt daar `index.html` van, met de app-onderdelen (manifest, service worker) erbij.
- Elke push naar `main` wordt automatisch gepubliceerd op GitHub Pages.
- Verhoog `APP_VERSION` in `src/kartograaf.html` bij elke release. Dat triggert het automatische herstelpunt bij gebruikers.

## Licentie

[MIT](LICENSE). Lettertypen: IM Fell English en Alegreya Sans (SIL Open Font License, via Google Fonts). Zip-import: JSZip (MIT).

Gemaakt met hulp van Claude.
