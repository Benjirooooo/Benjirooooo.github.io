/* Accordion Logic */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Tutup semua accordion yang sedang terbuka
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Buka accordion yang diklik jika belum aktif
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

/* Sidebar & Chat Nav Handlers */
function openChat() {
  window.location.href = "/ai";
}

function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("sidebarOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("sidebarOverlay").classList.remove("active");
  document.body.style.overflow = "";
}
