document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  if (!headerContainer) {
    console.error("No element with id='header' found in the DOM.");
    return;
  }

  headerContainer.innerHTML = `
    <div class="header-container">
      <h1 class="logo">The Monarch</h1>

      <!-- Hamburger for mobile -->
      <input type="checkbox" id="menu-toggle">
      <label for="menu-toggle" class="menu-toggle-label">
        <span class="menu-icon"></span>
      </label>

      <!-- Navigation -->
      <nav class="nav-menu">
        <ul class="nav-list"><li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/board">Board of Trustees</a></li>
        <li><a href="/inquiries">Inquiries</a></li>
        </ul>
      </nav>
    </div>
  `;
  // fetch("./header.html")
  //   .then(res => {
  //     if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  //     return res.text();
  //   })
  //   .then(html => {
  //   })
  //   .catch(err => console.error("Failed to load header:", err));
});
