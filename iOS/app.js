"use strict";
const translate = window.sudoku42T || ((key) => key);
const isPreviewPage = document.body.dataset.sharePage === "preview";
const shareUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
const shareText = translate(isPreviewPage ? "sharePreviewText" : "shareText");
const shareTitle = isPreviewPage ? "Preview sudoku42 for iPhone & iPad" : "sudoku42 for iPhone & iPad";
function showShareFallback(component) {
  const fallback = component.querySelector(".share-fallback");
  const input = component.querySelector(".share-url");
  fallback.hidden = false;
  input.focus();
  input.select();
}
async function share(component) {
  const status = component.querySelector(".share-status");
  status.textContent = "";
  if (navigator.share) {
    try {
      await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  showShareFallback(component);
}
document.querySelectorAll(".share-button").forEach((button, index) => {
  const component = button.closest(".share-compact");
  const input = component.querySelector(".share-url");
  const label = component.querySelector(".share-fallback label");
  input.id = `share-url-${index + 1}`;
  label.htmlFor = input.id;
  input.value = shareUrl;
  button.addEventListener("click", () => share(component));
  component.querySelector(".copy-button").addEventListener("click", async () => {
    const status = component.querySelector(".share-status");
    try {
      await navigator.clipboard.writeText(shareUrl);
      status.textContent = translate("copied");
    } catch {
      showShareFallback(component);
      status.textContent = translate("selectCopy");
    }
  });
});
