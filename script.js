
// Informationen zum P1S ein- und ausblenden
function zeigeP1S() {
    let p1s = document.getElementById("p1s-info");

    if (p1s.style.display === "block") {
        p1s.style.display = "none";
    }
    else {
        p1s.style.display = "block";
        document.getElementById("a1-info").style.display = "none";
    }
}

// Informationen zum Bambu Lab A1 anzeigen oder ausblenden
function zeigeA1() {
    // Zugriff auf den Bereich mit den A1-Informationen
    let a1 = document.getElementById("a1-info");
    // Prüft, ob der Bereich bereits sichtbar ist
    if (a1.style.display === "block") {
         // Bereich wieder ausblenden
        a1.style.display = "none";
    }
    else {
        // Bereich sichtbar machen
        a1.style.display = "block";
        // Gleichzeitig die P1S-Informationen ausblenden
        document.getElementById("p1s-info").style.display = "none";
    }
}

// Filament-Bilder ein- und ausblenden
// Es kann immer nur eine Filament-Gruppe gleichzeitig geöffnet sein.
// Beim Öffnen eines neuen Bereichs werden die anderen automatisch geschlossen.
function schliesseAlleFilamente()
{
    document.getElementById("pla-bilder").style.display = "none";
    document.getElementById("pla-matte-bilder").style.display = "none";
    document.getElementById("pla-cf-bilder").style.display = "none";
    document.getElementById("petg-bilder").style.display = "none";
}

function zeigePLA()
{
    let pla = document.getElementById("pla-bilder");

    if (pla.style.display === "flex")
    {
        pla.style.display = "none";
    }
    else
    {
        schliesseAlleFilamente();
        pla.style.display = "flex";
    }
}

function zeigePLAMatte()
{
    let plamatte = document.getElementById("pla-matte-bilder");

    if (plamatte.style.display === "flex")
    {
        plamatte.style.display = "none";
    }
    else
    {
        schliesseAlleFilamente();
        plamatte.style.display = "flex";
    }
}

function zeigePLACF()
{
    let placf = document.getElementById("pla-cf-bilder");

    if (placf.style.display === "flex")
    {
        placf.style.display = "none";
    }
    else
    {
        schliesseAlleFilamente();
        placf.style.display = "flex";
    }
}

function zeigePETG()
{
    let petg = document.getElementById("petg-bilder");

    if (petg.style.display === "flex")
    {
        petg.style.display = "none";
    }
    else
    {
        schliesseAlleFilamente();
        petg.style.display = "flex";
    }
}
// Funktion für Filamente Ende

// Projektbeschreibung von E-Wally anzeigen
function schliesseAlleProjekte()
{
    document.getElementById("ewally-info").style.display = "none";
    document.getElementById("nr5-info").style.display = "none";
    document.getElementById("miniFluegel-info").style.display = "none";
}

function zeigeEWally()
{
    let info = document.getElementById("ewally-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleProjekte();
        info.style.display = "block";
    }
}

function zeigeNr5()
{
    let info = document.getElementById("nr5-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleProjekte();
        info.style.display = "block";
    }
}

function zeigeMiniFluegel()
{
    let info = document.getElementById("miniFluegel-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleProjekte();
        info.style.display = "block";
    }
}

// Ein- und Ausblenden der Tipp-Karten
// Es kann immer nur ein Tipp gleichzeitig geöffnet sein.
// Bereits geöffnete Bereiche werden automatisch geschlossen.
function schliesseAlleTipps()
{
    document.getElementById("arrange-info").style.display = "none";
    document.getElementById("reinigung-info").style.display = "none";
    document.getElementById("effektplatte-info").style.display = "none";
    document.getElementById("modifikator-info").style.display = "none";
}

function zeigeEffektplatte()
{
    let info = document.getElementById("effektplatte-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleTipps();
        info.style.display = "block";
    }
}

function zeigeArrange()
{
    let info = document.getElementById("arrange-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleTipps();
        info.style.display = "block";
    }
}

function zeigeReinigung()
{
    let info = document.getElementById("reinigung-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleTipps();
        info.style.display = "block";
    }
}

function zeigeModifikatoren()
{
    let info = document.getElementById("modifikator-info");

    if (info.style.display === "block")
    {
        info.style.display = "none";
    }
    else
    {
        schliesseAlleTipps();
        info.style.display = "block";
    }

}

// Barrierefreiheit:
// Der Benutzer kann die Schriftgröße vergrößern oder verkleinern.
// Zusätzlich kann ein Kontrastmodus aktiviert werden,
// damit die Inhalte besser lesbar sind.
let aktuelleSchriftgroesse = 100;

function schriftGroesser()
{
    aktuelleSchriftgroesse += 10;
    document.body.style.fontSize = aktuelleSchriftgroesse + "%";
}

function schriftKleiner()
{
    aktuelleSchriftgroesse -= 10;
    document.body.style.fontSize = aktuelleSchriftgroesse + "%";
}

function farbenWechseln()
{
    document.body.classList.toggle("kontrast-modus");
}

function englisch()
{
    document.getElementById("titel").innerHTML = "My 3D World";
    document.getElementById("willkommen").innerHTML =
        "Welcome to my website about 3D printing.";

    document.getElementById("nav-drucker").innerHTML =
        "My 3D Printers";

    document.getElementById("nav-filamente").innerHTML =
        "My Filament Selection";

    document.getElementById("nav-projekte").innerHTML =
        "My Projects";

    document.getElementById("nav-tipps").innerHTML =
        "Tips and Tricks";

    document.getElementById("drucker-ueberschrift").innerHTML =
        "My 3D Printers";

    document.getElementById("drucker-text").innerHTML =
        "On my website I present projects and experiences with the Bambu Lab P1S and the Bambu Lab A1.";

    document.getElementById("btn-p1s").innerHTML =
    "P1S Information";
    
    document.getElementById("btn-a1").innerHTML =
    "A1 Information";

    document.getElementById("projekte-ueberschrift").innerHTML =
        "My Projects";

    document.getElementById("filamente-ueberschrift").innerHTML =
        "My Filament Selection";

    document.getElementById("tipps-ueberschrift").innerHTML =
        "Tips and Tricks";
}

function deutsch()
{
    document.getElementById("titel").innerHTML =
        "Meine 3D Welt";

    document.getElementById("willkommen").innerHTML =
        "Willkommen auf meiner Webseite rund um 3D-Druck.";

    document.getElementById("nav-drucker").innerHTML =
        "Meine 3D-Drucker";

    document.getElementById("nav-filamente").innerHTML =
        "Meine Filament-Auswahl";

    document.getElementById("nav-projekte").innerHTML =
        "Meine Projekte";

    document.getElementById("nav-tipps").innerHTML =
        "Tipps und Tricks";

    document.getElementById("drucker-ueberschrift").innerHTML =
        "Meine 3D-Drucker";

    document.getElementById("drucker-text").innerHTML =
        "Auf meiner Webseite zeige ich Projekte und Erfahrungen mit dem Bambu Lab P1S und dem Bambu Lab A1.";

    document.getElementById("projekte-ueberschrift").innerHTML =
        "Meine Projekte";

    document.getElementById("filamente-ueberschrift").innerHTML =
        "Meine Filament-Auswahl";

    document.getElementById("tipps-ueberschrift").innerHTML =
        "Tipps und Tricks";
}

function bildAnzeigen(bildPfad)
{
    document.getElementById("popupBild").src = bildPfad;
    document.getElementById("bildPopup").style.display = "flex";
}

function popupSchliessen()
{
    document.getElementById("bildPopup").style.display = "none";
}

