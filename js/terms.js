// ─── Translation Data ────────────────────────────────────────────────────────
const i18n = {
  id: {
    back: "Kembali",
    lastUpdated: "Terakhir diperbarui: 23 Mei 2026",
    tocTitle: "Daftar Isi",
    globalNotice: "📌 Bergabung di komunitas ini berarti Anda siap ikut menjaga suasana yang aman, nyaman, dan penuh rasa saling menghargai. Mohon pahami syarat dan ketentuan berikut sebelum melanjutkan.",
    sections: [
      {
        id: "s1", title: "Saling Menghargai",
        content: `
          <p>Setiap anggota wajib menghargai satu sama lain, tanpa memandang latar belakang, agama, ras, atau pendapat. Perbedaan adalah kekuatan, bukan alasan untuk berpecah.</p>`
      },
      {
        id: "s2", title: "Komunikasi yang Sehat",
        content: `
          <p>Gunakan bahasa yang sopan, hindari ujaran kebencian, fitnah, atau provokasi. Diskusi boleh hangat, tapi tetap dengan kepala dingin.</p>`
      },
      {
        id: "s3", title: "Larangan Perilaku Merugikan",
        content: `
          <p>Dilarang melakukan spam, penyalahgunaan bot, atau aktivitas yang mengganggu kenyamanan anggota lain.</p>`
      },
      {
        id: "s4", title: "Keamanan & Privasi",
        content: `
          <p>Jangan membagikan data pribadi orang lain tanpa izin. Hargai privasi setiap anggota.</p>`
      },
      {
        id: "s5", title: "Semangat Kebersamaan",
        content: `
          <p>Ingat semboyan Bhinneka Tunggal Ika, berbeda-beda tetapi tetap satu. Mari jadikan server ini tempat untuk saling mendukung, belajar, dan bersenang-senang bersama.</p>`
      },
      {
        id: "s6", title: "Tindakan Pelanggaran",
        content: `
          <p>Moderator berhak menegur, memberi sanksi, hingga mengeluarkan anggota yang melanggar aturan demi menjaga kenyamanan komunitas.</p>`
      }
    ]
  },

  en: {
    back: "Back",
    lastUpdated: "Last updated: May 23, 2026",
    tocTitle: "Table of Contents",
    globalNotice: "📌 By joining this community, you agree to help maintain a safe, comfortable, and respectful atmosphere. Please understand the following terms and conditions before continuing.",
    sections: [
      {
        id: "s1", title: "Mutual Respect",
        content: `
          <p>Every member is required to respect one another, regardless of background, religion, race, or opinion. Differences are a strength, not a reason to divide.</p>`
      },
      {
        id: "s2", title: "Healthy Communication",
        content: `
          <p>Use polite language and avoid hate speech, slander, or provocation. Discussions can be lively, but always keep a cool head.</p>`
      },
      {
        id: "s3", title: "Prohibition of Harmful Behavior",
        content: `
          <p>Spam, bot abuse, or any activity that disrupts the comfort of other members is strictly prohibited.</p>`
      },
      {
        id: "s4", title: "Security & Privacy",
        content: `
          <p>Do not share other people's personal data without their permission. Respect the privacy of every member.</p>`
      },
      {
        id: "s5", title: "Spirit of Unity",
        content: `
          <p>Remember the motto Bhinneka Tunggal Ika, Unity in Diversity. Let's make this server a place to support each other, learn, and have fun together.</p>`
      },
      {
        id: "s6", title: "Violation Actions",
        content: `
          <p>Moderators have the right to warn, impose sanctions, or remove members who violate the rules in order to maintain the comfort of the community.</p>`
      }
    ]
  },

  jp: {
    back: "戻る",
    lastUpdated: "最終更新日：2026年5月23日",
    tocTitle: "目次",
    globalNotice: "📌 このコミュニティに参加することで、安全で快適、かつ互いを尊重し合う雰囲気の維持に協力することに同意したものとみなされます。参加を続ける前に、以下の利用規約をよくお読みください。",
    sections: [
      {
        id: "s1", title: "相互尊重",
        content: `
          <p>すべてのメンバーは、出身、宗教、人種、意見に関わらず、互いを尊重することが求められます。違いは力であり、分裂の理由ではありません。</p>`
      },
      {
        id: "s2", title: "健全なコミュニケーション",
        content: `
          <p>丁寧な言葉を使い、ヘイトスピーチ、誹謗中傷、挑発を避けてください。議論は活発でも構いませんが、常に冷静さを保ってください。</p>`
      },
      {
        id: "s3", title: "有害行為の禁止",
        content: `
          <p>スパム行為、Botの不正利用、または他のメンバーの快適さを損なうあらゆる行為は固く禁じます。</p>`
      },
      {
        id: "s4", title: "セキュリティとプライバシー",
        content: `
          <p>本人の許可なく他人の個人情報を共有しないでください。すべてのメンバーのプライバシーを尊重してください。</p>`
      },
      {
        id: "s5", title: "団結の精神",
        content: `
          <p>「多様にして一なり（Bhinneka Tunggal Ika）」という標語を覚えておいてください。このサーバーをお互いに支え合い、学び合い、一緒に楽しむ場所にしましょう。</p>`
      },
      {
        id: "s6", title: "違反への対応",
        content: `
          <p>モデレーターは、コミュニティの快適さを守るために、ルールに違反したメンバーへの警告、制裁、または退出措置を行う権限を持っています。</p>`
      }
    ]
  }
};

// ─── Language Switch Logic ───────────────────────────────────────────────────
let currentLang = 'id';

function renderContent(lang) {
  const data = i18n[lang];

  // Simple i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) el.textContent = data[key];
  });

  // Render TOC
  const tocList = document.getElementById('toc-list');
  tocList.innerHTML = data.sections.map(s =>
    `<li><a href="#${s.id}">${s.title}</a></li>`
  ).join('');

  // Render sections
  const container = document.getElementById('sections-container');
  container.innerHTML = data.sections.map((s, i) =>
    `<section class="terms-section" id="${s.id}" style="animation-delay:${0.4 + i * 0.05}s">
      <span class="section-num">${String(i + 1).padStart(2, '0')}.</span>
      <h2>${s.title}</h2>
      ${s.content}
    </section>`
  ).join('');

  // Update global notice text
  const noticeEl = document.getElementById('global-notice-text');
  if (noticeEl && data.globalNotice) noticeEl.textContent = data.globalNotice;

  // Html lang attr
  const langMap = { id: 'id', en: 'en', jp: 'ja' };
  document.documentElement.lang = langMap[lang];

  // Back button text
  const backSpan = document.querySelector('.back-btn [data-i18n="back"]');
  if (backSpan) backSpan.textContent = data.back;
}

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Active button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const langMap = { id: 0, en: 1, jp: 2 };
  document.querySelectorAll('.lang-btn')[langMap[lang]].classList.add('active');

  // Fade out → swap content → fade in
  const content = document.getElementById('main-content');
  content.style.opacity = '0';
  content.style.transition = 'opacity 0.18s ease';

  setTimeout(() => {
    renderContent(lang);
    content.style.opacity = '1';
    content.style.transition = 'opacity 0.22s ease';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 180);
}

renderContent('id');