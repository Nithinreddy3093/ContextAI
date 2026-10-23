# 🧠 ContextAI — Your AI-Powered Browser Assistant

**Browse smarter. Understand context. Get meaningful answers.**

ContextAI is an AI-powered browser extension designed to understand the context of the webpages you visit and make browsing more productive. Instead of switching between tabs and AI tools, ContextAI aims to bring contextual assistance directly into your browsing experience.

## ✨ Features

- 🧠 **Context-Aware Assistance** — Designed to help users work with the content of the current webpage.
- 🌐 **Browser Integration** — Access the assistant through a browser extension interface.
- 💬 **Interactive Popup UI** — A dedicated interface for interacting with the assistant.
- ⚡ **Modern Frontend** — Built using React and TypeScript.
- 🎨 **Clean User Interface** — A lightweight interface designed for everyday browsing.
- 🧩 **Modular Architecture** — Organized extension code for easier maintenance and future development.

*The exact AI capabilities depend on the implementation and configuration of the extension.*

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Type-safe application development |
| Vite | Development and build tooling |
| JavaScript | Browser interaction and application logic |
| HTML | Extension interface structure |
| CSS | Styling and responsive layouts |
| ESLint | Code quality and linting |

## 📂 Project Structure

```text
ContextAI/
├── extension/       # Browser extension application
├── README.md        # Project documentation
└── ...
```

The extension directory contains the browser extension implementation and its supporting frontend files.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- A supported browser compatible with the extension's manifest

### 1. Clone the Repository

```bash
git clone https://github.com/Nithinreddy3093/ContextAI.git
cd ContextAI
```

### 2. Navigate to the Extension

```bash
cd extension
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development

```bash
npm run dev
```

Use the development and build commands defined in the `extension/package.json` file. The exact workflow may depend on the extension's Vite configuration.

### 5. Build the Extension

```bash
npm run build
```

After building, locate the generated extension files in the configured output directory.

## 🌐 Loading the Extension in Chrome

If the project generates a compatible unpacked Chrome extension:

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the generated extension directory containing `manifest.json`.
5. Pin ContextAI to the browser toolbar.
6. Open a webpage and launch the extension.

The directory you load must contain the extension manifest and the built assets expected by that manifest.

## 🔮 Future Enhancements

Potential improvements include:

- Automatic webpage summarization
- Context-aware question answering
- Selected-text explanations
- Key-point and insight extraction
- Page-aware AI conversations
- Support for articles, documentation, and research papers
- Customizable AI settings
- Keyboard shortcuts and productivity workflows

## 🔐 Privacy and Security

ContextAI should handle webpage content responsibly.

Recommended practices include:

- Request only the browser permissions the extension needs.
- Explain when webpage content is sent to an external AI service.
- Keep API keys and privileged credentials out of client-side code.
- Avoid collecting or retaining webpage content unnecessarily.
- Validate external inputs and handle sensitive content carefully.

## 🤝 Contributing

Suggestions, bug reports, and contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the extension.
5. Submit a pull request with a clear description.

## 👨‍💻 Author

**Marthala Nithin Reddy**

- GitHub: [@Nithinreddy3093](https://github.com/Nithinreddy3093)
- Repository: [ContextAI](https://github.com/Nithinreddy3093/ContextAI)

## 📄 License

Add a `LICENSE` file if you intend to distribute the project under an open-source license.

---

**ContextAI — Intelligence that understands what you're browsing.**
