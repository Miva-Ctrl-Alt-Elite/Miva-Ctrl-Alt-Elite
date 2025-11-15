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
        <ul class="nav-list"><li><a href="./index.html">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="./board-of-trustees.html">Board of Trustees</a></li>
        <li><a href="./contact.html">Inquiries</a></li>
        </ul>
      </nav>
    </div>
  `;
});
