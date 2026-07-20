console.log("✅ ContextAI Content Script Loaded");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GET_PAGE_TEXT") {
    sendResponse({
      text: document.body.innerText,
    });
  }

  return true;
});