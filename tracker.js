// ============================================================
// BN Website — Visitor Tracker
// ============================================================

const WEBHOOK_URL = "https://discord.com/api/webhooks/1412993470305533952/nPMq9xlEE0PDjwgsM972PaN9XxSpfD41xP6XXnEISUtvjJyNWP_3J6QjjinpbTm9HorQ";
const SITE_URL    = "https://bn-website.netlify.app/";

async function sendVisitorNotification() {
  const rawPath = window.location.pathname;

  // Ambil IP publik pengunjung
  let ip = "Tidak diketahui";
  try {
    const r = await fetch("https://api.ipify.org?format=json");
    const d = await r.json();
    ip = d.ip;
  } catch (_) {}

  const pageNames = {
    "/": "Beranda",
    "/ai.html": "/ai-chat",
    "/discord-info.html": "/discord-Info",
    "/dokum.html": "/dokumentasi",
    "/faq.html": "/faq",
    "/games.html": "/games",
    "/index.html": "Beranda",
    "/jasa.html": "/jasa",
    "/music.html": "/music",
    "/privacy.html": "/privacy",
    "/status.html": "/status",
    "/terms.html": "/terms",
    "/xsource.html": "/xsource",
    "/console.html": "Console BN",
  };
  const pageName = pageNames[rawPath] || rawPath;

  const payload = {
    embeds: [{
      title: "Website Request",
      color: 3447003,
      description:
        `📟 IP **\`${ip}\`** Ingin Mengakses \`${pageName}\`\n` +
        `Status: ✅ Ketemu\n\n` +
        `📌 From: ${SITE_URL}`,
      footer: { text: "🔵 BN Website 🔵" },
      timestamp: new Date().toISOString(),
    }],
  };

  try {
    await fetch(WEBHOOK_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
  } catch (_) {}
}

sendVisitorNotification();