// Navigasi ke halaman AI/Chat
function openChat() {
  window.location.href = "/ai";
}

// Buka Sidebar
function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
  document.getElementById("sidebarOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Tutup Sidebar
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("sidebarOverlay").classList.remove("active");
  document.body.style.overflow = "";
}
