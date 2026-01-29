# 🚀 Snabbguide: Publicera din applikation

## ⚡ Snabbaste metoden: Netlify (5 minuter)

### Steg 1: Förbered filerna
- Se till att alla filer finns i mappen `blanketter-nyanlända`
- Du borde ha:
  - index.html
  - style.css
  - app.js
  - data.js
  - README.md

### Steg 2: Gå till Netlify
1. Öppna [www.netlify.com](https://www.netlify.com) i din webbläsare
2. Klicka på **"Sign up"** (Skapa konto)
3. Välj att registrera med:
   - E-post
   - GitHub
   - GitLab
   - Eller Bitbucket

### Steg 3: Ladda upp mappen
1. Efter inloggning ser du texten:
   **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**
2. Dra hela mappen `blanketter-nyanlända` till den markerade ytan
3. Släpp mappen
4. Vänta 10-30 sekunder

### Steg 4: Din webbplats är live! 🎉
Du får nu en länk som ser ut ungefär så här:
```
https://random-name-123456.netlify.app
```

**Detta är din publika länk!** Dela den med vem du vill.

### Steg 5: Byt namn på länken (valfritt)
1. Klicka på **"Site settings"**
2. Under "Site information", klicka **"Change site name"**
3. Skriv in ett eget namn, t.ex: `blanketter-nyanlanda`
4. Klicka **"Save"**

Din nya länk blir:
```
https://blanketter-nyanlanda.netlify.app
```

---

## 📱 Dela din applikation

### Metod 1: Skicka länken direkt
Kopiera länken och skicka via:
- WhatsApp
- E-post
- SMS
- Sociala medier

### Metod 2: Skapa QR-kod
1. Gå till [https://www.qr-code-generator.com](https://www.qr-code-generator.com)
2. Klistra in din Netlify-länk
3. Ladda ner QR-koden
4. Folk kan scanna koden med mobilen för att öppna sidan

### Metod 3: Korta länken
Om länken är för lång, använd:
- [https://bitly.com](https://bitly.com)
- [https://tinyurl.com](https://tinyurl.com)

Från:
```
https://blanketter-nyanlanda.netlify.app
```

Till:
```
https://bit.ly/blanketter-se
```

---

## 🔄 Uppdatera webbplatsen

### När du lägger till nya tjänster:

1. **Redigera `data.js`** på din dator
2. Gå till Netlify
3. Klicka på **"Deploys"**
4. Dra den uppdaterade mappen till upload-området
5. Klart! Uppdateringen syns direkt.

---

## 💰 Kostnader

### Netlify gratis plan inkluderar:
- ✅ Obegränsat antal besökare
- ✅ HTTPS (säker anslutning)
- ✅ 100 GB bandbredd/månad
- ✅ Kontinuerlig drift

**Total kostnad: 0 kr/månad** 🎉

### Om du vill ha eget domännamn:
Exempel: `www.blanketter.se` istället för `blanketter-nyanlanda.netlify.app`

**Kostnad:**
- Domän från Loopia.se: ~100-200 kr/år
- Domän från Namecheap.com: ~70-150 kr/år

---

## 🌍 Eget domännamn (Avancerat)

### Steg 1: Köp domän
1. Gå till [Loopia.se](https://www.loopia.se)
2. Sök efter önskat namn (t.ex. "blanketter.se")
3. Lägg i kundvagn och betala

### Steg 2: Koppla till Netlify
1. I Netlify, gå till **"Domain settings"**
2. Klicka **"Add custom domain"**
3. Skriv in ditt domännamn
4. Följ instruktionerna för DNS-inställningar
5. Gå tillbaka till Loopia
6. Uppdatera DNS-inställningarna enligt Netlify's instruktioner

**Väntetid:** 24-48 timmar för DNS att spridas

---

## 📊 Statistik (Valfritt)

Om du vill se hur många som besöker sidan:

### Google Analytics (Gratis)
1. Skapa konto på [analytics.google.com](https://analytics.google.com)
2. Skapa en ny "property"
3. Få din tracking-kod
4. Lägg till koden i `index.html` innan `</head>`

### Netlify Analytics (Betald)
- Kostar $9/månad
- Enklare att sätta upp
- Respekterar användarnas integritet bättre

---

## ✅ Checklista före publicering

Innan du publicerar, kolla att:

- [ ] Alla länkar i `data.js` fungerar
- [ ] Inga stavfel i tjänstnamn
- [ ] Alla myndighetsnamn är korrekta
- [ ] Populära tjänster är markerade (`populär: true`)
- [ ] Applikationen fungerar i din webbläsare
- [ ] Mobilvyn ser bra ut (testa genom att förminska webbläsarfönstret)

---

## 🆘 Vanliga problem

### Problem: "Sidan visar 404 Not Found"
**Lösning:** 
- Kontrollera att `index.html` finns i mappen
- Kontrollera att filnamnet är exakt `index.html` (inte `Index.html`)

### Problem: "Tjänster visas inte"
**Lösning:**
- Öppna Developer Console (F12)
- Kolla efter felmeddelanden
- Oftast: glömt kommatecken i `data.js`

### Problem: "Designen ser konstig ut"
**Lösning:**
- Kontrollera att `style.css` finns i samma mapp
- Rensa webbläsarens cache (Ctrl+Shift+Delete)

---

## 📞 Nästa steg

Efter publicering:

1. ✅ Testa sidan från olika enheter (mobil, dator)
2. ✅ Be vänner testa och ge feedback
3. ✅ Lägg till fler tjänster efter hand
4. ✅ Dela länken med målgruppen
5. ✅ Uppdatera regelbundet

---

## 🎯 Tips för framgång

### Marknadsföring:
- Dela på Facebook-grupper för nyanlända
- Kontakta SFI-skolor
- Prata med socialtjänsten
- Kontakta kommunens integrationsenhet
- Dela med studieförbund

### Underhåll:
- Uppdatera länkar varje kvartal
- Ta bort inaktuella tjänster
- Lägg till nya tjänster när de lanseras
- Be om feedback från användare

---

**Lycka till med din publicering! 🚀**

Om du kör fast, läs igenom README.md igen eller sök hjälp online.
