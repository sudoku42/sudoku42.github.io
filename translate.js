"use strict";

(() => {

// Follow the browser's language preferences and fall back to English.
const dictionary = {
  en: {
    contact: "Contact Manuel", privacy: "Privacy", android: "Android app",
    copied: "Link copied.",
    selectCopy: "Select and copy the link above to share it.",
    shareText: "sudoku42 is now on the App Store for iPhone and iPad. Solve the daily puzzle and compare your time with players worldwide.",
    shareSmall: "Share sudoku42", shareAria: "Share sudoku42", shareLink: "Link to share", copy: "Copy link",
    sharePreview: "Share this preview", sharePreviewAria: "Share this preview", sharePreviewText: "Preview sudoku42 for iPhone and iPad.",
    downloadAlt: "Download on the App Store",
    heading: "sudoku42 is now on iPhone & iPad 📲",
    intro: "Sudoku, made social. Take on one daily puzzle with everyone and compare times worldwide, or solve a shared board live with friends and family.",
    preview: "See the app 👀",
    previewHeading: "One daily Sudoku. Everyone plays it.",
    previewSubheading: "Compare your time worldwide.",
    previewIntro: "Play today’s shared Sudoku, then see how your time compares with players around the world.",
    gallery: "sudoku42 app previews",
    captionOne: "Today’s puzzle, shared worldwide.",
    captionTwo: "Every move counts toward your time.",
    captionThree: "See how your time compares.",
  },
  nl: {
    contact: "Neem contact op met Manuel", privacy: "Privacy", android: "Android-app",
    copied: "Link gekopieerd.",
    selectCopy: "Selecteer en kopieer de link hierboven om hem te delen.",
    shareText: "sudoku42 is nu te downloaden in de App Store voor iPhone en iPad. Los de dagelijkse puzzel op en vergelijk je tijd met spelers over de hele wereld.",
    shareSmall: "Deel sudoku42", shareAria: "Deel sudoku42", shareLink: "Link om te delen", copy: "Kopieer de link",
    sharePreview: "Deel deze pagina", sharePreviewAria: "Deel deze pagina", sharePreviewText: "Bekijk sudoku42 voor iPhone en iPad.",
    downloadAlt: "Download in de App Store",
    heading: "sudoku42 is nu ook op iPhone & iPad! 📲",
    intro: "Sudoku, maar dan samen. Speel elke dag dezelfde puzzel als iedereen en vergelijk je tijd met spelers over de hele wereld, of los live een gedeeld bord op met vrienden en familie.",
    preview: "Bekijk de app 👀",
    previewHeading: "Eén sudoku per dag. Iedereen speelt hem.",
    previewSubheading: "Vergelijk je tijd wereldwijd.",
    previewIntro: "Speel de dagelijkse sudoku die iedereen speelt en vergelijk je tijd met spelers over de hele wereld.",
    gallery: "Voorbeelden van de sudoku42-app",
    captionOne: "De puzzel van vandaag, wereldwijd gedeeld.",
    captionTwo: "Elke zet telt mee voor je tijd.",
    captionThree: "Zie hoe je tijd zich verhoudt.",
  },
};

const browserLanguages = navigator.languages || [navigator.language || "en"];
const locale = browserLanguages
  .map((language) => language.toLowerCase().split("-")[0])
  .find((language) => Object.hasOwn(dictionary, language)) || "en";
const t = (key) => dictionary[locale][key] || dictionary.en[key] || key;

window.sudoku42Locale = locale;
window.sudoku42T = t;
document.documentElement.lang = locale;
// English is already the server-rendered markup. Only replace it when Dutch
// has been selected from the browser preferences.
if (locale === "nl") {
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(":");
    element.setAttribute(attribute, t(key));
  });
}
})();
