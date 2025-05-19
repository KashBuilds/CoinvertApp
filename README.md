# 🧩 Coinvert — Browse the Web in SOL

**Coinvert** is a lightweight Chrome extension that replaces fiat currency prices on websites — such as $, £, €, ₹, and more — with real-time **Solana (◎)** equivalents using live exchange rates.

> _“It’s always cheaper in Solana.”_

---

## 🔍 What It Does

- 💸 Converts all visible prices (USD, GBP, EUR, INR, etc.) to SOL equivalents  
- 🧠 Lets you hover to see the original price (optional)  
- 🌙 Includes dark mode and user settings  
- 🔐 Fully local, no data collection or tracking  
- 🧾 Free forever, open-source, and privacy-first

---

## 🖥 How It Works

Coinvert scans visible webpage text for recognizable fiat price formats and replaces them with a live conversion to Solana (◎), using CoinGecko as the price source.

It runs entirely within your browser and requires no wallet, login, or account.

---

## 🧪 Live Demo

Try it now: [coinvertapp.com](https://coinvertapp.com)  
Chrome Store: *(link coming soon)*

---

## ⚙️ Setup Instructions

To run it locally or contribute:

```bash
git clone https://github.com/Coinvert/CoinvertApp.git
cd CoinvertApp
```
# Load into Chrome:
- Visit chrome://extensions
- Enable "Developer mode"
- Click "Load unpacked"
- Select the project folder

<section id="footer-legal" style="padding: 4rem 0; font-size: 14px; color: #777;">
  <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">

    <div id="privacy">
      <h3>Privacy Policy</h3>
      <p>Coinvert does not collect, store, or transmit any personal data. All logic runs locally within your browser. We do not use cookies, tracking tools, or analytics. The only external request made is to CoinGecko’s public API to fetch live SOL exchange rates. This request includes no user-specific information.</p>
    </div>

    <div id="terms">
      <h3>Terms of Service</h3>
      <p>By using Coinvert, you agree to the following:</p>
      <ul>
        <li>Coinvert is provided "as-is" with no warranties, express or implied.</li>
        <li>No guarantees are made regarding price accuracy or functionality.</li>
        <li>You are solely responsible for any purchasing or financial decisions made using the extension.</li>
        <li>Coinvert is for informational purposes only and does not process transactions.</li>
        <li>If you do not agree to these terms, please do not use Coinvert.</li>
      </ul>
    </div>

    <div id="license">
      <h3>Open Source License</h3>
      <p>Coinvert is licensed under the MIT License. You are free to use, modify, and distribute this software with appropriate attribution. The full source code is publicly available at <a href="https://github.com/Coinvert/CoinvertApp" target="_blank" rel="noopener noreferrer">github.com/Coinvert/CoinvertApp</a>.</p>
    </div>

    <div id="disclaimer">
      <h3>Disclaimer</h3>
      <p>Coinvert is a browser-based UI utility that modifies how prices are displayed on websites. It does not interact with checkout flows, payment systems, or perform financial operations. It is not financial advice. Always verify pricing independently before making decisions.</p>
    </div>

    <div id="security">
      <h3>Security & Transparency</h3>
      <p>All processing is local to the user's browser. Coinvert does not send or receive any personal data. The extension does not require logins, wallets, or authentication. You may audit the full codebase yourself via our open-source repository.</p>
    </div>

    <hr style="border: none; border-top: 1px solid #eee; margin: 2rem 0;" />

    <div style="text-align: center; font-size: 13px;">
      <p>© 2024 Coinvert. All rights reserved.</p>
      <p>Built with 💜 on Solana — open source, zero tracking, free forever.</p>
      <p>
        <a href="#privacy">Privacy Policy</a> |
        <a href="#terms">Terms of Service</a> |
        <a href="#license">License</a> |
        <a href="#disclaimer">Disclaimer</a>
      </p>
    </div>
  </div>
</section>

