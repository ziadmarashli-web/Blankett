# 🔍 Blanketter & E-tjänster för Nyanlända

En enkel webbapplikation för att hitta blanketter och e-tjänster för nyanlända i Sverige.

---

## 📋 Innehåll

1. [Översikt](#översikt)
2. [Funktioner](#funktioner)
3. [Komma igång](#komma-igång)
4. [Hur man lägger till nya tjänster](#hur-man-lägger-till-nya-tjänster)
5. [Publicera online](#publicera-online)
6. [Teknisk information](#teknisk-information)

---

## 🎯 Översikt

Detta är en sökbar databas med länkar till viktiga blanketter och e-tjänster från svenska myndigheter, särskilt anpassad för nyanlända. Applikationen gör det enkelt att hitta rätt tjänst genom att söka med vanliga ord eller filtrera efter myndighet.

### Inkluderade myndigheter:
- ✅ Försäkringskassan (FK)
- ✅ Arbetsförmedlingen
- ✅ Skatteverket
- ✅ Migrationsverket
- ✅ Pensionsmyndigheten
- ✅ CSN
- ✅ Lerums kommun
- ✅ Andra viktiga tjänster

---

## ✨ Funktioner

### 🔍 Smart sökning
- Sök med vanliga ord (t.ex. "bostadsbidrag", "etablering", "pension")
- Automatiska förslag medan du skriver
- Sökning i både tjänstnamn och nyckelord

### 🏢 Filtrera efter myndighet
- Visa bara tjänster från en specifik myndighet
- Snabb överblick per organisation

### 📱 Mobilanpassad
- Fungerar perfekt på mobil, surfplatta och dator
- Modern och ren design
- Snabb och responsiv

### ⭐ Populära tjänster
- Snabbåtkomst till de vanligaste tjänsterna
- Enkelt att hitta det du oftast behöver

---

## 🚀 Komma igång

### Alternativ 1: Öppna direkt i webbläsaren

1. Ladda ner alla filer till en mapp
2. Dubbelklicka på `index.html`
3. Applikationen öppnas i din webbläsare
4. Börja söka!

### Alternativ 2: Använd en lokal server

Om du har Python installerat:
```bash
# Navigera till mappen i terminal/kommandotolken
cd blanketter-nyanlända

# Starta en lokal server
python -m http.server 8000
```

Öppna sedan: `http://localhost:8000` i din webbläsare.

---

## ➕ Hur man lägger till nya tjänster

Det är **superenkelt** att lägga till nya tjänster! Följ dessa steg:

### Steg 1: Öppna filen `data.js`

Använd valfri textredigerare (t.ex. Notepad, VS Code, Sublime Text)

### Steg 2: Hitta slutet av listan

Scrolla ner till slutet av filen där det står:
```javascript
// LÄGG TILL FLER TJÄNSTER HÄR
```

### Steg 3: Kopiera mallen

Kopiera denna mall:
```javascript
    {
        id: 24,                    // Nästa lediga nummer
        namn: "Namn på tjänsten",
        nyckelord: "sökord1 sökord2 sökord3 sökord4",
        organisation: "Myndighetens namn",
        länk: "https://hela-länken-till-tjänsten.se",
        populär: false             // true om det är en populär tjänst
    },
```

### Steg 4: Fyll i informationen

**Exempel - Lägg till "Aktivitetsersättning från FK":**

```javascript
    {
        id: 24,
        namn: "Aktivitetsersättning",
        nyckelord: "aktivitetsersättning funktionsnedsättning sjukdom ung vuxen",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/funktionsnedsattning/aktivitetsersattning",
        populär: false
    },
```

### Steg 5: Kom ihåg kommatecknet!

**VIKTIGT:** Lägg till ett komma (`,`) efter den föregående tjänsten!

✅ **Rätt:**
```javascript
    },  // ← Komma här!
    {
        id: 24,
```

❌ **Fel:**
```javascript
    }   // ← Inget komma = Fel!
    {
        id: 24,
```

### Steg 6: Spara filen

Spara `data.js` och ladda om sidan i webbläsaren (tryck F5).

---

## 💡 Tips för bra sökord

Lägg till **många sökord** så att människor kan hitta tjänsten på olika sätt:

### Exempel: Bostadsbidrag

```javascript
nyckelord: "bostadsbidrag boende bidrag stöd hyra ekonomiskt hjälp bostad"
```

### Varför många sökord?

En person kan söka efter:
- "bostadsbidrag" ✅
- "bidrag boende" ✅
- "ekonomisk hjälp hyra" ✅
- "bostadsstöd" ✅

Ju fler sökord, desto lättare att hitta!

---

## 🏢 Lägga till ny myndighet

Om du vill lägga till en helt ny myndighet (t.ex. "Göteborgs kommun"):

### Steg 1: Lägg till tjänster med den nya organisationen

```javascript
    {
        id: 25,
        namn: "Förskoleplats",
        nyckelord: "förskola dagis barn göteborg",
        organisation: "Göteborgs kommun",  // ← Ny organisation
        länk: "https://goteborg.se/forskola",
        populär: false
    },
```

### Steg 2: Lägg till knapp i filtret

Öppna `index.html` och hitta avsnittet:
```html
<div class="organization-filter">
```

Lägg till en ny knapp:
```html
<button class="org-btn" data-org="Göteborgs kommun">Göteborgs kommun</button>
```

---

## 🌐 Publicera online

### Alternativ 1: Netlify (Enklast - Gratis)

1. Gå till [netlify.com](https://www.netlify.com)
2. Skapa ett gratis konto
3. Dra och släpp hela mappen `blanketter-nyanlända` på sidan
4. Färdig! Du får en länk som: `https://ditt-namn.netlify.app`

**Byta namn på länken:**
- Klicka på "Site settings"
- Välj "Change site name"
- Ange ett nytt namn (t.ex. "blanketter-nyanlanda")
- Ny länk: `https://blanketter-nyanlanda.netlify.app`

### Alternativ 2: GitHub Pages (Gratis)

1. Skapa ett konto på [github.com](https://github.com)
2. Skapa ett nytt repository (förvar)
3. Ladda upp alla filer
4. Gå till Settings → Pages
5. Välj "main" branch och "/" root
6. Spara och få din länk!

### Alternativ 3: Eget domännamn

Om du vill ha en egen adress (t.ex. `blanketter.se`):

1. Köp domän från:
   - [Loopia.se](https://www.loopia.se) (svenska domäner)
   - [Namecheap.com](https://www.namecheap.com) (billigare)
   
2. Koppla domänen till Netlify eller GitHub Pages
   - Följ instruktionerna på respektive plattform
   - Kostar ca 100-200 kr/år

---

## 📁 Filstruktur

```
blanketter-nyanlända/
├── index.html          # Huvudsidan
├── style.css           # Design och layout
├── app.js              # Funktionalitet (sökning, filter)
├── data.js             # Databas med tjänster ← DU REDIGERAR DENNA!
└── README.md           # Denna fil
```

---

## 🔧 Teknisk information

### Vad applikationen är byggd med:

- **HTML5** - Strukturen
- **CSS3** - Design och layout
- **Vanilla JavaScript** - Funktionalitet (inga externa bibliotek!)

### Browser-support:

✅ Chrome  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Mobila webbläsare

### Prestanda:

- ⚡ Supersnabb (allt körs lokalt)
- 💾 Ingen databas behövs
- 📱 Fungerar offline (efter första laddningen)
- 🔒 Inga personuppgifter sparas

---

## 📊 Nuvarande innehåll

### Antal tjänster: 23

#### Försäkringskassan (7 tjänster):
- Bostadsbidrag
- Bostadsersättning
- Etableringstillägg
- Underhållstöd
- Barnbidrag
- Föräldrapenning
- Sjukpenning

#### Arbetsförmedlingen (3 tjänster):
- Etableringsersättning
- Aktivitetsstöd
- Jobbsökaraktiviteter

#### Skatteverket (3 tjänster):
- Folkbokföring/Personnummer
- Deklaration
- F-skatt

#### Migrationsverket (4 tjänster):
- Uppehållstillstånd
- Arbetstillstånd
- Medborgarskap
- Anhöriginvandring

#### Andra (6 tjänster):
- CSN - Studiestöd
- Pensionsmyndigheten (2 st)
- Lerums kommun (2 st)
- SFI - Svenska för invandrare

---

## 🎯 Roadmap - Framtida förbättringar

### Version 2.0 (Planerad):
- [ ] Flerspråkig support (Svenska, Engelska, Arabiska)
- [ ] Spara favoriter
- [ ] Utskriftsvänlig version
- [ ] Kategorier (utöver organisationer)
- [ ] Statistik över populära sökningar

### Version 3.0 (Framtid):
- [ ] Mobilapp (iOS/Android)
- [ ] Notifikationer vid uppdateringar
- [ ] QR-koder för varje tjänst
- [ ] PDF-guide att skriva ut

---

## 🐛 Felsökning

### Tjänster visas inte?

1. **Kontrollera filen `data.js`:**
   - Finns det kommatecken mellan alla tjänster?
   - Är alla `{` och `}` matchade?
   - Är alla citat-tecken (`"`) stängda?

2. **Öppna Developer Console:**
   - Tryck F12 i webbläsaren
   - Kolla efter felmeddelanden i konsolen
   - Röda felmeddelanden visar vad som är fel

### Sökning fungerar inte?

- Ladda om sidan (Ctrl+F5 eller Cmd+R)
- Rensa webbläsarens cache
- Testa i en annan webbläsare

### Vanliga fel:

❌ **Glömt kommatecken:**
```javascript
    }   // ← Saknar komma!
    {
```

✅ **Rätt:**
```javascript
    },  // ← Komma finns!
    {
```

---

## 💬 Support

Om du behöver hjälp:

1. Läs igenom denna README-fil
2. Kolla felsökningsavsnittet ovan
3. Öppna Developer Console (F12) för att se felmeddelanden
4. Fråga en vän som kan lite programmering

---

## 📝 Licens

Detta projekt är öppen källkod och gratis att använda, ändra och dela.

---

## 🙏 Tack

Tack för att du använder denna applikation! Målet är att göra det enklare för nyanlända att hitta rätt information och tjänster.

Om du hittar applikationen användbar, dela gärna länken med andra som kan ha nytta av den.

---

**Lycka till! 🚀**

*Senast uppdaterad: Januari 2026*
