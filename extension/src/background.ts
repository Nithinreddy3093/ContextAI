console.log("🚀 ContextAI Background Service Worker Started");

chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ ContextAI Installed");
});