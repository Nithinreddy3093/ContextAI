console.log("✅ ContextAI Content Script Loaded");

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "GET_PAGE_CONTENT") {
    const title = document.title;

    const headings = Array.from(document.querySelectorAll("h1, h2"))
      .map((el) => el.textContent?.trim())
      .filter(Boolean);

    const paragraphs = Array.from(document.querySelectorAll("p"))
      .map((el) => el.textContent?.trim())
      .filter(Boolean)
      .slice(0, 5);

    sendResponse({
      title,
      headings,
      paragraphs,
    });
  }

  return true;
});