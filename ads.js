(function () {
  // KONFIGURASI IKLAN
  const ADS_CONFIG = [
    {
      id: "bn-ad-1",
      title: "🔥 Promo Spesial!",
      description: "Klik di sini untuk melihat penawaran menarik.",
      link: "https",
      iconUrl: "https://i.ibb.co.com/WNgFp3Nr/40e2900fa00898bd13b91ceefd4d5d09.jpg",
      initialDelayMs: 0,      // Langsung muncul saat pertama kali muat
      reappearDelayMs: 10000  // Muncul lagi 10 detik setelah ditutup
    },
    {
      id: "bn-ad-2",
      title: "⚡ Promo Spesial Sponsor 2!",
      description: "Diskon terbatas! Klik disini untuk cek promo eksklusif.",
      link: "https",
      iconUrl: "https://i.ibb.co.com/WNgFp3Nr/40e2900fa00898bd13b91ceefd4d5d09.jpg",
      initialDelayMs: 2000,   // Beda 2 detik dari iklan pertama saat muat
      reappearDelayMs: 10000  // Muncul lagi 10 detik setelah ditutup
    }
  ];

  // Injeksi Style CSS
  const style = document.createElement('style');
  style.id = 'bn-ads-dynamic-style';
  style.textContent = `
    /* Container pembungkus utama */
    .bn-ads-container {
      position: fixed;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 24px);
      max-width: 580px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 999999;
      pointer-events: none; /* Supaya area kosong di sekitar banner tidak menghalangi klik */
    }

    .bn-ad-banner {
      width: 100%;
      background: #0f1e35;
      color: #e2e8f0;
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 14px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.15);
      overflow: hidden;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      box-sizing: border-box;
      animation: bnAdFadeIn 0.3s ease-out;
      pointer-events: auto; /* Mengaktifkan kembali klik pada banner */
      transition: all 0.3s ease; /* Transisi halus saat posisi bergeser naik/turun */
    }

    @keyframes bnAdFadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .bn-ad-content {
      position: relative;
      padding: 10px 12px;
    }

    .bn-ad-badge {
      position: absolute;
      top: 6px;
      right: 32px;
      background: rgba(56, 189, 248, 0.2);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.4);
      font-size: 9px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .bn-ad-close-btn {
      position: absolute;
      top: 4px;
      right: 6px;
      background: transparent;
      border: none;
      font-size: 18px;
      font-weight: 600;
      color: #7a91ad;
      cursor: pointer;
      line-height: 1;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: color 0.2s, background 0.2s;
    }

    .bn-ad-close-btn:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
    }

    .bn-ad-link {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }

    .bn-ad-icon {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      object-fit: cover;
      flex-shrink: 0;
      border: 1px solid rgba(56, 189, 248, 0.2);
    }

    .bn-ad-text {
      padding-right: 50px;
    }

    .bn-ad-text strong {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #38bdf8;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bn-ad-text p {
      margin: 0;
      font-size: 11px;
      color: #7a91ad;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

  // Buat Container Pembungkus
  const container = document.createElement('div');
  container.className = 'bn-ads-container';
  document.body.appendChild(container);

  // Fungsi Pembuat Banner Iklan
  function createAdBanner(config) {
    const banner = document.createElement('div');
    banner.id = config.id;
    banner.className = 'bn-ad-banner';
    banner.style.display = 'none';

    banner.innerHTML = `
      <div class="bn-ad-content">
        <span class="bn-ad-badge">Ad</span>
        <button class="bn-ad-close-btn" id="${config.id}-close" title="Tutup Iklan">&times;</button>
        <a href="${config.link}" target="_blank" rel="noopener noreferrer" class="bn-ad-link">
          <img src="${config.iconUrl}" alt="Iklan Sponsor" class="bn-ad-icon">
          <div class="bn-ad-text">
            <strong>${config.title}</strong>
            <p>${config.description}</p>
          </div>
        </a>
      </div>
    `;

    // Event listener Tombol Silang
    const closeBtn = banner.querySelector('.bn-ad-close-btn');
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Sembunyikan iklan
      banner.style.display = 'none';
   
      container.appendChild(banner);

      // Munculkan kembali 10 detik
      setTimeout(() => {
        banner.style.display = 'block';
      }, config.reappearDelayMs);
    });

    // Masukkan banner ke dalam container
    container.appendChild(banner);

    // Tampilkan iklan saat awal
    setTimeout(() => {
      banner.style.display = 'block';
    }, config.initialDelayMs);
  }

  // Inisialisasi
  function initAds() {
    ADS_CONFIG.forEach(config => createAdBanner(config));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAds);
  } else {
    initAds();
  }
})();
