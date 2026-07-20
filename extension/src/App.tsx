import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [domain, setDomain] = useState("");
  const [siteType, setSiteType] = useState("");
  const [time, setTime] = useState("");

  const analyzePage = async () => {
    const tabs = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (!tabs.length) return;

    const currentTab = tabs[0];

    const currentUrl = currentTab.url || "";
    const hostname = new URL(currentUrl).hostname;

    let type = "Other";

    if (hostname.includes("github.com")) type = "GitHub";
    else if (hostname.includes("linkedin.com")) type = "LinkedIn";
    else if (hostname.includes("youtube.com")) type = "YouTube";

    setTitle(currentTab.title || "No Title");
    setUrl(currentUrl);
    setDomain(hostname);
    setSiteType(type);
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="app">
      <h1>🧠 ContextAI</h1>
      <p>Your AI Browser Assistant</p>

      <button onClick={analyzePage}>
        Analyze Current Page
      </button>

      {title && (
        <div style={{ marginTop: 20 }}>
          <h3>Website</h3>
          <p>{siteType}</p>

          <h3>Title</h3>
          <p>{title}</p>

          <h3>Domain</h3>
          <p>{domain}</p>

          <h3>URL</h3>
          <p>{url}</p>

          <h3>Analyzed At</h3>
          <p>{time}</p>
        </div>
      )}
    </div>
  );
}

export default App;