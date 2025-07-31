
const ativos = [
"BTCUSDT", "ETHUSDT", "BNBUSDT", "ADAUSDT", "SOLUSDT", "DOTUSDT", "AVAXUSDT", "MATICUSDT", "ATOMUSDT", "NEARUSDT", 
"ALGOUSDT", "FTMUSDT", "ONEUSDT", "ZILUSDT", "ICPUSDT", "UNIUSDT", "LINKUSDT", "AAVEUSDT", "COMPUSDT", "SUSHIUSDT",
"CRVUSDT", "YFIUSDT", "1INCHUSDT", "SNXUSDT", "MKRUSDT", "BALUSDT", "RENUSD", "ARBUSDT", "OPUSDT", "LRCUSDT",
"IMXUSDT", "STRKUSDT", "METISUSDT", "BOBA", "CELRUSDT", "AXSUSDT", "SANDUSDT", "MANAUSDT", "ENJUSDT", "GALAUSDT",
"CHRUSDT", "ALICEUSDT", "TLMUSDT", "FETUSDT", "OCEANUSDT", "AGIXUSDT", "RNDRUSUSDT", "GRTUSDT", "DOGEUSDT",
"SHIBUSDT", "PEPEUSDT", "FLOKIUSDT", "BONKUSDT", "FILUSDT", "ARUSDT", "STORJUSDT", "BATUSDT", "LPTUSDT"
];

const container = document.querySelector(".dashboard");
ativos.forEach(ativo => {
  const div = document.createElement("div");
  div.className = "asset-card";
  div.textContent = ativo;
  container.appendChild(div);
});
