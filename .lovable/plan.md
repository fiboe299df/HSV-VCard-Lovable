# HSV-Visitenkarte: Import und Verbesserungen

Das Design bleibt wie es ist: Glas-Look, HSV-Blau. Ich ändere nur Aufbau, Bedienung und Sicherheit.

## Phase 1: Import
- Ich übernehme https://hsv-visitenkarte.base44.app/ samt verlinkter Seiten (bis zu 5) in dieses Projekt.
- Ich prüfe Desktop und Handy, behebe fehlende Abschnitte und Menüs und entferne das Base44-Logo überall.

## Phase 2: Öffentliche Visitenkarte
- **Infoleiste** klebt oben: Kontakt, Über mich, Werdegang, Interessen, Karriere, Sprachen, Spiele. Auf dem Handy scrollt sie seitlich, der aktuelle Abschnitt wird hervorgehoben. Rechts sitzt ein runder Schloss-Button "Privat". Der Text ist hell und dunkel gut lesbar.
- **Handy:** eine feste Leiste unten mit Anrufen, E-Mail, Speichern und Wallet. Die übrigen Punkte wandern ins Burger-Menü.
- **Profilbild** mit blauem Rahmen. Der Text lautet: "Mit 27 Jahren bin ich ein engagierter und international erfahrener Experte …"
- **Kontakt:** Karten mit rundem Icon und "Kopieren"-Button.
  - Telefon: `tel:+491604339168`
  - E-Mail: `mailto:Lasse.boettcher@hsv.de`
  - Adresse: kleines Fenster mit Auswahl Google Maps oder Apple Maps.
  - Die Karte lädt erst nach einem Klick.
  - Daneben eine kleine Karte zum Privatbereich.
- **Werdegang:** Timeline mit Punkten und Logos. Der Button "Lebenslauf ansehen" mit Schloss öffnet das PDF in einem geschützten Fenster (scrollbar, schließt per X, Esc oder Klick daneben), mit "Herunterladen" und "In neuem Tab". Auf dem Handy läuft es als Vollbild oder öffnet einen neuen Tab. "Zurück zum Werdegang" springt wieder an diese Stelle.
- **Interessen** als Tag-Chips. **Karriere:** eine Karte mit den beiden HSV-Stationen und dem Button "Zum HSV-Karriereportal".
- **Sprachen:** Flaggen statt Länderkürzel. **Logo unten:** das HSV-Logo füllt den Rahmen rechteckig aus.
- **Spiele & Tabelle** stehen am Ende:
  - Spielkarten mit Heim- und Auswärts-Badge, Vereinswappen und Ticket-Button.
  - Die Tabelle zeigt Platz 1 bis 5 plus die HSV-Zeile in Blau.
  - "Komplette Tabelle (18 Mannschaften)" öffnet ein Fenster. Dort scrollt die HSV-Zeile automatisch in die Mitte, mit Datum und Uhrzeit des Stands.
  - Die Daten kommen live aus einer öffentlichen Fußball-Datenquelle.
- **Doppelte Einträge** (QR, Wallet, Kontakt speichern) erscheinen nur noch einmal. Unten rechts gibt es einen runden Hoch-/Runter-Button. Der Footer bekommt einen Privat-Link.
- **Qualität:** Alt-Texte für Bilder, guter Kontrast und eine Vorschau mit Bild und Titel beim Teilen per WhatsApp.

## Phase 3: Privater Bereich und Admin (Lovable Cloud)
- **Anmeldung:** Glas-Karte mit Schloss und dem Text "Hier findest du meine privaten Kontaktdaten und Dokumente". Das Passwortfeld hat ein Auge-Icon. Fehler klingen freundlich: "Das Passwort stimmt nicht, bitte versuche es noch einmal". Optional gibt es einen Login-Link per E-Mail.
- **Zwei-Faktor-Schutz mit Authenticator-App**, auf einer Seite "Konto absichern" in 3 Schritten:
  - QR-Code am PC, auf dem Handy ein Button "In Authenticator-App öffnen" plus Schlüssel zum Kopieren.
  - Wiederherstellungscodes zum Speichern.
  - "Dieses Gerät 30 Tage merken".
  - Für Admins ist der Schutz Pflicht, für andere zunächst freiwillig.
- **Nach der Anmeldung:**
  - Begrüßung mit Foto.
  - Kacheln für private Kontaktdaten (Privat/Arbeit-Icons, daneben ein Bild vom Volksparkstadion) und Dokumente (Lebenslauf, Zeugnisse) mit "Öffnen".
  - "Abmelden" oben rechts, "Zurück zur Karte" immer sichtbar.
  - Automatische Abmeldung nach Inaktivität.
- **Dokumente** liegen in einem privaten Speicher. Sie öffnen sich nur nach der Anmeldung über Links, die nach kurzer Zeit ablaufen. Auf dem Handy öffnen sie sich in einem neuen Tab.
- **Admin (fiboe02@outlook.de):**
  - Die Rolle wird sicher in der Datenbank gespeichert.
  - Ein Schalter wechselt zwischen Nutzeransicht und Admin-Ansicht.
  - Dokumente per Drag & Drop hochladen, je Dokument sichtbar oder gesperrt.
  - Liste der Personen mit Zugang, mit Sperren per Klick und Zurücksetzen des Zwei-Faktor-Schutzes.
  - Auf dem Handy eine Spalte mit großen Tippflächen.

## Technische Hinweise
- Der Import läuft über das Website-Import-Werkzeug. Danach folgen Änderungen nur an der importierten Seite.
- Phase 3 nutzt Lovable Cloud: Anmeldung mit TOTP, Rollen-Tabelle mit Sicherheitsregeln, privater Speicher und Server-Funktionen. Der Schutz liegt auf dem Server, nicht im Browser.
- Für die Live-Tabelle verwende ich die kostenlose OpenLigaDB-Schnittstelle (2. Bundesliga), abgefragt über den Server.
- Lebenslauf und Zeugnisse lädst du nach dem Umbau selbst im Admin-Bereich hoch.
