// ===================================
// Database för Blanketter & E-tjänster
// ===================================

// INSTRUKTIONER FÖR ATT LÄGGA TILL NYA TJÄNSTER:
// 
// 1. Kopiera mallen nedan
// 2. Ändra informationen (namn, nyckelord, länk, osv.)
// 3. Lägg till kommatecken (,) efter varje tjänst utom den sista
// 4. Spara filen
//
// MALL:
// {
//     id: NÄSTA_NUMMER,
//     namn: "Tjänstens namn",
//     nyckelord: "sökord sökord2 sökord3",
//     organisation: "Myndighetens namn",
//     länk: "https://hela-länken-här.se",
//     populär: false  // sätt till true för populära tjänster
// }

const tjänsterDatabase = [
    // ===================================
    // FÖRSÄKRINGSKASSAN (FK)
    // ===================================
    {
        id: 1,
        namn: "Bostadsbidrag",
        nyckelord: "bostadsbidrag boende bidrag stöd hyra ekonomiskt",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/bostadsbidrag",
        populär: true
    },
    {
        id: 2,
        namn: "Bostadsersättning",
        nyckelord: "bostadsersättning boende pensionär äldre bidrag",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/bostadsersattning-till-pensionarer",
        populär: false
    },
    {
        id: 3,
        namn: "Etableringstillägg",
        nyckelord: "etableringstillägg nyanländ etablering extra stöd",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/flyktingar-och-nyanlanda/etableringstillagg",
        populär: true
    },
    {
        id: 4,
        namn: "Underhållstöd",
        nyckelord: "underhållstöd barn förälder bidrag ekonomiskt",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/foralder/nar-foraldrarna-inte-bor-tillsammans/underhallsstod",
        populär: false
    },
    {
        id: 5,
        namn: "Barnbidrag",
        nyckelord: "barnbidrag barn bidrag förälder",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/foralder/barnbidrag",
        populär: true
    },
    {
        id: 6,
        namn: "Föräldrapenning",
        nyckelord: "föräldrapenning föräldraledighet barn baby bebis",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/foralder/foraldrapenning",
        populär: false
    },
    {
        id: 7,
        namn: "Sjukpenning",
        nyckelord: "sjukpenning sjuk sjukfrånvaro ersättning",
        organisation: "Försäkringskassan",
        länk: "https://www.forsakringskassan.se/privatperson/sjuk/sjukpenning",
        populär: false
    },

    // ===================================
    // ARBETSFÖRMEDLINGEN
    // ===================================
    {
        id: 8,
        namn: "Etableringsersättning",
        nyckelord: "etableringsersättning nyanländ etablering arbete jobb ersättning",
        organisation: "Arbetsförmedlingen",
        länk: "https://arbetsformedlingen.se/for-arbetssokande/stod-och-ersattning/ersattning-vid-arbetsloshet/etableringsersattning",
        populär: true
    },
    {
        id: 9,
        namn: "Aktivitetsstöd",
        nyckelord: "aktivitetsstöd arbetslös stöd ersättning",
        organisation: "Arbetsförmedlingen",
        länk: "https://arbetsformedlingen.se/for-arbetssokande/stod-och-ersattning/ersattning-vid-arbetsloshet/aktivitetsstod",
        populär: false
    },
    {
        id: 10,
        namn: "Jobbsökaraktiviteter",
        nyckelord: "jobbsökaraktiviteter arbete jobb söka cv",
        organisation: "Arbetsförmedlingen",
        länk: "https://arbetsformedlingen.se/for-arbetssokande/hitta-jobb",
        populär: false
    },

    // ===================================
    // SKATTEVERKET
    // ===================================
    {
        id: 11,
        namn: "Folkbokföring - Personnummer",
        nyckelord: "personnummer folkbokföring registrering id-nummer",
        organisation: "Skatteverket",
        länk: "https://www.skatteverket.se/privat/folkbokforing/flyttatillsverige.4.18e1b10334ebe8bc80001819.html",
        populär: true
    },
    {
        id: 12,
        namn: "Deklaration",
        nyckelord: "deklaration skatt skattedeklaration inkomst",
        organisation: "Skatteverket",
        länk: "https://www.skatteverket.se/privat/deklaration",
        populär: false
    },
    {
        id: 13,
        namn: "F-skatt för företagare",
        nyckelord: "f-skatt företag företagare skatt godkännande",
        organisation: "Skatteverket",
        länk: "https://www.skatteverket.se/foretag/skatterochavdrag/fskatt.4.58d555751259e4d66168000.html",
        populär: false
    },

    // ===================================
    // MIGRATIONSVERKET
    // ===================================
    {
        id: 14,
        namn: "Uppehållstillstånd",
        nyckelord: "uppehållstillstånd ut tillstånd vistelse",
        organisation: "Migrationsverket",
        länk: "https://www.migrationsverket.se/Privatpersoner/Skydd-och-asyl-i-Sverige/Ansok-om-asyl.html",
        populär: true
    },
    {
        id: 15,
        namn: "Arbetstillstånd",
        nyckelord: "arbetstillstånd arbete jobb tillstånd",
        organisation: "Migrationsverket",
        länk: "https://www.migrationsverket.se/Privatpersoner/Arbeta-i-Sverige.html",
        populär: false
    },
    {
        id: 16,
        namn: "Medborgarskap",
        nyckelord: "medborgarskap svensk medborgare pass nationalitet",
        organisation: "Migrationsverket",
        länk: "https://www.migrationsverket.se/Privatpersoner/Bli-svensk-medborgare.html",
        populär: false
    },
    {
        id: 17,
        namn: "Anhöriginvandring",
        nyckelord: "anhöriginvandring familj anhörig återförening",
        organisation: "Migrationsverket",
        länk: "https://www.migrationsverket.se/Privatpersoner/Flytta-till-nagon-i-Sverige.html",
        populär: false
    },

    // ===================================
    // CSN (Centrala studiestödsnämnden)
    // ===================================
    {
        id: 18,
        namn: "Studiebidrag och studielån",
        nyckelord: "csn studiebidrag studielån studier utbildning",
        organisation: "CSN",
        länk: "https://www.csn.se/",
        populär: true
    },

    // ===================================
    // PENSIONSMYNDIGHETEN
    // ===================================
    {
        id: 19,
        namn: "Ansök om pension",
        nyckelord: "pension pensionär ålderspension ansökan",
        organisation: "Pensionsmyndigheten",
        länk: "https://www.pensionsmyndigheten.se/",
        populär: false
    },
    {
        id: 20,
        namn: "Bostadstillägg för pensionärer",
        nyckelord: "bostadstillägg pensionär boende bidrag äldre",
        organisation: "Pensionsmyndigheten",
        länk: "https://www.pensionsmyndigheten.se/bostadstillagg",
        populär: false
    },

    // ===================================
    // LERUMS KOMMUN
    // ===================================
    {
        id: 21,
        namn: "Socialtjänst - ekonomiskt bistånd",
        nyckelord: "socialtjänst ekonomiskt bistånd hjälp stöd lerum",
        organisation: "Lerums kommun",
        länk: "https://www.lerum.se/omsorgstod/stod-och-hjalp/ekonomiskt-bistand/",
        populär: false
    },
    {
        id: 22,
        namn: "Barnomsorg - förskola",
        nyckelord: "barnomsorg förskola dagis barn lerum",
        organisation: "Lerums kommun",
        länk: "https://www.lerum.se/barn-och-utbildning/forskola/",
        populär: false
    },

    // ===================================
    // ANDRA VIKTIGA TJÄNSTER
    // ===================================
    {
        id: 23,
        namn: "SFI - Svenska för invandrare",
        nyckelord: "sfi svenska språk kurs utbildning nyanländ",
        organisation: "Komvux",
        länk: "https://www.skolverket.se/undervisning/vuxenutbildningen/svenska-for-invandrare",
        populär: true
    }

    // ===================================
    // LÄGG TILL FLER TJÄNSTER HÄR
    // ===================================
    // Kom ihåg att lägga till komma (,) efter varje tjänst!
    
];

// Exportera databasen
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tjänsterDatabase;
}
