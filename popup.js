document.addEventListener('DOMContentLoaded', async () => {
  const toggleSol = document.getElementById('toggleSolanaMode');
  const toggleTooltip = document.getElementById('toggleTooltip');
  const toggleDark = document.getElementById('toggleDarkMode');
  const status = document.getElementById('status');
  const solPrice = document.getElementById('solPrice');
  const body = document.body;

  const showSaved = () => {
    status.textContent = 'Settings saved';
    setTimeout(() => {
      status.textContent = '';
    }, 2000);
  };

  chrome.storage.local.get(["solanaMode", "showTooltip", "darkMode"], async (data) => {
    toggleSol.checked = data.solanaMode || false;
    toggleTooltip.checked = data.showTooltip || false;
    toggleDark.checked = data.darkMode || false;

    body.classList.remove("light", "dark");
    body.classList.add(data.darkMode ? "dark" : "light");

    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
    const price = await res.json();
    if (price && price.solana && typeof price.solana.usd === "number") {
  solPrice.textContent = "SOL = ◎" + price.solana.usd.toFixed(2);
} else {
  solPrice.textContent = "SOL price unavailable";
}

  });

  toggleSol.addEventListener('change', () => {
    chrome.storage.local.set({ solanaMode: toggleSol.checked }, showSaved);
    chrome.tabs.reload();
  });

  toggleTooltip.addEventListener('change', () => {
    chrome.storage.local.set({ showTooltip: toggleTooltip.checked }, showSaved);
    chrome.tabs.reload();
  });

  toggleDark.addEventListener('change', () => {
    const mode = toggleDark.checked;
    chrome.storage.local.set({ darkMode: mode }, showSaved);
    body.classList.remove("light", "dark");
    body.classList.add(mode ? "dark" : "light");
  });
});
