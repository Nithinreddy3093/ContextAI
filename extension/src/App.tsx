import { useState } from "react";
import type { TabInfo } from "./types/tab";
import { getCurrentTab } from "./services/chrome";
import "./App.css";

function App() {
  const [tabInfo, setTabInfo] = useState<TabInfo | null>(null);

  const handleAnalyze = async () => {
    const info = await getCurrentTab();
    setTabInfo(info);
  };

  return (
    <div className="app">
      <h1>🧠 ContextAI</h1>
      <p className="subtitle">AI-Powered Browser Assistant</p>

      <button className="analyze-btn" onClick={handleAnalyze}>
        Analyze Current Page
      </button>

      {tabInfo && (
        <div className="card">
          <h2>Analysis Result</h2>

          <div className="row">
            <span>📄 Title</span>
            <p>{tabInfo.title}</p>
          </div>

          <div className="row">
            <span>🌐 Website</span>
            <p>{tabInfo.siteType}</p>
          </div>

          <div className="row">
            <span>🔗 Domain</span>
            <p>{tabInfo.domain}</p>
          </div>

          <div className="row">
            <span>🕒 Analyzed</span>
            <p>{tabInfo.analyzedAt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;