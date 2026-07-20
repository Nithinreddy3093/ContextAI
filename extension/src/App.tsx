import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const analyzePage = async () => {
    const tabs = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    if (tabs.length > 0) {
      setTitle(tabs[0].title || "No Title");
      setUrl(tabs[0].url || "No URL");
    }
  };

  return (
    <div className="app">
      <h1>🧠 ContextAI</h1>
      <p>Your AI Browser Assistant</p>

      <button onClick={analyzePage}>
        Analyze Current Page
      </button>

      {title && (
        <div style={{ marginTop: "20px" }}>
          <h3>Page Title</h3>
          <p>{title}</p>

          <h3>URL</h3>
          <p>{url}</p>
        </div>
      )}
    </div>
  );
}

export default App;