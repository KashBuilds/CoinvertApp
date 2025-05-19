(async () => {
  console.log("Solana Price Converter running...");

  // Check if toggle is enabled
  const { solanaMode } = await chrome.storage.local.get("solanaMode");
  if (!solanaMode) {
    console.log("SOL mode OFF");
    return;
  }

  // Fetch real-time SOL price in USD and GBP
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd,gbp");
  const json = await res.json();
  const solUsd = json.solana.usd;
  const solGbp = json.solana.gbp;

  console.log(`SOL/USD: ${solUsd}, SOL/GBP: ${solGbp}`);

  // Regex to match $ or £ amounts like "$19.99" or "£8.50"
 const regex = /([$£€₹¥])\s?([\d,]+\.?\d{0,2})/g;


  // Convert prices in a given DOM node
const { showTooltip } = await chrome.storage.local.get("showTooltip");

const convertPrices = (node) => {
  if (node.nodeType === Node.TEXT_NODE && regex.test(node.nodeValue)) {
    const span = document.createElement('span');
    span.innerHTML = node.nodeValue.replace(regex, (_, symbol, amount) => {
      const value = parseFloat(amount.replace(/,/g, ""));
      const rate = symbol === "£" ? solGbp : solUsd;
      const sol = (value / rate).toFixed(3);
      const original = `${symbol}${amount}`;
      return `<span ${showTooltip ? `title="${original}"` : ""}>◎${sol}</span>`;
    });
    node.replaceWith(span);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    node.childNodes.forEach(convertPrices);
  }
};



  // Run on page load
  convertPrices(document.body);

  // Watch for new elements (dynamic sites like Amazon)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        try {
          convertPrices(node);
        } catch (e) {
          // Silently ignore non-HTML elements or text-only updates
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
