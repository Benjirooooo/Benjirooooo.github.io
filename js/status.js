// ===== UPDATE WAKTU REAL-TIME =====
function updateTime() {
  const timeElement = document.getElementById('time');
  if (!timeElement) return;

  const now = new Date();
  const options = {
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit'
  };
  
  timeElement.textContent = `Diperbarui: ${now.toLocaleString('id-ID', options)}`;
}

// Jalankan timer saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 1000);
});

// ===== NAVIGATION & SIDEBAR FUNCTIONS =====
function openChat() {
  window.location.href = "/ai";
}

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (sidebar && overlay) {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (sidebar && overlay) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}
