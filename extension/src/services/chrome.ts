import type { TabInfo } from "../types/tab";

export async function getCurrentTab(): Promise<TabInfo | null> {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  if (!tabs.length) return null;

  const tab = tabs[0];

  const url = tab.url ?? "";
  const domain = url ? new URL(url).hostname : "";

  let siteType = "Other";

  if (domain.includes("github.com")) siteType = "GitHub";
  else if (domain.includes("linkedin.com")) siteType = "LinkedIn";
  else if (domain.includes("youtube.com")) siteType = "YouTube";

  return {
    title: tab.title ?? "No Title",
    url,
    domain,
    siteType,
    analyzedAt: new Date().toLocaleTimeString(),
  };
}